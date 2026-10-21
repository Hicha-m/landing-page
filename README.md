<div align="center">

# ✳ StudioSpace

### Make it real.

An immersive, responsive landing-page concept featuring motion, interactive galleries and an editorial visual language — built with vanilla HTML, CSS and JavaScript.

[![CI & Deploy](https://github.com/Hicha-m/landing-page/actions/workflows/cloudflare-pages.yml/badge.svg?branch=main)](https://github.com/Hicha-m/landing-page/actions/workflows/cloudflare-pages.yml)
[![GitHub last commit](https://img.shields.io/github/last-commit/Hicha-m/landing-page?logo=github)](https://github.com/Hicha-m/landing-page/commits/main)
[![GitHub issues](https://img.shields.io/github/issues/Hicha-m/landing-page?logo=github)](https://github.com/Hicha-m/landing-page/issues)
[![License: MIT](https://img.shields.io/badge/license-MIT-6f5a86.svg)](./LICENSE)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](./index.html)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white)](./styles.css)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](./script.js)

[**Live site ↗**](https://studiospace-landing.pages.dev) · [**Figma design ↗**](https://www.figma.com/design/5UBzjTrLWHkDQNiS8xXziH) · [**Report a bug**](https://github.com/Hicha-m/landing-page/issues/new)

</div>

> [!IMPORTANT]
> **Deployment status:** The Cloudflare Pages project is configured, but the live site will only be available after the source files are committed and the first deployment succeeds. The deployment badge above reflects GitHub Actions, not an invented success state.

![StudioSpace preview illustration](./assets/preview.svg)

## ✨ Features

| Experience | Implementation |
| --- | --- |
| Immersive hero | Muted looping sample video with modal preview |
| Motion design | Scroll reveals, parallax, progress indicator and counters |
| Galleries | Horizontal draggable panels, carousel arrows and template previews |
| Interactive UI | Expandable FAQ, mobile menu, mock design studio and sample domain search |
| Responsive layouts | Desktop, tablet and mobile breakpoints |
| Lightweight stack | Plain HTML, CSS and JavaScript; no build tooling or backend |
| Delivery | GitHub Actions validation → Cloudflare Pages through Wrangler |

The domain search, editor and business figures are **demonstrations**, not actual services or verified StudioSpace statistics. The illustrative video is loaded from an external CC0 sample source.

## 🧭 Sections

Hero · Community · Solutions · AI design concept · Templates · Domains · Commerce · Inspiration · How it works · FAQ · CTA · Footer.

## 🚀 Quick start

No installation or package manager required.

```bash
git clone https://github.com/Hicha-m/landing-page.git
cd landing-page
python3 -m http.server 8080
```

Open **http://localhost:8080**. The site uses external Google Fonts and an externally hosted sample video, so these assets require an internet connection.

### Validate locally

```bash
python3 scripts/validate_site.py
node --check script.js
```

> [!NOTE]
> If the repository has not yet received `index.html`, `styles.css`, `script.js` and `scripts/validate_site.py`, complete the source import first. This README is the documentation foundation.

## 📁 Project structure

```text
landing-page/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── workflows/
│       └── cloudflare-pages.yml
├── assets/
│   └── preview.svg
├── docs/
│   └── DEPLOYMENT.md
├── scripts/
│   └── validate_site.py
├── index.html
├── styles.css
├── script.js
├── CONTRIBUTING.md
├── SECURITY.md
├── LICENSE
└── README.md
```

## ☁️ Continuous deployment

Every pull request to `main` runs validation. Every push to `main` runs the same checks and, once authenticated, publishes to the existing Cloudflare Pages project `studiospace-landing`.

A repository secret named **`CLOUDFLARE_API_TOKEN`** is required. Never commit API tokens. See **[deployment instructions](./docs/DEPLOYMENT.md)** for the minimal-permission setup, expected behavior and troubleshooting.

## 🎨 Design

The [Figma source](https://www.figma.com/design/5UBzjTrLWHkDQNiS8xXziH) contains an editable landing-page layout. StudioSpace is an **independent concept study** inspired by contemporary creative website-builder design patterns. It is **not affiliated with, endorsed by, or a product of Squarespace**.

## 🤝 Contributing

Contributions are welcome: start with an issue, follow [CONTRIBUTING.md](./CONTRIBUTING.md), and propose changes through a pull request.

## 📜 License

Distributed under the [MIT License](./LICENSE). Third-party media and fonts retain their own terms.

---

<div align="center">
<sub>Crafted for exploration. Built with web standards.</sub>
</div>
