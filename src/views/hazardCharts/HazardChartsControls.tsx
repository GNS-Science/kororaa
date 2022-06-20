import React, { useState } from 'react';
import { SelectControl } from '@gns-science/toshi-nest';
import { Button, Input, FormControl, InputLabel, Box, Autocomplete, TextField } from '@mui/material';

import CustomControlsBar from '../../components/common/CustomControlsBar';
import { HazardCurvesSelections } from './hazardCharts.types';
import { hazardPageOptions } from './hazardPageOptions';

interface HazardChartsControlsProps {
  selections: HazardCurvesSelections;
  setSelections: (values: HazardCurvesSelections) => void;
}

const HazardChartsControls: React.FC<HazardChartsControlsProps> = ({ selections, setSelections }: HazardChartsControlsProps) => {
  const [latLon, setLatLon] = useState<string>('');
  const [location, setLocation] = useState<string>(selections.location);
  const [vs30, setVs30] = useState<number>(selections.vs30);
  const [imt, setImt] = useState<string>(selections.imt);
  const [POE, setPOE] = useState<'None' | '2%' | '10%'>(selections.POE);
  const [poe, setPoe] = useState<number | undefined>(undefined);
  const [inputValue, setInputValue] = useState<string>('');

  const handleLatLonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLatLon(event.target.value);
  };

  const handleSubmit = () => {
    setSelections({
      location: location,
      vs30,
      imt,
      poe,
    });
  };

  const handlePoeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    const percentage = Number(newValue.replace('%', ''));

    if (!percentage || percentage > 100 || percentage < 0) {
      setPoe(undefined);
    } else if (percentage < 1) {
      setPoe(percentage);
    } else {
      setPoe(percentage / 100);
    }
  };

  return (
    <Box sx={{ marginBottom: '20px', width: '100%', border: 'solid 1px black', padding: '10px' }}>
      <CustomControlsBar>
        <Autocomplete
          value={location}
          onChange={(event: unknown, newValue: string | null) => {
            setLocation(newValue as string);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={hazardPageOptions.locations}
          style={{ width: 200, marginLeft: 16 }}
          renderInput={(params) => <TextField {...params} label="Locations" variant="standard" />}
          blurOnSelect={true}
          limitTags={1}
        />
        <FormControl sx={{ width: 200 }} variant="standard">
          <InputLabel htmlFor="component-helper">Lat,Lon</InputLabel>
          <Input id="component-helper" name="lon" value={latLon} onChange={handleLatLonChange} aria-describedby="component-helper-text" />
        </FormControl>
        <SelectControl options={hazardPageOptions.vs30s} selection={vs30} setSelection={setVs30} name="Vs30" />
        <SelectControl options={hazardPageOptions.imts} selection={imt} setSelection={setImt} name="Spectral Period" />
        <SelectControl options={['None', '2%', '10%']} selection={POE} setSelection={setPOE} name="Probability of Exceedance (50 Yrs)" />
        <FormControl sx={{ width: 200 }} variant="standard">
          <InputLabel htmlFor="component-helper">Probabilty of Exceedance (50 Yrs)</InputLabel>
          <Input id="component-helper" name="poe" onChange={handlePoeChange} aria-describedby="component-helper-text" />
        </FormControl>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </CustomControlsBar>
    </Box>
  );
};

export default HazardChartsControls;
