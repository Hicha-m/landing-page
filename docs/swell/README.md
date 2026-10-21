# Swell — Landing page inspirée de Swile

**URL locale :** `/pages/swell/`  
**Projet :** troisième création de FORMA (`003`)  
**Maquette Figma éditable :** https://www.figma.com/design/Dc0BiYEV8cUFziTPrDbrp0

- [Références et provenance](SOURCES.md)
- [Procédure de reproduction](REPRODUCTION.md)
- [Catalogue FORMA](../../README.md)

## Objectif

Réaliser une landing page vivante et moderne dans le secteur des avantages salariés, en **commençant par Figma** comme demandé. L'inspiration porte sur la hiérarchie des sections, le ton joyeux, la présentation d'une carte et de ses usages, et les maquettes de l'application mobile.

## Étape Figma — réalisée en premier

Nouveau fichier créé puis construction manuelle de **8 sections et 82 calques éditables** via la Figma Plugin API : navigation, hero/carte, avantages, smartcard, solutions, application, témoignages et appel à l'action final. Le fichier contient des zones de texte, des cadres, des formes colorées et des maquettes simplifiées. Il ne s'agit **pas** d'un import de la page réelle ni d'une capture aplatie.

### Tentative d'import HTML → Figma

Le connecteur `generate_figma_design` a été préparé avec un identifiant de capture. Il impose l'usage de **Playwright MCP pour les pages web externes** ; cet outil n'était pas disponible dans l'environnement de la conversation. **L'import des écrans HTML de `www.swile.co` n'a donc pas été exécuté.** Ne pas décrire la maquette comme un relevé pixel-perfect de la page Swile. Le fichier Figma constitue un design reconstruit, entièrement éditable.

## Implémentation web

```
pages/swell/
├── index.html    # Contenu et composants HTML natifs
├── styles.css    # Tokens, cartes, responsive, animations
└── script.js     # Menu, reveals, carousel de témoignages

assets/swell-preview.svg
data/projects.json
```

Sections : hero, quatre avantages, carte centrale, trois solutions, application mobile, témoignages fictifs, FAQ et CTA. Le design est **indépendant**, sous la marque conceptuelle fictive **Swell**, sans affiliation à Swile.

## Choix principaux

- HTML/CSS/JS natifs, aucun framework et aucun backend.
- Palette crème, corail, jaune, rose, lavande et menthe.
- Illustrations originales dessinées par HTML/CSS/emoji/SVG.
- Liens vers les sections et vers le catalogue FORMA.
- Animation d'apparition progressive via `IntersectionObserver` ; respect de `prefers-reduced-motion`.
- Carrousel horizontal utilisant `scroll-snap`, boutons et navigation au clavier.
- FAQ avec les éléments HTML natifs `details` / `summary`.
- Pas de paiement réel, de compte, de collecte de données ni de mesure d'utilisation véritable.

## Transparence et limites

- La maquette Figma a été générée avant le code, mais l'intégration HTML-vers-Figma du site tiers **n'a pas fonctionné faute de Playwright MCP**.
- Les reproductions de cartes et d'appareils sont simplifiées, non des photographies ni des visuels propriétaires Swile.
- Aucun test automatisé Playwright de rendu multi-résolution n'a été exécuté lors de la première livraison ; les vérifications structurelles et la CI existante ne le remplacent pas.
- Les témoignages, marques et données d'interface sont fictifs.

Pour refaire la page, suivre le [mode opératoire](REPRODUCTION.md) et les [sources](SOURCES.md).
