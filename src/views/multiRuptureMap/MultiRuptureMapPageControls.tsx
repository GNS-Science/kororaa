import React, { useEffect, useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import { RangeSliderWithInputs } from '@gns-science/toshi-nest';
import { toPng } from 'html-to-image';
import { useLazyLoadQuery } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { SelectControl } from '@gns-science/toshi-nest';

import { flexParentCenter } from '../../utils/styleUtils';
import CustomControlsBar from '../../components/common/CustomControlsBar';
import { SOLVIS_RADII_ID, SOLVIS_LOCATION_LIST, HAZARD_MODEL_ID } from '../../utils/environmentVariables';
import SelectControlMultiple from '../../components/common/SelectControlMultiple';
import SelectControlWithDisable from '../../components/common/SelectControlWithDisable';
import { MultiRuptureMapPageControlsQuery } from './__generated__/MultiRuptureMapPageControlsQuery.graphql';
import { MultiRuptureMapPageState } from './multiRuptureMapPageReducer';

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

const faultSystemOptions = ['Crustal', 'Hikurangi', 'Puysegur'];

interface MultiRuptureMapControlsProps {
  startTransition: React.TransitionStartFunction;
  isPending: boolean;
  dispatch: React.Dispatch<Partial<MultiRuptureMapPageState>>;
}

const MultiRuptureMapControls: React.FC<MultiRuptureMapControlsProps> = ({ startTransition, isPending, dispatch }: MultiRuptureMapControlsProps) => {
  const [faultSystem, setFaultSystem] = useState<string>('Crustal');
  const [locations, setLocations] = useState<string[]>([]);
  const [locationOptions, setLocationOptions] = useState<string[]>([]);
  const [locationIdArray, setLocationIdArray] = useState<string[]>([]);
  const [radiiOptions, setRadiiOptions] = useState<string[]>([]);
  const [magnitudeRange, setMagnitudeRange] = useState<number[]>([6, 10]);
  const [rateRange, setRateRange] = useState<number[]>([-20, 0]);
  const [radius, setRadius] = useState<string>('');
  const [radiusError, setRadiusError] = useState<string | null>(null);

  const data = useLazyLoadQuery<MultiRuptureMapPageControlsQuery>(multiRuptureMapPageControlsQuery, { radiiSetId: SOLVIS_RADII_ID, locationListId: SOLVIS_LOCATION_LIST });
  const locationData = data?.SOLVIS_get_location_list?.locations;
  const radiiData = data?.SOLVIS_get_radii_set?.radii;

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
      link.download = `hazard map-${HAZARD_MODEL_ID}.png`;
      link.href = dataUrl;
      link.click();
    });
  };

  const handleSubmit = async () => {
    startTransition(() => {
      dispatch({
        faultSystem: faultSystem,
        locationCodes: locationIdArray,
        radius: Number(radius.replace('km', '')),
        magnitudeRange: magnitudeRange,
        rateRange: rateRange.map((rate) => Math.pow(10, rate)),
      });
    });
  };

  return (
    <Box sx={{ width: '100%', ...flexParentCenter, flexDirection: 'column' }}>
      <StyledCustomControlsBar direction="column">
        <SelectControl name="Fault System" selection={faultSystem} setSelection={setFaultSystem} options={faultSystemOptions} tooltip={'fault system'} />
        <SelectControlMultiple name="Locations" selection={locations} options={locationOptions} setSelection={setLocations} />
        <SelectControlWithDisable disabled={locations.length === 0} name="Radius" selection={radius} options={radiiOptions} setSelection={setRadius} />
        <StyledRangeSliderDiv>
          <RangeSliderWithInputs label="Magnitude Range" valuesRange={magnitudeRange} setValues={setMagnitudeRange} inputProps={{ step: 0.1, min: 6, max: 10, type: 'number' }} />
          <RangeSliderWithInputs label="Rate Range (1/yr)" valuesRange={rateRange} setValues={setRateRange} inputProps={{ step: 1, min: -20, max: 0, type: 'number' }} />
        </StyledRangeSliderDiv>
      </StyledCustomControlsBar>
      <StyledButton disabled={isPending || !!radiusError} variant="contained" type="submit" onClick={handleSubmit}>
        Submit
      </StyledButton>
      <StyledButton variant="contained" onClick={handleDownload}>
        Download Image
      </StyledButton>
    </Box>
  );
};

export default MultiRuptureMapControls;

export const multiRuptureMapPageControlsQuery = graphql`
  query MultiRuptureMapPageControlsQuery($radiiSetId: Int!, $locationListId: String!) {
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
