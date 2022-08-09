import { hazardPageLocations } from '../../views/hazardCharts/constants/hazardPageOptions';

export const formatLatLon = (latlon: string): string => {
  let formatedLatLon = '';

  const latLonWithoutSpace = latlon.split(' ').join('');

  if (latlon.includes(',')) {
    formatedLatLon = latLonWithoutSpace.replace(',', '~');
  }

  return formatedLatLon;
};

export const getLatLonFromLocation = (locationName: string): string => {
  const currentLocation = hazardPageLocations.find((location) => locationName === location.name);
  return `${currentLocation?.latitude}~${currentLocation?.longitude}`;
};
