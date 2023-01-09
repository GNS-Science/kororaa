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
import { getLocationKeyFromLocationName } from '../../services/latLon/latLon.service';
import { SolvisResponse } from './FaultModelPage';

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

interface FaultModelOption {
  value: string | null | undefined;
  label: string | null | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value_options: any;
}

interface Branch {
  readonly weight: number | null;
  readonly inversion_solution_id: string | null;
  readonly inversion_solution_type: string | null;
  readonly onfault_nrml_id: string | null;
  readonly distributed_nrml_id: string | null;
  readonly values: ReadonlyArray<{
    readonly long_name: string | null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readonly json_value: any | null;
  } | null> | null;
}

interface Branches {
  readonly branches: ReadonlyArray<Branch | null> | null;
}

interface FaultModelControlsProps {
  startTransition: React.TransitionStartFunction;
  isPending: boolean;
  state: FaultModelState;
  dispatch: React.Dispatch<Partial<FaultModelState>>;
  options: FaultModelOption[] | null | undefined;
  logicTreeBranches: Branches | null | undefined;
  // setSolutionId: (value: string) => void;
  setGeoJson: React.Dispatch<React.SetStateAction<SolvisResponse | null>>;
}

interface solvisLocation {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  population: number;
}

const FaultModelControls: React.FC<FaultModelControlsProps> = ({ startTransition, isPending, state, dispatch, options, logicTreeBranches, setGeoJson }: FaultModelControlsProps) => {
  const [deformationModel, setDeformationModel] = useState<string>('');
  const [timeDependence, setTimeDependence] = useState<string>('');
  const [bNPair, setBNPair] = useState<string>('');
  const [momentScaling, setMomentScaling] = useState<string>('');
  const [areaMagnitudeScaling, setAreaMagnitudeScaling] = useState<string>('');
  const [solutionId, setSolutionId] = useState<string>(state.solutionId);
  const [locations, setLocations] = useState<string[]>(state.locations);
  const [radius, setRadius] = useState<number>(state.radius);
  const [magnitudeRange, setMagnitudeRange] = useState<number[]>(state.magnitudeRange);
  const [rateRange, setRateRange] = useState<number[]>(state.rateRange);
  const [locationOptions, setLocationOptions] = useState<string[]>([]);
  const [radiiOptions, setRadiiOptions] = useState<number[]>([]);
  const deformationModelOptions = JSON.parse(options?.filter((option) => option.value === 'dm')?.[0]?.value_options);
  const timeDependenceOptions = JSON.parse(options?.filter((option) => option.value === 'td')?.[0]?.value_options).map((option: boolean) => (option ? 'True' : 'False'));
  const bNPairOptions = JSON.parse(options?.filter((option) => option.value === 'bN')?.[0]?.value_options).map((option: string[]) => option.join(', '));
  const areaMagnitudeScalingOptions = JSON.parse(options?.filter((option) => option.value === 'C')?.[0]?.value_options);
  const momentRateScalingOptions = JSON.parse(options?.filter((option) => option.value === 's')?.[0]?.value_options);

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

  const getGeoJson = useCallback(() => {
    if (!solutionId) return;
    solvisApiService
      .getSolutionAnalysis(
        solutionId,
        state.locations.map((location) => getLocationKeyFromLocationName(location)).join(','),
        state.radius.toString().replace('km', ''),
        state.magnitudeRange,
        state.rateRange,
      )
      .then((response) => {
        const geoJson = response.data;
        setGeoJson(geoJson);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [solutionId, state.locations, state.radius, state.magnitudeRange, state.rateRange, setGeoJson]);

  useEffect(() => {
    if (solutionId) {
      getGeoJson();
    }
  }, [solutionId, getGeoJson]);

  useEffect(() => {
    getLocationOptions();
    getRadiiOptions();
  }, [getLocationOptions, getRadiiOptions]);

  useEffect(() => {
    const filterSolutionId = (branches: Branches | null | undefined) => {
      if (branches === null || branches === undefined) {
        return [];
      }
      if (branches?.branches !== null && branches?.branches !== undefined) {
        const filteredBranches = branches?.branches
          .filter((branch) => branch !== null && JSON.parse(branch?.values?.find((value) => value?.long_name === 'deformation model')?.json_value) === deformationModel)
          .filter((branch) => branch !== null && JSON.parse(branch?.values?.find((value) => value?.long_name === 'time dependent')?.json_value) === (timeDependence === 'True'))
          .filter((branch) => branch !== null && branch?.values?.find((value) => value?.long_name === 'bN pair')?.json_value === `[${bNPair}]`)
          .filter((branch) => branch !== null && JSON.parse(branch?.values?.find((value) => value?.long_name === 'area-magnitude scaling')?.json_value) === areaMagnitudeScaling)
          .filter((branch) => branch !== null && JSON.parse(branch?.values?.find((value) => value?.long_name === 'moment rate scaling')?.json_value) === momentScaling);
        return filteredBranches;
      }
    };

    const filteredBranches = filterSolutionId(logicTreeBranches);
    if (filteredBranches !== undefined && filteredBranches.length > 0) {
      if (filteredBranches[0]?.inversion_solution_id) {
        setSolutionId(filteredBranches[0]?.inversion_solution_id);
      }
    }
  }, [deformationModel, timeDependence, bNPair, areaMagnitudeScaling, momentScaling, setSolutionId, logicTreeBranches]);

  const handleSubmit = () => {
    startTransition(() => {
      dispatch({
        solutionId: solutionId,
        locations: locations,
        radius: radius,
        magnitudeRange: magnitudeRange,
        rateRange: rateRange,
      });
    });
  };

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
        <SelectControl name="Deformation Model" selection={deformationModel} setSelection={setDeformationModel} options={deformationModelOptions} />
        <SelectControl name="Time Dependence" selection={timeDependence} setSelection={setTimeDependence} options={timeDependenceOptions} />
        <SelectControl name="bN Pair" selection={bNPair} setSelection={setBNPair} options={bNPairOptions} />
        <SelectControl name="Moment Scaling" selection={momentScaling} setSelection={setMomentScaling} options={momentRateScalingOptions} />
        <SelectControl name="Area-Magnitude Scaling" selection={areaMagnitudeScaling} setSelection={setAreaMagnitudeScaling} options={areaMagnitudeScalingOptions} />
        <SelectControlMultiple name="Locations" selection={locations} options={locationOptions} setSelection={setLocations} />
        <SelectControl name="Radii" selection={radius} options={radiiOptions} setSelection={setRadius} />
        <StyledRangeSliderDiv>
          <RangeSliderWithInputs label="Magnitude Range" valuesRange={magnitudeRange} setValues={setMagnitudeRange} inputProps={{ step: 0.1, min: 6, max: 10, type: 'number' }} />
          <RangeSliderWithInputs label="Rate Range (1/yr)" valuesRange={rateRange} setValues={setRateRange} inputProps={{ step: 1, min: -20, max: 0, type: 'number' }} />
        </StyledRangeSliderDiv>
        <StyledButton disabled={isPending} variant="contained" type="submit" onClick={handleSubmit}>
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
