import React, { useState } from 'react';
import { LeafletMap } from '@gns-science/toshi-nest';
import '../../../node_modules/leaflet-timedimension/src/leaflet.timedimension.control.css';

import timeDimensionData from '../../mocks/mockData/puysegur_rupture_surfaces_above_2e-4.json';
import timeDimensionUnderlay from '../../mocks/mockData/surfaces_puysegur.json';

export const RuptureAnimationPage: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(5);
  const [fullscreen, setFullscreen] = React.useState<boolean>(false);
  const zoom = 5;
  const nzCentre = [-40.946, 174.167];

  const currentTime = new Date();
  currentTime.setUTCDate(1);
  const timeDimensionOptions = {
    timeInterval: '2021-07-01/' + currentTime.toISOString(),
    period: 'P1M',
    currentTime: 3,
    times: [
      3, 4, 5, 6, 7, 8, 12, 14, 21, 23, 251, 412, 413, 414, 419, 420, 530, 531, 533, 2714, 3832, 3842, 4582, 4585, 5624, 5727, 6890, 8772, 9323, 9436, 9943, 9975, 10018, 10031, 10078, 10080, 10081,
      10655, 10708, 11286, 11299, 11300, 11850, 11861, 11865, 11870, 12233, 12381, 12389, 12390, 12779, 13153, 13832, 13834, 14130, 14372, 14806, 14980, 15131, 15134, 15259, 15371, 15375, 15395,
      15470, 15528, 15548, 15556, 15615, 15622, 15668, 15685, 15711, 15719, 15735, 15746, 15758, 15766, 15767, 15779, 15785, 15790,
    ],
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
    />
  );
};
