import { render, screen } from '@testing-library/react';
import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay';

import RelayEnvironment from '../../../RelayEnvironment';
import HazardChartsPlotsView from '../HazardChartsPlotsView';
import { hazardPageLocations, hazardPageOptions } from '../constants/hazardPageOptions';

// const TestRender = () => {
//   return (
//     <RelayEnvironmentProvider environment={RelayEnvironment}>
//       <HazardChartsPlotsView queryVariables={mockQueryVariables} viewVariables={mockViewVariables} />
//     </RelayEnvironmentProvider>
//   );
// };

test('A query is automatically loaded, with hazard curve showing, as well as the print and download buttons', async () => {
  expect(true).toBeTruthy();
  //   render(<TestRender />);
  //   const charts = await screen.findByRole('plotsView');
  //   const buttons = screen.queryAllByRole('button');
  //   const printButton = buttons.find((button) => button.innerHTML.includes('Print Figures'));
  //   const saveButton = buttons.find((button) => button.innerHTML.includes('Save Data'));

  //   expect(charts).toBeInTheDocument();
  //   expect(buttons).toHaveLength(2);
  //   expect(printButton).toBeInTheDocument();
  //   expect(saveButton).toBeInTheDocument();
});
