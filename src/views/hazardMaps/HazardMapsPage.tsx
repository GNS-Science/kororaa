import React, { useReducer, useState, useMemo, useTransition, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { graphql } from "react-relay";
import { useLazyLoadQuery } from "react-relay";
import { LeafletDrawer } from "@gns-science/toshi-nest";

import HazardMaps from "./HazardMaps";
import { hazardMapsReducer, initialState } from "./hazardMapReducer";
import HazardMapsControls from "./HazardMapsControls";
import { flexParentCenter } from "../../utils/styleUtils";
import { GRID_ID, HAZARD_MODEL } from "../../utils/environmentVariables";
import { getTickValues, ColorScale } from "./hazardMaps.service";
import { ColourScaleNormalise, HazardMapsPageQuery } from "./__generated__/HazardMapsPageQuery.graphql";
import { InfoTooltip } from "../../components/common/InfoTooltip";
import SimpleBackdrop from "../../components/common/SimpleBackdrop";

const PageContainer = styled(Box)(({ theme }) => ({
  ...flexParentCenter,
  margin: "0 5% 0 5% 0.5% 0.5%",
  flexDirection: "column",
  [theme.breakpoints.down("xl")]: {
    margin: "0 2% 0 2% 0.2% 0.2%",
  },
}));

const HazardMapsComponent: React.FC = () => {
  const [state, dispatch] = useReducer(hazardMapsReducer, initialState);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  useEffect(() => {
    function updateScrollHeight() {
      setScrollHeight(window.scrollY);
    }
    window.addEventListener("scroll", updateScrollHeight);
    updateScrollHeight();
    return () => window.removeEventListener("scroll", updateScrollHeight);
  }, []);

  const colorScaleNormalise = useMemo<ColourScaleNormalise>(() => {
    if (state.statistic === "cov") {
      return "LIN";
    } else {
      return "LOG";
    }
  }, [state.statistic]);

  const data = useLazyLoadQuery<HazardMapsPageQuery>(hazardMapsPageQuery, {
    grid_id: GRID_ID,
    hazard_model_id: HAZARD_MODEL,
    imt: state.spectralPeriod,
    agg: state.statistic,
    vs30: state.vs30,
    poe: state.poe,
    color_scale: state.color_scale,
    color_scale_vmax: state.color_scale_vmax,
    fill_opacity: state.fill_opacity,
    stroke_width: state.stroke_width,
    stroke_opacity: state.stroke_opacity,
    color_scale_normalise: colorScaleNormalise,
  });

  const markdown = useMemo(() => data?.textual_content?.content && data?.textual_content?.content[0]?.text, [data]);
  const content_type = useMemo(
    () => data?.textual_content?.content && data?.textual_content?.content[0]?.content_type,
    [data],
  );
  const geoJson = useMemo<string[]>(() => {
    if (data && data.gridded_hazard && data.gridded_hazard.gridded_hazard?.length) {
      return data.gridded_hazard?.gridded_hazard.map((hazard) => hazard?.hazard_map?.geojson);
    } else {
      return [];
    }
  }, [data]);

  const colorScale = useMemo<ColorScale | undefined>(() => {
    if (
      data &&
      data.gridded_hazard &&
      data.gridded_hazard.gridded_hazard &&
      data.gridded_hazard.gridded_hazard[0] &&
      data.gridded_hazard.gridded_hazard[0].hazard_map?.colour_scale?.levels &&
      data.gridded_hazard.gridded_hazard[0].hazard_map.colour_scale.hexrgbs
    ) {
      return {
        levels:
          getTickValues(
            data.gridded_hazard.gridded_hazard[0]?.hazard_map?.colour_scale?.levels.map((level) => Number(level)),
          ) ?? [],
        hexrgbs:
          data.gridded_hazard.gridded_hazard[0]?.hazard_map?.colour_scale?.hexrgbs.map((color) => color?.toString()) ??
          [],
      };
    }
  }, [data]);

  return (
    <PageContainer>
      {isPending && <SimpleBackdrop />}
      <Box role="hazardMapsView" sx={{ ...flexParentCenter, justifyContent: "center", height: "100%", width: "100%" }}>
        <LeafletDrawer
          drawerHeight={"80vh"}
          headerHeight={`${100 - scrollHeight}px`}
          width={"400px"}
          fullscreen={fullscreen}
          openAtRender={true}
        >
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Hazard Maps
            <InfoTooltip content={markdown || ""} format={content_type === "Markdown"} />
          </Typography>
          <HazardMapsControls
            startTransition={startTransition}
            isPending={isPending}
            geoJson={geoJson}
            state={state}
            dispatch={dispatch}
          />
        </LeafletDrawer>
        <HazardMaps
          state={state}
          geoJson={geoJson}
          setFullscreen={setFullscreen}
          colorScale={colorScale}
          fullscreen={fullscreen}
          cov={state.statistic === "cov"}
        />
      </Box>
    </PageContainer>
  );
};

const HazardMapsPage: React.FC = () => {
  return (
    <React.Suspense fallback={<SimpleBackdrop />}>
      <HazardMapsComponent />
    </React.Suspense>
  );
};

export default HazardMapsPage;

export const hazardMapsPageQuery = graphql`
  query HazardMapsPageQuery(
    $grid_id: RegionGrid
    $hazard_model_id: String
    $imt: String
    $agg: String
    $vs30: Int
    $poe: Float
    $color_scale: String
    $color_scale_vmax: Float
    $fill_opacity: Float
    $stroke_width: Float
    $stroke_opacity: Float
    $color_scale_normalise: ColourScaleNormalise
  ) {
    gridded_hazard: KORORAA_gridded_hazard(
      grid_id: $grid_id
      hazard_model_id: $hazard_model_id
      imt: $imt
      agg: $agg
      vs30: $vs30
      poe: $poe
    ) {
      ok
      gridded_hazard {
        grid_id
        hazard_model
        imt
        agg
        hazard_map(
          color_scale: $color_scale
          color_scale_vmax: $color_scale_vmax
          fill_opacity: $fill_opacity
          stroke_width: $stroke_width
          stroke_opacity: $stroke_opacity
          color_scale_normalise: $color_scale_normalise
        ) {
          geojson
          colour_scale {
            levels
            hexrgbs
          }
        }
      }
    }
    textual_content: KORORAA_textual_content(index: "hazmap_help.md") {
      ok
      content {
        index
        content_type
        text
        created
        author
        tags
        status
      }
    }
  }
`;
