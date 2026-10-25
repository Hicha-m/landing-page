# Swell V2 — reconstruction à partir d'une capture réelle

**Référence :** https://www.swile.co/  
**Site :** `/pages/swell-v2/`  
**Original conservé :** `/pages/swell/`  
**Date de capture :** 25 octobre 2026.

## Pourquoi une deuxième version ?

La V1 Swell avait été construite d'après une inspiration générale et une maquette Figma manuelle. Cette V2 utilise **Page Capture Web** pour récupérer la structure visuelle et éditoriale de la page d'accueil publique Swile, puis réalise une **création originale, non affiliée à Swile**. Le résultat n'est pas une copie pixel-perfect du site source.

## Chaîne réellement exécutée

1. Ouverture de `https://www.swile.co/` dans Page Capture Web : réponse HTTP **200**.
2. Récupération de l'arbre d'accessibilité `snapshot` ; présence de la fenêtre de consentement Axeptio.
3. Action `Continuer sans accepter`, puis démarrage de `export-landing`.
4. Export `local-landing-kit`, incluant les profils **desktop 1440 × 900** et **mobile 390 × 844**.
5. Métadonnées rapportées par l'outil : document desktop **1440 × 7031 px**, **423 calques** dont **116 textes** ; document mobile **390 × 9828 px**, **410 calques** dont **110 textes** ; **21 ressources**, **20 polices**.
6. Export livré par l'outil : ZIP d'environ **6,5 Mo** et JSON Figma distincts pour les deux résolutions.
7. Capture PNG pleine page produite et inspectée en aperçu.
8. Reconstruction de V2 dans `pages/swell-v2/` et inscription comme projet **004** dans `data/projects.json`.

### Référence matérielle de la capture

Export Page Capture Web : identifiant `7db1a697-6f76-4b18-b861-d698c2d4de77.zip`. Capture PNG : `9baa841c-c057-4be9-8b0c-07416ec01b6f.png`. Ces identifiants documentent les sorties de l'outil, **mais les fichiers ne sont pas committés dans le dépôt**. Leurs URLs signées expirent. La tentative de téléchargement direct depuis l'environnement de travail a échoué à cause d'une erreur DNS ; il serait trompeur d'affirmer que le ZIP a été ouvert ou archivé localement.

### Limites de capture signalées par Page Capture Web

- Dégradés multiples ou fonds complexes pas totalement reproduits.
- Vidéos et iframes interactifs non exportés.
- Transformations CSS représentées par les rectangles englobants.

L'export JSON Figma **n'a pas été importé automatiquement dans le fichier Figma du projet**. Seules ses métadonnées de sortie sont attestées.

## Conception de V2

La capture montre notamment un **hero sombre très contrasté**, une carte mise en avant, une longue zone éditoriale blanche, puis plusieurs modules de produits et de ressources. L'arbre de page révèle les rubriques **Swile Card**, **Smartcard**, **tous les avantages**, **nos solutions**, **application**, **témoignages** et **outils & tendances**.

Cette grille éditoriale a guidé le site Swell V2 :
- Hero noir, cartographie décorative et carte fictive rose-violet.
- Section manifeste et démonstration d'une carte intelligente.
- Quatre cartes de bénéfices, avec sélection interactive.
- Composition « tout en un ».
- Trois cartes de solutions avec maquettes originales.
- Application mobile illustrative ; carrousel de témoignages **inventés** ; trois ressources internes.
- CTA permettant de revenir à Swell V1 ou à FORMA.

Aucun logo, témoignage, photographie, illustration ou chiffre commercial Swile n'est intégré à la version publiée.

## Périmètre technique

```
pages/swell-v2/index.html
pages/swell-v2/styles.css
pages/swell-v2/script.js
assets/swell-v2-preview.svg
data/projects.json
```

HTML/CSS/JS sans framework, responsive desktop/mobile, `prefers-reduced-motion`, navigation mobile ARIA, sélecteur de bénéfices et carrousel pilotable au clavier.

**Attention :** la réussite de la capture et du déploiement n'établit pas à elle seule une parfaite fidélité visuelle. Un contrôle côte à côte sur navigateurs desktop et mobile reste nécessaire.

Voir [les sources](SOURCES.md) et [la procédure de reproduction](REPRODUCTION.md).
