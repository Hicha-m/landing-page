#!/usr/bin/env python3
"""Validate the landing-page catalog and every standalone static experience."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import re

ROOT = Path(__file__).resolve().parents[1]
SITE_PAGES = [ROOT / "index.html", *sorted((ROOT / "pages").glob("*/index.html"))]

class Document(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = set()
        self.refs = []
        self.title_count = 0
        self.main_count = 0
        self.html_count = 0
        self.body_count = 0

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        self.html_count += tag == "html"
        self.body_count += tag == "body"
        self.main_count += tag == "main"
        self.title_count += tag == "title"
        if values.get("id"):
            identifier = values["id"]
            if identifier in self.ids:
                raise AssertionError(f"Duplicate ID: {identifier}")
            self.ids.add(identifier)
        for attribute in ("href", "src", "poster"):
            if values.get(attribute):
                self.refs.append(values[attribute])


def local_resource(page, url):
    """Resolve a local URL relative to the document or the site root."""
    parsed = urlsplit(url)
    if parsed.scheme or parsed.netloc or url.startswith("//"):
        return None, None
    if not parsed.path:
        return page, unquote(parsed.fragment)
    path = unquote(parsed.path)
    if path.startswith("/"):
        target = ROOT / path.lstrip("/")
    else:
        target = page.parent / path
    if path.endswith("/"):
        target /= "index.html"
    return target, unquote(parsed.fragment)


def validate_page(path):
    if not path.is_file():
        raise AssertionError(f"Missing: {path.relative_to(ROOT)}")
    content = path.read_text(encoding="utf-8")
    document = Document()
    document.feed(content)
    if document.html_count != 1 or document.body_count != 1 or document.title_count != 1:
        raise AssertionError(f"Invalid document structure: {path.relative_to(ROOT)}")
    if document.main_count != 1:
        raise AssertionError(f"Expected exactly one main: {path.relative_to(ROOT)}")
    for ref in document.refs:
        target, anchor = local_resource(path, ref)
        if target is None:
            continue
        if anchor and target == path and anchor not in document.ids:
            raise AssertionError(f"Broken anchor {ref} in {path.relative_to(ROOT)}")
        if target and not target.is_file():
            raise AssertionError(f"Missing local resource {ref} in {path.relative_to(ROOT)}")
    return len(document.refs)


def validate_manifest():
    manifest = json.loads((ROOT / "data" / "projects.json").read_text(encoding="utf-8"))
    projects = manifest.get("projects")
    if not isinstance(projects, list) or not projects:
        raise AssertionError("Project manifest must contain at least one project")
    seen = set()
    for project in projects:
        for field in ("id", "title", "number", "type", "category", "summary", "image", "url"):
            if not isinstance(project.get(field), str) or not project[field].strip():
                raise AssertionError(f"Missing project field: {field}")
        if project["id"] in seen:
            raise AssertionError(f"Duplicate project ID: {project['id']}")
        seen.add(project["id"])
        if project["category"] not in ("websites", "concepts"):
            raise AssertionError(f"Unsupported category: {project['category']}")
        for key in ("image", "url"):
            target, _ = local_resource(ROOT / "index.html", project[key])
            if target is None or not target.is_file():
                raise AssertionError(f"Broken project {key}: {project[key]}")
    return len(projects)


def main():
    resource_count = sum(validate_page(page) for page in SITE_PAGES)
    project_count = validate_manifest()
    for js in [ROOT / "script.js", *(ROOT / "pages").glob("*/script.js")]:
        if not js.is_file() or not js.read_text(encoding="utf-8").strip():
            raise AssertionError(f"Missing/empty JavaScript: {js}")
    for css in [ROOT / "styles.css", *(ROOT / "pages").glob("*/styles.css")]:
        if not css.is_file() or not css.read_text(encoding="utf-8").strip():
            raise AssertionError(f"Missing/empty CSS: {css}")
    print(f"PASS: {len(SITE_PAGES)} HTML pages, {project_count} registered projects, {resource_count} resource links")


if __name__ == "__main__":
    main()
