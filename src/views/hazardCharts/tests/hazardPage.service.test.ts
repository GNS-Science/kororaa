import * as hazardPageService from '../hazardPage.service';
import { HazardChartsPlotsViewQuery$data } from '../__generated__/HazardChartsPlotsViewQuery.graphql';

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
//       '250m/s testLoc 3': [
//         { x: 1, y: 1 },
//         { x: 2, y: 2 },
//         { x: 3, y: 3 },
//       ],
//     });
//   });
// });

test.todo('For the getSpectralAccelerationData function');
test.todo('For the getImtValue function');
test.todo('For the getHazardCSVdata function');
test.todo('For the getCSVheadings funcstion');
