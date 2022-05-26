import React, { useState } from 'react';
import { SelectControl } from '@gns-science/toshi-nest';
import { Button, Input, FormControl, InputLabel, FormHelperText } from '@mui/material';

import VerticalControlsBar from '../../components/common/VerticalControlsBar';
import { getHazardTableOptions } from '../../services/hazardPage.service';
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
    <>
      <VerticalControlsBar>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">Latitude</InputLabel>
          <Input id="component-helper" name="lat" value={lat} onChange={handleLatChange} aria-describedby="component-helper-text" />
          <FormHelperText id="component-helper-text">Decimal Degrees</FormHelperText>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">Longitude</InputLabel>
          <Input id="component-helper" name="lon" value={lon} onChange={handleLonChange} aria-describedby="component-helper-text" />
          <FormHelperText id="component-helper-text">Decimal Degrees, -180:180</FormHelperText>
        </FormControl>
        <SelectControl options={hazardTableOptions.vs30} selection={vs30} setSelection={setVs30} name="Vs30" />
        <SelectControl options={hazardTableOptions.spectralPeriod} selection={spectralPeriod} setSelection={setSpectralPeriod} name="Spectral Period" />
        <SelectControl options={['None', '2%', '10%']} selection={POE} setSelection={setPOE} name="Probability of Exceedance" />
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </VerticalControlsBar>
    </>
  );
};

export default HazardChartsControls;
