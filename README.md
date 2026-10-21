# Portfolio de Mathieu Fiorentini

Site statique bilingue (anglais à la racine, français sous `/fr/`), réalisé avec
Astro 6 et Tailwind CSS 4. Le site présente les travaux, le consulting, la musique
et le parcours de Mathieu Fiorentini.

## Développement

Utiliser Node.js 22 (voir `.nvmrc`), puis lancer :

```bash
npm install
npm run dev
npm run check
npm run build
```

## Contenu

- `src/i18n/ui.ts` : libellés et navigation traduits.
- `src/data/pages.ts` : contenus des pages en anglais et en français.
- `src/content/projects/{en,fr}/` : fiches bilingues des projets.
- `src/data/site.ts` : identité, coordonnées et liens externes.
- `public/` : images, icônes et documents statiques.

Chaque ajout ou changement de contenu doit rester disponible dans les deux langues.
Les lecteurs de médias externes ne sont pas intégrés : les pages proposent des liens
qui ouvrent le service concerné uniquement si le visiteur les suit.

## GitHub Pages

`config-domain.mjs` calcule l'URL et le préfixe de base à partir du dépôt fourni
par GitHub Actions. Pour un domaine personnalisé, renseigner `CUSTOM_DOMAIN` dans
ce fichier. Le déploiement est géré par `.github/workflows/deploy.yml`.
