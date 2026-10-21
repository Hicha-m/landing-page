# Aether — sources et provenance

Date de rédaction : **21 octobre 2026**.

## Inspiration principale

| Réf. | URL | Type | Apport à la conception | Limites de réutilisation |
| --- | --- | --- | --- | --- |
| A-01 | [Stripe — version française](https://stripe.com/fr) | **Référence esthétique et éditoriale** demandée par l'utilisateur | Hero très expressif, contraste entre gradient et texte sombre, mosaïque de solutions, place centrale accordée aux développeurs, récits d'entreprise, chiffres et appel à l'action | Les textes, logos, assets, métriques et interfaces propriétaires de Stripe **ne sont pas reproduits**. Aether n'est pas affiliée à Stripe. |
| A-02 | [Stripe — documentation des développeurs](https://docs.stripe.com/) | Inspiration générale de la pédagogie technique | Bloc « exemple de code » interactif et langage visuel de documentation | Les exemples sont fictifs et n'exécutent pas de commandes Stripe |
| A-03 | [Stripe — page tarifs](https://stripe.com/fr/pricing) | Contexte d'architecture d'informations | Présence d'une entrée « Tarifs » dans la navigation | Aucun tarif ni politique commerciale réelle reproduit |

### Observations vérifiables à l'instant de la rédaction

La page publique `https://stripe.com/fr` présente notamment une introduction sur l'infrastructure financière, un catalogue de solutions, une section sur l'échelle internationale, des cas d'usage, des développeurs/intégrations, une section nouveautés et des CTA. Ces **éléments de composition** ont nourri une interprétation nouvelle, pas une duplication de l'identité Stripe.

**Important :** une source web évolue. Sans snapshot daté, la prochaine personne qui consulte ce lien peut voir une version différente.

## Standards et références techniques

| Réf. | Documentation | Application |
| --- | --- | --- |
| A-04 | [MDN — IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) | Révélation progressive des sections |
| A-05 | [MDN — CSS gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient) | Dégradés multicouches du hero |
| A-06 | [MDN — CSS transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) | Perspective et illustration 3D CSS de la console |
| A-07 | [MDN — Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) | Bouton de copie dans le volet développeur |
| A-08 | [WAI-ARIA Authoring Practices — Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) | Choix des attributs ARIA et des raccourcis clavier pour les onglets |
| A-09 | [MDN — prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) | Mouvements désactivables |
| A-10 | [Google Fonts — Inter](https://fonts.google.com/specimen/Inter) | Typographie externe avec police système de repli |
| A-11 | [Cloudflare Pages Direct Upload CI](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/) | Distribution automatique du site statique |

## Médias et droits

- **Aucun média, logo, capture, vidéo ou code source propriétaire de Stripe** n'est inclus dans cette page.
- Le hero est construit en CSS : dégradés, sphères et bruit SVG intégré ; les widgets sont dessinés en HTML/CSS/SVG.
- L'aperçu `assets/aether-preview.svg` est une **illustration originale** du concept, pas une capture de Stripe.
- Les polices sont appelées depuis Google Fonts ; vérifier leurs licences et conditions de diffusion si elles sont hébergées localement.
- Les noms de la bande décorative et les histoires clients sont inventés.

## Vérification des affirmations

Les « 124 590,80 € », « 18,4 % », « 8 450 € », taux de rétention, etc., sont des **nombres de maquette**. Ne jamais les utiliser comme métriques réelles, promesses produit ou résultats d'une organisation.

L'adresse `api.example.invalid` et les objets `createDemoClient` / `fictional_aether` sont inventés : **pas d'API de paiement activée**.

## Nouvelle référence fournie par l'utilisateur — V2

- **S-12 — Capture utilisateur :** screenshot du site `https://stripe.com/fr`, transmis dans la conversation le **21 octobre 2026**. L'image montre un hero à grand fond blanc, ruban chromatique oblique à droite, texte aligné à gauche et CTA violet. L'image n'a pas été intégrée au dépôt ni publiée.
- **S-13 — Site officiel :** [Stripe France](https://stripe.com/fr), reconsulté lors de la mise à jour ; texte et sections publiques utilisés pour vérifier la direction générale, sans reproduire les formulations. La mise en forme exacte est principalement fondée sur la capture utilisateur.
- **Asset neuf :** `pages/aether/aurora-ribbon.svg` est créé pour Aether ; `assets/aether-preview.svg` est sa vignette stylisée. Aucun fichier image Stripe n'est importé.

**Écart contrôlé :** le mot-symbole Aether, son message, ses faux partenaires, ses chiffres et ses CTA diffèrent volontairement des contenus de Stripe. Les « faux partenaires » sont explicitement qualifiés d'imaginaires sous la rangée de logos.
