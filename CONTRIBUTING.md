# Contributing to StudioSpace

Thanks for considering a contribution!

## Before opening a pull request

1. Search for an existing issue and discuss major visual or architectural changes first.
2. Fork or branch from `main`. Use a focused branch, such as `fix/mobile-navigation`.
3. Keep the dependency-free HTML/CSS/JavaScript approach unless a change clearly justifies a new dependency.
4. Validate locally:
   ```bash
   python3 scripts/validate_site.py
   node --check script.js
   ```
5. Check desktop and mobile layouts, keyboard interaction, accessible labels and `prefers-reduced-motion`.
6. Describe what changed, why, how it was tested and include before/after screenshots for visual work.

## Pull request checklist

- [ ] Changes have a clear, limited scope
- [ ] Validation passes
- [ ] Responsive layout verified
- [ ] Keyboard and reduced-motion behavior considered
- [ ] Documentation updated if necessary
- [ ] No secrets, copied proprietary assets or unlicensed media introduced

## Code style

Prefer semantic HTML, readable vanilla JavaScript and consistent CSS naming. Avoid misleading marketing claims: interactive demos must remain labeled as simulations.

Be respectful in all project discussions.
