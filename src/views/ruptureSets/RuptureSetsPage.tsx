import React from 'react';
import { geojsonMockData } from './geojsonMockData';
import { LeafletMap, LeafletDrawer } from '@gns-science/toshi-nest';

const RuptureSetsPage: React.FC = () => {
  const [fullscreen, setFullscreen] = React.useState<boolean>(false);
  const rupturesData = geojsonMockData.ruptures;
  const locationsData = geojsonMockData.locations;
  const showLocation = true;
  const zoom = 5;
  const nzCentre = [-40.946, 174.167];

  return (
    <>
      <LeafletMap zoom={zoom} nzCentre={nzCentre} rupturesData={rupturesData} locationsData={locationsData} showLocation={showLocation} height={'700px'} width={'100%'} setFullscreen={setFullscreen} />
      <LeafletDrawer drawerHeight={'700px'} headerHeight={'120px'} width={'400px'} fullscreen={fullscreen}></LeafletDrawer>
    </>
  );
};

export default RuptureSetsPage;
