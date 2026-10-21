#!/usr/bin/env python3
"""Prepare a clean static publish directory without shipping repo internals."""
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"

if PUBLIC.exists():
    shutil.rmtree(PUBLIC)
PUBLIC.mkdir()

for filename in ("index.html", "styles.css", "script.js"):
    shutil.copy2(ROOT / filename, PUBLIC / filename)

for directory in ("assets", "data", "pages"):
    shutil.copytree(
        ROOT / directory,
        PUBLIC / directory,
        ignore=shutil.ignore_patterns("README.md", "*.md", "__pycache__", ".DS_Store"),
    )
print(f"Static publish folder ready: {PUBLIC.relative_to(ROOT)}")
