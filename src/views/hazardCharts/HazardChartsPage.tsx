import React from 'react';
import { ControlsBar } from '@gns-science/toshi-nest';
import { Button, Box, Typography } from '@mui/material';

import { hazardChartsData } from '../../constants/hazardChartsData';
import HazardCharts from './HazardCharts';
import HazardChartsControls from './HazardChartsControls';

const HazardChartsPage: React.FC = () => {
  return (
    <>
      <Typography variant="h1" sx={{ padding: 2, width: '100%', textAlign: 'center' }}>
        Hazard Page
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: 1500, display: 'flex' }}>
          <Box sx={{ padding: 10, width: '28%', marginBottom: '70px', border: 'solid black 1px', marginRight: '2%' }}>
            <HazardChartsControls />
          </Box>
          <Box sx={{ width: '70%' }}>
            <HazardCharts data={hazardChartsData} />
            <Box sx={{ height: 70 }}>
              <ControlsBar>
                <Button variant="contained">Save</Button>
                <Button variant="contained">Print Figures</Button>
                <Button variant="contained">Save Data</Button>
              </ControlsBar>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HazardChartsPage;
