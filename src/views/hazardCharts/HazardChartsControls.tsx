import React, { useState, useRef, useEffect } from 'react';
import { MultiSelect } from '@gns-science/toshi-nest';
import { InputAdornment, Button, Input, FormControl, InputLabel, Box, Autocomplete, TextField, FormHelperText } from '@mui/material';

import CustomControlsBar from '../../components/common/CustomControlsBar';
import { hazardPageOptions } from './constants/hazardPageOptions';
import { convertIDsToLocations, convertLocationsToIDs, getPoeInputDisplay, validatePoeValue } from './hazardPage.service';
import { HazardPageState } from './hazardPageReducer';
import SelectControlMultiple from '../../components/common/SelectControlMultiple';

interface HazardChartsControlsProps {
  state: HazardPageState;
  dispatch: React.Dispatch<Partial<HazardPageState>>;
}

const HazardChartsControls: React.FC<HazardChartsControlsProps> = ({ state, dispatch }: HazardChartsControlsProps) => {
  const poeInputRef = useRef<HTMLInputElement>(null);

  const [latLon, setLatLon] = useState<string>('');
  const [locations, setLocations] = useState<string[]>(convertIDsToLocations(state.locs));
  const [vs30s, setVs30s] = useState<number[]>(state.vs30s);

  const [inputValue, setInputValue] = useState<string>('');
  const [poeInputError, setPoeInputError] = useState<boolean>(false);
  const [poeInputErrorMessage, setPoeInputErrorMessage] = useState<string>('');
  const [poeInput, setPoeInput] = useState<string>(getPoeInputDisplay(state.poe));

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
      setPoeInputError(true);
      setPoeInputErrorMessage(err as string);
    }
  };

  const handleLatLonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLatLon(event.target.value);
  };

  const handleSubmit = () => {
    try {
      validatePoeValue(poeInput);
      dispatch({ poe: Number(poeInput) / 100 });
      // setQueryVariables({
      //   ...queryVariables,
      //   locs: convertLocationsToIDs(locations),
      //   vs30s,
      // });
    } catch (err) {
      setPoeInputError(true);
      setPoeInputErrorMessage(err as string);
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
        <SelectControlMultiple options={hazardPageOptions.imts} selection={state.imts} setSelection={(newValue: string[]) => dispatch({ imts: newValue })} name="Spectral Period" />
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
