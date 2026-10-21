# StudioSpace — inspirations et sources

Formalisation du registre : **2026-10-21**. Le tableau distingue systématiquement inspiration, mécanisme technique et asset hébergé. Les sources ont pu évoluer depuis la création.

## Références créatives

| ID | Référence | Motif de consultation et apport | Limite |
| --- | --- | --- | --- |
| S-01 | [Squarespace — site officiel](https://www.squarespace.com/) | Inspiration **explicitement demandée** : hero de marque, grandes sections, expérience immersive, galeries, panneaux et appels à l'action | Pas de garantie de correspondance pixel à pixel ; pas de code ou d'identité propriétaire repris |
| S-02 | [Squarespace — galerie de templates](https://www.squarespace.com/templates) | Présenter différents styles de modèles et cartes de navigation | Les maquettes « templates » dans StudioSpace sont des illustrations originales simplifiées, pas une copie des templates |
| S-03 | [Squarespace — site builder](https://www.squarespace.com/website-design) | Contexte produit : composition de pages et personnalisation | L'« éditeur » du projet est une simulation |
| S-04 | [Figma — maquette StudioSpace](https://www.figma.com/design/5UBzjTrLWHkDQNiS8xXziH) | Exploration du layout et des sections | Les animations web ne sont pas des prototypes Figma exécutables |

## Références techniques

| ID | Source | Usage dans l'implémentation |
| --- | --- | --- |
| S-05 | [MDN — IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) | Révélation de sections et déclenchement des compteurs |
| S-06 | [MDN — Pointer Events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events) | Glissement horizontal au pointeur |
| S-07 | [MDN — Element.scrollBy](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollBy) | Boutons et clavier des carrousels |
| S-08 | [MDN — HTML video](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video) | Background vidéo, lecture et fenêtre modale |
| S-09 | [MDN — prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) | Réduction des effets pour les personnes concernées |
| S-10 | [Google Fonts — DM Sans](https://fonts.google.com/specimen/DM+Sans) ; [Manrope](https://fonts.google.com/specimen/Manrope) | Typographies déclarées dans `index.html` et utilisées dans `styles.css` |

## Provenance des médias

### Vidéo d'exemple

Dans `pages/studiospace/index.html`, la source exacte déclarée est :

```text
https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4
```

Elle provient du domaine des exemples de **MDN** et sert de vidéo **de démonstration**, non d'extrait de Squarespace. MDN documente l'utilisation de cette vidéo dans des exemples HTML ; le chemin contenant `cc0-videos` suggère un usage sous CC0, mais **les conditions de réutilisation complètes doivent être revérifiées avant intégration commerciale ou republication du fichier**. La vidéo reste hébergée par MDN et peut changer ou devenir indisponible.

Références : [MDN — élément video](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video) ; [Exemple fichier](https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4).

### Autres médias

- Illustrations d'interfaces et de templates : formes, CSS et HTML internes au projet, pas des captures directes de Squarespace.
- Polices : chargées depuis Google Fonts, selon leurs licences respectives.
- Aucun dossier d'assets audiovisuels tiers figés avec empreintes et licences n'était inclus dans cette première version.

## Risques et transparence

- Captures datées du site d'inspiration : **non archivées**.
- Capture de référence de chaque section : **non archivée**.
- Justificatif de licence complet de la vidéo archivé dans le dépôt : **non présent**.
- Les chiffres ou libellés marketing de démonstration ne sont **pas des données mesurées**.

Avant de cloner fidèlement un site tiers, vérifier droits, marques, contenus et images ; privilégier un univers original reprenant seulement des patterns d'interaction.
