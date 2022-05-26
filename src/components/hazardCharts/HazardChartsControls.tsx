import React, { useState } from 'react';
import { SelectControl } from '@gns-science/toshi-nest';
import { Button, Input, FormControl, InputLabel, FormHelperText } from '@mui/material';

import VerticalControlsBar from '../common/VerticalControlsBar';
import { getHazardTableOptions } from '../../services/hazardPage.service';
import { hazardChartsData } from '../../constants/hazardChartsData';

const HazardChartsControls: React.FC = () => {
  const [PGA, setPGA] = useState<string>('');
  const ariaLabel = { 'aria-label': 'description' };
  const hazardPageOption = getHazardTableOptions(hazardChartsData);

  const handleChange = (event: React.ChangeEvent) => {
    return 'lol';
  };

  return (
    <>
      <VerticalControlsBar>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">Latitude</InputLabel>
          <Input id="component-helper" value={name} onChange={handleChange} aria-describedby="component-helper-text" />
          <FormHelperText id="component-helper-text">Decimal Degrees</FormHelperText>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">Longitude</InputLabel>
          <Input id="component-helper" value={name} onChange={handleChange} aria-describedby="component-helper-text" />
          <FormHelperText id="component-helper-text">Decimal Degrees, -180:180</FormHelperText>
        </FormControl>
        <SelectControl options={hazardPageOption.PGA} selection={PGA} setSelection={setPGA} name="Vs30" />
        <SelectControl options={hazardPageOption.PGA} selection={PGA} setSelection={setPGA} name="Spectral Period" />
        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">Probability of Exceedance</InputLabel>
          <Input id="component-helper" value={name} onChange={handleChange} aria-describedby="component-helper-text" />
          <FormHelperText id="component-helper-text">0.1 - 10%</FormHelperText>
        </FormControl>
        <Button variant="contained">Submit</Button>
      </VerticalControlsBar>
    </>
  );
};

export default HazardChartsControls;
