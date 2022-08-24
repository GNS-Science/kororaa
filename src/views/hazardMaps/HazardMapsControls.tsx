import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { SelectControl } from '@gns-science/toshi-nest';

import { hazardPageOptions } from '../hazardCharts/constants/hazardPageOptions';
import { flexParentCenter } from '../../utils/styleUtils';
import { numbersToStrings } from '../hazardCharts/hazardPage.service';
import { HazardMapsState } from './hazardMapReducer';
import CustomControlsBar from '../../components/common/CustomControlsBar';

interface HazardMapsControlsProps {
  state: HazardMapsState;
  dispatch: React.Dispatch<Partial<HazardMapsState>>;
}

const HazardMapsControls: React.FC<HazardMapsControlsProps> = ({ state, dispatch }: HazardMapsControlsProps) => {
  const [imts, setImts] = useState<string>(state.imts[0]);
  const [aggs, setAggs] = useState<string>(state.aggs[0]);
  const [vs30s, setVs30s] = useState<number>(state.vs30s[0]);
  const [poes, setPoes] = useState<number>(state.poes[0]);
  const [colorScale, setColorScale] = useState<string>('inferno');
  const [vmax, setVMax] = useState<string>('2.0');
  const [fillOpacity, setFillOpacity] = useState<string>('0.5');
  const [strokeWidth, setStrokeWidth] = useState<string>('0.1');
  const [strokeOpacity, setStrokeOpacity] = useState<string>('0.5');

  const handleSubmit = () => {
    dispatch({ imts: [imts], aggs: [aggs], vs30s: [vs30s], poes: [poes] });
  };

  return (
    <Box sx={{ width: '100%', ...flexParentCenter, flexDirection: 'column' }}>
      <CustomControlsBar direction="column">
        <SelectControl name="Imts" options={['PGA', 'SA(0.1)', 'SA(0.5)', 'SA(1.0)']} selection={imts} setSelection={setImts} />
        <SelectControl name="Aggs" options={['mean']} selection={aggs} setSelection={setAggs} />
        <SelectControl name="Vs30s" options={numbersToStrings(hazardPageOptions.vs30s)} selection={vs30s.toString()} setSelection={(newValue: string[]) => setVs30s(Number(newValue))} />
        <SelectControl name="Poes" options={['0.1', '0.02']} selection={poes.toString()} setSelection={(newValue: string[]) => setPoes(Number(newValue))} />
        <SelectControl name="Color Scale" options={process.env.REACT_APP_MAP_COLOR_SCALE?.split(',')} selection={colorScale} setSelection={setColorScale} />
        <TextField label="Color scale vMax" value={vmax} onChange={(event) => setVMax(event?.target.value)} variant="standard" />
        <TextField label="Fill opacity" value={fillOpacity} onChange={(event) => setFillOpacity(event?.target.value)} variant="standard" />
        <TextField label="Stroke opacity" value={strokeOpacity} onChange={(event) => setStrokeOpacity(event?.target.value)} variant="standard" />
        <TextField label="Stroke width" value={strokeWidth} onChange={(event) => setStrokeWidth(event?.target.value)} variant="standard" />
        <Button sx={{ margin: 2 }} variant="contained" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </CustomControlsBar>
    </Box>
  );
};

export default HazardMapsControls;
