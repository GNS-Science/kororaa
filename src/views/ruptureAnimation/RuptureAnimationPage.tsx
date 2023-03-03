import React, { useState } from 'react';
import { LeafletMap } from '@gns-science/toshi-nest';
import '../../css/leaflet.timedimension.control.css';

import timeDimensionData from '../../mocks/mockData/kaikoura_rupture_surfaces_above_2e-4.json';
import timeDimensionUnderlay from '../../mocks/mockData/CRU_fault_surfaces.json';

export const RuptureAnimationPage: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(5);
  const [fullscreen, setFullscreen] = React.useState<boolean>(false);
  const zoom = 5;
  const nzCentre = [-40.946, 174.167];
  const timeArray = Array(Object.values(timeDimensionData).length)
    .fill(0)
    .map((_, i) => i + 1);

  const timeDimensionOptions = {
    currentTime: 1,
    times: timeArray,
  };
  const timeDimensionControlOptions = {
    loopButton: true,
    displayDate: false,
  };

  return (
    <LeafletMap
      zoom={zoom}
      zoomLevel={zoomLevel}
      setZoomLevel={setZoomLevel}
      nzCentre={nzCentre}
      geoJsonData={[]}
      height={'80vh'}
      width={'100%'}
      setFullscreen={setFullscreen}
      fullScreen={fullscreen}
      timeDimensionOptions={timeDimensionOptions}
      timeDimension={true}
      timeDimensionGeoJsonData={timeDimensionData}
      timeDimensionUnderlay={timeDimensionUnderlay}
      timeDimensionControlOptions={timeDimensionControlOptions}
    />
  );
};
