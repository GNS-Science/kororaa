import React, { useState, useEffect } from "react";
import {
  Fab,
  InputAdornment,
  Button,
  Input,
  FormControl,
  InputLabel,
  Box,
  Autocomplete,
  TextField,
  FormHelperText,
  IconButton,
  Alert,
  Collapse,
  Tooltip,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import { useReactToPrint } from "react-to-print";
import PrintIcon from "@mui/icons-material/Print";
import { Link } from "react-router-dom";

import CustomControlsBar from "../../components/common/CustomControlsBar";
import { hazardPageOptions } from "./constants/hazardPageOptions";
import {
  getPoeInputDisplay,
  numbersToStrings,
  parseTimePeriodString,
  readableTimePeriod,
  readableTimePeriodArray,
  stringsToNumbers,
  validateCurveGroupLength,
  validateImts,
  validateLocationData,
  validatePoeValue,
  validateVs30s,
} from "./hazardPage.service";
import { HazardPageState, LocationData } from "./hazardPageReducer";
import SelectControlMultiple from "../../components/common/SelectControlMultiple";
import { SelectControl } from "@gns-science/toshi-nest";
import {
  getLatLonString,
  combineLocationData,
  getNamesFromLocationData,
  validateLatLon,
} from "../../services/latLon/latLon.service";
import { locationTooltip, tooManyCurves, latLonTooltip, noLocations, noVs30s, noImts } from "./constants/hazardCharts";
import { imtTooltip, vs30Tooltip } from "../../constants/tooltips";

interface HazardChartsControlsProps {
  state: HazardPageState;
  dispatch: React.Dispatch<Partial<HazardPageState>>;
  printTargetRef: React.RefObject<HTMLDivElement>;
}

const HazardChartsControls: React.FC<HazardChartsControlsProps> = ({
  state,
  dispatch,
  printTargetRef,
}: HazardChartsControlsProps) => {
  const [locationData, setLocationData] = useState<LocationData[]>(state.locationData);
  const [locations, setLocations] = useState<string[]>(getNamesFromLocationData(state.locationData));
  const [latLon, setLatLon] = useState<string>(getLatLonString(state.locationData));
  const [latLonError, setLatLonError] = useState<boolean>(false);
  const [latLonErrorMessage, setLatLonErrorMessage] = useState<string>("");
  const [vs30s, setVs30s] = useState<number[]>(state.vs30s);
  const [imts, setImts] = useState<string[]>(state.imts);
  const [timePeriod, setTimePeriod] = useState<number>(state.timePeriod);

  const [inputValue, setInputValue] = useState<string>("");
  const [poeInputError, setPoeInputError] = useState<boolean>(false);
  const [poeInputErrorMessage, setPoeInputErrorMessage] = useState<string>("");
  const [poeInput, setPoeInput] = useState<string>(getPoeInputDisplay(state.poe));

  const [controlsError, setControlsError] = useState<boolean>(false);
  const [controlsErrorMessage, setControlsErrorMessage] = useState<string>("");

  const [locationError, setLocationError] = useState<boolean>(false);
  const [vs30Error, setVs30Error] = useState<boolean>(false);
  const [imtError, setImtError] = useState<boolean>(false);

  const [dataFetched, setDataFetched] = useState<boolean>(true);
  const [controlsChanged, setControlsChanged] = useState<number>(0);

  useEffect(() => {
    const combinedLocationData = combineLocationData(locations, latLon);
    setLocationData(combinedLocationData);
  }, [locations, latLon]);

  useEffect(() => {
    setControlsChanged(controlsChanged + 1);
    if (controlsChanged >= 2) {
      setDataFetched(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationData, latLon, vs30s, imts, poeInput, timePeriod]);

  const handleLatLonBlur = () => {
    try {
      validateLatLon(latLon);
      setLatLonError(false);
    } catch (err) {
      setLatLonError(true);
      setLatLonErrorMessage(err as string);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => printTargetRef.current,
  });

  const handleLatLonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLatLon(event.target.value);
    setLatLonError(validateLatLon(event.target.value));
  };

  const handleLocationChange = (_: unknown, newValue: string[] | null) => {
    if (newValue) {
      const locations = newValue as string[];
      setLocations(locations);
    }
  };

  const handleSubmit = async () => {
    try {
      validatePoeValue(poeInput);
      validateLatLon(latLon);
      validateLocationData(locationData, setLocationError);
      validateVs30s(vs30s, setVs30Error);
      validateImts(imts, setImtError);
      validateCurveGroupLength(locationData, vs30s, imts);
      setDataFetched(true);
      dispatch({
        locationData,
        vs30s,
        imts,
        poe: poeInput.length === 0 || poeInput === " " ? undefined : Number(poeInput) / 100,
        timePeriod,
      });
    } catch (err) {
      if (err === "Invalid lat, lon input") {
        setLatLonError(true);
        setLatLonErrorMessage(err as string);
      } else if (err === tooManyCurves) {
        setControlsError(true);
        setControlsErrorMessage(err as string);
      } else if (err === noLocations) {
        setLocationError(true);
        setControlsErrorMessage(err as string);
      } else if (err === noVs30s) {
        setVs30Error(true);
        setControlsErrorMessage(err as string);
      } else if (err === noImts) {
        setImtError(true);
        setControlsErrorMessage(err as string);
      } else {
        setPoeInputError(true);
        setPoeInputErrorMessage(err as string);
      }
    }
  };

  return (
    <Box sx={{ marginBottom: "0.5rem", width: "100%", border: "solid 1px black", padding: "0.5rem" }}>
      <Collapse in={controlsError || locationError || vs30Error || imtError}>
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
        <Autocomplete
          disableCloseOnSelect
          multiple
          value={locations}
          onChange={handleLocationChange}
          inputValue={inputValue}
          onInputChange={(_event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={hazardPageOptions.locations.sort()}
          style={{ minWidth: 240, maxWidth: 270, marginLeft: 16 }}
          renderInput={(params) => (
            <Tooltip title={locationTooltip} arrow placement="top">
              <TextField {...params} label="Locations" variant="standard" />
            </Tooltip>
          )}
          limitTags={1}
        />
        <FormControl sx={{ width: 200 }} variant="standard">
          <Tooltip title={latLonTooltip} arrow placement="top">
            <InputLabel shrink={true} htmlFor="component-helper">
              Coordinates (lat, lon)
            </InputLabel>
          </Tooltip>
          <Input
            id="lat-lon-input"
            name="lon"
            value={latLon}
            onChange={handleLatLonChange}
            onBlurCapture={handleLatLonBlur}
            aria-describedby="component-helper-text"
            endAdornment={
              <InputAdornment position="end" onClick={() => setLatLon("")}>
                <IconButton>
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            }
          />
          {latLonError && <FormHelperText id="component-helper-text">{latLonErrorMessage}</FormHelperText>}
        </FormControl>
        <FormControl sx={{ width: 200 }} variant="standard">
          <SelectControlMultiple
            options={hazardPageOptions.vs30s}
            selection={numbersToStrings(vs30s)}
            setSelection={(newValue: string[]) => setVs30s(stringsToNumbers(newValue))}
            name="Vs30 (m/s)"
            tooltip={vs30Tooltip}
          />
        </FormControl>
        <SelectControlMultiple
          tooltip={imtTooltip}
          options={hazardPageOptions.imts}
          selection={imts}
          setSelection={setImts}
          name="Spectral Period"
        />
        <div style={{ display: "flex", flexDirection: "column", textAlign: "center", position: "relative", top: -11 }}>
          <InputLabel sx={{ fontSize: "1rem", transform: "matrix(0.75, 0, 0, 0.75, -22, 20)" }}>
            {" "}
            Probability of Exceedance (PoE){" "}
          </InputLabel>
          <Tooltip
            title={
              <React.Fragment>
                <Typography fontSize={11}>
                  The probability of experiencing an acceleration (g) or more within the next T years where T is the
                  chosen Time Period. See the{" "}
                  <Link to={"/TechInfo#forecast-timespan"} target="_blank" rel="noopener noreferrer">
                    Technical Info Page
                  </Link>{" "}
                  for more detail.
                </Typography>
              </React.Fragment>
            }
            arrow
            placement="top"
          >
            <div>
              <FormControl sx={{ width: 300, display: "flex", flexDirection: "row" }} variant="standard">
                <div style={{ margin: "15px 10px 0 0" }}>
                  <Input
                    error={poeInputError}
                    id="poe-input"
                    name="poe"
                    value={poeInput}
                    sx={{ width: 60 }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setPoeInput(e.target.value);
                    }}
                    aria-describedby="component-helper-text"
                    endAdornment={<InputAdornment position="end">%</InputAdornment>}
                  />
                  {poeInputError && (
                    <FormHelperText id="outlined-weight-helper-text">{poeInputErrorMessage}</FormHelperText>
                  )}
                </div>
                <div style={{ margin: "0 10px 0 0" }}>
                  <Typography sx={{ position: "relative", top: 20, padding: "10 0 10 0" }}> in </Typography>
                </div>
                <SelectControl
                  name=""
                  options={readableTimePeriodArray(hazardPageOptions.timePeriods)}
                  selection={readableTimePeriod(timePeriod)}
                  setSelection={(newValue: string) => setTimePeriod(parseTimePeriodString(newValue))}
                />
              </FormControl>
            </div>
          </Tooltip>
        </div>
        <Button disabled={dataFetched} variant="contained" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <Fab color="primary" aria-label="print" onClick={handlePrint}>
          <PrintIcon />
        </Fab>
      </CustomControlsBar>
    </Box>
  );
};

export default HazardChartsControls;
