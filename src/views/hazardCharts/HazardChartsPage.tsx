import React, { useState } from 'react';
import { ControlsBar } from '@gns-science/toshi-nest';
import { Button, Box, Typography } from '@mui/material';

import HazardCharts from './HazardCharts';
import HazardChartsControls from './HazardChartsControls';
import { getHazardTableOptions } from '../../services/hazardPage.service';
import { hazardChartsMockData } from '../../constants/hazardChartsMockData';
import { HazardCurvesSelections } from './hazardCharts.types';

const HazardChartsPage: React.FC = () => {
  const hazardTableOptions = getHazardTableOptions(hazardChartsMockData);

  const [hazardCurvesSelections, setHazardCurvesSelections] = useState<HazardCurvesSelections>({
    lat: '',
    lon: '',
    vs30: hazardTableOptions.vs30[0],
    spectralPeriod: hazardTableOptions.spectralPeriod[0],
    POE: 'None',
  });

  return (
    <>
      <Typography variant="h1" sx={{ padding: 2, width: '100%', textAlign: 'center' }}>
        Hazard Page
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: 1500, display: 'flex' }}>
          <Box sx={{ padding: 10, width: '28%', marginBottom: '70px', border: 'solid black 1px', marginRight: '2%' }}>
            <HazardChartsControls selections={hazardCurvesSelections} setSelections={setHazardCurvesSelections} />
          </Box>
          {hazardCurvesSelections.lat && hazardCurvesSelections.lon && (
            <Box sx={{ width: '70%' }}>
              <HazardCharts data={hazardChartsMockData} selections={hazardCurvesSelections} />
              <Box sx={{ height: 70 }}>
                <ControlsBar>
                  <Button variant="contained">Save</Button>
                  <Button variant="contained">Print Figures</Button>
                  <Button variant="contained">Save Data</Button>
                </ControlsBar>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default HazardChartsPage;
