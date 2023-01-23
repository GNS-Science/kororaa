import axios, { AxiosResponse } from 'axios';
import { SolvisLocation } from './FaultModelControls';

const solvisEndpoint = process.env.REACT_APP_SOLVIS_ENDPOINT as string;
const radiiID = process.env.REACT_APP_RADII_ID;

axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_SOLVIS_API_KEY as string;

export const solvisApiService = {
  getLocationList: async (): Promise<AxiosResponse> => {
    const res = await axios.get(`${solvisEndpoint}/locations/`);
    return res;
  },
  getRadiiList: async (): Promise<AxiosResponse> => {
    const res = await axios.get(`${solvisEndpoint}/radii/${radiiID}`);
    return res;
  },
  getSolutionAnalysis: async (id: string, locationSelections: string, radii: string, magRange: number[], rateRange: number[]): Promise<AxiosResponse> => {
    const res = await axios.get(
      `${solvisEndpoint}/solution_analysis/${id}/loc/${locationSelections}/rad/${radii}?max_mag=${magRange[1]}&min_mag=${magRange[0]}&max_rate=1e${rateRange[1]}&min_rate=1e${rateRange[0]}`,
    );
    return res;
  },
};

export const getLocationIdArray = (locations: string[], locationData: SolvisLocation[]): string[] => {
  const locationArray = locations.map((location) => {
    const locationDataItem = locationData.find((item) => item.name === location);
    return locationDataItem ? locationDataItem.id : '';
  });
  return locationArray;
};
