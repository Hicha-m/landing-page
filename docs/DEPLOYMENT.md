# Deploying FORMA to Cloudflare Pages

## Target

- Cloudflare Pages project: `studiospace-landing`
- Cloudflare account: `0e52a0a9c70bfb137e85da4cdd8ac280`
- Production branch: `main`
- Production URL (after deployment): https://studiospace-landing.pages.dev/

The project already exists in Cloudflare Pages as a **Direct Upload** project. We deploy with GitHub Actions and Wrangler rather than attaching the project to the native Git integration.

## One-time configuration

Create an API token in Cloudflare under **My Profile → API Tokens** with **Account → Cloudflare Pages → Edit**, restricted to your Cloudflare account.

In this GitHub repository, go to **Settings → Secrets and variables → Actions** and add both **`CLOUDFLARE_API_TOKEN`** and **`CLOUDFLARE_ACCOUNT_ID`**. The latter is your account ID; never commit the API token. Do not commit, paste, or log the token.

The GitHub workflow reads the account ID from `secrets.CLOUDFLARE_ACCOUNT_ID` and the token from `secrets.CLOUDFLARE_API_TOKEN`. The account ID itself is not sensitive, but this setup keeps configuration in one place.

## Continuous deployment

The workflow at `.github/workflows/cloudflare-pages.yml` does the following:

1. Checks out the requested commit.
2. Runs `python3 scripts/validate_site.py`, which checks the catalog and every nested landing page, local references and project manifest.
3. Checks every project's JavaScript syntax with `node --check`.
4. Runs `python3 scripts/build_site.py` to assemble the deployable site.
5. On pushes to `main`, deploys `public/` with Wrangler to Cloudflare Pages.

For per-page inspiration records and complete rebuilding instructions, see [documentation index](README.md).

Pull requests run validation **without deploying to production**. A manual workflow run on `main` can also initiate a production deployment.

## Production files

The generated `public/` directory is not checked into Git. It includes:

```text
public/
├── index.html                 # FORMA collection
├── styles.css
├── script.js
├── assets/
├── data/projects.json
└── pages/
    ├── studiospace/
        ├── index.html         # StudioSpace standalone landing
        ├── styles.css
        └── script.js
    └── aether/
        ├── index.html
        ├── styles.css
        └── script.js
```

Project configuration, `.github/`, documentation, and local tools are intentionally excluded.

## URLs

| Resource | URL |
| --- | --- |
| Collection | `/` |
| StudioSpace | `/pages/studiospace/` |
| Aether | `/pages/aether/` |
| Swell | `/pages/swell/` |
| Manifest | `/data/projects.json` |

Cloudflare Pages serves `index.html` for directory URLs.

## Troubleshooting

- **Deployment fails with invalid token** — verify `CLOUDFLARE_API_TOKEN`, account scope and Pages Edit privilege.
- **Validation fails** — run `python3 scripts/validate_site.py` locally and fix broken paths or JSON entries.
- **404 on a landing page** — ensure `pages/<slug>/index.html` is committed and your project manifest uses `./pages/<slug>/`.
- **Blank catalog** — verify the manifest was copied into `public/data/projects.json`. The frontend includes a one-project fallback in case of fetch failure.
- **External video unavailable** — StudioSpace's demo MP4 comes from an external host and may fail due to network restrictions.

## Official documentation

- https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/
- https://developers.cloudflare.com/pages/get-started/direct-upload/
- https://github.com/cloudflare/wrangler-action
