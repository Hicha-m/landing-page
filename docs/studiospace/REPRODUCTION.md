# StudioSpace — mode opératoire pour refaire la landing page

> **Statut historique :** méthode reconstituée à partir du code et des exigences. Ce n'est pas la transcription exacte de tous les prompts, essais ou captures de la session initiale.

## Prérequis

- Git, Python 3, navigateur moderne.
- Node.js facultatif pour vérifier la syntaxe JavaScript.
- Internet requis pour Google Fonts et la vidéo de démonstration.
- Figma facultatif pour lire la [maquette](https://www.figma.com/design/5UBzjTrLWHkDQNiS8xXziH).

## Refaire la page de zéro — séquence recommandée

### 1. Cadrage

Objectif : réaliser un concept de site de création web avec **présentation très graphique**, dix sections et plus, vidéo, exemples de templates, panneaux glissables, détails d'interactions. Fixer dès le départ que le site est statique et **que le domaine, les statistiques et l'éditeur ne sont pas des services réels**.

Livrable : découpage des sections et liste des interactions ; noter l'URL d'inspiration et les captures **datées** si leur archivage est autorisé.

### 2. Design et tokens

Dans `styles.css` déclarer les fondamentaux de la première version :
- Palette : `--ink: #1c1a1c`, `--paper: #f3efe7`, `--cream: #faf7f0`, `--lime: #dbee78`, `--lav: #d6c9ff`, `--plum: #241c27`.
- Polices : **DM Sans** pour le corps et **Manrope** pour les titres, avec polices de repli.
- Motif : sections généreuses, titres très grands, alternance clair / sombre, fonds de couleur.

Utiliser `clamp()` pour les tailles, `@media` pour les changements de disposition, et `overflow-x` approprié sur les pistes horizontales.

### 3. Construire le squelette HTML

Reproduire dans l'ordre logique les blocs visibles de `pages/studiospace/index.html` :
1. Navigation et hero vidéo.
2. Preuve sociale et chiffres de démonstration.
3. Panneaux de solutions défilants.
4. Prévisualisation de l'éditeur de design.
5. Galerie de templates.
6. Recherche de domaine de démonstration.
7. Commerce et vitrines produit.
8. Inspirations / réalisations.
9. Explication en étapes.
10. FAQ, appel à l'action et footer.

Chaque section doit avoir un sens sans animation ; utiliser `<main>`, titres hiérarchisés, boutons réels et liens explicites.

### 4. Intégrer la vidéo

Utiliser `<video>` avec source MP4, `muted`, `loop`, `playsinline` lorsque nécessaire. Prévoir l'échec du média externe et l'option `prefers-reduced-motion`. Dans la modale, déclencher `.play()`, fermer avec `Escape` et restituer le focus précédent.

**Important :** la vidéo est un exemple de fleur provenant de MDN ; elle n'est pas la vidéo Squarespace. Voir [SOURCES.md](SOURCES.md#vidéo-dexemple).

### 5. Implémenter les animations

`script.js` contient les comportements concrets :
- `IntersectionObserver` pour ajouter `.visible` aux sections `.reveal` ;
- `scroll` avec `requestAnimationFrame` pour la barre `.progress` et un déplacement `data-parallax` limité ;
- compteurs `[data-count]` animés par interpolation ;
- menus et transitions CSS ;
- arrêt de certaines animations en mode mouvement réduit.

Éviter d'animer en continu des propriétés de layout coûteuses lorsque des transforms sont possibles. Ne pas considérer cette recommandation comme une mesure de performance déjà effectuée.

### 6. Rendre les galeries défilables

Pour `.card-track` et `.template-track` :
- utiliser `overflow-x` et des cartes de largeur contrôlée ;
- gérer `pointerdown`, `pointermove`, `pointerup` pour le glissement ;
- ajouter des boutons `data-slider`, des touches `ArrowLeft`/`ArrowRight` ;
- mettre à jour l'index de template ;
- éviter de suivre un lien après un déplacement volontaire.

### 7. Simulations explicitement signalées

- `#domain-form` ne contacte **aucun registrar** : validation locale du terme, puis affichage « search preview only ».
- Les contrôles `.tool-item` modifient l'apparence de la prévisualisation et non un vrai site.
- Les métriques animées ne doivent pas être présentées comme des observations factuelles.

### 8. QA, publication et archivage

Lancer :

```bash
git clone https://github.com/Hicha-m/landing-page.git
cd landing-page
python3 scripts/validate_site.py
node --check pages/studiospace/script.js
python3 scripts/build_site.py
python3 -m http.server 8080
```

Page à tester : http://localhost:8080/pages/studiospace/

La version publiée est dans `public/pages/studiospace/`. Le projet racine est un catalogue ; ne pas remplacer `index.html` à la racine par celui de StudioSpace.

## Critères d'acceptation

| Scénario | Vérification |
| --- | --- |
| Arrivée sur la page | Sections et navigation présentes |
| Scroll | Barre de progression mise à jour, éléments révélés |
| Glissement sur les panneaux | Déplacement horizontal sans clic accidentel |
| Flèches des carrousels | Défilement et index de template cohérents |
| Clavier | Pistes défilables avec flèches lorsqu'elles reçoivent le focus |
| Vidéo | Modale ouverte/fermée, `Escape`, retour du focus |
| Formulaire domaine | Résultat explicitement fictif, pas de fausse disponibilité |
| Éditeur simulé | Changement visuel sans affirmation de publication réelle |
| Mobile | Menu ouvert/fermé et cartes utilisables |
| Motion réduit | Pas de vidéo autojouée intentionnellement et reveals non bloquées |
| Réseau bloqué | Police de repli et dégradation compréhensible du média externe |

**Ces scénarios sont des tests recommandés, pas un procès-verbal de tests navigateur déjà exécutés.** Le contrôle Python vérifie la structure et les liens locaux, pas la qualité visuelle ni le comportement réel en navigateur.

## Compléter la preuve sur les versions suivantes

Enregistrer pour chaque PR : commit, capture desktop/mobile, vidéo courte des carrousels, rapport Lighthouse ou Playwright si effectué, détail des navigateurs, statut des droits médias, et mise à jour du registre [ADR](../DECISIONS.md). Garder tout élément non testé marqué « non testé ».
