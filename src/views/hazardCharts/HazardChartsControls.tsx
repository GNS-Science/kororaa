import React, { useState, useEffect } from 'react';
import { InputAdornment, Button, Input, FormControl, InputLabel, Box, Autocomplete, TextField, FormHelperText, IconButton, Alert, Collapse, Tooltip } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import CloseIcon from '@mui/icons-material/Close';

import CustomControlsBar from '../../components/common/CustomControlsBar';
import { hazardPageOptions } from './constants/hazardPageOptions';
import { getPoeInputDisplay, numbersToStrings, stringsToNumbers, validateCurveGroupLength, validatePoeValue } from './hazardPage.service';
import { HazardPageState, LocationData } from './hazardPageReducer';
import SelectControlMultiple from '../../components/common/SelectControlMultiple';
import { getLatLonString, combineLocationData, getNamesFromLocationData, validateLatLon } from '../../services/latLon/latLon.service';
import { locationTooltip, tooManyCurves, latLonTooltip, imtTooltip, poeTooltip, vs30Tooltip } from './constants/hazardCharts';

interface HazardChartsControlsProps {
  state: HazardPageState;
  dispatch: React.Dispatch<Partial<HazardPageState>>;
}

const HazardChartsControls: React.FC<HazardChartsControlsProps> = ({ state, dispatch }: HazardChartsControlsProps) => {
  const [locationData, setLocationData] = useState<LocationData[]>(state.locationData);
  const [locations, setLocations] = useState<string[]>(getNamesFromLocationData(state.locationData));
  const [latLon, setLatLon] = useState<string>(getLatLonString(state.locationData));
  const [latLonError, setLatLonError] = useState<boolean>(false);
  const [latLonErrorMessage, setLatLonErrorMessage] = useState<string>('');
  const [vs30s, setVs30s] = useState<number[]>(state.vs30s);
  const [imts, setImts] = useState<string[]>(state.imts);

  const [inputValue, setInputValue] = useState<string>('');
  const [poeInputError, setPoeInputError] = useState<boolean>(false);
  const [poeInputErrorMessage, setPoeInputErrorMessage] = useState<string>('');
  const [poeInput, setPoeInput] = useState<string>(getPoeInputDisplay(state.poe));

  const [controlsError, setControlsError] = useState<boolean>(false);
  const [controlsErrorMessage, setControlsErrorMessage] = useState<string>('');

  useEffect(() => {
    const combinedLocationData = combineLocationData(locations, latLon);
    setLocationData(combinedLocationData);
  }, [locations, latLon]);

  const handleLatLonBlur = () => {
    try {
      validateLatLon(latLon);
      setLatLonError(false);
    } catch (err) {
      setLatLonError(true);
      setLatLonErrorMessage(err as string);
    }
  };

  const handleLatLonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLatLon(event.target.value);
    setLatLonError(validateLatLon(event.target.value));
  };

  const handleLocationChange = (event: unknown, newValue: string[] | null) => {
    if (newValue) {
      const locations = newValue as string[];
      setLocations(locations);
    }
  };

  const handleSubmit = async () => {
    try {
      validatePoeValue(poeInput);
      validateLatLon(latLon);
      validateCurveGroupLength(locationData, vs30s, imts);
      dispatch({ locationData, vs30s, imts, poe: poeInput.length === 0 || poeInput === ' ' ? undefined : Number(poeInput) / 100 });
    } catch (err) {
      if (err === 'Invalid lat, lon input') {
        setLatLonError(true);
        setLatLonErrorMessage(err as string);
      } else if (err === tooManyCurves) {
        setControlsError(true);
        setControlsErrorMessage(err as string);
      } else {
        setPoeInputError(true);
        setPoeInputErrorMessage(err as string);
      }
    }
  };

  return (
    <Box sx={{ marginBottom: '0.5rem', width: '100%', border: 'solid 1px black', padding: '0.5rem' }}>
      <Collapse in={controlsError}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setControlsError(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {controlsErrorMessage}
        </Alert>
      </Collapse>
      <CustomControlsBar direction="row">
        <Tooltip title={locationTooltip} arrow>
          <Autocomplete
            disableCloseOnSelect
            multiple
            value={locations}
            onChange={handleLocationChange}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            options={hazardPageOptions.locations}
            style={{ width: 230, marginLeft: 16 }}
            renderInput={(params) => <TextField {...params} label="Locations" variant="standard" />}
            limitTags={1}
          />
        </Tooltip>
        <FormControl sx={{ width: 200 }} variant="standard">
          <InputLabel htmlFor="component-helper">Lat,Lon</InputLabel>
          <Tooltip title={latLonTooltip} arrow>
            <Input
              id="component-helper"
              name="lon"
              value={latLon}
              onChange={handleLatLonChange}
              onBlurCapture={handleLatLonBlur}
              aria-describedby="component-helper-text"
              endAdornment={
                <InputAdornment position="end" onClick={() => setLatLon('')}>
                  <IconButton>
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Tooltip>
          {latLonError && <FormHelperText id="component-helper-text">{latLonErrorMessage}</FormHelperText>}
        </FormControl>
        <SelectControlMultiple
          options={numbersToStrings(hazardPageOptions.vs30s)}
          selection={numbersToStrings(vs30s)}
          setSelection={(newValue: string[]) => setVs30s(stringsToNumbers(newValue))}
          name="Vs30"
          tooltip={vs30Tooltip}
        />
        <SelectControlMultiple tooltip={imtTooltip} options={hazardPageOptions.imts} selection={imts} setSelection={setImts} name="Spectral Period" />
        <FormControl sx={{ width: 200 }} variant="standard">
          <InputLabel htmlFor="component-helper">Probabilty of Exceedance (50 Yrs)</InputLabel>
          <Tooltip title={poeTooltip} arrow>
            <Input
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
          </Tooltip>
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
