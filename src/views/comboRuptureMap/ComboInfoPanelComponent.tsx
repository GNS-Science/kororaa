import React, { useMemo, useContext } from 'react';
import { ColorBar, MfdPlot } from '@gns-science/toshi-nest';
import { Box, Typography } from '@mui/material';
import { ComboRuptureMapPageQuery$data } from './__generated__/ComboRuptureMapPageQuery.graphql';
import TimeDimensionLayerContext from './store';
// import { GeoJsonObject } from 'geojson';
import { ComboRuptureMapPageState } from './comboRuptureMapPageReducer';

export type SurfaceProperties =
  | {
      rate_weighted_mean?: number | null;
      area?: number | null;
      length?: number | null;
      magnitude?: number | null;
    }
  | null
  | undefined;

export interface RuptureInfoBoxProps {
  timeDimensionTotalLength: number;
  surfaceProperties: SurfaceProperties[];
}

const RuptureInfoBox = (props: RuptureInfoBoxProps) => {
  const { timeDimensionTotalLength, surfaceProperties } = props;
  const context = useContext(TimeDimensionLayerContext);
  return (
    <Box>
      {/*<Typography variant={'body2'}>Rupture ID: {surfaceProperties[context.timeIndex]?.id}</Typography> */}
      <Typography variant={'body2'}>
        Rupture {context.timeIndex + 1} of {timeDimensionTotalLength}
      </Typography>
      <Typography variant={'body2'}>Mean Rate: {surfaceProperties[context.timeIndex]?.rate_weighted_mean?.toExponential(2)} per year</Typography>
      <Typography variant={'body2'}>Magnitude: {surfaceProperties[context.timeIndex]?.magnitude?.toFixed(1)}</Typography>
      <Typography variant={'body2'}>Area: {surfaceProperties[context.timeIndex]?.area} km²</Typography>
      <Typography variant={'body2'}>Length: {surfaceProperties[context.timeIndex]?.length} km</Typography>
    </Box>
  );
};

export type ComboInfoPanelComponentProps = {
  queryData: ComboRuptureMapPageQuery$data;
  fullscreen: boolean;
  timeDimensionTotalLength: number;
  surfaceProperties: SurfaceProperties[];
  mapControlsState: ComboRuptureMapPageState;
};

const ComboInfoPanelComponent = (props: ComboInfoPanelComponentProps) => {
  const { queryData, fullscreen, mapControlsState } = props;

  const mfdData = queryData?.SOLVIS_filter_rupture_sections?.mfd_histogram;

  const colorScale = useMemo(() => {
    if (queryData?.SOLVIS_filter_rupture_sections?.color_scale?.color_map?.levels && queryData?.SOLVIS_filter_rupture_sections?.color_scale?.color_map?.hexrgbs) {
      return {
        levels: queryData?.SOLVIS_filter_rupture_sections?.color_scale?.color_map?.levels.map((level) => level?.toExponential(0)) ?? [],
        hexrgbs: queryData?.SOLVIS_filter_rupture_sections?.color_scale?.color_map?.hexrgbs.map((color) => color?.toString()) ?? [],
      };
    }
  }, [queryData]);

  return (
    <>
      {(mfdData || colorScale) && (
        <Box
          style={{
            backgroundColor: '#ffffff',
            position: fullscreen ? 'absolute' : 'relative',
            zIndex: 119700,
            top: '-605px',
            left: 'calc(100% - 435px)',
            width: '429px',
            borderRadius: '4px',
            borderWidth: '1px',
            border: '2px solid rgba(0,0,0,0.2)',
            backgroundClip: 'padding-box',
            padding: '1rem',
          }}
        >
          {mapControlsState.showAnimation && <RuptureInfoBox {...props} />}
          {mfdData && mapControlsState.showMfd && (
            <MfdPlot
              data={mfdData}
              width={430}
              height={300}
              xLabel="Magnitude"
              yLabel="Rate"
              yLabelOffset={35}
              xLabelOffset={5}
              header="Magnitude Frequency Distribution"
              yScaleDomain={[1e-7, 1e-1]}
              xScaleDomain={[6.7, 9.6]}
              lineColours={['green', 'red']}
              legendDomain={['Incremental', 'Cumulative']}
            />
          )}
          {mapControlsState.showTraceLegend && colorScale && (
            <ColorBar heading={'Participation Rate'} width={350} height={35} colors={colorScale?.hexrgbs} tickValues={colorScale?.levels} linear={false} />
          )}
        </Box>
      )}
    </>
  );
};

export default ComboInfoPanelComponent;
