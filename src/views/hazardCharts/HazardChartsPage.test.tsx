import React from 'react';
import { render, screen } from '@testing-library/react';

import HazardChartsPage from './HazardChartsPage';
import { RelayEnvironmentProvider } from 'react-relay';
import { createMockEnvironment } from 'relay-test-utils';

const TestRender = () => {
  return (
    <RelayEnvironmentProvider environment={createMockEnvironment()}>
      <HazardChartsPage />
    </RelayEnvironmentProvider>
  );
};

describe('For HazardChartsPage component', () => {
  test.todo('controls and heading renders', async () => {
    render(<TestRender />);
    const heading = screen.getByText('Hazard Curves and Spectra');
    const buttons = screen.getAllByRole('button');
    const charts = await screen.findByRole('plotsView');

    expect(heading).toBeInTheDocument();
    expect(buttons).toHaveLength(6);
    expect(charts).toBeInTheDocument();
  });

  test.todo('User can see heading and a list of controls, a query is automatically loaded, and the Hazard Charts with ');
  test.todo('The hazard curve is rendered on load');
  test.todo('If user selects a Probability of Exceedance value, a spectral acceleration curve is rendered');
  test.todo('When the submit button is hit, the a query is made with the current selections, and a new curve is rendered if there is valid data come back');
});
