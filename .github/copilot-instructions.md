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
| Libellés et navigation | `src/i18n/ui.ts` |
| Textes des pages | `src/data/pages.ts` |
| Fiches de projets | `src/content/projects/en/` et `src/content/projects/fr/` |
| Identité, email et réseaux sociaux | `src/data/site.ts` |
| Couleurs et styles | `src/styles/global.css` |
| Structure des pages | `src/components/pages/` |
| Images et documents | `public/` |
| Domaine et préfixe GitHub Pages | `config-domain.mjs` |

## Pages et liens

- Toute page de contenu doit avoir une version anglaise et une version française.
- Les liens internes doivent être générés avec `pageUrl` (ou `projectUrl`) depuis
  `src/i18n/ui.ts`, afin de conserver le bon préfixe sur GitHub Pages.
- Les images et documents du site doivent être stockés dans `public/` et référencés
  via le helper `ASSETS` ou `import.meta.env.BASE_URL`.
- Les liens vers YouTube, Vimeo et SoundCloud restent des liens externes ; ne pas
  intégrer leurs lecteurs ou scripts.

## Vérifications

Avant de proposer une pull request, exécuter `npm run check` et `npm run build`.
Décrire les changements en français.
