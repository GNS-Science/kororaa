import React, { useEffect, useState, useReducer, useMemo } from 'react';
import { Box, Button, styled, Alert, Fab, Menu, MenuItem, Autocomplete, TextField, FormGroup, Tooltip } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { RangeSliderWithInputs } from '@gns-science/toshi-nest';
import { toPng } from 'html-to-image';
import { useLazyLoadQuery } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { SelectControl } from '@gns-science/toshi-nest';

import { flexParentCenter } from '../../utils/styleUtils';
import CustomControlsBar from '../../components/common/CustomControlsBar';
import { SOLVIS_RADII_ID, SOLVIS_LOCATION_LIST, HAZARD_MODEL } from '../../utils/environmentVariables';
import SelectControlMultiple from '../../components/common/SelectControlMultiple';
import SelectControlWithDisable from '../../components/common/SelectControlWithDisable';
import { ComboRuptureMapPageControlsQuery } from './__generated__/ComboRuptureMapPageControlsQuery.graphql';
import { ComboRuptureMapPageState } from './comboRuptureMapPageReducer';
import MapViewControls, { mapViewControlsReducer } from './MapViewControls';
import { GeoJsonObject } from 'geojson';

const StyledButton = styled(Button)(() => ({
  margin: '10px',
}));

const StyledCustomControlsBar = styled(CustomControlsBar)(() => ({
  margin: '0 0 0 10px',
  maxHeight: '320px!important',
}));

const StyledRangeSliderDiv = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '& p': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '& .css-7ai7qk': {
    marginRight: '0px',
  },
}));

type SortDict = {
  [key: string]: {
    attribute: string;
    ascending: boolean;
  } | null;
};

type MfdData =
  | readonly ({
      readonly bin_center: number | null;
      readonly rate: number | null;
      readonly cumulative_rate: number | null;
    } | null)[]
  | null
  | undefined;

export const sortDict: SortDict = {
  Unsorted: null,
  'Magnitude ↑': { attribute: 'magnitude', ascending: true },
  'Magnitude ↓': { attribute: 'magnitude', ascending: false },
  'Rate ↑ (weighted mean)': { attribute: 'rate_weighted_mean', ascending: true },
  'Rate ↓ (weighted mean)': { attribute: 'rate_weighted_mean', ascending: false },
  'Rate ↑ (maximum)': { attribute: 'rate_max', ascending: true },
  'Rate ↓ (maximum)': { attribute: 'rate_max', ascending: false },
  'Rate ↑ (minimum)': { attribute: 'rate_min', ascending: true },
  'Rate ↓ (minimum)': { attribute: 'rate_min', ascending: false },
};

const faultSystemOptions = ['Crustal', 'Hikurangi', 'Puysegur'];

interface ComboRuptureMapControlsProps {
  startTransition: React.TransitionStartFunction;
  isPending: boolean;
  dispatch: React.Dispatch<Partial<ComboRuptureMapPageState>>;
  geoJsonError: string | null;
  state: ComboRuptureMapPageState;
  faultSurfacesGeojson: typeof GeoJsonObject;
  faultTracesGeojson: typeof GeoJsonObject;
  mfdData: MfdData;
}

