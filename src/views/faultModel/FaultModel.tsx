import React, { useState } from 'react';
import { LeafletMap } from '@gns-science/toshi-nest';
import { Box } from '@mui/material';

import { MAP_ZOOM_DELTA, MAP_ZOOM_MAX, MAP_ZOOM_MIN, MAP_ZOOM_SNAP } from '../../utils/environmentVariables';

export interface FaultModelProps {
  geoJson: string[] | null;
  setFullscreen: (value: boolean) => void;
}

const FaultModel: React.FC<FaultModelProps> = ({ geoJson, setFullscreen }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(5);
  const zoom = 5;
  const nzCentre = [-40.946, 174.167];

  return (
    <Box id="map" sx={{ width: '100%', height: '80vh' }}>
      <LeafletMap
        geoJsonData={geoJson || []}
        zoom={zoom}
        nzCentre={nzCentre}
        height={'80vh'}
        width={'100%'}
        setFullscreen={setFullscreen}
        minZoom={MAP_ZOOM_MIN}
        maxZoom={MAP_ZOOM_MAX}
        zoomSnap={MAP_ZOOM_SNAP}
        zoomDelta={MAP_ZOOM_DELTA}
        style={{
          stroke: '#f21616',
          color: '#f21616',
          weight: 2,
          opacity: 0.75,
          fillOpacity: 0.6,
        }}
        overlay={false}
        zoomLevel={zoomLevel}
        setZoomLevel={setZoomLevel}
      />
    </Box>
  );
};

export default FaultModel;
