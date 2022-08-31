import React from 'react';
import { LeafletMap, ColorBar } from '@gns-science/toshi-nest';
import { Box } from '@mui/material';

import { ColorScale } from './hazardMaps.service';

interface HazardMapsProps {
  geoJson: string[];
  colorScale: ColorScale | undefined;
  setFullscreen: (value: boolean) => void;
}

const HazardMaps: React.FC<HazardMapsProps> = ({ geoJson, setFullscreen, colorScale }: HazardMapsProps) => {
  const zoom = 5;
  const nzCentre = [-40.946, 174.167];

  return (
    <Box sx={{ width: '100%', height: '700px' }}>
      <LeafletMap geoJsonData={geoJson} zoom={zoom} nzCentre={nzCentre} height={'700px'} width={'100%'} setFullscreen={setFullscreen} />
      {colorScale && (
        <ColorBar width={300} height={35} colors={colorScale?.hexrgbs} tickValues={colorScale?.levels} style={{ position: 'relative', zIndex: 10000000, top: '-125px', left: 'calc(100% - 365px)' }} />
      )}
    </Box>
  );
};

export default HazardMaps;
