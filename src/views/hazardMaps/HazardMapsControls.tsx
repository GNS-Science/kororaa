import React, { useState } from 'react';
import { Box, Button, styled, TextField } from '@mui/material';
import { SelectControl } from '@gns-science/toshi-nest';

import { flexParentCenter } from '../../utils/styleUtils';
import { getHazardMapCSVData } from './hazardMaps.service';
import { HazardMapsState } from './hazardMapReducer';
import CustomControlsBar from '../../components/common/CustomControlsBar';
import { MAP_COLOR_SCALE, MAP_IMTS, MAP_POES, MAP_STATISTICS, MAP_VS30S } from '../../utils/environmentVariables';
import StyledCSVLink from '../../components/common/StyledCSVLink';

const StyledButton = styled(Button)(() => ({
  margin: '0 0 0 10px',
}));

interface HazardMapsControlsProps {
  startTransition: React.TransitionStartFunction;
  isPending: boolean;
  geoJson: string[];
  state: HazardMapsState;
  dispatch: React.Dispatch<Partial<HazardMapsState>>;
}

const HazardMapsControls: React.FC<HazardMapsControlsProps> = ({ startTransition, isPending, geoJson, state, dispatch }: HazardMapsControlsProps) => {
  const [spectralPeriod, setSpectralPeriod] = useState<string>(state.spectralPeriod[0]);
  const [statistic, setStatistic] = useState<string>(state.statistic[0]);
  const [vs30, setVs30] = useState<number>(state.vs30[0]);
  const [poe, setPoe] = useState<string>(state.poe[0]);
  const [colorScale, setColorScale] = useState<string>('inferno');
  const [vmax, setVMax] = useState<string>('2.0');
  const [fillOpacity, setFillOpacity] = useState<string>('0.5');
  const [strokeWidth, setStrokeWidth] = useState<string>('0.1');
  const [strokeOpacity, setStrokeOpacity] = useState<string>('0.5');

  const handleSubmit = () => {
    startTransition(() => {
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
    });
  };

  return (
    <Box sx={{ width: '100%', ...flexParentCenter, flexDirection: 'column' }}>
      <CustomControlsBar direction="column">
        <SelectControl name="Spectral Period" options={MAP_IMTS} selection={spectralPeriod} setSelection={setSpectralPeriod} />
        <SelectControl name="Statistic" options={MAP_STATISTICS} selection={statistic} setSelection={setStatistic} />
        <SelectControl name="Vs30" options={MAP_VS30S} selection={vs30.toString()} setSelection={(newValue: string[]) => setVs30(Number(newValue))} />
        <SelectControl name="Probability of Exceedence" options={MAP_POES} selection={poe} setSelection={(newValue: string) => setPoe(newValue)} />
        <SelectControl name="Color Scale" options={MAP_COLOR_SCALE} selection={colorScale} setSelection={setColorScale} />
        <TextField label="Color scale vMax" value={vmax} onChange={(event) => setVMax(event?.target.value)} variant="standard" />
        <TextField label="Fill opacity" value={fillOpacity} onChange={(event) => setFillOpacity(event?.target.value)} variant="standard" />
        <TextField label="Stroke opacity" value={strokeOpacity} onChange={(event) => setStrokeOpacity(event?.target.value)} variant="standard" />
        <TextField label="Stroke width" value={strokeWidth} onChange={(event) => setStrokeWidth(event?.target.value)} variant="standard" />
        <div>
          <StyledButton disabled={isPending} variant="contained" type="submit" onClick={handleSubmit}>
            Submit
          </StyledButton>
          <StyledCSVLink data={getHazardMapCSVData(geoJson, state.vs30[0], state.spectralPeriod[0], state.poe[0])} filename="hazard-maps.csv">
            <StyledButton variant="contained" type="submit" color="primary">
              Download CSV
            </StyledButton>
          </StyledCSVLink>
        </div>
      </CustomControlsBar>
    </Box>
  );
};

export default HazardMapsControls;
