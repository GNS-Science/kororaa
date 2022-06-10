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
  //   it('User can see heading and a list of controls, a query is automatically loaded, with hazard curve showing, and spectra curve not showing', async () => {
  //     render(<TestRender />);
  //     const heading = screen.getByRole('heading');
  //     const buttons = screen.getAllByRole('button');
  //     const charts = await screen.findByRole('plotsView');
  //     const spectraCurveHeading = screen.queryByText(/Spectral Acceleration/);
  //     expect(heading).toBeInTheDocument();
  //     expect(buttons).toHaveLength(6);
  //     expect(charts).toBeInTheDocument();
  //     expect(spectraCurveHeading).not.toBeInTheDocument();
  //     expect(await screen.findByText('Hazard Curve')).toBeInTheDocument();
  //   });
  //   it('if the user selects POE = 2%, a poe line is drawn on the hazard curve, an a spectra curve displays', async () => {
  //     render(<TestRender />);
  //     const poeSelect = screen.getByDisplayValue('None');
  //     const submitButton = screen.getByText('Submit');
  //     fireEvent.change(poeSelect, { target: { value: '2%' } });
  //     userEvent.click(submitButton);
  //     expect(await screen.findByText(/PoE 2%/)).toBeInTheDocument();
  //     expect(await screen.findByText('Hazard Curve')).toBeInTheDocument();
  //     expect(await screen.findByText('Spectral Acceleration')).toBeInTheDocument();
  //   });
  //   it('if the user selects spectral period = SA(0.1), a curve is drawn with legend item SA(0.1)', async () => {
  //     render(<TestRender />);
  //     const spectralPeriodSelect = screen.getByDisplayValue('PGA');
  //     const submitButton = screen.getByText('Submit');
  //     fireEvent.change(spectralPeriodSelect, { target: { value: 'SA(0.1)' } });
  //     userEvent.click(submitButton);
  //     expect(await screen.findByText('SA(0.1)')).toBeInTheDocument();
  //   });
});
