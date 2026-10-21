# Modèle de dossier documentaire — nouvelle landing page

> Copier les trois blocs ci-dessous dans `docs/<slug>/README.md`, `docs/<slug>/SOURCES.md` et `docs/<slug>/REPRODUCTION.md`. Remplir **avant** de publier. Un champ inconnu doit être marqué **à confirmer**, jamais inventé.

## Bloc README.md

```md
# Nom — dossier de conception
- Slug / URL locale / URL de production :
- Auteur(s), date, responsable de maintenance :
- Version / SHA de référence :
- Besoin, cible, objectifs :
- Périmètre réel vs démonstrations :
- Sources : [SOURCES.md](SOURCES.md)
- Reproduction : [REPRODUCTION.md](REPRODUCTION.md)
- Fichiers et architecture :
- Critères d'acceptation :
- Limitations connues :
- Liens maquette / PR / issues :
```

## Bloc SOURCES.md

```md
# Sources, inspirations et droits
| ID | URL exacte / auteur | Consulté le | Type (inspiration / code / media / doc) | Usage précis | Licence / droits vérifiés ? |
|----|---------------------|------------|----------------------------------------|--------------|-----------------------------|
| S-01 |                     |            |                                        |              |                             |

- Éléments propriétaires **non repris** :
- Fichiers tiers réellement inclus :
- Hash / origine / version des assets tiers :
- Sources non retrouvées (à confirmer) :
- Captures ou références datées :
```

## Bloc REPRODUCTION.md

```md
# Mode opératoire
## 1. Préconditions (versions d'outils)
## 2. Objectifs, contraintes et critères de succès
## 3. Étapes ordonnées de fabrication
## 4. Composants, couleurs, typographies et assets
## 5. Interactions (états, triggers et accessibilité)
## 6. Commandes exactes de lancement
## 7. Données d'exemple et dépendances réseau
## 8. Tests et résultats (effectués / recommandés / non testés)
## 9. Déploiement et rollback
## 10. Décisions et alternatives (ADR)
## 11. Liens de commits, PR, captures et tickets
## 12. Limites, dettes techniques et prochain changement
```

## Checklist de publication documentaire

- [ ] Inspirations et sources officielles identifiées avec URL et date
- [ ] Aucun élément tiers copié sans vérification des droits
- [ ] Différence entre faits observés et reconstitution explicite
- [ ] Démos/mocks clairement signalés
- [ ] Recette localement reproductible
- [ ] Critères et résultats de test clairement distingués
- [ ] Référence de version immuable (SHA)
- [ ] ADR ou justification des changements majeurs
- [ ] Liens du dossier dans `docs/README.md` et `data/README.md`
