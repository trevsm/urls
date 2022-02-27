interface item {
  common?: string;
  url?: string;
}

interface ISocial {
  instagram: item;
  facebook: item;
  linkedin: item;
  twitter: item;
  snapchat: item;
  paypal: item;
  venmo: item;
}

interface IDev {
  productHunt: item;
  stackOverflow: item;
  npm: item;
}

interface EItem {
  primary?: string;
  secondary?: string;
}

interface IEmail {
  gmail: EItem;
  pm: EItem;
  other: EItem;
}

interface IProfile {
  common: string;
  url: string;
  pages: string;
}

interface PItem {
  live?: string;
  source?: string;
}

interface IProjects {
  tastySpore: PItem;
  portfolio: PItem;
  whatGpu: PItem;
  whenToWakeup: PItem;
  studioVoce: PItem;
  room3d: PItem;
  clock: PItem;
  threeFps: PItem;
  opioidEpidemic: PItem;
  boidSim: PItem;
  gameOfLife: PItem;
  cookies95: PItem;
  cryptoTicker: PItem;
  raceCarBulletin: PItem;
  nvimConfig: PItem;
}

export { item, ISocial, IDev, EItem, IEmail, IProfile, PItem, IProjects };
