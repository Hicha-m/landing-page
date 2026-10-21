# Continuous delivery — Cloudflare Pages

## Architecture

`main` → GitHub Actions validation → Wrangler Direct Upload → Cloudflare Pages.

Production project: `studiospace-landing`

Target: https://studiospace-landing.pages.dev

This existing project was created using **Direct Upload**. Keep it and its subdomain: GitHub Actions with Wrangler deploys to the project without requiring Cloudflare's native Git integration.

## Initial configuration

1. Commit all source files to the `main` branch.
2. Create a Cloudflare API token at https://dash.cloudflare.com/profile/api-tokens with **Account → Cloudflare Pages → Edit**, restricted to your Cloudflare account.
3. In GitHub open **Settings → Secrets and variables → Actions → New repository secret** and create `CLOUDFLARE_API_TOKEN`. Do not share the value.
4. Open **Actions → Validate and deploy to Cloudflare Pages**. Run the workflow on `main` if no new commit triggers it.
5. Verify the deploy job and check the published URL.

The account and project identifiers in the workflow are not secrets. Never store API tokens in repository files or logs.

## Validation and deploy rules

| Trigger | Validation | Production deploy |
| --- | --- | --- |
| Pull request to `main` | Yes | No |
| Push to `main` | Yes | Yes, after validation |
| Manual run on `main` | Yes | Yes |

The project has no build command. Wrangler uploads the static files directly.

## Troubleshooting

**Missing token** — confirm the repository secret `CLOUDFLARE_API_TOKEN` exists.

**Token authorization failure** — confirm Pages Edit permission and account restriction.

**Missing files / invalid HTML** — run `python3 scripts/validate_site.py` and `node --check script.js`.

**Domain not available** — confirm a successful production deployment exists in Cloudflare Pages.

**External video not loading** — the sample video requires network access; replace it with a locally hosted licensed file if reliability is important.

## Cloudflare docs

- https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/
- https://developers.cloudflare.com/pages/get-started/direct-upload/
- https://github.com/cloudflare/wrangler-action
