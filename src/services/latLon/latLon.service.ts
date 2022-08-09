import { hazardPageLocations } from '../../views/hazardCharts/constants/hazardPageOptions';

export const formatLatLon = (latlon: string): string => {
  let formatedLatLon = '';

  const latLonWithoutSpace = latlon.split(' ').join('');

  if (latlon.includes(',')) {
    formatedLatLon = latLonWithoutSpace.replace(',', '~');
  }

  return formatedLatLon;
};

export const getLatLonFromLocationID = (locationId: string): string => {
  const currentLocation = hazardPageLocations.find((location) => locationId === location.id);
  return `${currentLocation?.latitude}~${currentLocation?.longitude}`;
};

export const getLatLonFromLocationName = (locationName: string): string => {
  const currentLocation = hazardPageLocations.find((location) => locationName === location.name);
  return `${currentLocation?.latitude}~${currentLocation?.longitude}`;
};
