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

    expect(heading).toBeInTheDocument();
  });

  test.todo('relay makes api request as expected');
  test.todo('controls triggers refetch as expected');
  test.todo('print figures button with react-to-print');
});
