import { hazardPageLocations } from '../../views/hazardCharts/constants/hazardPageOptions';
import { LocationData } from '../../views/hazardCharts/hazardPageReducer';

export const getLatlonObject = (latlon: string | null): string => {
  if (latlon) {
    const latlonArray = latlon.split(', ');
    return `${Number(latlonArray[0])}, ${Number(latlonArray[1])}`;
  } else {
    return '';
  }
};

export const getNamesFromLocationData = (locationData: LocationData[]): string[] => {
  const names: string[] = [];
  locationData.forEach((location) => {
    location.name && names.push(location.name);
  });
  return names;
};

export const getLocationDataFromName = (locationName: string): LocationData => {
  const currentLocation = hazardPageLocations.find((location) => locationName === location.name);
  const currentLocationData = { name: currentLocation?.name, lat: currentLocation?.latitude, lon: currentLocation?.longitude };
  return currentLocationData as LocationData;
};

export const getLatLonFromLocationName = (locationName: string): string => {
  const currentLocation = hazardPageLocations.find((location) => locationName === location.name);
  return `${currentLocation?.latitude}, ${currentLocation?.longitude}`;
};

export const getLatLonString = (locations: LocationData[]): string => {
  let latLonString = '';
  const filteredLocations = locations.filter((location) => location.name === null);
  if (filteredLocations.length === 0) return '';
  filteredLocations.forEach((location) => {
    latLonString += `${location.lat}, ${location.lon}; `;
  });
  return latLonString.slice(0, -2);
};

export const getLatLonArray = (locations: LocationData[]): string[] => {
  const latLonArray = locations.map((location) => `${location.lat}~${location.lon}`);
  return latLonArray;
};

export const getLocationDataFromLatLonString = (latLonString: string): LocationData[] => {
  if (latLonString === '') {
    return [];
  }
  const latLonArray = latLonString.split(';');
  if (latLonArray[latLonArray.length - 1].trim().length === 0) latLonArray.pop();
  const locationDataArray = latLonArray.map((latLon) => {
    const latLonArray = latLon.split(',');
    const latLongData = { lat: Number(latLonArray[0]), lon: Number(latLonArray[1]), name: null };
    return latLongData as LocationData;
  });
  return locationDataArray as LocationData[];
};

export const validateLatLon = (latLon: string): boolean => {
  if (latLon == '') return true;
  const latLonArray = latLon.split(';');
  if (latLonArray[latLonArray.length - 1].trim().length === 0) latLonArray.pop();
  const isValid = latLonArray.every((latLon) => {
    const latLonArray = latLon.split(',');
    const lat = Number(latLonArray[0]);
    const lon = Number(latLonArray[1]);
    return lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
  });
  if (!isValid) {
    throw 'Invalid lat, lon input';
  }
  return isValid;
};

export const combineLocationData = (locations: string[], latLon: string): LocationData[] => {
  const namedLocations: LocationData[] = locations.map((location) => {
    return getLocationDataFromName(location);
  });
  const latLonLocations: LocationData[] = getLocationDataFromLatLonString(latLon);
  return namedLocations.concat(latLonLocations);
};

export const roundLatLon = (latLon: string | null): string => {
  if (latLon === null) return '';
  const latLonArray = latLon.split('~');
  const lat = Number(latLonArray[0]).toFixed(1);
  const lon = Number(latLonArray[1]).toFixed(1);
  return `${lat}, ${lon}`;
};
