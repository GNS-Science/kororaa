import { hazardPageLocations } from '../../views/hazardCharts/constants/hazardPageOptions';
import { LocationData } from '../../views/hazardCharts/hazardPageReducer';

export const getLatlonObject = (latlon: string | null): string => {
  if (latlon) {
    const latlonArray = latlon.split('~');
    return `${Number(latlonArray[0])}~${Number(latlonArray[1])}`;
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
  return `${currentLocation?.latitude}~${currentLocation?.longitude}`;
};

export const getLatLonString = (locations: LocationData[]): string => {
  let latLonString = '';
  locations.forEach((location) => {
    latLonString += `${location.lat}~${location.lon}, `;
  });
  return latLonString.slice(0, -2);
};

export const getLatLonArray = (locations: LocationData[]) => {
  const latLonArray = locations.map((location) => `${location.lat}~${location.lon}`);
  return latLonArray;
};

export const getLocationDataFromLatLonString = (latLonString: string): LocationData[] => {
  const latLonArray = latLonString.split(',');
  const locationDataArray = latLonArray.map((latLon) => {
    const latLonArray = latLon.split('~');
    const latLongData = { lat: Number(latLonArray[0]), lon: Number(latLonArray[1]) };
    const currentLocation = hazardPageLocations.find((location) => location.latitude === latLongData.lat && location.longitude === latLongData.lon);
    if (currentLocation) {
      return { ...latLongData, name: currentLocation.name };
    } else {
      return { ...latLongData, name: null };
    }
  });
  return locationDataArray as LocationData[];
};

export const validateLatLon = (latLon: string): boolean => {
  const latLonArray = latLon.split(',');
  const isValid = latLonArray.every((latLon) => {
    const latLonArray = latLon.split('~');
    const lat = Number(latLonArray[0]);
    const lon = Number(latLonArray[1]);
    return lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
  });
  if (!isValid) {
    throw 'Invalid lat~lon input';
  }
  return isValid;
};
