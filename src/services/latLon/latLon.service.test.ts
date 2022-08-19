import * as latLonService from './latLon.service';

describe('getlatlonObject function', () => {
  it('Removes trailing zeros from latlon string', () => {
    const result = latLonService.getLatlonObject('111.000, 222.000');
    expect(result).toStrictEqual('111, 222');
  });

  it('Removes leading whitespace and trailing zeros from latlon string', () => {
    const result = latLonService.getLatlonObject(' 12.12345, 3.00');
    expect(result).toStrictEqual('12.12345, 3');
  });

  it('Returns empty string if input is null', () => {
    const result = latLonService.getLatlonObject(null);
    expect(result).toStrictEqual('');
  });
});

describe('getLatLonFromLocationName', () => {
  it('Returns correct latlon from name Wellington', () => {
    const result = latLonService.getLatLonFromLocationName('Wellington');
    expect(result).toBe('-41.3, 174.78');
  });
  it('Returns correct latlon from name Gisborne', () => {
    const result = latLonService.getLatLonFromLocationName('Gisborne');
    expect(result).toBe('-38.65, 178');
  });
});

describe('getLocationDataFromName', () => {
  it('Returns correct LocationData from name Wellington', () => {
    const result = latLonService.getLocationDataFromName('Wellington');
    expect(result).toStrictEqual({
      lat: -41.3,
      lon: 174.78,
      name: 'Wellington',
    });
  });
  it('Returns correct LocationData from name Gisborne', () => {
    const result = latLonService.getLocationDataFromName('Gisborne');
    expect(result).toStrictEqual({
      lat: -38.65,
      lon: 178,
      name: 'Gisborne',
    });
  });
});

describe('getLocationDataFromLatLonString', () => {
  it('Returns correct LocationData from latlon string for Wellington', () => {
    const result = latLonService.getLocationDataFromLatLonString('-41.3, 174.78');
    expect(result).toStrictEqual([
      {
        lat: -41.3,
        lon: 174.78,
        name: null,
      },
    ]);
  });
  it('Returns correct LocationData from latlon string for Wellington and Gisborne', () => {
    const result = latLonService.getLocationDataFromLatLonString('-41.3, 174.78; -38.65, 178');
    expect(result).toStrictEqual([
      {
        lat: -41.3,
        lon: 174.78,
        name: null,
      },
      {
        lat: -38.65,
        lon: 178,
        name: null,
      },
    ]);
  });
  it('Returns correct LocationData from latlon string for Wellington and arbitrary latlon', () => {
    const result = latLonService.getLocationDataFromLatLonString('-41.3, 174.78; -42, 173');
    expect(result).toStrictEqual([
      {
        lat: -41.3,
        lon: 174.78,
        name: null,
      },
      {
        lat: -42,
        lon: 173,
        name: null,
      },
    ]);
  });
});

describe('getNamesFromLocationData', () => {
  it('Returns correct name from LocationData for Wellington', () => {
    const result = latLonService.getNamesFromLocationData([
      {
        lat: -41.3,
        lon: 174.78,
        name: 'Wellington',
      },
    ]);
    expect(result).toStrictEqual(['Wellington']);
  });
  it('Returns correct name from LocationData for Wellington and Gisborne', () => {
    const result = latLonService.getNamesFromLocationData([
      {
        lat: -41.3,
        lon: 174.78,
        name: 'Wellington',
      },
      {
        lat: -38.65,
        lon: 178,
        name: 'Gisborne',
      },
    ]);
    expect(result).toStrictEqual(['Wellington', 'Gisborne']);
  });
});

describe('getLatLonString', () => {
  it('Returns correct latlon string from LocationData for Wellington', () => {
    const result = latLonService.getLatLonString([
      {
        lat: -41.3,
        lon: 174.78,
        name: 'Wellington',
      },
    ]);
    expect(result).toStrictEqual('');
  });
  it('Returns correct latlon string from LocationData for Wellington and Gisborne', () => {
    const result = latLonService.getLatLonString([
      {
        lat: -41.3,
        lon: 174.78,
        name: 'Wellington',
      },
      {
        lat: -38.65,
        lon: 178,
        name: 'Gisborne',
      },
    ]);
    expect(result).toStrictEqual('');
  });
  it('Returns correct latlon string from arbitrary latlon locationData', () => {
    const result = latLonService.getLatLonString([
      {
        lat: -42,
        lon: 173,
        name: null,
      },
    ]);
    expect(result).toStrictEqual('-42, 173');
  });
});

describe('getLatLonArray', () => {
  it('Returns correct latlon string array from LocationData for Wellington', () => {
    const result = latLonService.getLatLonArray([
      {
        lat: -41.3,
        lon: 174.78,
        name: 'Wellington',
      },
    ]);
    expect(result).toStrictEqual(['-41.3~174.78']);
  });
  it('Returns correct latlon string array from LocationData for Wellington and Gisborne', () => {
    const result = latLonService.getLatLonArray([
      {
        lat: -41.3,
        lon: 174.78,
        name: 'Wellington',
      },
      {
        lat: -38.65,
        lon: 178,
        name: 'Gisborne',
      },
    ]);
    expect(result).toStrictEqual(['-41.3~174.78', '-38.65~178']);
  });
});

describe('validateLatLon', () => {
  it('Returns true for valid latlon input string', () => {
    const result = latLonService.validateLatLon('-41.3, 174.78');
    expect(result).toBe(true);
  });
  it('Throws invalid error for invalid latlon input string', () => {
    try {
      latLonService.validateLatLon('-41.3, 174.78; 1000, 1000');
    } catch (e) {
      expect(e).toBe('Invalid lat, lon input');
    }
  });
});
