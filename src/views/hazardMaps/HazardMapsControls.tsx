import React, { useEffect, useState } from "react";
import { Box, Button, styled } from "@mui/material";
import { SelectControl } from "@gns-science/toshi-nest";
import { toPng } from "html-to-image";

import { flexParentCenter } from "../../utils/styleUtils";
import { getHazardMapCSVData } from "./hazardMaps.service";
import { HazardMapsState } from "./hazardMapReducer";
import CustomControlsBar from "../../components/common/CustomControlsBar";
import {
  MAP_IMTS,
  MAP_POES,
  MAP_STATISTICS,
  MAP_VS30S,
  MAP_GRID_VMAX,
  MAP_GRID_STROKE_WIDTH,
  HAZARD_MODEL,
} from "../../utils/environmentVariables";

import StyledCSVLink from "../../components/common/StyledCSVLink";
import { parsePoeString, readablePoe, readablePoeArray } from "./hazardMaps.service";
import { statisticTooltip } from "./constants/hazardMaps";
import { imtTooltip, poeTooltip, vs30Tooltip } from "../../constants/tooltips";
import { SliderWithInput } from "../../components/common/SliderWithInput";

const StyledButton = styled(Button)(() => ({
  margin: "0 0 0 10px",
}));

interface HazardMapsControlsProps {
  startTransition: React.TransitionStartFunction;
  isPending: boolean;
  geoJson: string[];
  state: HazardMapsState;
  dispatch: React.Dispatch<Partial<HazardMapsState>>;
}

const HazardMapsControls: React.FC<HazardMapsControlsProps> = ({
  startTransition,
  isPending,
  geoJson,
  state,
  dispatch,
}: HazardMapsControlsProps) => {
  const [spectralPeriod, setSpectralPeriod] = useState<string>(state.spectralPeriod);
  const [statistic, setStatistic] = useState<string>(state.statistic);
  const [vs30, setVs30] = useState<number>(state.vs30);
  const [poe, setPoe] = useState<number>(state.poe);
  const [colorScale, setColorScale] = useState<string>("inferno");
  const [gridOpacity, setGridOpacity] = useState<number>(10);
  const [dataFetched, setDataFetched] = useState<boolean>(true);
  const [controlsChanged, setControlsChanged] = useState<number>(0);

  useEffect(() => {
    setControlsChanged(controlsChanged + 1);
    if (controlsChanged >= 1) {
      setDataFetched(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spectralPeriod, statistic, vs30, poe, gridOpacity]);

  useEffect(() => {
    if (statistic === "cov") {
      setColorScale("viridis");
    } else {
      setColorScale("inferno");
    }
  }, [statistic]);

  const handleSubmit = () => {
    setDataFetched(true);
    startTransition(() => {
      dispatch({
        spectralPeriod: spectralPeriod,
        statistic: statistic,
        vs30: vs30,
        poe: poe,
        color_scale: colorScale,
        color_scale_vmax: MAP_GRID_VMAX,
        fill_opacity: Number(gridOpacity / 10),
        stroke_width: MAP_GRID_STROKE_WIDTH,
        stroke_opacity: 0.0,
      });
    });
  };

  const handleDownload = () => {
    const element = document.getElementById("map");
    if (element === null) {
      return;
    }
    toPng(element, { quality: 0.95 }).then((dataUrl: string) => {
      const link = document.createElement("a");
      link.download = `hazard map-${HAZARD_MODEL}.png`;
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <Box sx={{ width: "100%", ...flexParentCenter, flexDirection: "column" }}>
      <CustomControlsBar direction="column">
        <SelectControl
          name="Spectral Period"
          options={MAP_IMTS}
          selection={spectralPeriod}
          setSelection={setSpectralPeriod}
          tooltip={imtTooltip}
        />
        <SelectControl
          name="Statistic"
          options={MAP_STATISTICS}
          selection={statistic}
          setSelection={setStatistic}
          tooltip={statisticTooltip}
        />
        <SelectControl
          name="Vs30 (m/s)"
          options={MAP_VS30S}
          selection={vs30.toString()}
          setSelection={(newValue: string[]) => setVs30(Number(newValue))}
          tooltip={vs30Tooltip}
        />
        <SelectControl
          name="Probability of Exceedence"
          options={readablePoeArray(MAP_POES)}
          selection={readablePoe(poe)}
          setSelection={(newValue: string) => setPoe(parsePoeString(newValue))}
          tooltip={poeTooltip}
        />
        <SliderWithInput
          value={gridOpacity}
          setValue={setGridOpacity}
          label={"Grid Opacity"}
          tooltipContent="Select an opacity for the hazard map layer"
        />
        <StyledButton disabled={isPending || dataFetched} variant="contained" type="submit" onClick={handleSubmit}>
          Submit
        </StyledButton>
        <div>
          <StyledCSVLink
            data={getHazardMapCSVData(
              geoJson,
              state.vs30,
              state.spectralPeriod,
              readablePoe(state.poe),
              state.statistic
            )}
            filename="hazard-maps.csv"
          >
            <StyledButton disabled={isPending} variant="contained" type="submit" color="primary">
              Download CSV
            </StyledButton>
          </StyledCSVLink>
          <StyledButton disabled={isPending} variant="contained" onClick={handleDownload}>
            Download Image
          </StyledButton>
        </div>
      </CustomControlsBar>
    </Box>
  );
};

export default HazardMapsControls;
