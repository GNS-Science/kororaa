import { hazardPageLocations } from '../../views/hazardCharts/constants/hazardPageOptions';

export const getLatlonObject = (latlon: string | null) => {
  if (latlon) {
    const latlonArray = latlon.split('~');
    return `${Number(latlonArray[0])}~${Number(latlonArray[1])}`;
  }
};

export const getLatLonFromLocationID = (locationId: string): string => {
  const currentLocation = hazardPageLocations.find((location) => locationId === location.id);
  return `${currentLocation?.latitude}~${currentLocation?.longitude}`;
};

export const getLatLonFromLocationName = (locationName: string): string => {
  const currentLocation = hazardPageLocations.find((location) => locationName === location.name);
  return `${currentLocation?.latitude}~${currentLocation?.longitude}`;
};

export const getLatLonArray = (locations: string[]) => {
  const latLonArray = locations.map((location) => getLatLonFromLocationID(location));
  return latLonArray;
};
