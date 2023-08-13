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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onEachFeature = (feature: any, layer: any) => {
    if (feature.properties?.['magnitude.min']) {
      const location = feature.properties?.['fault_name'];
      const minMag = feature.properties?.['magnitude.min'];
      const maxMag = feature.properties?.['magnitude.max'];
      const minRuptureRate = feature.properties?.['annual_rate.min'];
      const maxRuptureRate = feature.properties?.['annual_rate.max'];
      const totalRate = feature.properties?.['annual_rate.sum'];
      const popupContent = `
      <div>
        <b>${location}</b>
       <p>Min Magnitude: ${minMag.toFixed(2)}</p>
        <p>Max Magnitude: ${maxMag.toFixed(2)}</p>
        <p>Min Rupture Rate (1/yr): ${minRuptureRate.toExponential(2)}</p>
        <p>Max Rupture Rate (1/yr): ${maxRuptureRate.toExponential(2)}</p>
        <p>Total Rate (1/yr): ${totalRate.toExponential(2)}</p>
      </div>
     `;
      layer.bindPopup(popupContent);
    }
  };

  return (
    <Box id="map" sx={{ width: '100%', height: '80vh' }}>
      <LeafletMap
        geoJsonData={geoJson || []}
        zoom={zoom}
        nzCentre={nzCentre}
        height={'80vh'}
        width={'100%'}
        setFullscreen={setFullscreen}
        onEachFeature={onEachFeature}
        minZoom={MAP_ZOOM_MIN}
        maxZoom={MAP_ZOOM_MAX}
        zoomSnap={MAP_ZOOM_SNAP}
        zoomDelta={MAP_ZOOM_DELTA}
        overlay={false}
        zoomLevel={zoomLevel}
        setZoomLevel={setZoomLevel}
      />
    </Box>
  );
};

export default FaultModel;
