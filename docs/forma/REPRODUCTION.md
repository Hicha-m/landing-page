# FORMA — mode opératoire de reproduction

## Reproductibilité

Ce guide décrit **une façon de reconstruire le produit observable depuis les sources**, et non une suite de gestes historiquement enregistrés. Pour retrouver une version précise, cloner puis se positionner sur le commit ciblé avec `git checkout <sha>`.

## Prérequis

- Git, Python 3, navigateur moderne.
- Node.js seulement pour `node --check` (contrôle de syntaxe) ; non requis pour servir le site.
- Accès réseau pour Google Fonts ; la police de repli fonctionne sans réseau.

## Ordre de réalisation recommandé

1. **Définir la fonction :** construire une page de catalogue avec une entrée par projet, non une page marketing générique. Séparer l'accueil et les sites dans des dossiers.
2. **Établir les principes visuels :** fond `#08090c`, accent violet `#a5a5ff`, typographie Inter, contenu centré `.shell`, séparateurs 1 px et dégradés de lumière. Déclarer ces variables dans `:root` de `styles.css`.
3. **Composer le HTML :** header, hero, annonce, showcase du premier projet, galerie filtrable, manifeste de design, CTA final et footer. Donner un `id` aux sections ciblées par le menu.
4. **Construire le showcase :** afficher `assets/preview.svg` dans une fausse fenêtre navigateur. Le lien doit aller vers `./pages/studiospace/`, et non vers une page factice.
5. **Définir le contrat de données :** dans `data/projects.json`, écrire un tableau `projects` avec `id`, `title`, `number`, `type`, `category`, `summary`, `tags`, `image`, `url`. Les liens sont relatifs à la racine du site.
6. **Rendre le catalogue :** dans `script.js`, charger le JSON par `fetch`, valider les champs, filtrer par catégorie et texte, créer les nœuds DOM avec `textContent` (pas `innerHTML` arbitraire), afficher un état vide.
7. **Interactions :** relier les boutons `[data-filter]`, le champ `#project-search`, le raccourci `/`, `Escape`, le menu mobile et les animations par `IntersectionObserver`.
8. **Responsive et mouvement :** adapter les grilles aux petits écrans, rendre le menu accessible au clavier et neutraliser les animations lorsque `prefers-reduced-motion: reduce`.
9. **Ajouter les créations :** chaque site autonome vit sous `pages/<slug>/`. Enregistrer ensuite sa carte dans le manifeste.
10. **Valider et déployer :** utiliser les scripts du dépôt ; publier uniquement `public/` (voir documentation transverse).

## Commandes

```bash
git clone https://github.com/Hicha-m/landing-page.git
cd landing-page

# Contrôles structurels
python3 scripts/validate_site.py
node --check script.js

# Préparer le site tel qu'il partira vers Cloudflare
python3 scripts/build_site.py

# Test local
python3 -m http.server 8080
```

Visiter `http://localhost:8080/`. Tester ensuite la sortie publiée en servant `public/` :

```bash
cd public
python3 -m http.server 8081
```

Visiter `http://localhost:8081/` puis `http://localhost:8081/pages/studiospace/`.

## Critères d'acceptation

| Test manuel | Résultat attendu |
| --- | --- |
| Chargement de `/` | Header, hero, showcase et catalogue visibles |
| Clic sur StudioSpace | Navigation vers `/pages/studiospace/` |
| Recherche « studio » | StudioSpace reste affiché |
| Recherche « introuvable » | Message d'absence, aucune carte |
| Filtre « Concepts » | État vide légitime tant qu'aucun concept n'existe |
| Filtre « All works » | StudioSpace visible |
| Touche `/` hors champ | Focus de recherche |
| `Escape` dans la recherche | Recherche effacée |
| Smartphone | Navigation mobile fonctionnelle ; pas de débordement horizontal |
| Réduction des animations | Les contenus restent affichés sans reveals forcées |
| Nouveau projet JSON valide | Une nouvelle carte apparaît sans modifier `script.js` |

État des preuves : la présence des fichiers est vérifiable par Git ; **aucune campagne E2E automatisée ni audit visuel multi-navigateurs n'est revendiqué** par ce document.

## Débogage

- Si les cartes n'apparaissent pas : vérifier la réponse HTTP sur `/data/projects.json` et la console. Il existe un projet de repli dans `script.js`.
- Si l'image échoue : vérifier que `image` du manifeste pointe vers un fichier réellement publié.
- Si la prévisualisation mène à 404 : vérifier le dossier `pages/<slug>/index.html`.
- Si `file://` échoue : utiliser obligatoirement un serveur HTTP local.
- Si le déploiement est en erreur : consulter [DEPLOYMENT.md](../DEPLOYMENT.md).

## Fichiers de référence

`index.html`, `styles.css`, `script.js`, `data/projects.json`, `assets/preview.svg`, `assets/favicon.svg`, `scripts/validate_site.py`, `scripts/build_site.py`.
