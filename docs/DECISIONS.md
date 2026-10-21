# Registre des décisions architecturales (ADR)

Chaque décision est datée et reliée à son champ d'application. **Statut « reconstituée »** : décision déduite de la demande et/ou de l'implémentation existante ; ce n'est pas une retranscription d'un atelier de conception.

| ID | Sujet | Statut | Décision | Justification | Contrepartie |
| --- | --- | --- | --- | --- | --- |
| ADR-001 | Catalogue vs pages | Reconstituée | Un site racine FORMA et des pages autonomes sous `pages/<slug>/` | Faire coexister plusieurs créations | Chaque page a ses propres CSS/JS |
| ADR-002 | Framework | Reconstituée | HTML, CSS, JS sans framework ni backend | Hébergement statique et simplicité d'exécution | Plus de duplication si la collection grandit |
| ADR-003 | Source des métadonnées | Vérifiée dans le code | `data/projects.json` chargé via `fetch()`, rendu DOM en JS | Ajouter une page sans modifier l'interface | Un serveur HTTP est nécessaire pour tester le JSON |
| ADR-004 | Style de FORMA | Reconstituée | Univers sombre, violet, minimal, typographie expressive | Référence esthétique Linear demandée | Pas de copie à l'identique de la marque ni de ses assets |
| ADR-005 | Style de StudioSpace | Reconstituée | Hero visuel, sections alternées, galerie et vidéo | Référence esthétique Squarespace demandée | Certaines fonctions restent des démonstrations |
| ADR-006 | Animations accessibles | Vérifiée dans le code | `IntersectionObserver` et `prefers-reduced-motion` | Animation progressive avec possibilité de la réduire | Pas une garantie d'accessibilité exhaustive |
| ADR-007 | Distribution | Vérifiée dans la CI | Build Python de `public/`, Direct Upload avec Wrangler | Ne pas exposer les fichiers internes du dépôt | Dépend des secrets GitHub Actions |
| ADR-008 | Figma | Reconstituée | Maquette StudioSpace éditable + implémentation web indépendante | Séparer exploration graphique et interactions réelles | Le prototype Figma ne reproduit pas toutes les animations web |

| ADR-009 | Aether, inspiration Stripe | Vérifiée dans le code | Concept statique « Aether » avec gradient animé, composants fictifs et exemples d'API non exécutables | Réaliser les patterns demandés sans copier la marque ni simuler de vrai paiement | Les données ne représentent aucun service réel ; voir [documentation](aether/README.md) |

| ADR-010 | Aether V2, référence screenshot | Acceptée le 2026-10-21 | Hero blanc et ruban SVG original en remplacement du gradient plein écran | Suivre la nouvelle direction visuelle Stripe France fournie par capture tout en gardant un code et une identité distincts | CSS V2 ajouté sous les styles existants ; une future refonte pourra consolider les règles ; [rapport](aether/README.md) |

| ADR-011 | Swell Figma-first | Acceptée le 2026-10-22 | Maquette Figma éditable avant création de la page statique; pas de copie des médias Swile | Relever le site source sans emprunter ses éléments propriétaires | HTML-to-Figma externe impossible sans Playwright MCP ; [rapport](swell/README.md) |

## Format d'une nouvelle décision

```md
### ADR-009 — Titre
- Date : AAAA-MM-JJ
- Statut : proposée / acceptée / remplacée
- Portée : FORMA / StudioSpace / nouvelle page / architecture
- Contexte : problème précis et contrainte mesurable
- Options : A, B, C avec avantages et inconvénients
- Décision : choix retenu
- Conséquences : coûts, performance, maintenabilité, accessibilité
- Traçabilité : issue / PR / commit / maquette Figma / liens externes
- Vérification : test associé et résultat, si disponible
```

Ne jamais remplacer silencieusement une décision historique : marquer « remplacée par ADR-xxx » et ajouter une nouvelle entrée.
