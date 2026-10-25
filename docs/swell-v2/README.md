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


## Motion pass — 25 octobre 2026, nouveau MCP Local Page Capture Web

**La même version `pages/swell-v2/` a été modifiée.** Aucun projet V3, nouveau répertoire ou nouvel identifiant FORMA n'a été créé.

### Captures effectivement réalisées

- Ouverture navigateur de `https://www.swile.co/` : HTTP **200**, viewport **1440 × 900**, animations autorisées, mouvement normal.
- `inspect-page` : **200 éléments** (troncature signalée), **4 animations** détectées (pas de troncature), **75 ressources**.
- Consentement Axeptio : bouton **« Continuer sans accepter »** actionné.
- `capture-sequence` : séquence de défilement progressif (420, 550, 650, 760, 840 px) avec pauses intermédiaires ; **12 états enregistrés** dans un ZIP, identifiant `493f4330-0ccd-4bc9-9e2b-690cdc897ea5.zip`.
- Page Swell V2 en production ouverte également en HTTP **200**, puis `capture-state` produite à **1440 × 900**.
- Inspecteur source `2633c5ea-60e3-449b-8094-ada2542b67f6.json` : **fichier produit sur le serveur**, mais son téléchargement local a échoué par restriction réseau/DNS. Les durées exactes et courbes d'easing des quatre animations n'ont donc **pas été lues**.

### Changements dans Swell V2

Dans `script.js` : mise à jour des paramètres de mouvement en fonction du scroll via `requestAnimationFrame`, gestion du redimensionnement et de la préférence `prefers-reduced-motion`, apparitions au défilement via `IntersectionObserver`.

Dans `styles.css` : interpolation de rotation et déplacement pour la carte principale, la carte technologique, la carte « tout-en-un » et le téléphone ; mouvements décoratifs légers sur les orbites, le halo et les étoiles ; comportement statique si les animations sont désactivées dans les préférences du système.

**Précision** : ces trajectoires sont des interprétations originales fondées sur l'observation des états et la structure générale ; elles ne représentent pas une extraction des paramètres précis des animations propriétaires de Swile.

### Comparaison visuelle : encore non validée

`compare-captures` a bien été essayé avec les captures de référence et de Swell V2. Il a rejeté les comparaisons avec l'erreur **« Conditions différentes : navigateur, viewport, scroll, polices, consentement et animations doivent correspondre »**. Même après harmonisation de l'étiquette du consentement, la comparaison n'a pas été acceptée. Aucun score de ressemblance ne peut être annoncé.

**À corriger dans le MCP** : fournir un diagnostic champ par champ des préconditions incompatibles, puis permettre une comparaison de deux sites différents avec des polices distinctes, tout en gardant une alerte explicite sur cette différence. Il faut idéalement aussi pouvoir lire ou résumer les résultats de `inspect-page` et `capture-sequence` directement dans la réponse de l'outil pour éviter de dépendre du téléchargement ZIP/JSON signé.

Une future validation devra tester les animations en navigateur à différents scrollY, sur desktop/mobile et avec `prefers-reduced-motion`.


## Reconstruction des animations mesurées — 25 octobre 2026

Mise à jour **sur le même chemin `pages/swell-v2/`**, sans création d'une troisième version ni duplication du manifeste.

### Données effectivement relevées avec Local Page Capture Web

La nouvelle réponse directe de `inspect-page` sur Swile contient les quatre animations, dont :
- **`gradientAnimate`** : animation CSS de `backgroundPositionX`, de **0 px à 992 px**, sur **4 000 ms**, easing **linear**, répétée indéfiniment.
- **Trois états pilotés par `ScrollTimeline`**, propriété `opacity` : premier état de **1 à 0 entre 0 et 25 %** ; deuxième état de **0 à 1 de 25 à 50 %**, stable jusqu'à 75 %, puis à **0 vers 90 %**. Le troisième état prend le relais ensuite ; sa forme et son texte sont une création Swell.

### Implémentation de V2

- Le sous-titre « malin » de la section `technology` possède une animation CSS dédiée de **4 s et 992 px** ; l'habillage dégradé diffère volontairement de Swile.
- Les **trois calques de carte Swell** sont disposés l'un sur l'autre dans `.smartcard-timeline` ; `--smart-progress` détermine leur visibilité selon les points clés observés.
- Le calcul de progression est rattaché à la traversée de la section, et non à une durée fixe. Les autres cartes du site gardent leurs animations de parallaxe créatives.
- Les préférences `prefers-reduced-motion` conservent une carte visible et désactivent l'animation du dégradé.

**Limite :** la progression est émulée avec `requestAnimationFrame` et une propriété personnalisée CSS plutôt qu'avec la même implémentation `ScrollTimeline` native que Swile. Les mouvements spatiaux et contenus graphiques ne proviennent pas des sources propriétaires de Swile.

### Vérifications et comparaison

- Après publication du CSS et JS, la page a répondu **HTTP 200** à 1440 × 900 dans le navigateur Local Page Capture Web.
- `inspect-page` a détecté **5 animations d'ambiance** dans le hero (2 orbites, 1 halo, 2 étoiles). L'animation du dégradé se trouve plus bas et **n'est pas attestée** par cet inspecteur tant qu'on n'a pas déclenché sa section.
- La précédente tentative de `compare-captures` a identifié une incompatibilité stricte des polices entre Swile et Swell. Le MCP ne fournit pas actuellement dans sa signature de paramètre un mode explicite permettant de tolérer cette différence. **Aucun score de similitude n'est revendiqué.**
- Les tests visuels complets et le mobile demeurent à compléter, notamment le comportement sticky sous 520 px.

Les captures de référence servent à guider une interprétation originale, pas à importer ou publier les médias Swile.
