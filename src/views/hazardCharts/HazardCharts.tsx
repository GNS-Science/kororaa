import React from 'react';
import { Box } from '@mui/material';
import { ResponsiveHazardCurves, SpectralAccelerationChartResponsive } from '@gns-science/toshi-nest';

import { getHazardTableOptions, getColor, getCurves, getSpectralAccelerationData } from '../../services/hazardPage.service';
import { HazardCurvesSelections } from './hazardCharts.types';
import { HazardChartsMockData } from '../../constants/hazardChartsMockData';

interface HazardChartsProps {
  data: HazardChartsMockData;
  selections: HazardCurvesSelections;
}

const HazardCharts: React.FC<HazardChartsProps> = ({ data, selections }: HazardChartsProps) => {
  const hazardPageOption = getHazardTableOptions(data);

  const curve = getCurves(data, selections, [selections.spectralPeriod]);
  const color = getColor(curve);

  const allCurves = getCurves(data, selections, hazardPageOption.spectralPeriod);

  const SAdata = getSpectralAccelerationData(hazardPageOption.spectralPeriod, selections.POE, allCurves);

  const scalesConfig = {
    x: { type: 'log', domain: [1e-3, 10] },
    y: { type: 'log', domain: [1e-5, 1] },
  };

  return (
    <Box sx={{ paddingLeft: 20, paddingRight: 20, width: '100%', border: 'solid black 1px' }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <ResponsiveHazardCurves curves={curve} scalesConfig={scalesConfig} colors={color} heading={'Responsive Hazard Curves'} subHeading={'subHeading'} gridNumTicks={10} POE={selections.POE} />
      </div>
      {selections.POE !== 'None' && (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <SpectralAccelerationChartResponsive data={SAdata} heading={'Spectral Acceleration Chart Responsive'} subHeading={'subHeading'} />
        </div>
      )}
    </Box>
  );
};

export default HazardCharts;
