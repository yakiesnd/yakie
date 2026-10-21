# Instructions pour Copilot

Ce dépôt contient un site statique Astro + Tailwind CSS v4, bilingue (anglais à la
racine et français sous `/fr/`) et publié sur GitHub Pages.

## Règles

- Ne pas ajouter de dépendance npm sans autorisation explicite.
- Ne pas modifier `.github/workflows/deploy.yml` sans demande explicite.
- Ne pas ajouter de formulaire de contact, de script tiers ni de tracker.
- Garder le code simple et lisible ; commenter en français ce qui n'est pas évident.
- Toute modification de contenu doit rester disponible en anglais et en français.

## Où modifier

| Besoin | Fichiers |
|---|---|
| Pages, libellés et feuilles | `src/data/portfolio.ts` |
| Navigation par langue | `src/i18n/ui.ts` |
| Identité, email et réseaux sociaux | `src/data/site.ts` |
| Couleurs, typographie et styles | `src/styles/global.css` et `src/components/pages/SectionPage.astro` |
| Domaine et préfixe GitHub Pages | `config-domain.mjs` |

## Pages et liens

- Le site comprend cinq pages en anglais (racine) et cinq pages en français (`/fr/`) :
  Music, Visuals, Residencies, Commissioned Work et About.
- Les deux langues doivent garder les mêmes pages et liens de navigation.
- Les liens internes doivent être générés avec `pageUrl` depuis `src/i18n/ui.ts`,
  afin de conserver le bon préfixe sur GitHub Pages.
- Conserver le fond blanc, la police Crimson Pro et le menu latéral partagé.
- Ne pas ajouter de formulaire, de script tiers ni de tracker.

## Vérifications

Avant de proposer une pull request, exécuter `npm run check` et `npm run build`.
Décrire les changements en français.
