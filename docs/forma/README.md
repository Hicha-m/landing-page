# FORMA — dossier de conception

**Objet :** page d'accueil à la racine `/`, servant de catalogue aux différentes landing pages du dépôt.

- [Sources et inspirations](SOURCES.md)
- [Reproduire l'implémentation](REPRODUCTION.md)
- [Décisions transverses](../DECISIONS.md)
- [Déploiement Cloudflare](../DEPLOYMENT.md)

## Besoin initial

Après la création de StudioSpace, le dépôt ne devait plus représenter un seul site : la demande était de **répertorier plusieurs landing pages**, avec une page d'accueil inspirée de **https://linear.app/**.

## Objectifs

- Une identité visuelle propre au catalogue, cohérente sans effacer le style spécifique de chaque expérience.
- Une vitrine éditoriale avec mise en avant du projet principal.
- Un catalogue extensible, filtrable, consultable au clavier et accessible sur mobile.
- Un lien direct vers chaque expérience et son code source.

## Périmètre implémenté

| Élément | Fichier / mécanique |
| --- | --- |
| Hero sombre, annonce, démonstration orbitale | `index.html`, `styles.css` |
| Showcase « navigateur » de StudioSpace | `#featured` et `assets/preview.svg` |
| Galerie de cartes | `#project-grid` rempli par `script.js` |
| Référentiel des créations | `data/projects.json` |
| Filtrage / recherche | boutons `data-filter`, `#project-search` |
| Raccourci de recherche `/` et sortie `Escape` | `script.js` |
| Menu mobile | `.menu-toggle`, `#mobile-nav` |
| Révélations progressives | `IntersectionObserver` et `.reveal` |
| Réduction du mouvement | `prefers-reduced-motion` dans le CSS et le JS |

## Identité visuelle vérifiable dans le CSS

Palette principale observée : `--bg: #08090c`, `--surface: #101116`, `--text: #f0f0f3`, `--accent: #a5a5ff`, `--accent2: #7979e6`.

Police d'interface : **Inter**, chargée via Google Fonts, avec police de repli standard. Les dimensions, espacements et effets exacts sont ceux de `styles.css` ; les valeurs ne doivent pas être reconstruites à partir des captures.

## Limites

- La carte de prévisualisation utilise une **illustration SVG du projet**, pas une capture navigateur figée du rendu courant.
- Le catalogue n'a **qu'un seul projet confirmé** à ce stade : StudioSpace.
- Les filtres « Concepts » sont prêts pour les futurs projets ; aucun faux projet n'est affiché.
- La recherche est **locale**, pas un moteur indexant automatiquement GitHub.

## Traçabilité initiale

Premiers commits représentatifs (vérifier leurs parents et la chronologie dans GitHub) :
- [Mise en place du catalogue](https://github.com/Hicha-m/landing-page/commit/4b11f692bcc05165a873d057a4d35dbcc049a55f)
- [Styles du catalogue](https://github.com/Hicha-m/landing-page/commit/4ff9cf4db551687d1ec4103002313a52181233aa)
- [Moteur de catalogue](https://github.com/Hicha-m/landing-page/commit/fe4813a7e028fc5f3e85474ba11667990e973f49)

Le processus de création ci-dessous est **rétrospectif** ; il ne prétend pas restituer les prompts ni tous les essais graphiques.
