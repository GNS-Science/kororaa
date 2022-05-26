import React from 'react';
import { Box } from '@mui/material';
import { ResponsiveHazardCurves, SpectralAccelerationChartResponsive } from '@gns-science/toshi-nest';

import { getHazardTableOptions, filterMultipleCurves, getSpectralAccelerationData } from '../../services/hazardPage.service';
import { HazardData } from '../../constants/hazardChartsData';

interface HazardChartsProps {
  data: HazardData;
}

const HazardCharts: React.FC<HazardChartsProps> = ({ data }: HazardChartsProps) => {
  const hazardPageOption = getHazardTableOptions(data);

  const allCurves = filterMultipleCurves(
    hazardPageOption.PGA,
    data,
    hazardPageOption.locations[0],
    hazardPageOption.forecastTimes[0],
    hazardPageOption.gmpe[0],
    hazardPageOption.backgroundSeismicity[0],
  );

  const SAdata = getSpectralAccelerationData(hazardPageOption.PGA, 0.02, allCurves);

  const scalesConfig = {
    x: { type: 'log', domain: [1e-3, 10] },
    y: { type: 'log', domain: [1e-5, 1] },
  };

  const colors = {
    PGA: '#000000',
  };
  return (
    <Box sx={{ paddingLeft: 20, paddingRight: 20, width: '100%', border: 'solid black 1px' }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <ResponsiveHazardCurves
          curves={{ PGA: allCurves.PGA }}
          scalesConfig={scalesConfig}
          colors={colors}
          heading={'Responsive Hazard Curves'}
          subHeading={'subHeading'}
          gridNumTicks={10}
          POE={'2%'}
        />
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <SpectralAccelerationChartResponsive data={SAdata} heading={'Spectral Acceleration Chart Responsive'} subHeading={'subHeading'} />
      </div>
    </Box>
  );
};

export default HazardCharts;
