# StudioSpace — dossier de conception

**Objet :** landing page autonome de démonstration accessible sous `/pages/studiospace/`.

- [Inspirations, références et médias](SOURCES.md)
- [Reconstruction pas à pas](REPRODUCTION.md)
- [Figma éditable](https://www.figma.com/design/5UBzjTrLWHkDQNiS8xXziH)
- [Décisions transverses](../DECISIONS.md)

## Origine du besoin

Créer une landing page riche en animations **inspirée de https://www.squarespace.com/** : hero immersif, fond vidéo, sections marketing, carrousels et panneaux qui défilent. Une maquette Figma a servi d'exploration visuelle ; l'implémentation HTML/CSS/JS porte les interactions réelles.

## Fichiers de livraison

```text
pages/studiospace/
├── index.html
├── styles.css
└── script.js
```

Site autonome, sans backend et sans environnement de build.

## Fonctionnalités confirmées dans le JavaScript

- Apparition progressive via `IntersectionObserver`.
- Barre de progression du défilement et effet de profondeur limité.
- Menu mobile et fermeture après navigation.
- Pistes `.card-track` et `.template-track` glissables au pointeur ; touches fléchées ; boutons `data-slider`.
- Compteurs animés au moment où ils entrent dans le viewport.
- Formulaire de domaine **fictif** (affiche un aperçu, ne vérifie pas la disponibilité DNS ou registrar).
- Commandes d'éditeur **simulé** (`.tool-item`, changement de couleur du canvas).
- Fenêtre vidéo avec boutons, fermeture Escape et retour du focus.
- Prise en compte de `prefers-reduced-motion` pour plusieurs animations et l'autoplay vidéo.

## Limites de fidélité

Il s'agit d'une **étude indépendante**, pas d'une reproduction exacte ni d'un produit affilié à Squarespace. Les cartes, annonces, chiffres marketing, recherche de domaine et outil de conception sont des éléments de démonstration. Les vidéos et textes de Squarespace n'ont pas été reproduits comme assets.

La maquette Figma n'est pas une implémentation web et **ne remplace pas** le site HTML pour tester la vidéo, les carrousels et le scroll.

## Traçabilité initiale

- [Première copie autonome de l'HTML](https://github.com/Hicha-m/landing-page/commit/ea539bf6db20b64f22ee8fa7368f5cb7e2f7c518)
- [Feuille de styles autonome](https://github.com/Hicha-m/landing-page/commit/8ae92f7a1b8128889b2e759b7bdb36e9e1a77722)
- [Interactions autonomes](https://github.com/Hicha-m/landing-page/commit/8441a1576cb83f77766742f126c4bb2d5ba6dd93)

Ces commits matérialisent la **réorganisation dans `pages/studiospace/`** ; ils ne correspondent pas forcément à l'invention initiale de chaque composant.
