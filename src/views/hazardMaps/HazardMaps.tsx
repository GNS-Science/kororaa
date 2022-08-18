import React, { useState } from 'react';
import { HazardMapsViewQuery$data } from './__generated__/HazardMapsViewQuery.graphql';
import { LeafletMap, LeafletDrawer } from '@gns-science/toshi-nest';

interface HazardMapsProps {
  data: HazardMapsViewQuery$data;
}

const HazardMaps: React.FC<HazardMapsProps> = (props: HazardMapsProps) => {
  const { data } = props;
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  const zoom = 5;
  const nzCentre = [-40.946, 174.167];

  let geoJson: string[] = [];
  if (data && data.gridded_hazard && data.gridded_hazard.gridded_hazard?.length) {
    geoJson = data.gridded_hazard?.gridded_hazard.map((hazard) => hazard?.geojson);
  }

  return (
    <>
      <LeafletMap geoJsonData={geoJson} zoom={zoom} nzCentre={nzCentre} height={'700px'} width={'100%'} setFullscreen={setFullscreen} />
      <LeafletDrawer drawerHeight={'700px'} headerHeight={'120px'} width={'400px'} fullscreen={fullscreen}>
        <p>hello</p>
      </LeafletDrawer>
    </>
  );
};

export default HazardMaps;
