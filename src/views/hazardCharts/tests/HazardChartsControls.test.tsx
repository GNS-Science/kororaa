import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import HazardChartsControls from '../HazardChartsControls';
import { hazardPageLocations, hazardPageOptions } from '../constants/hazardPageOptions';
import { convertIDsToLocations } from '../hazardPage.service';
import { HazardPageState } from '../hazardPageReducer';

const mockState: HazardPageState = {
  locs: [hazardPageLocations[0].id],
  vs30s: [hazardPageOptions.vs30s[0]],
  imts: [hazardPageOptions.imts[0]],
  poe: undefined,
  showUncertainty: true,
  xScale: 'log',
  yScale: 'log',
};

const mockSubmitStateCall = {
  locs: [hazardPageLocations[0].id],
  vs30s: [hazardPageOptions.vs30s[0]],
  imts: [hazardPageOptions.imts[0]],
  poe: undefined,
};

const mockDispatch = jest.fn();

const Wrapper = () => {
  return <HazardChartsControls state={mockState} dispatch={mockDispatch} />;
};

test('Controls renders correctly', () => {
  render(<Wrapper />);

  const locationNames = convertIDsToLocations(mockState.locs);

  expect(screen.getByLabelText('Lat,Lon')).toBeInTheDocument();
  expect(screen.getByText(locationNames[0])).toBeInTheDocument();
  expect(screen.getByDisplayValue(mockState.vs30s[0])).toBeInTheDocument();
  expect(screen.getByDisplayValue(mockState.imts[0])).toBeInTheDocument();
  expect(screen.getByLabelText(/Probabilty of Exceedance/)).toBeInTheDocument();
});

test('When user selects another option in the location autocomplete, the new value is displayed', async () => {
  render(<Wrapper />);

  const locationSelect = screen.getByRole('combobox');
  const nextLocationOption = hazardPageOptions.locations[1];
  const locationNames = convertIDsToLocations(mockState.locs);

  fireEvent.mouseDown(locationSelect);
  fireEvent.click(await screen.findByText(nextLocationOption));

  expect(await screen.findByText(locationNames[0])).toBeInTheDocument();
  expect(await screen.findByText('+1')).toBeInTheDocument();

  fireEvent.mouseDown(locationSelect);
  fireEvent.click(await screen.findByText(hazardPageOptions.locations[2]));

  expect(await screen.findByText('+2')).toBeInTheDocument();
});

test('When the vs30 value changes, the new value is displayed', async () => {
  render(<Wrapper />);

  const buttons = screen.getAllByRole('button');
  const vs30Select = buttons.find((button) => button.innerHTML.includes(mockState.vs30s[0].toString()));
  const nextVs30option = hazardPageOptions.vs30s[1].toString();

  vs30Select && fireEvent.mouseDown(vs30Select);
  fireEvent.click(await screen.findByText(nextVs30option));

  expect(vs30Select).toContainHTML('Multiple selected');
});

test('When the spectral period value changes, the new value is displayed', async () => {
  render(<Wrapper />);

  const buttons = screen.getAllByRole('button');
  const imtSelect = buttons.find((button) => button.innerHTML.includes(mockState.imts[0].toString()));
  const nextImtOption = hazardPageOptions.imts[1].toString();

  imtSelect && fireEvent.mouseDown(imtSelect);
  fireEvent.click(await screen.findByText(nextImtOption));

  expect(imtSelect).toContainHTML('Multiple selected');
});

test('When the submit button is clicked, mockSetSelections is called with the current selection values', () => {
  render(<Wrapper />);

  const buttons = screen.getAllByRole('button');
  const submitButton = buttons.find((button) => button.innerHTML.includes('Submit'));

  submitButton && fireEvent.click(submitButton);

  expect(mockDispatch).toHaveBeenCalledWith(mockSubmitStateCall);
});

test('When vs30 value is changed, and then the submit button is clicked, mockSetState is called witht the new values', async () => {
  render(<Wrapper />);

  const buttons = screen.getAllByRole('button');
  const vs30Select = buttons.find((button) => button.innerHTML.includes(mockState.vs30s[0].toString()));
  const submitButton = buttons.find((button) => button.innerHTML.includes('Submit'));
  const nextVs30option = hazardPageOptions.vs30s[1].toString();

  vs30Select && fireEvent.mouseDown(vs30Select);
  fireEvent.click(await screen.findByText(nextVs30option));
  submitButton && fireEvent.click(submitButton);

  const newState = {
    ...mockSubmitStateCall,
    vs30s: [mockState.vs30s[0], hazardPageOptions.vs30s[1]],
  };

  expect(mockDispatch).toHaveBeenCalledWith(newState);
});

test('When user types in the poe input field, the value in the field updates', async () => {
  render(<Wrapper />);

  const inputs = screen.getAllByRole('textbox');
  const poeInput = inputs.find((input) => input.id === 'poe-input');

  poeInput && fireEvent.change(poeInput, { target: { value: 'test input' } });

  expect(await screen.findByDisplayValue('test input')).toBeInTheDocument();
});

test('When poe value is changed to a valid number, and then the submit button is clicked, mockSetState is called with the new poe value', async () => {
  render(<Wrapper />);

  const inputs = screen.getAllByRole('textbox');
  const poeInput = inputs.find((input) => input.id === 'poe-input');
  const buttons = screen.getAllByRole('button');
  const submitButton = buttons.find((button) => button.innerHTML.includes('Submit'));

  poeInput && fireEvent.change(poeInput, { target: { value: '2' } });
  submitButton && fireEvent.click(submitButton);

  const newState = {
    ...mockSubmitStateCall,
    poe: 0.02,
  };

  expect(mockDispatch).toHaveBeenCalledWith(newState);
});
