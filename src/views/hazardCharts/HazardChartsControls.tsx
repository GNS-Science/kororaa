import React, { useState } from 'react';
import { MultiSelect } from '@gns-science/toshi-nest';
import { Button, Input, FormControl, InputLabel, Box, Autocomplete, TextField } from '@mui/material';

import CustomControlsBar from '../../components/common/CustomControlsBar';
import { HazardCurvesQueryVariables, HazardCurvesViewVariables } from './hazardCharts.types';
import { hazardPageOptions } from './constants/hazardPageOptions';
import { convertIDsToLocations, convertLocationsToIDs } from './hazardPage.service';

interface HazardChartsControlsProps {
  queryVariables: HazardCurvesQueryVariables;
  setQueryVariables: (values: HazardCurvesQueryVariables) => void;
  viewVariables: HazardCurvesViewVariables;
  setViewVariables: (values: HazardCurvesViewVariables) => void;
}

const HazardChartsControls: React.FC<HazardChartsControlsProps> = ({ queryVariables, setQueryVariables, viewVariables, setViewVariables }: HazardChartsControlsProps) => {
  const getPoeInputDisplay = (poe: number | undefined): string => {
    return poe ? `${poe * 100}%` : '';
  };

  const [latLon, setLatLon] = useState<string>('');
  const [locations, setLocations] = useState<string[]>(convertIDsToLocations(queryVariables.locs));
  const [vs30s, setVs30s] = useState<number[]>(queryVariables.vs30s);
  const [imts, setImts] = useState<string[]>(viewVariables.imts);
  const [poeInput, setPoeInput] = useState<string>(getPoeInputDisplay(viewVariables.poe));
  const [inputValue, setInputValue] = useState<string>('');

  const handleLatLonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLatLon(event.target.value);
  };

  const handleSubmit = () => {
    setQueryVariables({
      ...queryVariables,
      locs: convertLocationsToIDs(locations),
      vs30s,
    });
    setViewVariables({
      imts,
      poe: parsePoe(poeInput),
    });
  };

  const parsePoe = (poe: string) => {
    const percentage = Number(poe.replace('%', ''));

    if (!percentage || percentage > 100 || percentage < 0) {
      return undefined;
    } else {
      return percentage / 100;
    }
  };

  return (
    <Box sx={{ marginBottom: '20px', width: '100%', border: 'solid 1px black', padding: '10px' }}>
      <CustomControlsBar>
        <Autocomplete
          multiple
          value={locations}
          onChange={(event: unknown, newValue: string[] | null) => {
            setLocations(newValue as string[]);
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
        <MultiSelect options={hazardPageOptions.vs30s} selection={vs30s} setSelection={setVs30s} name="Vs30" />
        <MultiSelect options={hazardPageOptions.imts} selection={imts} setSelection={setImts} name="Spectral Period" />
        <FormControl sx={{ width: 200 }} variant="standard">
          <InputLabel htmlFor="component-helper">Probabilty of Exceedance (50 Yrs)</InputLabel>
          <Input
            id="component-helper"
            name="poe"
            value={poeInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPoeInput(e.target.value);
            }}
            aria-describedby="component-helper-text"
          />
        </FormControl>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </CustomControlsBar>
    </Box>
  );
};

export default HazardChartsControls;
