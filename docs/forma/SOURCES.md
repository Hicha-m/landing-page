# FORMA — sources, inspiration et provenance

Date de formalisation : **2026-10-21**. La consultation actuelle de ces pages ne prouve pas que chaque détail de leur version actuelle était visible au moment de la conception.

## Sources d'inspiration

| ID | Référence | Usage déclaré | Ce qui a été adapté | Ce qui n'a pas été réutilisé |
| --- | --- | --- | --- | --- |
| F-01 | [Linear](https://linear.app/) — site officiel | **Inspiration principale demandée** | Hiérarchie typographique, surface sombre, reflets violets, aperçu de produit dans une fenêtre, faible densité des bordures, transition progressive des sections | Aucun composant Linear, code source propriétaire, capture du site ni logo Linear incorporé |
| F-02 | [Linear — fonctionnalités](https://linear.app/features) | Référence de composition et de présentation des sections produit | Découpage éditorial et appel à l'exploration | Pas de reprise de contenu commercial ou de fonctionnalités |
| F-03 | [Linear Method](https://linear.app/method) | Référence de documentation de démarche, **pas une source de code** | Motivation générale pour la traçabilité et la clarté des décisions | Aucun texte recopié |

**Décision :** FORMA reste une marque de démonstration indépendante. S'inspirer de principes de design n'autorise pas à reproduire l'identité graphique, les logos, vidéos, captures, textes ou éléments propriétaires de Linear.

## Sources techniques et assets

| ID | Source | Rôle dans le site |
| --- | --- | --- |
| F-04 | [MDN — IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) | Observer les sections entrant dans le viewport |
| F-05 | [MDN — Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) | Charger `data/projects.json` |
| F-06 | [MDN — matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) | Vérifier la préférence de réduction du mouvement |
| F-07 | [Google Fonts — Inter](https://fonts.google.com/specimen/Inter) | Police chargée depuis Google Fonts |
| F-08 | [Cloudflare Pages Direct Upload / CI](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/) | Déployer la sortie statique depuis GitHub Actions |

Le visuel du catalogue `assets/preview.svg` est un **SVG du dépôt** servant d'aperçu illustratif, **pas un asset de Linear**. L'icône `assets/favicon.svg` appartient également au dépôt.

## Vérifications de provenance encore à compléter

- Captures originales du site source avec date et résolution : **non archivées**.
- Numéros de version de navigateur, audits Lighthouse et vidéo du rendu final : **non archivés**.
- Captures avant/après de chaque choix de design : **non archivées**.
- Attribution individuelle des éléments de style à un passage exact de Linear : **non démontrable**.

Pour les prochaines versions, archiver une capture *de référence* datée lorsque le droit de stockage et de diffusion le permet ; sinon enregistrer l'URL, la date, les observations textuelles et un croquis original. Ne pas distribuer d'assets tiers sans licence appropriée.
