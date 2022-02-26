export const social = {
  instagram: {
    common: "trev_sm",
    url: "https://instagram.com/trev_sm/",
  },
  facebook: {
    common: "trevjs",
    url: "https://facebook.com/trevjs/",
  },
  linkedin: {
    common: "trevor-smith-27621613b",
    url: "https://www.linkedin.com/trevor-smith-27621613b",
  },
  twitter: {
    common: "trev_sm",
    url: "https://twitter.com/trev_sm",
  },
  snapchat: {
    common: "trev_sm",
  },
  productHunt: {
    common: "subtora",
    url: "https://www.producthunt.com/@subtora",
  },
  paypal: {
    common: "trevsm",
    url: "https://paypal.me/trevsm",
  },
  venmo: {
    common: "trev_sm",
    url: "https://venmo.com/u/trev_sm",
  },
};

export const dev = {
  stackOverflow: {
    common: "subtora",
    url: "https://stackoverflow.com/users/8026620/subtora",
  },
  npm: {
    common: "trevsm",
    url: "https://www.npmjs.com/~trevsm",
  },
};

export const email = {
  gmail: {
    primary: "16tsmith55@gmail.com",
  },
  pm: {
    primary: "trevorsm@pm.me",
  },
  other: {
    primary: "me@trevorjs.dev",
  },
};

const ghProfile = {
  common: "trevsm",
  url: "https://github.com/trevsm/",
  pages: "https://trevsm.github.io/",
};

const projects = {
  tastySpore: {
    live: "tastyspore.com",
    source: ghProfile.url + "tasyspore",
  },
  portfolio: {
    live: "trevorjs.dev",
    source: ghProfile.url + "mobile-portfolio",
  },
  whatGpu: {
    live: "whatgpu.net",
    source: ghProfile.url + "whatgpu",
  },
  whenToWakeup: {
    live: "whentowakeup.com",
    source: ghProfile.url + "whentowakeup",
  },
  studioVoce: {
    live: "voce.studio",
    source: ghProfile.url + "studio-voce2",
  },
  room3d: {
    live: ghProfile.pages + "3D-Portfolio",
    source: ghProfile.url + "3D-Portfolio",
  },
  clock: {
    live: ghProfile.pages + "os-modern-clock",
    source: ghProfile.url + "os-modern-clock",
  },
  threeFps: {
    live: ghProfile.pages + "three-fps",
    source: ghProfile.url + "three-fps",
  },
  opioidEpidemic: {
    live: ghProfile.pages + "opioid-epidemic",
    source: ghProfile.url + "opioid-epidemic",
  },
  boidSim: {
    live: ghProfile.pages + "boid-simulation",
    source: ghProfile.url + "boid-simulation",
  },
  gameOfLife: {
    live: ghProfile.pages + "game-of-life",
    source: ghProfile.url + "game-of-life",
  },
  cookies95: {
    live: ghProfile.pages + "95cookies",
    source: ghProfile.url + "95cookies",
  },
  cryptoTicker: {
    live: ghProfile.pages + "crypto-price-tracker",
    source: ghProfile.url + "crypto-price-tracker",
  },
  raceCarBulletin: {
    live: ghProfile.pages + "race-car-bulletin",
    source: ghProfile.url + "race-car-bulletin",
  },
  nvimConfig: {
    source: ghProfile.url + "nvim-config",
  },
};

export const github = {
  ...ghProfile,
  projects,
};
