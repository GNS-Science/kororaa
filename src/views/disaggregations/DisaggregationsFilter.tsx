import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SelectControl, RangeSliderWithInputs } from '@gns-science/toshi-nest';

export interface DisaggregationsFilterProps {
  tectonicRegionTypeOptions: string[];
}

const DisaggregationsFilterContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '30vh',
  '> div': {
    margin: '10px',
  },
}));

export const DisaggregationsFilter = ({ tectonicRegionTypeOptions }: DisaggregationsFilterProps) => {
  const [tectonicRegionType, setTectonicRegionType] = useState<string>(tectonicRegionTypeOptions[0]);
  const [magnitudeRange, setMagnitudeRange] = useState<number[]>([6, 10]);
  const [distanceRange, setDistanceRange] = useState<number[]>([-20, 0]);

  return (
    <DisaggregationsFilterContainer>
      <Typography variant="h4">Filter</Typography>
      <SelectControl name="Tectonic Region Type" selection={tectonicRegionType} options={tectonicRegionTypeOptions} setSelection={setTectonicRegionType} tooltip={'tectonic'} />
      <RangeSliderWithInputs label="Magnitude Range" valuesRange={magnitudeRange} setValues={setMagnitudeRange} inputProps={{ step: 0.1, min: 6, max: 10, type: 'number' }} />
      <RangeSliderWithInputs label="Distance Range" valuesRange={distanceRange} setValues={setDistanceRange} inputProps={{ step: 0.1, min: -20, max: 0, type: 'number' }} />
    </DisaggregationsFilterContainer>
  );
};
