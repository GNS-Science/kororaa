import * as hazardPageService from '../hazardPage.service';
import { HazardChartsPlotsViewQuery$data } from '../__generated__/HazardChartsPlotsViewQuery.graphql';

describe('For the getAllCurves function', () => {
  it('should return an empty object if the data is empty', () => {
    const data: HazardChartsPlotsViewQuery$data = { hazard_curves: null };
    const curves = hazardPageService.getAllCurves(data);

    expect(curves).toEqual({});
  });

  it('should return an empty object if curves is empty', () => {
    const data: HazardChartsPlotsViewQuery$data = { hazard_curves: { ok: true, curves: null } };
    const curves = hazardPageService.getAllCurves(data);

    expect(curves).toEqual({});
  });

  //   it('should return the curve in xy format if imt, levels, and values are all present', () => {
  //     const data: HazardChartsPlotsViewQuery$data = {
  //       hazard_curves: {
  //         ok: true,
  //         curves: [
  //           {
  //             loc: 'testLoc',
  //             imt: '1',
  //             agg: 'testAgg',
  //             vs30: 250,
  //             curve: {
  //               levels: null,
  //               values: [1, 2, 3],
  //             },
  //           },
  //           {
  //             loc: 'testLoc',
  //             imt: '2',
  //             agg: 'testAgg',
  //             vs30: 250,
  //             curve: {
  //               levels: [1, 2, 3],
  //               values: null,
  //             },
  //           },
  //           {
  //             loc: 'testLoc',
  //             imt: null,
  //             agg: 'testAgg',
  //             vs30: 250,
  //             curve: {
  //               levels: [1, 2, 3],
  //               values: [1, 2, 3],
  //             },
  //           },
  //           {
  //             loc: 'testLoc',
  //             imt: '3',
  //             agg: 'testAgg',
  //             vs30: 250,
  //             curve: {
  //               levels: [1, 2, 3],
  //               values: [1, 2, 3],
  //             },
  //           },
  //         ],
  //       },
  //     };
  //     const curves = hazardPageService.getAllCurves(data);

  //     expect(curves).toEqual({
  //       '3': [
  //         { x: 1, y: 1 },
  //         { x: 2, y: 2 },
  //         { x: 3, y: 3 },
  //       ],
  //     });
  //   });
  // });

  // describe('For the getCurve function', () => {
  //   it('should return an empty object if the data is empty', () => {
  //     const data: Record<string, hazardPageService.XY[]> = {};
  //     const curve = hazardPageService.getCurve(data, '1');

  //     expect(curve).toEqual({});
  //   });

  //   it('should return the curve where imt prop matches the key', () => {
  //     const curves = {
  //       '1': [{ x: 1, y: 1 }],
  //       '2': [{ x: 2, y: 2 }],
  //       '3': [{ x: 3, y: 3 }],
  //     };
  //     const curve = hazardPageService.getCurve(curves, '3');

  //     expect(curve).toEqual({ '3': [{ x: 3, y: 3 }] });
  //   });
});

// describe('For the getColor function', () => {
//   it('should return the color for the given imt', () => {
//     const color = hazardPageService.getColor({ '1': [{ x: 1, y: 1 }] });

//     expect(color).toEqual({ '1': '#000000' });
//   });
// });

test.todo('For the getSpectralAccelerationData function');
test.todo('For the getImtValue function');
test.todo('For the getCSVdata function');
test.todo('For the getCSVheadings funcstion');
