# Yakie

Site statique bilingue inspiré d’un portfolio éditorial : fond blanc, typographie
Crimson Pro et navigation illustrée de feuilles. Il comprend cinq pages : Music,
Visuals, Residencies, Commissioned Work et About. Les pages françaises sont sous
`/fr/`.

## Développement

Utiliser Node.js 22 (voir `.nvmrc`), puis lancer :

```bash
npm install
npm run dev
npm run check
npm run build
```

## Contenu

- `src/data/portfolio.ts` : pages, libellés et positions des feuilles.
- `src/components/pages/SectionPage.astro` : mise en page commune aux cinq pages.
- `src/i18n/ui.ts` : routes bilingues et helpers de liens.
- `src/data/site.ts` : identité, coordonnées et liens sociaux.

Chaque page existe en anglais et en français. Les contenus détaillés seront ajoutés
dans une prochaine étape.

## GitHub Pages

`config-domain.mjs` calcule l'URL et le préfixe de base à partir du dépôt fourni
par GitHub Actions. Pour un domaine personnalisé, renseigner `CUSTOM_DOMAIN` dans
ce fichier. Le déploiement est géré par `.github/workflows/deploy.yml`.
