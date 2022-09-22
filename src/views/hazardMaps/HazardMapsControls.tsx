import React, { useState } from 'react';
import { Box, Button, styled, TextField } from '@mui/material';
import { SelectControl } from '@gns-science/toshi-nest';
import { toJpeg } from 'html-to-image';

import { flexParentCenter } from '../../utils/styleUtils';
import { getHazardMapCSVData } from './hazardMaps.service';
import { HazardMapsState } from './hazardMapReducer';
import CustomControlsBar from '../../components/common/CustomControlsBar';
import { MAP_COLOR_SCALE, MAP_IMTS, MAP_POES, MAP_STATISTICS, MAP_VS30S } from '../../utils/environmentVariables';
import StyledCSVLink from '../../components/common/StyledCSVLink';
import { getTickValues, parsePoeString, readablePoe, readablePoeArray } from './hazardMaps.service';
import { numbersToStrings } from '../hazardCharts/hazardPage.service';
import { statisticTooltip, colorScaleTooltip, vMaxTooltip } from './constants/hazardMaps';
import { imtTooltip, poeTooltip, vs30Tooltip } from '../../constants/tooltips';

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
  const [spectralPeriod, setSpectralPeriod] = useState<string>(state.spectralPeriod);
  const [statistic, setStatistic] = useState<string>(state.statistic);
  const [vs30, setVs30] = useState<number>(state.vs30);
  const [poe, setPoe] = useState<number>(state.poe);
  const [colorScale, setColorScale] = useState<string>('inferno');
  const [vmax, setVMax] = useState<number>(state.color_scale_vmax);
  const [fillOpacity, setFillOpacity] = useState<string>('0.5');
  const [strokeWidth, setStrokeWidth] = useState<string>('0.1');
  const [strokeOpacity, setStrokeOpacity] = useState<string>('0.5');

  const handleSubmit = () => {
    startTransition(() => {
      dispatch({
        spectralPeriod: spectralPeriod,
        statistic: statistic,
        vs30: vs30,
        poe: poe,
        color_scale: colorScale,
        color_scale_vmax: Number(vmax),
        fill_opacity: Number(fillOpacity),
        stroke_width: Number(strokeWidth),
        stroke_opacity: Number(strokeOpacity),
      });
    });
  };

  const handleDownload = () => {
    const element = document.getElementById('map');
    if (element === null) {
      return;
    }
    toJpeg(element, { quality: 0.95 }).then((dataUrl: string) => {
      const link = document.createElement('a');
      link.download = `hazard map.jpeg`;
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <Box sx={{ width: '100%', ...flexParentCenter, flexDirection: 'column' }}>
      <CustomControlsBar direction="column">
        <SelectControl name="Spectral Period" options={MAP_IMTS} selection={spectralPeriod} setSelection={setSpectralPeriod} tooltip={imtTooltip} />
        <SelectControl name="Statistic" options={MAP_STATISTICS} selection={statistic} setSelection={setStatistic} tooltip={statisticTooltip} />
        <SelectControl name="Vs30 (m/s)" options={MAP_VS30S} selection={vs30.toString()} setSelection={(newValue: string[]) => setVs30(Number(newValue))} tooltip={vs30Tooltip} />
        <SelectControl
          name="Probability of Exceedence"
          options={readablePoeArray(MAP_POES)}
          selection={readablePoe(poe)}
          setSelection={(newValue: string) => setPoe(parsePoeString(newValue))}
          tooltip={poeTooltip}
        />
        <SelectControl name="Color Scale" options={MAP_COLOR_SCALE} selection={colorScale} setSelection={setColorScale} tooltip={colorScaleTooltip} />
        <SelectControl name="VMax" options={numbersToStrings(getTickValues([0, 10]))} selection={vmax} setSelection={setVMax} tooltip={vMaxTooltip} />
        <TextField label="Fill opacity" value={fillOpacity} onChange={(event) => setFillOpacity(event?.target.value)} variant="standard" />
        <TextField label="Stroke opacity" value={strokeOpacity} onChange={(event) => setStrokeOpacity(event?.target.value)} variant="standard" />
        <TextField label="Stroke width" value={strokeWidth} onChange={(event) => setStrokeWidth(event?.target.value)} variant="standard" />
        <StyledButton disabled={isPending} variant="contained" type="submit" onClick={handleSubmit}>
          Submit
        </StyledButton>
        <div>
          <StyledCSVLink data={getHazardMapCSVData(geoJson, state.vs30, state.spectralPeriod, readablePoe(state.poe))} filename="hazard-maps.csv">
            <StyledButton variant="contained" type="submit" color="primary">
              Download CSV
            </StyledButton>
          </StyledCSVLink>
          <StyledButton variant="contained" onClick={handleDownload}>
            Download Image
          </StyledButton>
        </div>
      </CustomControlsBar>
    </Box>
  );
};

export default HazardMapsControls;
