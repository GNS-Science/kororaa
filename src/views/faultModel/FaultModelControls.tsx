import React, { useEffect, useState, useCallback } from 'react';
import { Box, Button, styled } from '@mui/material';
import { SelectControl, RangeSliderWithInputs } from '@gns-science/toshi-nest';
import { toPng } from 'html-to-image';
import { AxiosError } from 'axios';
import { flexParentCenter } from '../../utils/styleUtils';
import { FaultModelState } from './faultModelReducer';
import CustomControlsBar from '../../components/common/CustomControlsBar';
import { solvisApiService } from './faultModel.service';
import SelectControlMultiple from '../../components/common/SelectControlMultiple';

const StyledButton = styled(Button)(() => ({
  margin: '0 0 0 10px',
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

interface FaultModelControlsProps {
  startTransition: React.TransitionStartFunction;
  isPending: boolean;
  geoJson: string[];
  state: FaultModelState;
  dispatch: React.Dispatch<Partial<FaultModelState>>;
  options:
    | ({
        readonly name: string | null;
        readonly long_name: string | null;
        readonly value_options: string | null;
      } | null)[]
    | null
    | undefined;
}

interface solvisLocation {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  population: number;
}

const FaultModelControls: React.FC<FaultModelControlsProps> = ({ startTransition, isPending, geoJson, state, dispatch, options }: FaultModelControlsProps) => {
  const [slipRate, setSlipRate] = useState<string>(state.slipRate);
  const [timeDependence, setTimeDependence] = useState<string>(state.timeDependence);
  const [mfdValue, setMfdValue] = useState<string>(state.mfdValue);
  const [momentScaling, setMomentScaling] = useState<string>(state.momentScaling);
  const [locations, setLocations] = useState<string[]>(state.locations);
  const [radius, setRadius] = useState<number>(state.radius);
  const [magnitudeRange, setMagnitudeRange] = useState<number[]>(state.magnitudeRange);
  const [rateRange, setRateRange] = useState<number[]>(state.rateRange);
  const [locationOptions, setLocationOptions] = useState<string[]>([]);
  const [radiiOptions, setRadiiOptions] = useState<number[]>([]);

  const getLocationOptions = useCallback(() => {
    solvisApiService
      .getLocationList()
      .then((locations) => {
        setLocationOptions(locations.data.map((location: solvisLocation) => location.name));
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          console.log(`Error: ${error.response.status}`);
        } else if (error.request) {
          console.log(`Error: request failed`);
        } else {
          console.log(`Error: ${error.message}`);
        }
      });
  }, []);

  const getRadiiOptions = useCallback(() => {
    solvisApiService
      .getRadiiList()
      .then((radii) => {
        setRadiiOptions(radii.data.radii.map((radius: number) => `${radius / 1000}km`));
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          console.log(`Error: ${error.response.status}`);
        } else if (error.request) {
          console.log(`Error: request failed`);
        } else {
          console.log(`Error: ${error.message}`);
        }
      });
  }, []);

  useEffect(() => {
    getLocationOptions();
    getRadiiOptions();
  }, [getLocationOptions, getRadiiOptions]);

  const handleDownload = () => {
    const element = document.getElementById('map');
    if (element === null) {
      return;
    }
    toPng(element, { quality: 0.95 }).then((dataUrl: string) => {
      const link = document.createElement('a');
      link.download = `hazard map.png`;
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <Box sx={{ width: '100%', ...flexParentCenter, flexDirection: 'column' }}>
      <CustomControlsBar direction="column">
        <SelectControl name="Slip Rate" value={slipRate} onChange={setSlipRate} options={['1', '2', '3', '4', '5']} />
        <SelectControl name="Time Dependence" value={timeDependence} onChange={setTimeDependence} options={['1', '2', '3', '4', '5']} />
        <SelectControl name="MFD Value" value={mfdValue} onChange={setMfdValue} options={['1', '2', '3', '4', '5']} />
        <SelectControl name="Moment Scaling" value={momentScaling} onChange={setMomentScaling} options={['1', '2', '3', '4', '5']} />
        <SelectControlMultiple name="Locations" selection={locations} options={locationOptions} setSelection={setLocations} />
        <SelectControl name="Radii" selection={radius} options={radiiOptions} setSelection={setRadius} />
        <StyledRangeSliderDiv>
          <RangeSliderWithInputs label="Magnitude Range" valuesRange={magnitudeRange} setValues={setMagnitudeRange} inputProps={{ step: 0.1, min: 6, max: 10, type: 'number' }} />
          <RangeSliderWithInputs label="Rate Range (1/yr)" valuesRange={rateRange} setValues={setRateRange} inputProps={{ step: 0.1, min: -20, max: 0, type: 'number' }} />
        </StyledRangeSliderDiv>
        <StyledButton disabled={isPending} variant="contained" type="submit" onClick={() => console.log('submit')}>
          Submit
        </StyledButton>
        <StyledButton disabled={isPending} variant="contained" onClick={handleDownload}>
          Download Image
        </StyledButton>
      </CustomControlsBar>
    </Box>
  );
};

export default FaultModelControls;
