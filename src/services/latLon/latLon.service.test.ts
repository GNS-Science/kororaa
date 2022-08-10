import * as latLonService from './latLon.service';

describe('getlatlonObject function', () => {
  it('123~123', () => {
    const result = latLonService.getLatlonObject('111.000~222.000');
    expect(result).toStrictEqual('111~222');
  });
});
