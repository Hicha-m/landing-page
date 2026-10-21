# Aether — reproduction pas à pas

## 0. Conditions et avertissement

Ce guide permet de **reconstruire le projet Aether livré dans ce dépôt**, non d'obtenir une reproduction exacte du site Stripe. Toute transaction, métrique financière, marque cliente ou API affichée est fictive.

Prévoir **Git**, **Python 3**, navigateur récent et **Node.js** pour les contrôles de syntaxe. Pas de dépendance npm à installer, pas de serveur applicatif.

## 1. Cadrer l'expérience

Écrire un brief : landing page francophone de fintech **imaginaire**, esthétique premium, chargement statique, sections nombreuses, animation sobre, interaction clavier et mobile. Différencier graphiquement Aether du site de référence : logo ◈ et nom distinct, contenus originaux, données fictives signalées.

Relever et dater les sources dans [SOURCES.md](SOURCES.md). Les photos, métriques et contenus Stripe ne doivent pas être recopiés.

## 2. Créer les fichiers

```text
pages/aether/index.html
pages/aether/styles.css
pages/aether/script.js
assets/aether-preview.svg
```

Utiliser des chemins **relatifs au dossier `pages/aether/`** pour CSS et JS, et `../../` pour revenir au catalogue.

## 3. Poser les tokens graphiques

Dans `:root` de `styles.css` définir `--navy:#0a2540`, `--ink:#102c47`, `--purple:#635bff`, `--soft:#f6f9fc`, un blanc pur et une transition souple. Utiliser **Inter** et des titres très grands avec `clamp()`.

Créer le hero par un `.hero-bg` couvrant la zone haute, rempli d'un gradient pêche/rose/violet/bleu ; superposer trois éléments `.aurora` floutés avec animations lentes et une texture SVG intégrée.

## 4. Construire l'interface du hero

Découper le hero en deux colonnes :
- à gauche : libellé, titre expressif, texte, deux CTA et note « démonstration » ;
- à droite : **une maquette** `.dashboard`, construite en HTML avec barre latérale, chiffres factices, histogramme CSS, toast et carte flottante.

Créer la perspective par `transform: rotateY() rotateX() rotateZ()` et une perspective sur le parent ; prévoir les breakpoints où le dashboard est redimensionné.

Ne pas connecter les éléments au réseau ni collecter de numéro de carte. Tous les montants et indicateurs sont simulés.

## 5. Construire les sections

Dans `index.html`, placer successivement :
1. `#solutions` avec les quatre cartes « Paiements », « Analytique », « Facturation », « International » ;
2. `#platform` avec l'orbe CSS sur fond marine ;
3. `#developers` avec onglets de snippets et bouton « Copier » ;
4. une section de chiffres purement conceptuels ;
5. `#stories` avec galerie scrollable ;
6. `#contact` et footer.

Utiliser `section`, `h2`, `article`, `nav`, `button` à la place d'éléments cliquables improvisés.

## 6. Implémenter les interactions

Dans `script.js` :
- contrôleur du menu mobile avec `aria-expanded` ;
- `IntersectionObserver` ajoutant `.visible` ;
- barre de progression via `scroll` passif et `requestAnimationFrame` ;
- snippets fictifs dans l'objet `snippets` puis bascule d'onglets avec attributs `role=tab`, `aria-selected`, `tabindex`, touches gauche/droite et Home/End ;
- copie par `navigator.clipboard.writeText()` avec retour d'erreur ;
- galerie `.stories-track` pilotée par boutons, flèches clavier et pointeur ;
- bloc `prefers-reduced-motion` pour réduire les effets.

Aucune commande ou lien ne doit se présenter comme déclenchant un paiement réel.

## 7. Ajouter la vignette au catalogue

Inscrire dans `data/projects.json` l'ID unique `aether`, la catégorie `websites`, le numéro `002`, l'aperçu `./assets/aether-preview.svg` et l'URL `./pages/aether/`. Le composant galerie de FORMA consomme le manifeste automatiquement.

## 8. Reproduire et valider localement

```bash
git clone https://github.com/Hicha-m/landing-page.git
cd landing-page
python3 scripts/validate_site.py
node --check pages/aether/script.js
python3 scripts/build_site.py
python3 -m http.server 8080
```

- Catalogue : `http://localhost:8080/`
- Page Aether : `http://localhost:8080/pages/aether/`
- Reproduction du bundle Cloudflare : `public/pages/aether/`

## Critères d'acceptation

| Critère | Attendu |
| --- | --- |
| Parcours sur ordinateur | Hero, console et toutes les sections visibles |
| Vue étroite | Menu mobile, maquettes adaptées, pas de débordement |
| Mode réduit | Pas de reveals masquant définitivement des sections |
| Menu | Ouverture, fermeture et `aria-expanded` cohérents |
| Onglets de code | Trois langages, contrôle clavier et contenu mis à jour |
| Copier | Copie le texte si le navigateur l'autorise ; sinon affiche un retour |
| Carrousel | Boutons, flèches et glissement de panneau |
| Retour vers FORMA | Lien `../../` fonctionnel |
| Références locales | Contrôle Python valide |
| JavaScript | `node --check` valide |
| Déploiement | Actions vertes et nouvelle version en production |

**Tests manuels recommandés ; leur présence dans le tableau ne signifie pas qu'ils ont été intégralement exécutés.** La validation Python ne garantit ni le rendu navigateur, ni les performances, ni l'accessibilité complète.

## 9. Publication

Pousser les fichiers et la documentation sur `main` après validation et contrôle de PR. Le workflow existant génère `public/` puis déploie ce répertoire sur le projet Cloudflare Pages `studiospace-landing` avec les secrets configurés.

Une nouvelle publication doit être vérifiée dans GitHub Actions puis dans l'historique des déploiements Cloudflare. Voir [DEPLOYMENT.md](../DEPLOYMENT.md).

## 10. Traçabilité

Conserver les liens des commits de création du HTML, du CSS, du JS, du preview, du manifeste et de ce dossier. Pour chaque itération, noter la justification, les sources, un diff, les tests réellement effectués et les éventuelles limitations.
