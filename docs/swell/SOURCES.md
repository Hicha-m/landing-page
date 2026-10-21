# Swell — sources et droits

Date de formalisation : **22 octobre 2026**.

## Inspiration principale

| ID | Source | Type | Apport à l'expérience | Provenance et droits |
| --- | --- | --- | --- | --- |
| SW-01 | [Swile — site officiel](https://www.swile.co/) | Référence éditoriale, structure et univers d'expérience | Hero orienté carte salariés, présentation des avantages, titres-resto, cadeaux, mobilité, culture, solution mobile, témoignages et CTA | Référence consultée, sans copier code, logo, photos, témoignages ou textes Swile |
| SW-02 | [Swile — Smartcard](https://www.swile.co/) | Contexte produit présenté sur l'accueil | Visualisation d'une carte multi-avantages et présentation de ses usages | Carte « Swell » dessinée pour le projet, pas une carte Swile |
| SW-03 | [Figma — maquette éditable Swell](https://www.figma.com/design/Dc0BiYEV8cUFziTPrDbrp0) | Source de design interne créée en premier | Huit sections éditables, palettes, composition, illustration de carte | Fichier de travail propre au projet |

Le contenu public du site Swile a notamment été relevé dans la consultation web initiale : **Swile Card**, **Smartcard**, **titres-resto**, **titres cadeaux**, **mobilité**, **chèques Culture**, **solutions**, **application mobile**, **témoignages**, **ressources** et **footer**. Ce relevé textuel **n'est pas une capture visuelle exhaustive** et ne prouve pas les dimensions ou les styles exacts du site à la date de consultation.

## Sources techniques

| ID | Source | Usage |
| --- | --- | --- |
| SW-04 | [MDN — IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) | Révélation progressive au scroll |
| SW-05 | [MDN — scroll-snap-type](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type) | Carrousel horizontal |
| SW-06 | [MDN — details](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details) | FAQ accessible sans bibliothèque |
| SW-07 | [MDN — prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) | Réduction des animations |
| SW-08 | [Google Fonts — Manrope](https://fonts.google.com/specimen/Manrope), [DM Sans](https://fonts.google.com/specimen/DM+Sans) | Typographies déclarées par le projet |
| SW-09 | [Cloudflare Pages — Direct Upload CI](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/) | Pipeline de livraison du monorepo |

## Import HTML-vers-Figma : statut

La méthode Figma `generate_figma_design` a été sollicitée. Le service requiert un **Playwright MCP** pour capturer `https://www.swile.co/` (source externe). Comme ce navigateur n'était pas disponible, **aucun écran réel du site source n'a été capturé automatiquement**. La maquette est donc une reconstruction guidée par les structures et intentions relevées.

## Ressources tierces et licences

Aucune photographie, vidéo, capture ou fichier de marque Swile n'a été importé dans `pages/swell/`. L'aperçu `assets/swell-preview.svg` est original. Les polices Google Fonts sont téléchargées depuis leur fournisseur selon leurs conditions de diffusion. Les emojis sont rendus par l'environnement du visiteur.

**La marque fictive Swell n'est pas liée à Swile ; la démonstration ne peut ni émettre ni charger une carte réelle.**
