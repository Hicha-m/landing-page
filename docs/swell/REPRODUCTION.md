# Swell — procédure de reproduction

> Recette datée du 22 octobre 2026. Une partie des décisions créatives vient de la demande de l'utilisateur et de la référence Swile, mais **pas d'une extraction HTML pixel-perfect**.

## Prérequis

- Figma avec accès à la Figma Plugin API pour éditer la maquette.
- Git, Python 3, navigateur moderne.
- Node.js pour la vérification `node --check`, pas pour l'exécution du site.
- Internet facultatif pour le site, nécessaire pour les Google Fonts.

## Phase 1 — concevoir dans Figma, avant le code

1. Ouvrir ou recréer le [fichier de maquette](https://www.figma.com/design/Dc0BiYEV8cUFziTPrDbrp0).
2. Créer un frame desktop de 1440 px de large et environ 5100 px de haut.
3. Définir les principaux tokens : texte `#272328`, crème `#FAF7F2`, jaune `#FFE16D`, corail `#FF9A91`, rose `#FFD0DF`, lavande `#D7CBFC`.
4. Composer successivement les **huit grandes zones** : barre de navigation ; hero + carte ; avantages ; Smartcard ; solutions ; application ; témoignages ; CTA/footer.
5. Garder les textes et les formes **éditables**. Ne pas coller une capture du site comme résultat final.
6. Relire le design : titres, alignements, marges, cartes, interactions à implémenter.

### Capturer les écrans du site externe dans Figma — prérequis non satisfait

Le connecteur `generate_figma_design` requiert un outil **Playwright MCP** avec accès à la page externe et au script de capture `https://mcp.figma.com/mcp/html-to-design/capture.js`. Ce navigateur n'étant pas connecté, la capture n'a pas été réalisée. Avec un Playwright MCP connecté, exécuter la procédure fournie par `generate_figma_design`, puis comparer le résultat à la maquette éditable. Les captures doivent servir de **références**, pas de couches aplaties dans la livraison Figma.

## Phase 2 — implémenter la page

1. Créer `pages/swell/index.html`, `styles.css`, `script.js` et `assets/swell-preview.svg`.
2. Écrire un HTML sémantique : `header`, `nav`, `main`, `section`, `article`, `footer`.
3. Placer le hero en deux colonnes : message/CTA et carte d'avantages imaginaire ; fabriquer la carte en CSS.
4. Créer les quatre cartes pastel « restauration », « cadeaux », « mobilité », « culture ».
5. Déployer une section Smartcard avec carte violette en perspective et badges décoratifs.
6. Ajouter trois cartes de solutions avec mini-maquettes CSS, puis le mockup mobile.
7. Programmer les animations `.reveal` et la navigation mobile en JS ; utiliser `aria-expanded` et `prefers-reduced-motion`.
8. Ajouter un carrousel de témoignages **fictifs**, pilotable au clavier, et une FAQ avec `details/summary`.
9. Enregistrer l'entrée de projet `swell` dans `data/projects.json` avec vignette `./assets/swell-preview.svg` et chemin `./pages/swell/`.

## Phase 3 — lancer et vérifier

```bash
git clone https://github.com/Hicha-m/landing-page.git
cd landing-page
python3 scripts/validate_site.py
node --check pages/swell/script.js
python3 scripts/build_site.py
python3 -m http.server 8080
```

- Galerie FORMA : http://localhost:8080/
- Swell : http://localhost:8080/pages/swell/
- Bundle statique : `public/pages/swell/`

## Critères d'acceptation

| Scénario | Résultat attendu |
| --- | --- |
| Navigation sur ordinateur | Liens vers chaque section et CTA |
| Navigation mobile | Menu ouvert/fermé, état `aria-expanded` cohérent |
| Responsive 320–1440 px | Pas de texte coupé ou de défilement horizontal intempestif |
| Apparitions | Visibles au scroll, sans masquer les sections sous mouvement réduit |
| Témoignages | Scroll horizontal, boutons et flèches clavier |
| FAQ | Accords natifs ouvrables/fermables |
| Liens catalogue | Retour vers `../../` |
| JavaScript | `node --check` sans erreur |
| Références | `validate_site.py` sans chemins manquants |
| Publication | Workflow GitHub Actions réussi, site consultable sur Cloudflare |

**Les scénarios de ce tableau sont des tests à réaliser** et ne constituent pas une preuve de tests de navigateur déjà effectués.

## Phase 4 — déployer

Le workflow GitHub Actions du dépôt valide les pages, reconstruit `public/` et publie sur Cloudflare Pages. Vérifier les logs et le SHA réellement publié. La réussite du déploiement n'établit pas à elle seule la qualité de l'affichage navigateur.

## Traçabilité

Consigner chaque mise à jour dans les sources et le registre ADR. Les inspirations visuelles doivent rester datées et distinguées des ressources réellement intégrées.
