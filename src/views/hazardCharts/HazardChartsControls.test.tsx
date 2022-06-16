import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { HazardCurvesSelections } from './hazardCharts.types';

import HazardChartsControls from './HazardChartsControls';
import { hazardPageOptions } from './hazardPageOptions';

const mockSetSelections = jest.fn();

const mockSelections: HazardCurvesSelections = {
  location: 'Wellington',
  vs30: hazardPageOptions.vs30s[0],
  imt: hazardPageOptions.imts[0],
  POE: 'None',
};

const Wrapper = () => {
  return <HazardChartsControls selections={mockSelections} setSelections={mockSetSelections} />;
};

test('Controls renders correctly', () => {
  render(<Wrapper />);

  expect(screen.getByLabelText('Lat,Lon')).toBeInTheDocument();
  expect(screen.getByDisplayValue(mockSelections.location)).toBeInTheDocument();
  expect(screen.getByDisplayValue(mockSelections.vs30)).toBeInTheDocument();
  expect(screen.getByDisplayValue(mockSelections.imt)).toBeInTheDocument();
  expect(screen.getByDisplayValue(mockSelections.POE)).toBeInTheDocument();
});

test('When user selects an option in the location autocomplete, the new value is displayed', async () => {
  render(<Wrapper />);

  const locationSelect = screen.getByRole('combobox');
  const nextLocationOption = hazardPageOptions.locations[1];

  fireEvent.mouseDown(locationSelect);
  fireEvent.click(await screen.findByText(nextLocationOption));

  expect(await screen.findByDisplayValue(nextLocationOption)).toBeInTheDocument();
});

test('When the vs30 value changes, the new value is displayed', async () => {
  render(<Wrapper />);

  const buttons = screen.getAllByRole('button');
  const vs30Select = buttons.find((button) => button.innerHTML.includes(mockSelections.vs30.toString()));
  const nextVs30option = hazardPageOptions.vs30s[1].toString();

  vs30Select && fireEvent.mouseDown(vs30Select);
  fireEvent.click(await screen.findByText(nextVs30option));

  expect(vs30Select).toContainHTML(nextVs30option);
});

test('When the spectral period value changes, the new value is displayed', async () => {
  render(<Wrapper />);

  const buttons = screen.getAllByRole('button');
  const imtSelect = buttons.find((button) => button.innerHTML.includes(mockSelections.imt.toString()));
  const nextImtOption = hazardPageOptions.imts[1].toString();

  imtSelect && fireEvent.mouseDown(imtSelect);
  fireEvent.click(await screen.findByText(nextImtOption));

  expect(imtSelect).toContainHTML(nextImtOption);
});

test('When the submit button is clicked, mockSetSelections is called with the current selection values', () => {
  render(<Wrapper />);

  const buttons = screen.getAllByRole('button');
  const submitButton = buttons.find((button) => button.innerHTML.includes('Submit'));

  submitButton && fireEvent.click(submitButton);

  expect(mockSetSelections).toHaveBeenCalledWith(mockSelections);
});

test('When vs30 value is changed, and then the submit button is clicked, mockSetState is called witht the new values', async () => {
  render(<Wrapper />);

  const buttons = screen.getAllByRole('button');
  const vs30Select = buttons.find((button) => button.innerHTML.includes(mockSelections.vs30.toString()));
  const submitButton = buttons.find((button) => button.innerHTML.includes('Submit'));
  const nextVs30option = hazardPageOptions.vs30s[1].toString();

  vs30Select && fireEvent.mouseDown(vs30Select);
  fireEvent.click(await screen.findByText(nextVs30option));
  submitButton && fireEvent.click(submitButton);

  const newSelections: HazardCurvesSelections = {
    location: mockSelections.location,
    vs30: hazardPageOptions.vs30s[1],
    imt: mockSelections.imt,
    POE: 'None',
  };

  expect(mockSetSelections).toHaveBeenCalledWith(newSelections);
});
