<div align="center">

# ✳ FORMA

**The independent landing-page collection.**

A growing archive of immersive web experiences — each crafted with its own design language, interactions, and visual story.

[![CI / Cloudflare Pages](https://github.com/Hicha-m/landing-page/actions/workflows/cloudflare-pages.yml/badge.svg?branch=main)](https://github.com/Hicha-m/landing-page/actions/workflows/cloudflare-pages.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-a6a0f6.svg)](LICENSE)
[![No framework](https://img.shields.io/badge/Framework-None-222230)](#stack)
[![GitHub last commit](https://img.shields.io/github/last-commit/Hicha-m/landing-page?logo=github)](https://github.com/Hicha-m/landing-page/commits/main)
[![Open issues](https://img.shields.io/github/issues/Hicha-m/landing-page)](https://github.com/Hicha-m/landing-page/issues)

[**Explore the collection ↗**](https://studiospace-landing.pages.dev/) · [**Browse the source ↗**](https://github.com/Hicha-m/landing-page) · [**Contribute ↗**](CONTRIBUTING.md)

</div>

![StudioSpace, the first landing page in the FORMA collection](assets/preview.svg)

> [!NOTE]
> The collection is intentionally curated. Only completed experiences appear in the catalog. **Deployment is managed by GitHub Actions using the configured Cloudflare secrets; check the live workflow status before assuming a new commit has shipped.** The badge above reflects the actual workflow status.

## 📚 Documentation et reproductibilité

**[Guide complet de traçabilité](docs/README.md)** — inspirations, sources, décisions, modes opératoires et limites vérifiables.

| Landing page | Conception | Sources / inspirations | Refaire le projet |
| --- | --- | --- | --- |
| **FORMA** — catalogue | [Dossier](docs/forma/README.md) | [Sources](docs/forma/SOURCES.md) | [Mode opératoire](docs/forma/REPRODUCTION.md) |
| **StudioSpace** | [Dossier](docs/studiospace/README.md) | [Sources](docs/studiospace/SOURCES.md) | [Mode opératoire](docs/studiospace/REPRODUCTION.md) |
| **Aether** — inspiration Stripe | [Dossier](docs/aether/README.md) | [Sources](docs/aether/SOURCES.md) | [Mode opératoire](docs/aether/REPRODUCTION.md) |

Pour chaque nouvelle page, utiliser le **[modèle documentaire](docs/TEMPLATE-LANDING-PAGE.md)** et conserver ses décisions dans le **[registre ADR](docs/DECISIONS.md)**.

> Les sources historiques initiales ont été reconstituées à partir du code, des exigences et des références identifiées ; elles ne remplacent pas un journal d'exécution intégral.

## What is FORMA?

FORMA is the **homepage that brings together independent landing-page experiments**. Inspired by Linear's editorial precision, subtle ambient light, polished product previews, and restrained motion, it offers a cohesive gallery rather than a single marketing page.

Each landing page is an isolated static site that can be opened and developed independently.

## Current collection

| # | Project | Description | Preview |
| --- | --- | --- | --- |
| 001 | **StudioSpace** | Immersive website-builder concept with video, animated content, templates, sliders and galleries | [Open StudioSpace](https://studiospace-landing.pages.dev/pages/studiospace/) |
| 002 | **Aether** | Stripe-inspired fintech concept, aurora gradients, code tabs and animated UI | [Open Aether](https://studiospace-landing.pages.dev/pages/aether/) |

More experiences will be added as they are created. There are no fabricated or empty project listings.

## Features

- **Linear-inspired visual direction** — deep near-black canvas, violet light, large editorial typography and low-contrast borders.
- **Responsive gallery** — immersive featured window, hover states, and polished project cards.
- **Project discovery** — live search (shortcut `/`), category filters and a useful empty state.
- **Motion** — staggered scroll reveals, orbit animation and respect for reduced-motion preferences.
- **Scalable catalog** — a single JSON manifest registers new landing pages automatically.
- **Accessibility** — semantic headings, keyboard navigation, labeled controls, focus states and mobile navigation.
- **No build dependencies** — plain HTML/CSS/JS, served statically on Cloudflare Pages.

## Getting started

```bash
git clone https://github.com/Hicha-m/landing-page.git
cd landing-page
python3 -m http.server 8080
```

Browse:

- **Collection:** http://localhost:8080/
- **StudioSpace:** http://localhost:8080/pages/studiospace/

The catalog fetches its manifest, so **use a local HTTP server**, rather than opening `index.html` with `file://`.

## Stack

| Layer | Technology |
| --- | --- |
| Structure | Semantic HTML5 |
| Styling & interactions | CSS3 + vanilla JavaScript |
| Project index | `data/projects.json` |
| Hosting | Cloudflare Pages |
| Validation & deployment | GitHub Actions + Wrangler |

No React, Node runtime, database, or paid third-party API is required for site visitors. Fonts and sample video used in StudioSpace may load externally.

## File structure

```text
landing-page/
├── index.html                    # FORMA catalog homepage
├── styles.css                    # Catalog styling
├── script.js                     # Catalog discovery + interactions
├── assets/                       # Shared previews + favicon
├── data/
│   ├── projects.json             # Source of truth for listings
│   └── README.md                 # How to add a landing page
├── pages/
│   └── studiospace/
│       ├── index.html            # Complete standalone page
│       ├── styles.css
│       └── script.js
├── docs/                         # Provenance and step-by-step reconstruction
├── scripts/
│   ├── validate_site.py          # Validate every website
│   └── build_site.py             # Clean static publish folder
├── docs/DEPLOYMENT.md
└── .github/workflows/
    └── cloudflare-pages.yml
```

## Add another landing page

1. Create `pages/<your-slug>/index.html` and its required assets.
2. Add its metadata and preview to **[`data/projects.json`](data/projects.json)**.
3. Run validation. Push through a pull request.
4. Merge to `main` to trigger the production deployment (when the Cloudflare API secret is configured).

See [the step-by-step project authoring guide](data/README.md) and [documentation template](docs/TEMPLATE-LANDING-PAGE.md).

## Validation

```bash
python3 scripts/validate_site.py
node --check script.js
node --check pages/studiospace/script.js
node --check pages/aether/script.js
python3 scripts/build_site.py
```

The deployment workflow publishes the clean `public/` output and does not expose `.github/`, project documentation, or source tooling.

## Live deployment

The existing Cloudflare Pages project is **`studiospace-landing`**. GitHub Actions deploys on push to `main` after validation, with `CLOUDFLARE_API_TOKEN` stored as a repository secret.

Read [Cloudflare deployment setup](docs/DEPLOYMENT.md). For each new release, verify the GitHub Actions result and the Cloudflare Pages deployment state.

## Contributing & license

Contributions and design experiments are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md). Source code is published under the [MIT License](LICENSE). Third-party fonts and media have their own usage terms.

FORMA is an independent showcase inspired by general contemporary web design patterns; it is not associated with Linear or Squarespace.

---

<div align="center"><sub>Designed for the curious. Built to keep evolving.</sub></div>
