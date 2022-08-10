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
    longitude: 174.8,
    population: 200000,
  },
  {
    id: 'GIS',
    name: 'Gisborne',
    latitude: -38.7,
    longitude: 178.0,
    population: 50000,
  },
  {
    id: 'CHC',
    name: 'Christchurch',
    latitude: -43.5,
    longitude: 172.6,
    population: 300000,
  },
  {
    id: 'IVC',
    name: 'Invercargill',
    latitude: -46.4,
    longitude: 168.3,
    population: 80000,
  },
  {
    id: 'DUD',
    name: 'Dunedin',
    latitude: -45.9,
    longitude: 170.5,
    population: 100000,
  },
  {
    id: 'NPE',
    name: 'Napier',
    latitude: -39.5,
    longitude: 176.9,
    population: 80000,
  },
  {
    id: 'NPL',
    name: 'New Plymouth',
    latitude: -39.1,
    longitude: 174.1,
    population: 80000,
  },
  {
    id: 'PMR',
    name: 'Palmerston North',
    latitude: -40.4,
    longitude: 175.6,
    population: 70000,
  },
  {
    id: 'NSN',
    name: 'Nelson',
    latitude: -41.3,
    longitude: 173.3,
    population: 80000,
  },
  {
    id: 'BHE',
    name: 'Blenheim',
    latitude: -41.5,
    longitude: 174.0,
    population: 50000,
  },
  {
    id: 'WHK',
    name: 'Whakatane',
    latitude: -38.0,
    longitude: 177.0,
    population: 50000,
  },
  {
    id: 'GMN',
    name: 'Greymouth',
    latitude: -42.4,
    longitude: 171.2,
    population: 30000,
  },
  {
    id: 'ZQN',
    name: 'Queenstown',
    latitude: -45.0,
    longitude: 168.7,
    population: 15000,
  },
  {
    id: 'AKL',
    name: 'Auckland',
    latitude: -36.8,
    longitude: 174.8,
    population: 2000000,
  },
  {
    id: 'ROT',
    name: 'Rotorua',
    latitude: -38.1,
    longitude: 176.2,
    population: 77000,
  },
  {
    id: 'TUO',
    name: 'Taupo',
    latitude: -38.7,
    longitude: 176.1,
    population: 26000,
  },
  {
    id: 'WRE',
    name: 'Whangarei',
    latitude: -35.7,
    longitude: 174.3,
    population: 55000,
  },
  {
    id: 'LVN',
    name: 'Levin',
    latitude: -40.6,
    longitude: 175.3,
    population: 19000,
  },
  {
    id: 'TMZ',
    name: 'Tauranga',
    latitude: -37.7,
    longitude: 176.2,
    population: 130000,
  },
  {
    id: 'TIU',
    name: 'Timaru',
    latitude: -44.4,
    longitude: 171.2,
    population: 28000,
  },
  {
    id: 'OAM',
    name: 'Oamaru',
    latitude: -45.1,
    longitude: 171.0,
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
    latitude: -37.8,
    longitude: 175.3,
    population: 165000,
  },
  {
    id: 'LYJ',
    name: 'Lower Hutt',
    latitude: -41.2,
    longitude: 174.9,
    population: 112000,
  },
  {
    id: 'KBZ',
    name: 'Kaikoura',
    latitude: -42.4,
    longitude: 173.7,
    population: 2400,
  },
];

export const hazardPageOptions = {
  locations: hazardPageLocations.map((location) => location.name),
  vs30s: [250, 300, 350, 400, 450, 750],
  imts: ['PGA', 'SA(0.1)', 'SA(0.2)', 'SA(0.3)', 'SA(0.4)', 'SA(0.5)', 'SA(0.7)', 'SA(1.0)', 'SA(1.5)', 'SA(2.0)', 'SA(3.0)', 'SA(4.0)', 'SA(5.0)'],
};
