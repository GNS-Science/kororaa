import React, { useState } from 'react';
import { SelectControl } from '@gns-science/toshi-nest';
import { Button, Input, FormControl, InputLabel, Box } from '@mui/material';

import CustomControlsBar from '../../components/common/CustomControlsBar';
import { getHazardTableOptions } from './hazardPage.service';
import { hazardChartsMockData } from '../../constants/hazardChartsMockData';
import { HazardCurvesSelections } from './hazardCharts.types';

interface HazardChartsControlsProps {
  selections: HazardCurvesSelections;
  setSelections: (values: HazardCurvesSelections) => void;
}

const HazardChartsControls: React.FC<HazardChartsControlsProps> = ({ selections, setSelections }: HazardChartsControlsProps) => {
  const hazardTableOptions = getHazardTableOptions(hazardChartsMockData);

  const [lat, setLat] = useState<string>(selections.lat);
  const [lon, setLon] = useState<string>(selections.lon);
  const [vs30, setVs30] = useState<string>(selections.vs30);
  const [spectralPeriod, setSpectralPeriod] = useState<string>(selections.spectralPeriod);
  const [POE, setPOE] = useState<'None' | '2%' | '10%'>(selections.POE);

  const handleLatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLat(event.target.value);
  };

  const handleLonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLon(event.target.value);
  };

  const handleSubmit = () => {
    setSelections({
      lat: lat,
      lon: lon,
      vs30,
      spectralPeriod,
      POE,
    });
  };

  return (
    <Box sx={{ marginBottom: '20px', width: '100%', border: 'solid 1px black', padding: '10px' }}>
      <CustomControlsBar>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">Latitude</InputLabel>
          <Input id="component-helper" name="lat" value={lat} onChange={handleLatChange} aria-describedby="component-helper-text" />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">Longitude</InputLabel>
          <Input id="component-helper" name="lon" value={lon} onChange={handleLonChange} aria-describedby="component-helper-text" />
        </FormControl>
        <SelectControl options={hazardTableOptions.vs30} selection={vs30} setSelection={setVs30} name="Vs30" />
        <SelectControl options={hazardTableOptions.spectralPeriod} selection={spectralPeriod} setSelection={setSpectralPeriod} name="Spectral Period" />
        <SelectControl options={['None', '2%', '10%']} selection={POE} setSelection={setPOE} name="Probability of Exceedance" />
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </CustomControlsBar>
    </Box>
  );
};

export default HazardChartsControls;
