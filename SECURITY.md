# Security policy

This is a static demonstration website. It does not collect credentials, accept payments, or perform live domain registration.

## Report a vulnerability

Please avoid posting exploitable details in public issues. Contact the repository maintainer through a private channel or use GitHub's **Report a vulnerability** feature if private vulnerability reporting is enabled.

## Deployment secrets

- Store Cloudflare API credentials **only** in GitHub Actions repository secrets.
- Use the least-privileged token: `Account → Cloudflare Pages → Edit`, restricted to the correct account.
- Never expose credentials in front-end JavaScript or commit `.env` files.
- Rotate any inadvertently disclosed token promptly.

## Third-party dependencies

The example video and Google Fonts are hosted externally. Review those third-party sources and privacy requirements before using this project commercially.
