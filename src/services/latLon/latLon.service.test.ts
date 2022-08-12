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

describe('getLatLonFromLocationID', () => {
  it('WLG', () => {
    const result = latLonService.getLatLonFromLocationID('WLG');
    expect(result).toBe('-41.3~174.78');
  });
  it('GIS', () => {
    const result = latLonService.getLatLonFromLocationID('GIS');
    expect(result).toBe('-38.65~178');
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

describe('getLatLonArray from IDs', () => {
  it('Location array returns correct array of latlon', () => {
    const locationIdArray = ['WLG', 'GIS', 'CHC', 'IVC'];
    const expected = ['-41.3~174.78', '-38.65~178', '-43.53~172.63', '-46.43~168.36'];
    const result = latLonService.getLatLonArray(locationIdArray);
    expect(result).toStrictEqual(expected);
  });
});
