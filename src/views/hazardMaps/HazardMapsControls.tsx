import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { SelectControl } from '@gns-science/toshi-nest';

import { flexParentCenter } from '../../utils/styleUtils';
import { HazardMapsState } from './hazardMapReducer';
import CustomControlsBar from '../../components/common/CustomControlsBar';
import { MAP_COLOR_SCALE, MAP_IMTS, MAP_POES, MAP_STATISTICS, MAP_VS30S } from '../../utils/environmentVariables';
import { getTickValues } from './hazardMaps.service';
import { numbersToStrings } from '../hazardCharts/hazardPage.service';

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
  const [vmax, setVMax] = useState<string>('0');
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
      vmax: Number(vmax),
      fill_opacity: Number(fillOpacity),
      stroke_width: Number(strokeWidth),
      stroke_opacity: Number(strokeOpacity),
    });
  };

  return (
    <Box sx={{ width: '100%', ...flexParentCenter, flexDirection: 'column' }}>
      <CustomControlsBar direction="column">
        <SelectControl name="Spectral Period" options={MAP_IMTS} selection={spectralPeriod} setSelection={setSepectralPeriod} />
        <SelectControl name="Statistic" options={MAP_STATISTICS} selection={statistic} setSelection={setStatistic} />
        <SelectControl name="Vs30" options={MAP_VS30S} selection={vs30.toString()} setSelection={(newValue: string[]) => setVs30(Number(newValue))} />
        <SelectControl name="Probability of Exceedence" options={MAP_POES} selection={poe} setSelection={(newValue: string) => setPoe(newValue)} />
        <SelectControl name="Color Scale" options={MAP_COLOR_SCALE} selection={colorScale} setSelection={setColorScale} />
        <SelectControl name="VMax" options={numbersToStrings(getTickValues([0, 10]))} selection={vmax} setSelection={setVMax} />
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
