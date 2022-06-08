import React from 'react';
import { render, screen } from '@testing-library/react';

import HazardChartsPage from './HazardChartsPage';

const TestRender = () => {
  return <HazardChartsPage />;
};

jest.mock('./HazardChartsPlotsView', () => {
  return function MockHazardChartsPlotsView() {
    return <div>mockHazardChartsPlotsView</div>;
  };
});

describe('For HazardChartsPage component', () => {
  it('controls and heading renders', () => {
    render(<TestRender />);
    const heading = screen.getByText('Hazard Curves and Spectra');
    const buttons = screen.getAllByRole('button');

    expect(heading).toBeInTheDocument();
    expect(buttons).toHaveLength(6);
  });

  it('MockHazardChartsPlotsView is rendered', () => {
    render(<TestRender />);
    expect(screen.getByText('mockHazardChartsPlotsView')).toBeInTheDocument();
  });
});
