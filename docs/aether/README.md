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
