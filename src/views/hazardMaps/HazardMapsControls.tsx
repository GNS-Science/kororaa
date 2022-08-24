import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { SelectControl } from '@gns-science/toshi-nest';

import { hazardPageOptions } from '../hazardCharts/constants/hazardPageOptions';
import { flexParentCenter } from '../../utils/styleUtils';
import { numbersToStrings } from '../hazardCharts/hazardPage.service';
import { HazardMapsState } from './hazardMapReducer';
import CustomControlsBar from '../../components/common/CustomControlsBar';
import { MAP_COLOR_SCALE } from '../../utils/environmentVariables';

interface HazardMapsControlsProps {
  state: HazardMapsState;
  dispatch: React.Dispatch<Partial<HazardMapsState>>;
}

const HazardMapsControls: React.FC<HazardMapsControlsProps> = ({ state, dispatch }: HazardMapsControlsProps) => {
  const [spectralPeriod, setSepectralPeriod] = useState<string>(state.spectralPeriod[0]);
  const [statistic, setStatistic] = useState<string>(state.statistic[0]);
  const [vs30, setVs30] = useState<number>(state.vs30[0]);
  const [poe, setPoe] = useState<string>(state.poe[0]);
  const [colorScale, setColorScale] = useState<string>('inferno');
  const [vmax, setVMax] = useState<string>('2.0');
  const [fillOpacity, setFillOpacity] = useState<string>('0.5');
  const [strokeWidth, setStrokeWidth] = useState<string>('0.1');
  const [strokeOpacity, setStrokeOpacity] = useState<string>('0.5');

  const handleSubmit = () => {
    dispatch({
      spectralPeriod: [spectralPeriod],
      statistic: [statistic],
      vs30: [vs30],
      poe: [poe],
      color_scale: colorScale,
      color_scale_vmax: Number(vmax),
      fill_opacity: Number(fillOpacity),
      stroke_width: Number(strokeWidth),
      stroke_opacity: Number(strokeOpacity),
    });
  };

  return (
    <Box sx={{ width: '100%', ...flexParentCenter, flexDirection: 'column' }}>
      <CustomControlsBar direction="column">
        <SelectControl name="Spectral Period" options={['PGA', 'SA(0.1)', 'SA(0.5)', 'SA(1.0)']} selection={spectralPeriod} setSelection={setSepectralPeriod} />
        <SelectControl name="Statistic" options={['mean']} selection={statistic} setSelection={setStatistic} />
        <SelectControl name="Vs30" options={numbersToStrings(hazardPageOptions.vs30s)} selection={vs30.toString()} setSelection={(newValue: string[]) => setVs30(Number(newValue))} />
        <SelectControl name="Probability of Exceedence" options={['10% in 50 years', '2% in 50 years']} selection={poe} setSelection={(newValue: string) => setPoe(newValue)} />
        <SelectControl name="Color Scale" options={MAP_COLOR_SCALE} selection={colorScale} setSelection={setColorScale} />
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
