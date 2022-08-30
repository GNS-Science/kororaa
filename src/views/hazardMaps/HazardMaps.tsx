import React, { useMemo } from 'react';
import { LeafletMap, ColorBar } from '@gns-science/toshi-nest';
import { Box } from '@mui/material';

interface HazardMapsProps {
  geoJson: string[];
  setFullscreen: (value: boolean) => void;
}

const HazardMaps: React.FC<HazardMapsProps> = ({ geoJson, setFullscreen }: HazardMapsProps) => {
  const zoom = 5;
  const nzCentre = [-40.946, 174.167];

  const colors = useMemo(() => ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'], []);

  return (
    <Box sx={{ width: '100%', height: '700px' }}>
      <LeafletMap geoJsonData={geoJson} zoom={zoom} nzCentre={nzCentre} height={'700px'} width={'100%'} setFullscreen={setFullscreen} />
      <ColorBar width={300} height={35} colors={colors} tickValues={[0, 0.5, 1, 1.5]} style={{ position: 'relative', zIndex: 10000000, top: '-125px', left: 'calc(100% - 365px)' }} />
    </Box>
  );
};

export default HazardMaps;
