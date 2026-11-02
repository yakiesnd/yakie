// @ts-ignore — fichier JS pur partagé avec astro.config.mjs
import { SITE_URL, BASE_PATH } from '../../config-domain.mjs';

export const site = {
  name: 'Yakie',
  /** Dérivé de config-domain.mjs — la bascule de domaine n'édite que ce fichier-là.
   *  BASE_PATH '/' (domaine final) ne doit PAS créer de double slash. */
  url: `${SITE_URL}${BASE_PATH === '/' ? '' : BASE_PATH}`,
  showreelYouTubeId: 'ng6NrgjAa6M',
  cvPdf: {
    fr: `${BASE_PATH.replace(/\/$/, '')}/documents/cv-fr.pdf`,
  },
  socials: [
    { label: 'SoundCloud (Yakie)', url: 'https://soundcloud.com/yakiemusic' },
    { label: 'Bandcamp', url: 'https://yakie.bandcamp.com/track/your-light-roamed-first' },
  ],
  tools: ['Wwise', 'Unreal Engine', 'Reaper', 'Pro Tools', 'Soundminer', 'Kyma'],
} as const;
