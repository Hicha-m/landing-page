# Aether — fiche de conception

**Livrable :** landing page conceptuelle et autonome sous `pages/aether/`, indexée dans FORMA sous le numéro **002**.

- [Inspirations, références et licences](SOURCES.md)
- [Procédure de reconstruction](REPRODUCTION.md)
- [Décisions transverses](../DECISIONS.md)
- [Déploiement Cloudflare Pages](../DEPLOYMENT.md)

## Brief

Créer une page marketing **inspirée de l'expérience visuelle de [Stripe France](https://stripe.com/fr)** : hero aux couleurs aurora, panneaux en perspective, démonstrations de produits, section développeurs avec code, modules dynamiques, récits de marque, et forte adaptation mobile.

### Identité propre

La marque **Aether** et sa communication sont fictives et spécifiques au projet. Il ne s'agit ni d'un clone officiel, ni d'un produit financier réel, ni d'une intégration Stripe. Aucune information de paiement n'est collectée.

## Sections implémentées

1. En-tête responsive et hero à trois couches de dégradés animées.
2. Console financière **illustrative** en perspective avec histogramme CSS, carte de transfert, notification factice.
3. Bande de logotypes **fictifs** (composante décorative).
4. Quatre cartes produits : paiement, analytique, facturation, international.
5. Section sombre « infrastructure » avec sphère orbitale CSS.
6. Bloc développeurs et onglets JavaScript / Python / cURL avec copie de code.
7. Bande de chiffres **illustratifs, explicitement non contractuels**.
8. Carrousel horizontal de cartes de récits fictifs.
9. Grand appel à l'action et footer.

## Comportements réels du front-end

- `IntersectionObserver` pour révéler les sections.
- Barre de progression de lecture.
- Navigation mobile avec contrôle `aria-expanded`.
- Onglets ARIA pour les exemples de code, clavier (flèches / Home / End).
- Bouton « Copier » avec Clipboard API (ou indication d'échec).
- Défilement du carrousel avec boutons, pointeur et touches fléchées.
- Désactivation des animations sous `prefers-reduced-motion`.

## Démonstrations non fonctionnelles

- La console, les chiffres, le graphique, les notifications, les transferts et l'encaissement **ne sont pas alimentés par un backend**.
- Les snippets affichent expressément une **API fictive non exécutable**, et l'adresse `example.invalid` ne peut pas accepter de transactions.
- La page ne contient aucun vrai produit Stripe, formulaire bancaire actif ni connexion à une API de paiement.

## Stack et architecture

```text
pages/aether/
├── index.html   # HTML sémantique, données mockées, 9 séquences éditoriales
├── styles.css   # Tokens, dégradés, mockups CSS, responsive, reduced-motion
└── script.js    # Navigation, onglets de code, défilements et animations
assets/
└── aether-preview.svg
data/projects.json
```

Le site est statique, sans framework JavaScript, sans backend, sans bundle runtime. Le catalogue racine est indépendant.

## Reproductibilité

La recette et les choix présentés ici sont **rédigés au moment de la livraison**. Les fichiers Git constituent la référence vérifiable. Le guide ne prétend pas reproduire précisément une version du site Stripe ni restituer des captures de référence archivées.

**Limites de validation :** les vérifications structurelles, l'existence des chemins et la syntaxe JS ne remplacent pas des tests navigateur automatisés multi-résolutions, un audit d'accessibilité ou un test de performance.

## Mise à jour V2 — 21 octobre 2026 : nouveau hero

L'utilisateur a fourni une **capture d'écran du nouveau site Stripe France** et demandé de faire évoluer Aether en conséquence. Cette image était une référence de conception communiquée dans la conversation, **pas un asset repris dans le dépôt**.

**Constats dans la capture :** navigation sur fond blanc, large espace blanc à gauche, texte sombre puis gris, CTA rectangulaires violet/blanc, ruban lumineux orange-rose-violet-bleu en diagonale sur la partie haute droite, bande de marques sous le hero. L'ancienne version Aether était plus saturée : dégradé en fond sur toute la surface et dashboard superposé au hero.

**Décisions appliquées :**
- V2 adopte une surface blanche et réduit la hauteur visuelle de la navigation.
- Un ruban original `pages/aether/aurora-ribbon.svg` remplace les trois éléments `.aurora` au-dessus de la ligne de flottaison.
- Le grand dashboard illustratif a été **retiré du hero** pour privilégier la typographie et les espaces négatifs ; les démonstrations produit restent plus bas dans la page.
- Le texte marketing reste original à Aether ; les logos et le chiffre « PIB mondial » du site de référence ne sont pas repris.
- La vignette `assets/aether-preview.svg` est mise à jour.
- Les interactions des sections sous le hero restent présentes.

**Limites :** le ruban est une composition SVG originale, non une copie de l'effet animé propriétaire Stripe. Le rendu peut différer de l'image fournie, surtout aux points de rupture mobile. Aucun audit comparatif pixel à pixel n'a été effectué.
