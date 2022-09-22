import React, { useState, useMemo, useEffect } from 'react';
import { SelectControl } from '@gns-science/toshi-nest';

import { DisaggregationsPageQuery$data } from './__generated__/DisaggregationsPageQuery.graphql';
import { DisaggregationsPageState } from './DisaggregationsPageReducer';
import { getVs30Options, getImtOptions, getLocationOptions, getPoeOptions } from './disaggregationPage.service';
import { readablePoe, readablePoeArray, parsePoeString } from '../hazardMaps/hazardMaps.service';
import CustomControlsBar from '../../components/common/CustomControlsBar';

export interface DisaggregationsControlsProps {
  data: DisaggregationsPageQuery$data;
  state: DisaggregationsPageState;
  dispatch: React.Dispatch<Partial<DisaggregationsPageState>>;
}

export const DisaggregationsControls: React.FC<DisaggregationsControlsProps> = ({ data, state, dispatch }: DisaggregationsControlsProps) => {
  const vs30Options = useMemo(() => getVs30Options(data), [data]);
  const poeOptions = useMemo(() => getPoeOptions(data), [data]);
  const locationOptions = useMemo(() => getLocationOptions(data), [data]);
  const imtOptions = useMemo(() => getImtOptions(data), [data]);
  const [vs30, setVs30] = useState<number>(state.vs30);
  const [poe, setPoe] = useState<number>(state.poe);
  const [location, setLocation] = useState<string>(state.location);
  const [imt, setImt] = useState<string>(state.imt);

  useEffect(() => {
    dispatch({ vs30, poe, location, imt });
  }, [vs30, poe, location, imt, dispatch]);

  return (
    <CustomControlsBar direction="column">
      <SelectControl name="Location" options={locationOptions.sort()} selection={location} setSelection={setLocation} />
      <SelectControl name="Vs30" options={vs30Options} selection={vs30} setSelection={setVs30} />
      <SelectControl name="Spectral Period" options={imtOptions} selection={imt} setSelection={setImt} />
      <SelectControl name="PoE" options={readablePoeArray(poeOptions as number[])} selection={readablePoe(poe)} setSelection={(newValue: string) => setPoe(parsePoeString(newValue))} />
    </CustomControlsBar>
  );
};

export default DisaggregationsControls;