const ComboRuptureMapControls: React.FC<ComboRuptureMapControlsProps> = ({
  startTransition,
  isPending,
  dispatch,
  geoJsonError,
  state,
  faultSurfacesGeojson,
  faultTracesGeojson,
  mfdData,
}: ComboRuptureMapControlsProps) => {
  const [faultSystem, setFaultSystem] = useState<string>('Crustal');
  const [locations, setLocations] = useState<string[]>([]);
  const [locationOptions, setLocationOptions] = useState<string[]>([]);
  const [locationIdArray, setLocationIdArray] = useState<string[]>([]);
  const [radiiOptions, setRadiiOptions] = useState<string[]>([]);
  const [parentFaultArray, setParentFaultArray] = useState<string[]>([]);
  const [magnitudeRange, setMagnitudeRange] = useState<number[]>([6, 10]);
  const [rateRange, setRateRange] = useState<number[]>([-20, 0]);
  const [radius, setRadius] = useState<string>('');
  const [radiusError, setRadiusError] = useState<string | null>(null);
  const [mapViewControlsState, mapViewControlsDispatch] = useReducer(mapViewControlsReducer, { showSurfaces: true, showAnimation: true, showMfd: true, showTraceLegend: true });
  const [sortBy1, setSortBy1] = useState<string>('Unsorted');
  const [sortBy2, setSortBy2] = useState<string>('');
  const [sortOptionsAnchorEl, setSortOptionsAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mapOptionsAnchorEl, setMapOptionsAnchorEl] = React.useState<null | HTMLElement>(null);

  const mapOptionsOpen = Boolean(mapOptionsAnchorEl);
  const handleMapOptionsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMapOptionsAnchorEl(event.currentTarget);
  };
  const handleMapOptionsClose = () => {
    setMapOptionsAnchorEl(null);
  };

  const sortOptionsOpen = Boolean(sortOptionsAnchorEl);
  const handleSortOptionsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSortOptionsAnchorEl(event.currentTarget);
  };
  const handleSortOptionsClose = () => {
    setSortOptionsAnchorEl(null);
  };

  const data = useLazyLoadQuery<ComboRuptureMapPageControlsQuery>(comboRuptureMapPageControlsQuery, { radiiSetId: SOLVIS_RADII_ID, locationListId: SOLVIS_LOCATION_LIST });
  const locationData = data?.SOLVIS_get_location_list?.locations;
  const radiiData = data?.SOLVIS_get_radii_set?.radii;
  const parentFaultOptions: string[] = useMemo(
    () => (data?.SOLVIS_get_parent_fault_names ? data?.SOLVIS_get_parent_fault_names.filter((el) => el !== null && el !== undefined).map((el) => el as string) : []),
    [data],
  );

  const sortByOptions = useMemo(
    () => ['Unsorted', 'Magnitude ↑', 'Magnitude ↓', 'Rate ↑ (weighted mean)', 'Rate ↓ (weighted mean)', 'Rate ↑ (maximum)', 'Rate ↓ (maximum)', 'Rate ↑ (minimum)', 'Rate ↓ (minimum)'],
    [],
  );
  const sortByOptions2 = useMemo(() => sortByOptions.filter((option) => option !== sortBy1), [sortBy1, sortByOptions]);

  const sortByFormatted = useMemo(() => {
    if (sortBy1 !== 'Unsorted') {
      if (sortBy2 === '' || sortBy2 === 'Unsorted') {
        return [sortDict[sortBy1]];
      } else if (sortBy2 !== '' && sortBy2 !== 'Unsorted') {
        return [sortDict[sortBy1], sortDict[sortBy2]];
      }
    }
  }, [sortBy1, sortBy2]);

  useEffect(() => {
    if (locationData) {
      const locationNameArray: string[] = [];
      const locationIdArray: string[] = [];
      locationData.forEach((location) => {
        location?.name !== undefined && location?.name !== null ? locationNameArray.push(location?.name) : locationNameArray.push('');
      });
      locations.map((location) => {
        const locationDataItem = locationData?.find((item) => item?.name === location);
        locationIdArray.push(locationDataItem && locationDataItem?.location_id !== null ? locationDataItem?.location_id : '');
      });
      setLocationOptions(locationNameArray);
      setLocationIdArray(locationIdArray);
    }
  }, [locationData, locations]);

  useEffect(() => {
    if (radiiData) {
      setRadiiOptions(radiiData?.map((radius) => (radius ? `${radius / 1000}km` : '')));
    }
  }, [radiiData]);

  useEffect(() => {
    if (locations.length > 0 && radius === '') {
      setRadiusError('Select a radius option.');
    } else {
      setRadiusError(null);
    }
  }, [locations, radius]);

  const handleDownload = () => {
    const element = document.getElementById('map');
    if (element === null) {
      return;
    }
    toPng(element, { quality: 0.95 }).then((dataUrl: string) => {
      const link = document.createElement('a');
      link.download = `hazard map-${HAZARD_MODEL}.png`;
      link.href = dataUrl;
      link.click();
    });
  };

  const handleDownloadData = (data: typeof GeoJsonObject | MfdData, fileName: string, fileType: 'geoJSON' | 'JSON') => {
    const a = document.createElement('a');
    const file = new Blob([JSON.stringify(data)], { type: fileType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  };

  const handleClickTraceDownload = () => handleDownloadData(faultTracesGeojson, 'fault-traces.geojson', 'geoJSON');
  const handleClickSurfaceDownload = () => handleDownloadData(faultSurfacesGeojson, 'fault-surfaces.geojson', 'geoJSON');
  const handleClickMfdDownload = () => handleDownloadData(mfdData, 'mfd-data.json', 'JSON');

  const handleSubmit = async () => {
    startTransition(() => {
      dispatch({
        faultSystem: faultSystem,
        locationCodes: locationIdArray,
        radius: Number(radius.replace('km', '')),
        magnitudeRange: magnitudeRange,
        rateRange: rateRange.map((rate) => Math.pow(10, rate)),
        sortby: sortByFormatted,
        parentFaultArray: faultSystem === 'Crustal' ? parentFaultArray : [],
      });
    });
  };

  useEffect(() => {
    dispatch({ ...mapViewControlsState });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapViewControlsState]);

  return (
    <Box sx={{ width: '100%', ...flexParentCenter, flexDirection: 'column' }}>
      <StyledCustomControlsBar direction="column">
        <SelectControl name="Fault System" selection={faultSystem} setSelection={setFaultSystem} options={faultSystemOptions} tooltip={'fault system'} />
        <Autocomplete
          multiple={true}
          disabled={faultSystem !== 'Crustal'}
          options={parentFaultOptions}
          renderInput={(params) => <TextField {...params} label="Faults" />}
          limitTags={1}
          style={{ minWidth: 200 }}
          value={parentFaultArray}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(event: any, newValue: any | null) => {
            setParentFaultArray(newValue);
          }}
        />
        <SelectControlMultiple name="Locations" selection={locations} options={locationOptions} setSelection={setLocations} />
        <SelectControlWithDisable disabled={locations.length === 0} name="Radius" selection={radius} options={radiiOptions} setSelection={setRadius} />
        <StyledRangeSliderDiv>
          <RangeSliderWithInputs label="Magnitude" valuesRange={magnitudeRange} setValues={setMagnitudeRange} inputProps={{ step: 0.1, min: 6, max: 10, type: 'number' }} />
          <RangeSliderWithInputs label="Rate (1/yr)" valuesRange={rateRange} setValues={setRateRange} inputProps={{ step: 1, min: -20, max: 0, type: 'number' }} />
        </StyledRangeSliderDiv>
      </StyledCustomControlsBar>
      {geoJsonError && <Alert severity="error">{geoJsonError}</Alert>}
      <Box sx={{ ...flexParentCenter, flexDirection: 'row' }}>
        <StyledButton disabled={isPending || !!radiusError} variant="contained" type="submit" onClick={handleSubmit}>
          Submit
        </StyledButton>
        <Fab onClick={handleMapOptionsClick} color="primary" size="small">
          <FileDownloadOutlinedIcon />
        </Fab>
      </Box>
      <Menu anchorEl={mapOptionsAnchorEl} open={mapOptionsOpen} onClose={handleMapOptionsClose}>
        <MenuItem onClick={handleDownload}>Map image</MenuItem>
        <MenuItem onClick={handleClickTraceDownload}>Trace geoJSON</MenuItem>
        <MenuItem onClick={handleClickSurfaceDownload}>Surface geoJSON</MenuItem>
        <MenuItem onClick={handleClickMfdDownload}>MFD data</MenuItem>
      </Menu>
      <Box sx={{ width: '100%', ...flexParentCenter, flexDirection: 'row', marginRight: '10px' }}>
        <MapViewControls initState={{ showSurfaces: true, showAnimation: true, showMfd: true, showTraceLegend: true }} onHandleChange={mapViewControlsDispatch} />
        <Tooltip title={'Sort ruptures for animation'} arrow={true}>
          <Button variant="outlined" onClick={handleSortOptionsClick} sx={{ marginLeft: '10px' }}>
            Animation Options
          </Button>
        </Tooltip>
        <Menu
          anchorEl={sortOptionsAnchorEl}
          open={sortOptionsOpen}
          onClose={handleSortOptionsClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <FormGroup>
            <Box sx={{ width: '100%', ...flexParentCenter, flexDirection: 'row' }}>
              <Box sx={{ margin: '10px' }}>
                <SelectControlWithDisable
                  disabled={!state.showAnimation}
                  name="Sort By 1"
                  selection={sortBy1}
                  setSelection={setSortBy1}
                  options={sortByOptions}
                  tooltip={'Animation must be enabled to sort'}
                  onClose={() => handleSortOptionsClose}
                />
              </Box>
              <Box sx={{ margin: '10px' }}>
                <SelectControlWithDisable
                  disabled={sortBy1 === 'Unsorted' || !state.showAnimation}
                  name="Sort By 2"
                  selection={sortBy2}
                  setSelection={setSortBy2}
                  options={sortByOptions2}
                  tooltip={'then sort by'}
                  onClose={() => handleSortOptionsClose}
                />
              </Box>
            </Box>
          </FormGroup>
        </Menu>
      </Box>
    </Box>
  );
};

export default ComboRuptureMapControls;

export const comboRuptureMapPageControlsQuery = graphql`
  query ComboRuptureMapPageControlsQuery($radiiSetId: Int!, $locationListId: String!) {
    SOLVIS_get_radii_set(radii_set_id: $radiiSetId) {
      radii
    }
    SOLVIS_get_location_list(list_id: $locationListId) {
      locations {
        name
        location_id
      }
    }
    SOLVIS_get_parent_fault_names(model_id: "NSHM_v1.0.4", fault_system: "CRU")
  }
`;
