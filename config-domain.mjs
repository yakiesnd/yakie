// Domaine personnalisé facultatif ; laisser vide pour GitHub Pages.
const CUSTOM_DOMAIN = '';
const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner = '', repoName = ''] = repository.split('/');
const isUserSite = repoName.toLowerCase() === `${owner.toLowerCase()}.github.io`;

export let SITE_URL = 'http://localhost:4321';
export let BASE_PATH = '/';

if (CUSTOM_DOMAIN) {
  SITE_URL = `https://${CUSTOM_DOMAIN}`;
} else if (owner) {
  SITE_URL = `https://${owner.toLowerCase()}.github.io`;
  BASE_PATH = isUserSite ? '/' : `/${repoName}/`;
}
