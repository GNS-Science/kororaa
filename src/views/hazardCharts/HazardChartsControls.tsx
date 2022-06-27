import React, { useState, useRef, useEffect } from 'react';
import { MultiSelect } from '@gns-science/toshi-nest';
import { InputAdornment, Button, Input, FormControl, InputLabel, Box, Autocomplete, TextField, FormHelperText } from '@mui/material';

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
    return poe ? `${poe * 100}` : ' ';
  };
  const poeInputRef = useRef<HTMLInputElement>(null);

  const [latLon, setLatLon] = useState<string>('');
  const [locations, setLocations] = useState<string[]>(convertIDsToLocations(queryVariables.locs));
  const [vs30s, setVs30s] = useState<number[]>(queryVariables.vs30s);
  const [imts, setImts] = useState<string[]>(viewVariables.imts);
  const [poeInput, setPoeInput] = useState<string>(getPoeInputDisplay(viewVariables.poe));
  const [inputValue, setInputValue] = useState<string>('');
  const [poeInputError, setPoeInputError] = useState<boolean>(false);
  const [poeInputErrorMessage, setPoeInputErrorMessage] = useState<string>('');

  useEffect(() => {
    const input = poeInputRef.current;
    poeInputRef &&
      input?.addEventListener('blur', () => {
        parsePoe(poeInput);
      });
    return () => {
      poeInputRef &&
        input?.removeEventListener('blur', () => {
          parsePoe(poeInput);
        });
    };
  });

  const parsePoe = (poe: string) => {
    try {
      validatePoeValue(poe);
      setPoeInputError(false);
    } catch (err) {
      setPoeInputErrorMessage(err as string);
      setPoeInputError(true);
    }
  };

  const handleLatLonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLatLon(event.target.value);
  };

  const handleSubmit = () => {
    try {
      validatePoeValue(poeInput);
      setQueryVariables({
        ...queryVariables,
        locs: convertLocationsToIDs(locations),
        vs30s,
      });
      setViewVariables({
        imts,
        poe: Number(poeInput) / 100,
      });
    } catch (err) {
      setPoeInputError(true);
      setPoeInputErrorMessage(err as string);
    }
  };

  const validatePoeValue = (poe: string) => {
    const percentage = Number(poe);

    if (percentage >= 100 || percentage <= 0) {
      throw 'NUMBER MUST BE BETWEEN 100 AND 0';
    } else if (!percentage) {
      throw 'NOT A NUMBER';
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
          style={{ width: 228, marginLeft: 16 }}
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
            inputRef={poeInputRef}
            error={poeInputError}
            id="poe-input"
            name="poe"
            value={poeInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPoeInput(e.target.value);
            }}
            aria-describedby="component-helper-text"
            endAdornment={<InputAdornment position="end">%</InputAdornment>}
          />
          {poeInputError && <FormHelperText id="outlined-weight-helper-text">{poeInputErrorMessage}</FormHelperText>}
        </FormControl>
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </CustomControlsBar>
    </Box>
  );
};

export default HazardChartsControls;
