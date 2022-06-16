import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { RelayEnvironmentProvider } from 'react-relay';
import userEvent from '@testing-library/user-event';

import HazardChartsPage from './HazardChartsPage';
import RelayEnvironment from '../../RelayEnvironment';

const TestRender = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <HazardChartsPage />
    </RelayEnvironmentProvider>
  );
};

describe('For HazardChartsPage component', () => {
  it('User can see heading and a list of controls, a query is automatically loaded, with hazard curve showing, and spectra curve not showing', async () => {
    render(<TestRender />);

    const heading = screen.getByRole('heading');
    const buttons = screen.getAllByRole('button');
    const charts = await screen.findByRole('plotsView');
    const spectraCurveHeading = screen.queryByText(/Spectral Acceleration/);
    const PGAtext = await screen.findAllByText('PGA');

    expect(heading).toBeInTheDocument();
    expect(buttons).toHaveLength(6);
    expect(charts).toBeInTheDocument();
    expect(spectraCurveHeading).not.toBeInTheDocument();
    expect(PGAtext).toHaveLength(2);
  });
});
