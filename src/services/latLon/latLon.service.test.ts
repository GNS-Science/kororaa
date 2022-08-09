import * as latLonService from './latLon.service';

describe('FormatLatLon function formats latLon correctly', () => {
  it('coordinates formats properly', () => {
    const result = latLonService.formatLatLon('-45.212,170.516457780');
    expect(result).toBe('-45.212~170.516457780');
  });

  it(' 1 , 2 becomes 1~2, spaces are handled correctly', () => {
    const result = latLonService.formatLatLon('1 , 2');
    expect(result).toBe('1~2');
  });

  it(' 1 ,2 becomes 1~2', () => {
    const result = latLonService.formatLatLon('1 ,2');
    expect(result).toBe('1~2');
  });
});
