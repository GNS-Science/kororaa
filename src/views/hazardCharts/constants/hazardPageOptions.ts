import { HAZARD_IMTS, MAP_VS30S, TIME_PERIODS } from "../../../utils/environmentVariables";

interface HazardPageLocations {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

export const hazardPageLocations: HazardPageLocations[] = [
  {
    id: "WLG",
    name: "Wellington",
    latitude: -41.3,
    longitude: 174.78,
  },
  {
    id: "GIS",
    name: "Gisborne",
    latitude: -38.65,
    longitude: 178.0,
  },
  {
    id: "CHC",
    name: "Christchurch",
    latitude: -43.53,
    longitude: 172.63,
  },
  {
    id: "IVC",
    name: "Invercargill",
    latitude: -46.43,
    longitude: 168.36,
  },
  {
    id: "DUD",
    name: "Dunedin",
    latitude: -45.87,
    longitude: 170.5,
  },
  {
    id: "NPE",
    name: "Napier",
    latitude: -39.48,
    longitude: 176.92,
  },
  {
    id: "NPL",
    name: "New Plymouth",
    latitude: -39.07,
    longitude: 174.08,
  },
  {
    id: "PMR",
    name: "Palmerston North",
    latitude: -40.35,
    longitude: 175.62,
  },
  {
    id: "NSN",
    name: "Nelson",
    latitude: -41.27,
    longitude: 173.28,
  },
  {
    id: "MRO",
    name: "Masterton",
    latitude: -40.96,
    longitude: 175.66,
  },
  {
    id: "BHE",
    name: "Blenheim",
    latitude: -41.51,
    longitude: 173.95,
  },
  {
    id: "WHK",
    name: "Whakatane",
    latitude: -37.98,
    longitude: 177.0,
  },
  {
    id: "GMN",
    name: "Greymouth",
    latitude: -42.45,
    longitude: 171.21,
  },
  {
    id: "ZQN",
    name: "Queenstown",
    latitude: -45.02,
    longitude: 168.69,
  },
  {
    id: "AKL",
    name: "Auckland",
    latitude: -36.87,
    longitude: 174.77,
  },
  {
    id: "ROT",
    name: "Rotorua",
    latitude: -38.14,
    longitude: 176.25,
  },
  {
    id: "TUO",
    name: "Taupo",
    latitude: -38.68,
    longitude: 176.08,
  },
  {
    id: "LVN",
    name: "Levin",
    latitude: -40.63,
    longitude: 175.28,
  },
  {
    id: "TMZ",
    name: "Tauranga",
    latitude: -37.69,
    longitude: 176.17,
  },
  {
    id: "TIU",
    name: "Timaru",
    latitude: -44.4,
    longitude: 171.26,
  },
  {
    id: "HLZ",
    name: "Hamilton",
    latitude: -37.78,
    longitude: 175.28,
  },
  {
    id: "KBZ",
    name: "Kaikoura",
    latitude: -42.4,
    longitude: 173.68,
  },
  {
    id: "ZWG",
    name: "Whanganui",
    latitude: -39.93,
    longitude: 175.05,
  },
  {
    id: "ZTR",
    name: "Turangi",
    latitude: -39.0,
    longitude: 175.93,
  },
  {
    id: "ZOT",
    name: "Otira",
    latitude: -42.78,
    longitude: 171.54,
  },
  {
    id: "ZHT",
    name: "Haast",
    latitude: -43.88,
    longitude: 169.06,
  },
  {
    id: "ZHS",
    name: "Hanmer Springs",
    latitude: -42.54,
    longitude: 172.78,
  },
  {
    id: "TKZ",
    name: "Tokoroa",
    latitude: -38.23,
    longitude: 175.87,
  },
  {
    id: "KKE",
    name: "Kerikeri",
    latitude: -35.22,
    longitude: 173.97,
  },
  {
    id: "TEU",
    name: "Te Anau",
    latitude: -45.41,
    longitude: 167.72,
  },
  {
    id: "MON",
    name: "Mount Cook",
    latitude: -43.73,
    longitude: 170.1,
  },
  {
    id: "TMZ",
    name: "Thames",
    latitude: -37.13,
    longitude: 175.53,
  },
  {
    id: "HAW",
    name: "Hawera",
    latitude: -39.59,
    longitude: 174.28,
  },
  // {
  //   id: "srg_164",
  //   name: "Franz Josef",
  //   latitude: -43.376,
  //   longitude: 170.188,
  // },
  {
    id: "WHO",
    name: "Franz Josef",
    latitude: -43.35,
    longitude: 170.17,
  },
  {
    id: "WSZ",
    name: "Westport",
    latitude: -41.75,
    longitude: 171.58,
  },
];

export const hazardPageOptions = {
  locations: hazardPageLocations.map((location) => location.name),
  vs30s: MAP_VS30S,
  imts: HAZARD_IMTS,
  timePeriods: TIME_PERIODS,
};
