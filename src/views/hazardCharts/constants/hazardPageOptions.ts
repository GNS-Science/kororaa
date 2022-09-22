import { MAP_VS30S, MAP_IMTS } from '../../../utils/environmentVariables';

interface HazardPageLocations {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  population: number;
}

export const hazardPageLocations: HazardPageLocations[] = [
  {
    id: 'WLG',
    name: 'Wellington',
    latitude: -41.3,
    longitude: 174.78,
    population: 200000,
  },
  {
    id: 'GIS',
    name: 'Gisborne',
    latitude: -38.65,
    longitude: 178.0,
    population: 50000,
  },
  {
    id: 'CHC',
    name: 'Christchurch',
    latitude: -43.53,
    longitude: 172.63,
    population: 300000,
  },
  {
    id: 'IVC',
    name: 'Invercargill',
    latitude: -46.43,
    longitude: 168.36,
    population: 80000,
  },
  {
    id: 'DUD',
    name: 'Dunedin',
    latitude: -45.87,
    longitude: 170.5,
    population: 100000,
  },
  {
    id: 'NPE',
    name: 'Napier',
    latitude: -39.48,
    longitude: 176.92,
    population: 80000,
  },
  {
    id: 'NPL',
    name: 'New Plymouth',
    latitude: -39.07,
    longitude: 174.08,
    population: 80000,
  },
  {
    id: 'PMR',
    name: 'Palmerston North',
    latitude: -40.35,
    longitude: 175.62,
    population: 70000,
  },
  {
    id: 'NSN',
    name: 'Nelson',
    latitude: -41.27,
    longitude: 173.28,
    population: 80000,
  },
  {
    id: 'BHE',
    name: 'Blenheim',
    latitude: -41.51,
    longitude: 173.95,
    population: 50000,
  },
  {
    id: 'WHK',
    name: 'Whakatane',
    latitude: -37.98,
    longitude: 177.0,
    population: 50000,
  },
  {
    id: 'GMN',
    name: 'Greymouth',
    latitude: -42.45,
    longitude: 171.21,
    population: 30000,
  },
  {
    id: 'ZQN',
    name: 'Queenstown',
    latitude: -45.02,
    longitude: 168.69,
    population: 15000,
  },
  {
    id: 'AKL',
    name: 'Auckland',
    latitude: -36.87,
    longitude: 174.77,
    population: 2000000,
  },
  {
    id: 'ROT',
    name: 'Rotorua',
    latitude: -38.14,
    longitude: 176.25,
    population: 77000,
  },
  {
    id: 'TUO',
    name: 'Taupo',
    latitude: -38.68,
    longitude: 176.08,
    population: 26000,
  },
  {
    id: 'WRE',
    name: 'Whangarei',
    latitude: -35.72,
    longitude: 174.32,
    population: 55000,
  },
  {
    id: 'LVN',
    name: 'Levin',
    latitude: -40.63,
    longitude: 175.28,
    population: 19000,
  },
  {
    id: 'TMZ',
    name: 'Tauranga',
    latitude: -37.69,
    longitude: 176.17,
    population: 130000,
  },
  {
    id: 'TIU',
    name: 'Timaru',
    latitude: -44.4,
    longitude: 171.26,
    population: 28000,
  },
  {
    id: 'OAM',
    name: 'Oamaru',
    latitude: -45.1,
    longitude: 171.97,
    population: 14000,
  },
  {
    id: 'PUK',
    name: 'Pukekohe',
    latitude: -37.2,
    longitude: 174.9,
    population: 27000,
  },
  {
    id: 'HLZ',
    name: 'Hamilton',
    latitude: -37.78,
    longitude: 175.25,
    population: 165000,
  },
  {
    id: 'LYJ',
    name: 'Lower Hutt',
    latitude: -41.21,
    longitude: 174.9,
    population: 112000,
  },
  {
    id: 'KBZ',
    name: 'Kaikoura',
    latitude: -42.4,
    longitude: 173.68,
    population: 2400,
  },
];

export const hazardPageOptions = {
  locations: hazardPageLocations.map((location) => location.name),
  vs30s: MAP_VS30S,
  imts: MAP_IMTS,
};
