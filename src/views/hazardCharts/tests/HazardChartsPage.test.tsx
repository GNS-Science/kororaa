import React from 'react';
import { render, screen } from '@testing-library/react';
import { RelayEnvironmentProvider } from 'react-relay';

import HazardChartsPage from '../HazardChartsPage';
import RelayEnvironment from '../../../RelayEnvironment';

const TestRender = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <React.Suspense>
        <HazardChartsPage />
      </React.Suspense>
    </RelayEnvironmentProvider>
  );
};

describe('For HazardChartsPage component', () => {
  it.skip('User can see heading and a list of controls, a query is automatically loaded, with hazard curve showing, and spectra curve not showing', async () => {
    render(<TestRender />);

    //Responsive charts from toshi-nest has not been able to render in jsdom testing environments
    //This is to do with getBoundingClientRect and ResizeObserver not being available in this environment
    //This gap is filled by cypress testing, becauset here is a browser window the responsive charts renders as expected
    //So for now this test will test for the correct legen label only.
    const heading = screen.getByRole('heading');
    const buttons = screen.getAllByRole('button');
    // const charts = await screen.findByTestId('hazardChartsContainer');
    const spectraCurveHeading = screen.queryByText(/Spectral Acceleration/);

    expect(heading).toBeInTheDocument();
    expect(buttons).toHaveLength(7);
    // expect(charts).toBeInTheDocument();
    expect(spectraCurveHeading).not.toBeInTheDocument();
  });
});
