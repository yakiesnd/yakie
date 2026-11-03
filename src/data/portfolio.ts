export type PortfolioSection = 'music' | 'visuals' | 'residencies' | 'commissionedWork' | 'about';

export const portfolioSections: {
  id: PortfolioSection;
  path: string;
  label: Record<'en' | 'fr', string>;
  color: 'red' | 'yellow' | 'blue';
  size: 'large' | 'medium' | 'small' | 'tiny';
  position: string;
  rotation: number;
}[] = [
  { id: 'music', path: '/music/', label: { en: 'Music', fr: 'Musique' }, color: 'red', size: 'large', position: 'leaf-music', rotation: 24 },
  { id: 'visuals', path: '/visuals/', label: { en: 'Visuals', fr: 'Visuels' }, color: 'yellow', size: 'medium', position: 'leaf-visuals', rotation: -34 },
  { id: 'residencies', path: '/residencies/', label: { en: 'Residencies and creation', fr: 'Résidences et création' }, color: 'blue', size: 'small', position: 'leaf-residencies', rotation: 8 },
  { id: 'commissionedWork', path: '/commissioned-work/', label: { en: 'Commissioned Work', fr: 'Commandes' }, color: 'yellow', size: 'tiny', position: 'leaf-commissioned', rotation: 60 },
  { id: 'about', path: '/about/', label: { en: 'About', fr: 'À propos' }, color: 'red', size: 'small', position: 'leaf-about', rotation: -10 },
];

export const portfolioCopy: Record<PortfolioSection, { title: Record<'en' | 'fr', string> }> = {
  music: { title: { en: 'Music', fr: 'Musique' } },
  visuals: { title: { en: 'Visuals', fr: 'Visuels' } },
  residencies: { title: { en: 'Residencies and creation', fr: 'Résidences et création' } },
  commissionedWork: { title: { en: 'Commissioned Work', fr: 'Commandes' } },
  about: { title: { en: 'About', fr: 'À propos' } },
};

export const portfolioResidencies = [
  {
    period: { en: '2025', fr: '2025' },
    description: {
      en: 'Composition and production of the 8-track EP Ida Remains, with release planned through 2026.',
      fr: 'Composition et production de l’EP de 8 titres Ida Remains, dont la sortie se poursuit jusqu’en 2026.',
    },
  },
  {
    period: { en: '2025', fr: '2025' },
    description: {
      en: 'Live music performance at Domaine Foray with a visual artist.',
      fr: 'Performance musicale au Domaine Foray avec une artiste visuelle.',
    },
  },
  {
    period: { en: '2025', fr: '2025' },
    description: {
      en: 'Composition for an immersive sonic sphere at Château du Fey.',
      fr: 'Composition pour une sphère sonore immersive au Château du Fey.',
    },
  },
  {
    period: { en: '2024', fr: '2024' },
    description: {
      en: 'Artist residency at Saikoneon, Japan, composing music inspired by the surrounding nature.',
      fr: 'Résidence artistique à Saikoneon, au Japon, pour composer à partir des sons de la nature environnante.',
    },
  },
  {
    period: { en: '2024', fr: '2024' },
    description: {
      en: 'Bike field-recording trip along the US coast, from San Francisco to Los Angeles.',
      fr: 'Voyage à vélo dédié à la prise de son le long de la côte américaine, de San Francisco à Los Angeles.',
    },
  },
  {
    period: { en: '2024', fr: '2024' },
    description: {
      en: 'Release of the two-track EP Healer.',
      fr: 'Sortie de l’EP deux titres Healer.',
    },
  },
  {
    period: { en: '2024', fr: '2024' },
    description: {
      en: 'Two residencies at La Boule d’Or and P.A.F, in a former religious chapel, exploring interactions between broken organs and solenoid motors.',
      fr: 'Deux résidences à La Boule d’Or et au P.A.F, dans une ancienne chapelle, autour des interactions entre orgues hors service et moteurs solénoïdes.',
    },
  },
  {
    period: { en: '2023', fr: '2023' },
    description: {
      en: 'Live performances in Paris at PopUp and BPM Contest.',
      fr: 'Performances live à Paris au PopUp et au BPM Contest.',
    },
  },
  {
    period: { en: '2022', fr: '2022' },
    description: {
      en: 'Composition and production of the 7-track EP HACT, with support from Fond Régnier.',
      fr: 'Composition et production de l’EP de 7 titres HACT, avec le soutien du Fond Régnier.',
    },
  },
  {
    period: { en: '2021', fr: '2021' },
    description: {
      en: 'Artist residency at RedHouse Studio to record acoustic drums and grand piano.',
      fr: 'Résidence artistique au RedHouse Studio pour enregistrer des batteries acoustiques et un piano à queue.',
    },
  },
  {
    period: { en: 'Since 2020', fr: 'Depuis 2020' },
    description: {
      en: 'Commissioned scores for France Inter, including Le code a changé and 13 novembre, l’enquête, as well as music transitions for overnight programmes.',
      fr: 'Compositions sur commande pour France Inter, notamment Le code a changé et 13 novembre, l’enquête, ainsi que des transitions musicales pour les programmes de nuit.',
    },
  },
  {
    period: { en: '2018', fr: '2018' },
    description: {
      en: 'Composition and production of the 5-track EP Hivernelle.',
      fr: 'Composition et production de l’EP de 5 titres Hivernelle.',
    },
  },
  {
    period: { en: 'Since 2017', fr: 'Depuis 2017' },
    description: {
      en: 'Ableton Live and Wwise instructor at ISART Digital.',
      fr: 'Enseignement d’Ableton Live et de Wwise à ISART Digital.',
    },
  },
  {
    period: { en: 'Since 2009', fr: 'Depuis 2009' },
    description: {
      en: 'Senior Interactive Audio Designer for award-winning AAA games, including Detroit: Become Human, Heavy Rain and Watch Dogs: Legion.',
      fr: 'Senior Interactive Audio Designer sur des jeux AAA primés, dont Detroit: Become Human, Heavy Rain et Watch Dogs: Legion.',
    },
  },
  {
    period: { en: '2008–2011', fr: '2008–2011' },
    description: {
      en: 'Interactive and live music for theatre with Cie Acta.',
      fr: 'Musique interactive et live pour le théâtre avec la Cie Acta.',
    },
  },
] as const;
