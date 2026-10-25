# Swell V2 — procédure de capture et de reconstruction

## Phase A — Capture de référence avec Page Capture Web

1. `open` avec `url=https://www.swile.co/` et une session unique.
2. Si `jobId` pending, appeler `browser_job` jusqu'à status completed.
3. `snapshot` pour relever les titres, liens, composants et sections.
4. Fermer la fenêtre de consentement par `Continuer sans accepter`.
5. Lancer `export-landing` et attendre sa fin via `browser_job`.
6. Examiner le manifeste exporté : profils, dimensions du document, nombre de calques, fichiers JSON Figma, ressources et limites.
7. Utiliser `browser_file` sur les identifiants de fichier pour obtenir les liens de téléchargement. Télécharger les fichiers avant expiration si l'environnement réseau le permet.
8. Demander `screenshot` avec `fullPage=true`, puis ouvrir l'aperçu du PNG par `browser_file` avec `preview=true`.
9. Documenter précisément ce qui a été récupéré et ce qui manque, sans déclarer d'import Figma qui n'a pas eu lieu.

## Phase B — Reconstruction

1. Conserver V1 sous `pages/swell/` et créer `pages/swell-v2/`.
2. Composer le hero sombre, la maquette de carte rose/violet et le contraste de typographie.
3. Reproduire la **hiérarchie des sections**, sans dupliquer les assets ou les messages commerciaux : carte, Smartcard, avantages, solutions, application, témoignages, ressources.
4. Prévoir du responsive à 1440, 768 et 390 px ; respecter `prefers-reduced-motion`.
5. Utiliser des maquettes HTML/CSS originales plutôt que les photographies et vidéos capturées.
6. Inscrire `swell-v2` au catalogue avec `assets/swell-v2-preview.svg`.

## Phase C — Tests

```bash
python3 scripts/validate_site.py
node --check pages/swell-v2/script.js
python3 scripts/build_site.py
python3 -m http.server 8000
```

Ouvrir `http://localhost:8000/pages/swell-v2/`, puis `http://localhost:8000/`.

### Recette manuelle (à effectuer)

| Essai | Attendu |
| --- | --- |
| Desktop 1440 px | Hero sur deux colonnes, sections alignées, carte lisible |
| Mobile 390 px | Hero empilé, navigation accessible, sans débordement horizontal |
| Menu | Ouverture et fermeture avec `aria-expanded` |
| Sélecteur d'avantages | Titre et description de détail mis à jour |
| Témoignages | Défilement via boutons et navigation au clavier |
| Mouvement réduit | Pas de transition imposée |
| Retour à V1 | `../swell/` mène à la version précédente |
| Catalogue | Entrée 004 et vignette chargées |
| Déploiement | Cloudflare indique success sur le commit pertinent |

**Statut :** ces tests sont un plan de vérification, pas un procès-verbal d'exécution. Le snapshot et l'export de Swile ont été réellement produits ; un audit visuel pixel-par-pixel de Swell V2 n'a pas encore été exécuté.
