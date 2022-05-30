import React, { useState, useRef } from 'react';
import { ControlsBar } from '@gns-science/toshi-nest';
import { Button, Box, Typography } from '@mui/material';
import { useReactToPrint } from 'react-to-print';

import HazardCharts from './HazardCharts';
import HazardChartsControls from './HazardChartsControls';
import { getHazardTableOptions } from './hazardPage.service';
import { hazardChartsMockData } from '../../constants/hazardChartsMockData';
import { HazardCurvesSelections } from './hazardCharts.types';

const HazardChartsPage: React.FC = () => {
  const printTargetRef = useRef<HTMLDivElement>(null);
  const hazardTableOptions = getHazardTableOptions(hazardChartsMockData);

  const [hazardCurvesSelections, setHazardCurvesSelections] = useState<HazardCurvesSelections>({
    lat: '',
    lon: '',
    vs30: hazardTableOptions.vs30[0],
    spectralPeriod: hazardTableOptions.spectralPeriod[0],
    POE: 'None',
  });

  const handlePrint = useReactToPrint({
    content: () => printTargetRef.current,
  });

  return (
    <>
      <Typography variant="h1" sx={{ padding: 2, width: '100%', textAlign: 'center' }}>
        Hazard Curves and Spectra
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: 1700 }}>
          <Box sx={{ width: '100%', marginBottom: '20px', marginRight: '2%' }}>
            <HazardChartsControls selections={hazardCurvesSelections} setSelections={setHazardCurvesSelections} />
          </Box>
          {hazardCurvesSelections.lat && hazardCurvesSelections.lon && (
            <Box sx={{ width: '100%' }}>
              <div ref={printTargetRef}>
                <HazardCharts data={hazardChartsMockData} selections={hazardCurvesSelections} />
              </div>
              <Box sx={{ height: 70, marginTop: '20px' }}>
                <ControlsBar>
                  <Button variant="contained">Save</Button>
                  <Button variant="contained" onClick={handlePrint}>
                    Print Figures
                  </Button>
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
