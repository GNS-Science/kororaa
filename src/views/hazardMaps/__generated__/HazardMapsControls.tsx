import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

import SelectControlMultiple from '../../../components/common/SelectControlMultiple';
import { hazardPageOptions } from '../../hazardCharts/constants/hazardPageOptions';
import { flexParentCenter } from '../../../utils/styleUtils';
import { numbersToStrings, stringsToNumbers } from '../../hazardCharts/hazardPage.service';
import { HazardMapsState } from '../hazardMapReducer';

interface HazardMapsControlsProps {
  state: HazardMapsState;
  dispatch: React.Dispatch<Partial<HazardMapsState>>;
}

const HazardMapsControls: React.FC<HazardMapsControlsProps> = ({ state, dispatch }: HazardMapsControlsProps) => {
  const [imts, setImts] = useState<string[]>(state.imts);
  const [aggs, setAggs] = useState<string[]>(state.aggs);
  const [vs30s, setVs30s] = useState<number[]>(state.vs30s);
  const [poes, setPoes] = useState<number[]>(state.poes);

  const handleSubmit = () => {
    dispatch({ imts, aggs, vs30s, poes });
  };

  return (
    <Box sx={{ width: '100%', ...flexParentCenter, flexDirection: 'column' }}>
      <SelectControlMultiple name="Imts" options={['PGA', 'SA(0.1)', 'SA(0.5)', 'SA(1.0)']} selection={imts} setSelection={setImts} />
      <SelectControlMultiple name="Aggs" options={['mean']} selection={aggs} setSelection={setAggs} />
      <SelectControlMultiple
        name="Vs30s"
        options={numbersToStrings(hazardPageOptions.vs30s)}
        selection={numbersToStrings(vs30s)}
        setSelection={(newValue: string[]) => setVs30s(stringsToNumbers(newValue))}
      />
      <SelectControlMultiple name="poes" options={['0.1', '0.02']} selection={numbersToStrings(poes)} setSelection={(newValue: string[]) => setPoes(stringsToNumbers(newValue))} />
      <Button variant="contained" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default HazardMapsControls;
