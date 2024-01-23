import React, { useState } from "react";
import { LeafletMap, ColorBar } from "@gns-science/toshi-nest";
import { Box } from "@mui/material";

import { ColorScale } from "./hazardMaps.service";
import { HazardMapsState } from "./hazardMapReducer";
import { MAP_ZOOM_DELTA, MAP_ZOOM_MAX, MAP_ZOOM_MIN, MAP_ZOOM_SNAP } from "../../utils/environmentVariables";

interface HazardMapsProps {
  state: HazardMapsState;
  geoJson: string[];
  colorScale: ColorScale | undefined;
  fullscreen: boolean;
  setFullscreen: (value: boolean) => void;
  cov: boolean;
}

const HazardMaps: React.FC<HazardMapsProps> = ({
  state,
  geoJson,
  fullscreen,
  setFullscreen,
  colorScale,
  cov,
}: HazardMapsProps) => {
  const [zoomLevel, setZoomLevel] = useState<number>(5);
  const zoom = 5;
  const nzCentre = [-40.946, 174.167];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onEachFeature = (feature: any, layer: any) => {
    const popupContent = `
      <div>
        <p>Location: ${feature.properties?.loc[1]}, ${feature.properties?.loc[0]}</p>
        <p>Acceleration: ${Number(feature.properties.value).toFixed(2)} (g)</p>
      </div>
    `;
    layer.bindPopup(popupContent);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onEachFeatureCov = (feature: any, layer: any) => {
    const popupContent = `
      <div>
        <p>Location: ${feature.properties?.loc[1]}, ${feature.properties?.loc[0]}</p>
        <p>CoV: ${Number(feature.properties.value).toFixed(2)}</p>
      </div>
    `;
    layer.bindPopup(popupContent);
  };

  return (
    <Box id="map" sx={{ width: "100%", height: "80vh" }}>
      <LeafletMap
        geoJsonData={geoJson}
        zoom={zoom}
        nzCentre={nzCentre}
        height={"80vh"}
        width={"100%"}
        setFullscreen={setFullscreen}
        minZoom={MAP_ZOOM_MIN}
        maxZoom={MAP_ZOOM_MAX}
        zoomSnap={MAP_ZOOM_SNAP}
        zoomDelta={MAP_ZOOM_DELTA}
        onEachFeature={cov ? onEachFeatureCov : onEachFeature}
        zoomLevel={zoomLevel}
        setZoomLevel={setZoomLevel}
      />
      {colorScale && (
        <ColorBar
          heading={`Vs30=${state.vs30}m/s, ${state.spectralPeriod} ${state.poe * 100}% in 50 years, statistic: ${
            state.statistic
          }`}
          width={276}
          height={35}
          colors={colorScale?.hexrgbs}
          tickValues={colorScale?.levels}
          style={
            !fullscreen
              ? { position: "relative", zIndex: 119700, top: "-115px", left: "calc(100% - 319px)" }
              : { position: "absolute", zIndex: 119700, bottom: "14px", left: "calc(100% - 319px)" }
          }
        />
      )}
    </Box>
  );
};

export default HazardMaps;
