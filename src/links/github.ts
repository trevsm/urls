import { IProfile, IProjects } from "../types/types";

const ghProfile: IProfile = {
  common: "trevsm",
  url: "https://github.com/trevsm/",
  pages: "https://trevsm.github.io/",
};

const projects: IProjects = {
  tastySpore: {
    live: "https://tastyspore.com",
    source: ghProfile.url + "tasyspore",
  },
  portfolio: {
    live: "https://trevorjs.dev",
    source: ghProfile.url + "mobile-portfolio",
  },
  whatGpu: {
    live: "https://whatgpu.net",
    source: ghProfile.url + "whatgpu",
  },
  whenToWakeup: {
    live: "https://whentowakeup.com",
    source: ghProfile.url + "whentowakeup",
  },
  studioVoce: {
    live: "https://voce.studio",
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
