import React, { useEffect, useState, useReducer, useMemo } from 'react';
import { Box, Button, styled, Alert, Fab, Menu, MenuItem } from '@mui/material';
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
import { geoJSON } from 'leaflet';
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

const sortDict: SortDict = {
  Unsorted: null,
  Magnitude: { attribute: 'magnitude', ascending: false },
  'Rate (weighted mean)': { attribute: 'rate_weighted_mean', ascending: false },
  'Rate (maximum)': { attribute: 'rate_max', ascending: false },
  'Rate (minimum)': { attribute: 'rate_min', ascending: false },
};

const faultSystemOptions = ['Crustal', 'Hikurangi', 'Puysegur'];

interface ComboRuptureMapControlsProps {
  startTransition: React.TransitionStartFunction;
  isPending: boolean;
  dispatch: React.Dispatch<Partial<ComboRuptureMapPageState>>;
  geoJsonError: string | null;
  state: ComboRuptureMapPageState;
  ruptureSectionsGeojson: typeof GeoJsonObject;
}

const ComboRuptureMapControls: React.FC<ComboRuptureMapControlsProps> = ({ startTransition, isPending, dispatch, geoJsonError, state, ruptureSectionsGeojson }: ComboRuptureMapControlsProps) => {
  const [faultSystem, setFaultSystem] = useState<string>('Crustal');
  const [locations, setLocations] = useState<string[]>([]);
  const [locationOptions, setLocationOptions] = useState<string[]>([]);
  const [locationIdArray, setLocationIdArray] = useState<string[]>([]);
  const [radiiOptions, setRadiiOptions] = useState<string[]>([]);
  const [magnitudeRange, setMagnitudeRange] = useState<number[]>([6, 10]);
  const [rateRange, setRateRange] = useState<number[]>([-20, 0]);
  const [radius, setRadius] = useState<string>('');
  const [radiusError, setRadiusError] = useState<string | null>(null);
  const [mapViewControlsState, mapViewControlsDispatch] = useReducer(mapViewControlsReducer, { showSurfaces: true, showAnimation: true, showMfd: true, showTraceLegend: true });
  const [sortBy1, setSortBy1] = useState<string>('Unsorted');
  const [sortBy2, setSortBy2] = useState<string>('');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const data = useLazyLoadQuery<ComboRuptureMapPageControlsQuery>(comboRuptureMapPageControlsQuery, { radiiSetId: SOLVIS_RADII_ID, locationListId: SOLVIS_LOCATION_LIST });
  const locationData = data?.SOLVIS_get_location_list?.locations;
  const radiiData = data?.SOLVIS_get_radii_set?.radii;

  const sortByOptions = useMemo(() => ['Unsorted', 'Magnitude', 'Rate (weighted mean)', 'Rate (maximum)', 'Rate (minimum)'], []);
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

  //download ruptureSectionsGeojson as geojson file
  const handleDownloadGeojson = () => {
    const a = document.createElement('a');
    const file = new Blob([JSON.stringify(ruptureSectionsGeojson)], { type: geoJSON });
    a.href = URL.createObjectURL(file);
    a.download = 'ruptureSections.geojson';
    a.click();
  };

  const handleSubmit = async () => {
    startTransition(() => {
      dispatch({
        faultSystem: faultSystem,
        locationCodes: locationIdArray,
        radius: Number(radius.replace('km', '')),
        magnitudeRange: magnitudeRange,
        rateRange: rateRange.map((rate) => Math.pow(10, rate)),
        sortby: sortByFormatted,
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
        <SelectControlMultiple name="Locations" selection={locations} options={locationOptions} setSelection={setLocations} />
        <SelectControlWithDisable disabled={locations.length === 0} name="Radius" selection={radius} options={radiiOptions} setSelection={setRadius} />
        <MapViewControls initState={{ showSurfaces: true, showAnimation: true, showMfd: true, showTraceLegend: true }} onHandleChange={mapViewControlsDispatch} />
        <StyledRangeSliderDiv>
          <RangeSliderWithInputs label="Magnitude Range" valuesRange={magnitudeRange} setValues={setMagnitudeRange} inputProps={{ step: 0.1, min: 6, max: 10, type: 'number' }} />
          <RangeSliderWithInputs label="Rate Range (1/yr)" valuesRange={rateRange} setValues={setRateRange} inputProps={{ step: 1, min: -20, max: 0, type: 'number' }} />
        </StyledRangeSliderDiv>
        <SelectControlWithDisable
          disabled={!state.showAnimation}
          name="Sort By 1"
          selection={sortBy1}
          setSelection={setSortBy1}
          options={sortByOptions}
          tooltip={'Animation must be enabled to sort'}
        />
        <SelectControlWithDisable
          disabled={sortBy1 === 'Unsorted' || !state.showAnimation}
          name="Sort By 2"
          selection={sortBy2}
          setSelection={setSortBy2}
          options={sortByOptions2}
          tooltip={'then sort by'}
        />
      </StyledCustomControlsBar>
      {geoJsonError && <Alert severity="error">{geoJsonError}</Alert>}
      <StyledButton disabled={isPending || !!radiusError} variant="contained" type="submit" onClick={handleSubmit}>
        Submit
      </StyledButton>
      <Fab onClick={handleClick} color="primary" sx={{ marginBottom: 2 }}>
        <FileDownloadOutlinedIcon />
      </Fab>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleDownload}>Map image</MenuItem>
        <MenuItem onClick={handleDownloadGeojson}>Faults Geojson</MenuItem>
      </Menu>
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
  }
`;
