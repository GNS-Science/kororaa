import React from 'react';
import { LeafletMap, ColorBar } from '@gns-science/toshi-nest';
import { Box } from '@mui/material';

import { ColorScale } from './hazardMaps.service';
import { HazardMapsState } from './hazardMapReducer';

interface HazardMapsProps {
  state: HazardMapsState;
  geoJson: string[];
  colorScale: ColorScale | undefined;
  fullscreen: boolean;
  setFullscreen: (value: boolean) => void;
}

const HazardMaps: React.FC<HazardMapsProps> = ({ state, geoJson, fullscreen, setFullscreen, colorScale }: HazardMapsProps) => {
  const zoom = 5;
  const nzCentre = [-40.946, 174.167];

  return (
    <Box id="map" sx={{ width: '100%', height: '80vh' }}>
      <LeafletMap geoJsonData={geoJson} zoom={zoom} nzCentre={nzCentre} height={'80vh'} width={'100%'} setFullscreen={setFullscreen} />
      {colorScale && (
        <ColorBar
          heading={`Vs30=${state.vs30}m/s, ${state.spectralPeriod} ${state.poe * 100}% in 50 years`}
          width={276}
          height={35}
          colors={colorScale?.hexrgbs}
          tickValues={colorScale?.levels}
          style={
            !fullscreen ? { position: 'relative', zIndex: 119700, top: '-115px', left: 'calc(100% - 319px)' } : { position: 'absolute', zIndex: 119700, bottom: '14px', left: 'calc(100% - 319px)' }
          }
        />
      )}
    </Box>
  );
};

export default HazardMaps;
