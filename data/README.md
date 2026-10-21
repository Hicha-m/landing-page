# Adding a landing page

Existing examples: [StudioSpace](../docs/studiospace/README.md) and [Aether](../docs/aether/README.md).

Each experience is a **self-contained static website** under `pages/<slug>/`. The root homepage is a catalog, not an individual experience.

## 1. Create the page

```text
pages/
  your-project/
    index.html
    styles.css
    script.js
```

Keep relative URLs working from the nested directory; avoid links to the catalog's root CSS or JS.

## 2. Register it

Edit `data/projects.json` and add a unique project:

```json
{
  "id": "your-project",
  "title": "Your Project",
  "number": "002",
  "type": "WEBSITE EXPERIENCE",
  "category": "websites",
  "summary": "One clear sentence about this experience.",
  "tags": ["websites", "motion"],
  "image": "./assets/your-project-preview.svg",
  "url": "./pages/your-project/"
}
```

The URL and image must exist. Use categories `websites` or `concepts` to match the homepage filters. The catalog reads JSON at runtime, so no JavaScript edits are needed for new projects.

## 3. Documenter les inspirations et la reproductibilité

Avant la première publication, créer **trois fichiers dans `docs/<slug>/`** :

- `README.md` : contexte, objectifs, fichiers, limitations.
- `SOURCES.md` : inspiration, URL, date, nature d'utilisation, droits.
- `REPRODUCTION.md` : procédure pas à pas, interactions, validation.

Utiliser [le modèle obligatoire](../docs/TEMPLATE-LANDING-PAGE.md), consulter l'[index des dossiers](../docs/README.md) et noter les décisions majeures dans le [registre ADR](../docs/DECISIONS.md).

Ne pas présenter les comportements fictifs comme des services fonctionnels ni une démarche reconstituée comme une chronologie prouvée.

## 4. Validate and deploy

```bash
python3 scripts/validate_site.py
node --check script.js
```

Commit to a PR targeting main. Once the workflow passes and the PR is merged, GitHub Actions can deploy the static catalog and every nested landing page to Cloudflare Pages (provided the secret has been configured).

## Guidelines

- Provide an accessible descriptive image and meaningful HTML title/description.
- Respect `prefers-reduced-motion`, keyboard interaction and mobile layouts.
- Label nonfunctional mockups as demo interfaces.
- Use locally hosted or appropriately licensed assets.
- No backend or build step required.
