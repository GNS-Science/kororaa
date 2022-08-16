import * as latLonService from './latLon.service';

describe('getlatlonObject function', () => {
  it('123~123', () => {
    const result = latLonService.getLatlonObject('111.000~222.000');
    expect(result).toStrictEqual('111~222');
  });

  it(' 12.12345~ 3.00', () => {
    const result = latLonService.getLatlonObject(' 12.12345~ 3.00');
    expect(result).toStrictEqual('12.12345~3');
  });

  it('undefined', () => {
    const result = latLonService.getLatlonObject(null);
    expect(result).toStrictEqual('');
  });
});

describe('getLatLonFromLocationName', () => {
  it('Wellington', () => {
    const result = latLonService.getLatLonFromLocationName('Wellington');
    expect(result).toBe('-41.3~174.78');
  });
  it('Gisborne', () => {
    const result = latLonService.getLatLonFromLocationName('Gisborne');
    expect(result).toBe('-38.65~178');
  });
});

describe('getLocationDataFromName', () => {
  it('Wellington', () => {
    const result = latLonService.getLocationDataFromName('Wellington');
    expect(result).toStrictEqual({
      lat: -41.3,
      lon: 174.78,
      name: 'Wellington',
    });
  });
  it('Gisborne', () => {
    const result = latLonService.getLocationDataFromName('Gisborne');
    expect(result).toStrictEqual({
      lat: -38.65,
      lon: 178,
      name: 'Gisborne',
    });
  });
});

describe('getLocationDataFromLatLonString', () => {
  it('Wellingtion', () => {
    const result = latLonService.getLocationDataFromLatLonString('-41.3~174.78');
    expect(result).toStrictEqual([
      {
        lat: -41.3,
        lon: 174.78,
        name: 'Wellington',
      },
    ]);
  });
  it('Wellington and Gisborne', () => {
    const result = latLonService.getLocationDataFromLatLonString('-41.3~174.78, -38.65~178');
    expect(result).toStrictEqual([
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
  });
  it('Wellington and arbitrary latlon', () => {
    const result = latLonService.getLocationDataFromLatLonString('-41.3~174.78, -42~173');
    expect(result).toStrictEqual([
      {
        lat: -41.3,
        lon: 174.78,
        name: 'Wellington',
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
  it('Wellington', () => {
    const result = latLonService.getNamesFromLocationData([
      {
        lat: -41.3,
        lon: 174.78,
        name: 'Wellington',
      },
    ]);
    expect(result).toStrictEqual(['Wellington']);
  });
  it('Wellington and Gisborne', () => {
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
  it('Wellington', () => {
    const result = latLonService.getLatLonString([
      {
        lat: -41.3,
        lon: 174.78,
        name: 'Wellington',
      },
    ]);
    expect(result).toStrictEqual('-41.3~174.78');
  });
  it('Wellington and Gisborne', () => {
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
    expect(result).toStrictEqual('-41.3~174.78, -38.65~178');
  });
});

describe('getLatLonArray', () => {
  it('Wellington', () => {
    const result = latLonService.getLatLonArray([
      {
        lat: -41.3,
        lon: 174.78,
        name: 'Wellington',
      },
    ]);
    expect(result).toStrictEqual(['-41.3~174.78']);
  });
  it('Wellington and Gisborne', () => {
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
  it('valid', () => {
    const result = latLonService.validateLatLon('-41.3~174.78');
    expect(result).toBe(true);
  });
  it('invalid', () => {
    try {
      latLonService.validateLatLon('-41.3~174.78, 1000~1000');
    } catch (e) {
      expect(e).toBe('Invalid lat~lon input');
    }
  });
});
