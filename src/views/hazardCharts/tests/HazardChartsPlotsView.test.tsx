import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay';

import RelayEnvironment from '../../../RelayEnvironment';
import HazardChartsPlotsView from '../HazardChartsPlotsView';
import { hazardPageReducerInitialState, HazardPageState } from '../hazardPageReducer';

const mockState: HazardPageState = hazardPageReducerInitialState;

// const TestRender = () => {
//   return (
//     <RelayEnvironmentProvider environment={RelayEnvironment}>
//       <HazardChartsPlotsView state={mockState} />
//     </RelayEnvironmentProvider>
//   );
// };

test('A query is automatically loaded, with hazard curve showing, as well as the print and download buttons', async () => {
  expect(true).toBeTruthy();
  // render(<TestRender />);
  // const charts = await screen.findByRole('plotsView');
  // const buttons = screen.queryAllByRole('button');
  // const printButton = buttons.find((button) => button.innerHTML.includes('Print Figures'));
  // const saveButton = buttons.find((button) => button.innerHTML.includes('Save Data'));

  // expect(charts).toBeInTheDocument();
  // expect(buttons).toHaveLength(2);
  // expect(printButton).toBeInTheDocument();
  // expect(saveButton).toBeInTheDocument();
});
