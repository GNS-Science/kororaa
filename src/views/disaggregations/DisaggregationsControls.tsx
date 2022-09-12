import React, { useState, useMemo, useEffect } from 'react';
// import { Select, Box } from '@mui/material';
import { SelectControl } from '@gns-science/toshi-nest';

import { DisaggregationsPageQuery$data } from './__generated__/DisaggregationsPageQuery.graphql';
import { DisaggregationsPageState } from './DisaggregationsPageReducer';
import { getVs30Options, getImtOptions, getInvTimeOptions, getLocationOptions, getPoeOptions } from './disaggregationPage.service';
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
  const invTimeOptions = useMemo(() => getInvTimeOptions(data), [data]);
  const imtOptions = useMemo(() => getImtOptions(data), [data]);
  const [vs30, setVs30] = useState<number>(state.vs30);
  const [poe, setPoe] = useState<number>(state.poe);
  const [location, setLocation] = useState<string>(state.location);
  const [invTime, setInvTime] = useState<number>(state.invTime);
  const [imt, setImt] = useState<string>(state.imt);

  useEffect(() => {
    dispatch({ vs30, poe, location, invTime, imt });
  }, [vs30, poe, location, invTime, imt, dispatch]);

  return (
    <CustomControlsBar direction="column">
      <SelectControl name="VS30" options={vs30Options} selection={vs30} setSelection={setVs30} />
      <SelectControl name="POE" options={poeOptions} selection={poe} setSelection={setPoe} />
      <SelectControl name="Location" options={locationOptions} selection={location} setSelection={setLocation} />
      <SelectControl name="Inversion Time" options={invTimeOptions} selection={invTime} setSelection={setInvTime} />
      <SelectControl name="IMT" options={imtOptions} selection={imt} setSelection={setImt} />
    </CustomControlsBar>
  );
};

export default DisaggregationsControls;
