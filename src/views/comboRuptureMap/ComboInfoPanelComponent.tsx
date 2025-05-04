import { useMemo, useContext } from "react";
import { ColorBar, MfdPlot } from "@gns-science/toshi-nest";
import { Box, Fab, Typography, CircularProgress } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { ComboRuptureMapPageQuery$data } from "./__generated__/ComboRuptureMapPageQuery.graphql";
import TimeDimensionLayerContext from "./store";
import { ComboRuptureMapPageState } from "./comboRuptureMapPageReducer";
import { graphql, fetchQuery } from "react-relay";
import { HAZARD_MODEL } from "../../utils/environmentVariables";
import { ComboInfoPanelComponentQuery } from "./__generated__/ComboInfoPanelComponentQuery.graphql";
import RelayEnvironment from "../../RelayEnvironment";

export type SurfaceProperties =
  | {
      rupture_index?: number | null;
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
  mapControlsState: ComboRuptureMapPageState;
}

const RuptureInfoBox = (props: RuptureInfoBoxProps) => {
  const { timeDimensionTotalLength, surfaceProperties, mapControlsState } = props;
  const context = useContext(TimeDimensionLayerContext);
  const sortByStringArray = mapControlsState.sortby?.map(
    (sort) => sort?.attribute.replaceAll("_", " ") + " " + (sort?.ascending ? "ascending" : "descending"),
  );
  const sortByJoinedString = sortByStringArray?.join(", ");

  const handleDownload = () => {
    fetchQuery<ComboInfoPanelComponentQuery>(RelayEnvironment, comboInfoPanelComponentQuery, {
      model_id: HAZARD_MODEL,
      fault_system: mapControlsState.faultSystem.slice(0, 3).toUpperCase(),
      rupture_index: surfaceProperties[context.timeIndex]?.rupture_index || 0,
    }).subscribe({
      next: (data) => {
        const fileName = `${HAZARD_MODEL}_${mapControlsState.faultSystem.slice(0, 3).toUpperCase()}_${
          data?.SOLVIS_composite_rupture_detail?.rupture_index
        }_fault_surfaces`;

        const json = data?.SOLVIS_composite_rupture_detail?.fault_surfaces;
        const prettyJson = JSON.stringify(JSON.parse(json), null, 2);
        const blob = new Blob([prettyJson], { type: "application/json" });
        const href = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(href);
      },
    });
  };

  return (
    <Box>
      {surfaceProperties[context.timeIndex] ? (
        <>
          <Typography variant={"body2"}>
            Rupture {context.timeIndex + 1} of {timeDimensionTotalLength}{" "}
            {mapControlsState.sortby && mapControlsState.sortby?.length > 0 ? `(sorted by ${sortByJoinedString})` : ""}
          </Typography>
          <Typography variant={"body2"}>
            Rupture Index: {surfaceProperties[context.timeIndex]?.rupture_index}{" "}
          </Typography>
          <Typography variant={"body2"}>
            Mean Rate: {surfaceProperties[context.timeIndex]?.rate_weighted_mean?.toExponential(2)} per year
          </Typography>
          <Typography variant={"body2"}>
            Magnitude: {surfaceProperties[context.timeIndex]?.magnitude?.toFixed(1)}
          </Typography>
          <Typography variant={"body2"}>Area: {surfaceProperties[context.timeIndex]?.area} km²</Typography>
          <Typography variant={"body2"}>Length: {surfaceProperties[context.timeIndex]?.length} km</Typography>
          <Fab
            sx={{ position: "absolute", right: "5%", top: "15%" }}
            onClick={handleDownload}
            color="primary"
            size="small"
            title="Download rupture as geojson"
          >
            <FileDownloadOutlinedIcon />
          </Fab>
        </>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      )}
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

export type Datum = {
  bin_center: number;
  rate: number;
  cumulative_rate: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderCustomTooltip = (tooltipData: any) => {
  const datum = tooltipData?.nearestDatum?.datum as Datum;
  return (
    <>
      <Typography>Rate: {datum?.rate?.toExponential(2)}/yr</Typography>
      <Typography>Cumulative Rate: {datum?.cumulative_rate?.toExponential(2)}/yr</Typography>
      <Typography>Magnitude: {datum?.bin_center.toPrecision(3)}</Typography>
    </>
  );
};

const ComboInfoPanelComponent = (props: ComboInfoPanelComponentProps) => {
  const { queryData, fullscreen, mapControlsState } = props;

  const mfdData = queryData?.SOLVIS_filter_rupture_sections?.mfd_histogram;

  const colorScale = useMemo(() => {
    if (
      queryData?.SOLVIS_filter_rupture_sections?.color_scale?.color_map?.levels &&
      queryData?.SOLVIS_filter_rupture_sections?.color_scale?.color_map?.hexrgbs
    ) {
      return {
        levels:
          queryData?.SOLVIS_filter_rupture_sections?.color_scale?.color_map?.levels.map((level) =>
            level?.toExponential(0),
          ) ?? [],
        hexrgbs:
          queryData?.SOLVIS_filter_rupture_sections?.color_scale?.color_map?.hexrgbs.map((color) =>
            color?.toString(),
          ) ?? [],
      };
    }
  }, [queryData]);

  return (
    <>
      {(mfdData || colorScale) && (
        <Box
          style={{
            backgroundColor: "#ffffff",
            position: "absolute",
            zIndex: fullscreen ? 119700 : 799,
            bottom: fullscreen ? "72px" : "16.5vh",
            left: "calc(100% - 438px)",
            width: "429px",
            borderRadius: "4px",
            borderWidth: "1px",
            border: "2px solid rgba(0,0,0,0.2)",
            backgroundClip: "padding-box",
            padding: "1rem",
          }}
        >
          {mapControlsState.showAnimation && <RuptureInfoBox {...props} />}
          {mfdData && mapControlsState.showMfd && (
            <MfdPlot
              data={mfdData}
              width={430}
              height={300}
              xLabel="Magnitude"
              yLabel="Rate (1/yr)"
              yLabelOffset={35}
              xLabelOffset={5}
              header="Magnitude Frequency Distribution"
              yScaleDomain={[1e-7, 1e-1]}
              xScaleDomain={[6.7, 9.7]}
              lineColours={["silver", "#072B61"]}
              legendDomain={["Incremental", "Cumulative"]}
              renderCustomTooltip={renderCustomTooltip}
            />
          )}
          {mapControlsState.showTraceLegend && colorScale && (
            <ColorBar
              heading={"Participation Rate (1/yr)"}
              width={350}
              height={35}
              colors={colorScale?.hexrgbs}
              tickValues={colorScale?.levels}
              linear={false}
            />
          )}
        </Box>
      )}
    </>
  );
};

export default ComboInfoPanelComponent;

export const comboInfoPanelComponentQuery = graphql`
  query ComboInfoPanelComponentQuery($model_id: String!, $rupture_index: Int!, $fault_system: String!) {
    SOLVIS_composite_rupture_detail(
      filter: { model_id: $model_id, fault_system: $fault_system, rupture_index: $rupture_index }
    ) {
      __typename
      magnitude
      length
      area
      rupture_index
      rate_max
      rate_min
      rate_count
      rake_mean
      fault_surfaces
    }
  }
`;
