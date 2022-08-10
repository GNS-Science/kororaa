import { hazardPageLocations } from '../../views/hazardCharts/constants/hazardPageOptions';
import { LocationData } from '../../views/hazardCharts/hazardPageReducer';

export const formatLatLon = (latlon: string): string => {
  let formatedLatLon = '';

  const latLonWithoutSpace = latlon.split(' ').join('');

  if (latlon.includes(',')) {
    formatedLatLon = latLonWithoutSpace.replace(',', '~');
  }

  return formatedLatLon;
};

export const getLocationDataFromID = (locationId: string): LocationData => {
  const currentLocation = hazardPageLocations.find((location) => locationId === location.id);
  const currentLocationData = { name: currentLocation?.name, lat: currentLocation?.latitude, lon: currentLocation?.longitude };
  return currentLocationData as LocationData;
};

export const getLatLonFromLocationName = (locationName: string): string => {
  const currentLocation = hazardPageLocations.find((location) => locationName === location.name);
  return `${currentLocation?.latitude}~${currentLocation?.longitude}`;
};

export const getLatLonArray = (locations: LocationData[]) => {
  const latLonArray = locations.map((location) => `${location.lat}~${location.lon}`);
  return latLonArray;
};
