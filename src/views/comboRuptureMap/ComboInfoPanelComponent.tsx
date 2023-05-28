import React, { useMemo } from 'react';
import { ColorBar, MfdPlot } from '@gns-science/toshi-nest';
import { Box } from '@mui/material';
import { ComboRuptureMapPageQuery$data } from './__generated__/ComboRuptureMapPageQuery.graphql';

type ComboInfoPanelComponentProps = {
  queryData: ComboRuptureMapPageQuery$data;
  fullscreen: boolean;
};

const ComboInfoPanelComponent = (props: ComboInfoPanelComponentProps) => {
  const { queryData, fullscreen } = props;

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
            top: '-435px',
            left: 'calc(100% - 396px)',
            width: '395px',
            borderRadius: '4px',
            borderWidth: '1px',
            border: '2px solid rgba(0,0,0,0.2)',
            backgroundClip: 'padding-box',
          }}
        >
          {mfdData && (
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
          {colorScale && <ColorBar heading={'Participation Rate'} width={350} height={35} colors={colorScale?.hexrgbs} tickValues={colorScale?.levels} linear={false} />}
        </Box>
      )}
    </>
  );
};

export default ComboInfoPanelComponent;
