import React from 'react';
import { geojsonMockData } from './geojsonMockData';
import { LeafletMap, LeafletDrawer } from '@gns-science/toshi-nest';

const RuptureSetsPage: React.FC = () => {
  const [fullscreen, setFullscreen] = React.useState<boolean>(false);
  const rupturesData = [geojsonMockData.ruptures, geojsonMockData.locations];
  const zoom = 5;
  const nzCentre = [-40.946, 174.167];

  return (
    <>
      <LeafletMap
        zoom={zoom}
        nzCentre={nzCentre}
        geoJsonData={rupturesData}
        height={'700px'}
        width={'100%'}
        setFullscreen={setFullscreen}
        style={{
          stroke: '#f21616',
          color: '#f21616',
          weight: 1,
          opacity: 0.75,
          fillOpacity: 0.6,
        }}
      />
      <LeafletDrawer drawerHeight={'700px'} headerHeight={'120px'} width={'400px'} fullscreen={fullscreen}></LeafletDrawer>
    </>
  );
};

export default RuptureSetsPage;
