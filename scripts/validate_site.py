#!/usr/bin/env python3
"""Validate the static website before Cloudflare Pages deployment."""
from html.parser import HTMLParser
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]

class Document(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.refs = []
        self.has_html = False
        self.has_body = False

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        self.has_html |= tag == "html"
        self.has_body |= tag == "body"
        if "id" in attributes:
            identifier = attributes["id"]
            assert identifier not in self.ids, f"Duplicate ID: {identifier}"
            self.ids.add(identifier)
        self.refs.extend(attributes[key] for key in ("href", "src") if key in attributes)

for filename in ("index.html", "styles.css", "script.js"):
    path = ROOT / filename
    assert path.is_file() and path.stat().st_size > 0, f"Missing/empty: {filename}"

html = (ROOT / "index.html").read_text(encoding="utf-8")
doc = Document()
doc.feed(html)
assert doc.has_html and doc.has_body, "Missing HTML or BODY element"
for ref in doc.refs:
    if not ref or ref.startswith(("https:", "http:", "mailto:", "tel:", "data:")):
        continue
    if ref.startswith("#"):
        assert ref[1:] in doc.ids, f"Broken anchor: {ref}"
    else:
        target = ref.split("#", 1)[0].split("?", 1)[0].lstrip("/")
        assert (ROOT / target).is_file(), f"Missing local resource: {ref}"
script = (ROOT / "script.js").read_text(encoding="utf-8")
for identifier in re.findall(r"""(?:getElementById|querySelector)\(['"]#([\w-]+)['"]\)""", script):
    assert identifier in doc.ids, f"Missing referenced ID: {identifier}"
print(f"PASS: {len(doc.ids)} IDs, {len(doc.refs)} resources")
