# Documentation et traçabilité

Ce répertoire documente **comment les pages ont été imaginées, construites, vérifiées et publiées**. Le but est qu'une autre personne puisse comprendre les décisions et reconstruire les expériences sans dépendre de leur auteur.

> **Attention à la provenance :** les premières versions ont été construites avant l'adoption de ce protocole documentaire. Les guides FORMA et StudioSpace constituent une **reconstitution rétrospective fondée sur les fichiers, les échanges de conception disponibles et les sources identifiées**. Ils ne prétendent pas être un journal exhaustif des commandes, prompts, captures ou essais réellement effectués à l'époque. Les étapes de reproduction sont des **instructions reproductibles** et non des preuves que chaque action a historiquement été exécutée.

## Sommaire

| Périmètre | Dossier | Inspirations | Recette | Contrôles |
| --- | --- | --- | --- | --- |
| Catalogue **FORMA** | [forma/](forma/README.md) | [sources](forma/SOURCES.md) | [reproduction](forma/REPRODUCTION.md) | [reproduction](forma/REPRODUCTION.md#criteres-dacceptation) |
| Landing page **StudioSpace** | [studiospace/](studiospace/README.md) | [sources](studiospace/SOURCES.md) | [reproduction](studiospace/REPRODUCTION.md) | [reproduction](studiospace/REPRODUCTION.md#criteres-dacceptation) |
| Landing page **Aether** | [aether/](aether/README.md) | [sources](aether/SOURCES.md) | [reproduction](aether/REPRODUCTION.md) | [reproduction](aether/REPRODUCTION.md#criteres-dacceptation) |
| Landing page **Swell** | [swell/](swell/README.md) | [sources](swell/SOURCES.md) | [reproduction](swell/REPRODUCTION.md) | [reproduction](swell/REPRODUCTION.md#criteres-dacceptation) |
| Nouvelle création | [template](TEMPLATE-LANDING-PAGE.md) | à remplir | à remplir | à remplir |

**Documentation transverse :** [déploiement Cloudflare](DEPLOYMENT.md) · [registre des décisions](DECISIONS.md) · [guide d'ajout d'un projet](../data/README.md).

## Convention obligatoire pour chaque future landing page

Créer `docs/<slug>/README.md`, `SOURCES.md`, `REPRODUCTION.md` **avant** la première PR de publication, à partir du [modèle](TEMPLATE-LANDING-PAGE.md).

1. **Contexte et périmètre :** besoin, utilisateur visé, URL, maquette, fonctionnalités réelles et fausses interactions de démonstration.
2. **Provenance :** URL exacte, auteur/éditeur, date de consultation, nature de l'emprunt (inspiration, documentation, police, média, code), statut des droits. Ne pas confondre « aperçu visuel consulté » et « asset réutilisé ».
3. **Décisions :** alternatives envisagées, choix retenu, raisons, limites et renvoi à une entrée du [registre ADR](DECISIONS.md).
4. **Reproduction :** prérequis, commandes, fichiers à créer, ordre de construction, ressources externes, configuration, lancement et déploiement.
5. **Vérification :** tests automatisés et manuels (desktop, mobile, clavier, réduction des animations), éléments *non testés* et preuve par commit ou exécution CI.
6. **Historique :** dater chaque nouvelle décision/évolution, relier une PR ou un commit, documenter toute divergence avec le guide.

## Niveaux de preuve

- **Vérifié dans le dépôt :** nom de fichier, commande, fonction, valeur CSS ou chaîne exacte observables dans un commit cité.
- **Source officielle consultée :** lien public précis et date de consultation ; le site peut évoluer ensuite.
- **Rétrospectif :** intention ou enchaînement de conception reconstitué, potentiellement incomplet.
- **À confirmer :** droits d'utilisation, métriques, rendu navigateur et performances non vérifiés.

Pour une reproduction **exacte**, utiliser un SHA de commit plutôt que la branche `main`, qui évolue. Les versions historiques du site et les versions les plus récentes peuvent différer.

## Comment reconstruire tout le dépôt

```bash
git clone https://github.com/Hicha-m/landing-page.git
cd landing-page
python3 scripts/validate_site.py
node --check script.js
node --check pages/studiospace/script.js
node --check pages/aether/script.js
node --check pages/swell/script.js
python3 scripts/build_site.py
python3 -m http.server 8080
```

- Catalogue : http://localhost:8080/
- StudioSpace : http://localhost:8080/pages/studiospace/
- Sortie statique de publication : `public/`.
- La CI/CD publie `public/` ; voir [DEPLOYMENT.md](DEPLOYMENT.md).
- Les polices Google Fonts et la vidéo d'exemple de StudioSpace requièrent une connexion réseau.

**Remarque :** les commandes ci-dessus forment une recette de test ; les contrôles visuels multi-navigateurs et les tests end-to-end automatiques ne sont pas encore inclus dans le dépôt.
