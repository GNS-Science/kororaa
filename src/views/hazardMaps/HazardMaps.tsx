import React from 'react';
import { LeafletMap, ColorBar } from '@gns-science/toshi-nest';
import { Box } from '@mui/material';

import { ColorScale } from './hazardMaps.service';
import { HazardMapsState } from './hazardMapReducer';

interface HazardMapsProps {
  state: HazardMapsState;
  geoJson: string[];
  colorScale: ColorScale | undefined;
  setFullscreen: (value: boolean) => void;
}

const HazardMaps: React.FC<HazardMapsProps> = ({ state, geoJson, setFullscreen, colorScale }: HazardMapsProps) => {
  const zoom = 5;
  const nzCentre = [-40.946, 174.167];

  return (
    <Box id="map" sx={{ width: '100%', height: '700px' }}>
      <LeafletMap geoJsonData={geoJson} zoom={zoom} nzCentre={nzCentre} height={'700px'} width={'100%'} setFullscreen={setFullscreen} />
      {colorScale && (
        <ColorBar
          heading={`Vs30=${state.vs30[0]}m/s, ${state.spectralPeriod[0]} ${state.poe[0] * 100}% in 50 years`}
          width={276}
          height={35}
          colors={colorScale?.hexrgbs}
          tickValues={colorScale?.levels}
          style={{ position: 'relative', zIndex: 1197, top: '-115px', left: 'calc(100% - 319px)' }}
        />
      )}
    </Box>
  );
};

export default HazardMaps;
