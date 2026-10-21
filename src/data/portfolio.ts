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
  { id: 'music', path: '/', label: { en: 'Music', fr: 'Musique' }, color: 'red', size: 'large', position: 'leaf-music', rotation: 24 },
  { id: 'visuals', path: '/visuals/', label: { en: 'Visuals', fr: 'Visuels' }, color: 'yellow', size: 'medium', position: 'leaf-visuals', rotation: -34 },
  { id: 'residencies', path: '/residencies/', label: { en: 'Residencies', fr: 'Résidences' }, color: 'blue', size: 'small', position: 'leaf-residencies', rotation: 8 },
  { id: 'commissionedWork', path: '/commissioned-work/', label: { en: 'Commissioned Work', fr: 'Commandes' }, color: 'yellow', size: 'tiny', position: 'leaf-commissioned', rotation: 60 },
  { id: 'about', path: '/about/', label: { en: 'About', fr: 'À propos' }, color: 'red', size: 'small', position: 'leaf-about', rotation: -10 },
];

export const portfolioCopy: Record<PortfolioSection, { title: Record<'en' | 'fr', string>; number: string }> = {
  music: { title: { en: 'Music', fr: 'Musique' }, number: '01' },
  visuals: { title: { en: 'Visuals', fr: 'Visuels' }, number: '02' },
  residencies: { title: { en: 'Residencies', fr: 'Résidences' }, number: '03' },
  commissionedWork: { title: { en: 'Commissioned Work', fr: 'Commandes' }, number: '04' },
  about: { title: { en: 'About', fr: 'À propos' }, number: '05' },
};
