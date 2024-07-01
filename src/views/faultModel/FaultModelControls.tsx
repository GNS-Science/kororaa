import React, { useEffect, useState } from "react";
import { Box, Button, Alert, styled, Typography } from "@mui/material";
import { SelectControl, RangeSliderWithInputs } from "@gns-science/toshi-nest";
import { toPng } from "html-to-image";
import { graphql } from "react-relay";
import { useLazyLoadQuery } from "react-relay";

import { FaultModelControlsQuery } from "./__generated__/FaultModelControlsQuery.graphql";

import { flexParentCenter } from "../../utils/styleUtils";
import CustomControlsBar from "../../components/common/CustomControlsBar";
import SelectControlMultiple from "../../components/common/SelectControlMultiple";
import SelectControlWithDisable from "../../components/common/SelectControlWithDisable";
import { FaultModelPageState } from "./faultModelPageReducer";
import { SOLVIS_LOCATION_LIST, SOLVIS_RADII_ID } from "../../utils/environmentVariables";

const VITE_HAZARD_MODEL = "NSHM_1.0.4"; // TODO replace with envvar when data ius aligned

const StyledButton = styled(Button)(() => ({
  margin: "0 0 0 10px",
}));

const StyledCustomControlsBar = styled(CustomControlsBar)(() => ({
  margin: "0 0 10px 0",
  maxHeight: "320px!important",
}));

const StyledRangeSliderDiv = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "& p": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "& .css-7ai7qk": {
    marginRight: "0px",
  },
}));

interface Branch {
  readonly weight: number | null;
  readonly inversion_solution_id: string | null;
  readonly inversion_solution_type: string | null;
  readonly onfault_nrml_id: string | null;
  readonly distributed_nrml_id: string | null;
  readonly values: ReadonlyArray<{
    readonly long_name: string | null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readonly json_value: any | null;
  } | null> | null;
}

interface Branches {
  readonly branches: ReadonlyArray<Branch | null> | null;
}

interface FaultModelControlsProps {
  startTransition: React.TransitionStartFunction;
  isPending: boolean;
  dispatch: React.Dispatch<Partial<FaultModelPageState>>;
  geoJsonError: string | null;
}

export interface SolvisLocation {
  code: string | null;
  name: string | null;
  latitude: number | null;
  longitude: number | null;
}

const FaultModelControls: React.FC<FaultModelControlsProps> = ({
  startTransition,
  isPending,
  dispatch,
  geoJsonError,
}: FaultModelControlsProps) => {
  const [deformationModel, setDeformationModel] = useState<string>("");
  const [timeDependence, setTimeDependence] = useState<string>("");
  const [bNPair, setBNPair] = useState<string>("");
  const [momentScaling, setMomentScaling] = useState<string>("");
  const [solutionId, setSolutionId] = useState<string>("");
  const [locations, setLocations] = useState<string[]>([]);
  const [radius, setRadius] = useState<string>("");
  const [magnitudeRange, setMagnitudeRange] = useState<number[]>([6, 10]);
  const [rateRange, setRateRange] = useState<number[]>([-20, 0]);
  const [locationOptions, setLocationOptions] = useState<string[]>([]);
  const [locationIdArray, setLocationIdArray] = useState<string[]>([]);
  const [radiiOptions, setRadiiOptions] = useState<string[]>([]);
  const [optionsValid, setOptionsValid] = useState<boolean>(false);
  const [radiusError, setRadiusError] = useState<string | null>(null);
  const data = useLazyLoadQuery<FaultModelControlsQuery>(faultModelControlsQuery, {
    model_id: VITE_HAZARD_MODEL,
    radiiSetId: SOLVIS_RADII_ID,
    locationListId: SOLVIS_LOCATION_LIST,
  });
  const locationData = data?.SOLVIS_get_location_list?.locations;
  const radiiData = data?.SOLVIS_get_radii_set?.radii;
  const faultSystemBranches =
    data?.nzshm_model?.model?.source_logic_tree_spec?.fault_system_branches &&
    data?.nzshm_model?.model?.source_logic_tree_spec?.fault_system_branches.filter(
      (branch) => branch && branch?.short_name === "CRU",
    )[0]?.branches;

  const options = faultSystemBranches?.map((branch) => {
    return {
      value: branch?.name,
      label: branch?.long_name,
      value_options: branch?.value_options,
    };
  });

  const logicTreeBranches = data?.nzshm_model?.model?.source_logic_tree?.fault_system_branches?.filter(
    (branch) => branch && branch?.short_name === "CRU",
  )[0];
  const deformationModelOptions = JSON.parse(options?.filter((option) => option.value === "dm")?.[0]?.value_options);
  const timeDependenceOptions = JSON.parse(options?.filter((option) => option.value === "td")?.[0]?.value_options).map(
    (option: boolean) => (option ? "Time Dependent" : "Time Independent"),
  );
  const bNPairOptions = JSON.parse(options?.filter((option) => option.value === "bN")?.[0]?.value_options).map(
    (option: string[]) => option[0],
  );
  const momentRateScalingOptions = JSON.parse(options?.filter((option) => option.value === "s")?.[0]?.value_options);

  useEffect(() => {
    if (locationData) {
      const locationNameArray: string[] = [];
      const locationIdArray: string[] = [];
      locationData.forEach((location) => {
        location?.name !== undefined && location?.name !== null
          ? locationNameArray.push(location?.name)
          : locationNameArray.push("");
      });
      locations.map((location) => {
        const locationDataItem = locationData?.find((item) => item?.name === location);
        locationIdArray.push(
          locationDataItem && locationDataItem?.location_id !== null && locationDataItem?.location_id !== undefined
            ? locationDataItem?.location_id
            : "",
        );
      });
      setLocationOptions(locationNameArray);
      setLocationIdArray(locationIdArray);
    }
  }, [locationData, locations]);

  useEffect(() => {
    if (radiiData) {
      setRadiiOptions(radiiData?.map((radius) => (radius ? `${radius / 1000}km` : "")));
    }
  }, [radiiData]);

  useEffect(() => {
    if (locations.length > 0 && radius === "") {
      setRadiusError("Select a radius option.");
    } else {
      setRadiusError(null);
    }
  }, [locations, radius]);

  useEffect(() => {
    if (deformationModel !== "" && timeDependence !== "" && bNPair !== "" && momentScaling !== "") {
      setOptionsValid(true);
    } else {
      setOptionsValid(false);
    }
  }, [deformationModel, timeDependence, bNPair, momentScaling, locations, radius]);

  useEffect(() => {
    const filterSolutionId = (branches: Branches | null | undefined) => {
      if (branches === null || branches === undefined) {
        return [];
      }
      if (branches?.branches !== null && branches?.branches !== undefined) {
        const filteredBranches = branches?.branches
          .filter(
            (branch) =>
              branch !== null &&
              JSON.parse(branch?.values?.find((value) => value?.long_name === "deformation model")?.json_value) ===
                deformationModel,
          )
          .filter(
            (branch) =>
              branch !== null &&
              JSON.parse(branch?.values?.find((value) => value?.long_name === "time dependent")?.json_value) ===
                (timeDependence === "Time Dependent"),
          )
          .filter(
            (branch) =>
              branch !== null &&
              JSON.parse(branch?.values?.find((value) => value?.long_name === "bN pair")?.json_value)[0] === bNPair,
          )
          .filter(
            (branch) =>
              branch !== null &&
              JSON.parse(branch?.values?.find((value) => value?.long_name === "moment rate scaling")?.json_value) ===
                momentScaling,
          );
        return filteredBranches;
      }
    };
    const filteredBranches = filterSolutionId(logicTreeBranches as Branches);
    if (filteredBranches !== undefined && filteredBranches.length > 0) {
      if (filteredBranches[0]?.inversion_solution_id) {
        setSolutionId(filteredBranches[0]?.inversion_solution_id);
      }
    }
  }, [deformationModel, timeDependence, bNPair, momentScaling, setSolutionId, logicTreeBranches]);

  const handleSubmit = async () => {
    startTransition(() => {
      dispatch({
        solutionId: solutionId,
        locationCodes: locationIdArray,
        radius: Number(radius.replace("km", "")),
        magnitudeRange: magnitudeRange,
        rateRange: rateRange,
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
      link.download = `hazard map.png`;
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <Box sx={{ width: "100%", ...flexParentCenter, flexDirection: "column" }}>
      <Box sx={{ width: "100%", ...flexParentCenter, flexDirection: "row", alignItems: "top" }}>
        <Box sx={{ width: "100%", ...flexParentCenter, flexDirection: "column" }}>
          <StyledCustomControlsBar direction="column">
            <Typography variant="h6">Logic Tree Branch Selection</Typography>
            <SelectControl
              name="Deformation Model"
              selection={deformationModel}
              setSelection={setDeformationModel}
              options={deformationModelOptions}
            />
            <SelectControl
              name="Time Dependence"
              selection={timeDependence}
              setSelection={setTimeDependence}
              options={timeDependenceOptions}
            />
            <SelectControl
              name="Gutenberg-Richter b value"
              selection={bNPair}
              setSelection={setBNPair}
              options={bNPairOptions}
            />
            <SelectControl
              name="Moment Rate Scaling"
              selection={momentScaling}
              setSelection={setMomentScaling}
              options={momentRateScalingOptions}
            />
          </StyledCustomControlsBar>
        </Box>
        <Box sx={{ width: "100%", ...flexParentCenter, flexDirection: "column" }}>
          <StyledCustomControlsBar direction="column">
            <Typography variant="h6">Ruptures Filter</Typography>
            <SelectControlMultiple
              name="Locations"
              selection={locations}
              options={locationOptions}
              setSelection={setLocations}
            />
            <SelectControlWithDisable
              disabled={locations.length === 0}
              name="Radius"
              selection={radius}
              options={radiiOptions}
              setSelection={setRadius}
            />
            <StyledRangeSliderDiv>
              <RangeSliderWithInputs
                label="Magnitude Range"
                valuesRange={magnitudeRange}
                setValues={setMagnitudeRange}
                inputProps={{ step: 0.1, min: 6, max: 10, type: "number" }}
              />
              <RangeSliderWithInputs
                label="Rate Range (1/yr)"
                valuesRange={rateRange}
                setValues={setRateRange}
                inputProps={{ step: 1, min: -20, max: 0, type: "number" }}
              />
            </StyledRangeSliderDiv>
          </StyledCustomControlsBar>
        </Box>
      </Box>
      {radiusError && <Alert severity="warning">{radiusError}</Alert>}
      {!optionsValid && <Alert severity="warning">Enter selections for all fields</Alert>}
      {geoJsonError && <Alert severity="error">{geoJsonError}</Alert>}
      <Box sx={{ width: "40%", ...flexParentCenter, flexDirection: "row", marginTop: "2vh" }}>
        <StyledButton
          disabled={isPending || !optionsValid || !!radiusError}
          variant="contained"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </StyledButton>
        <StyledButton disabled={isPending} variant="contained" onClick={handleDownload}>
          Download Image
        </StyledButton>
      </Box>
    </Box>
  );
};

export default FaultModelControls;

export const faultModelControlsQuery = graphql`
  query FaultModelControlsQuery($model_id: String!, $radiiSetId: Int!, $locationListId: String!) {
    nzshm_model: KORORAA_nzshm_model(version: $model_id) {
      model {
        version
        title
        source_logic_tree {
          fault_system_branches {
            long_name
            short_name
            branches {
              weight
              inversion_solution_id
              inversion_solution_type
              onfault_nrml_id
              distributed_nrml_id
              values {
                long_name
                json_value
              }
            }
          }
        }
        source_logic_tree_spec {
          fault_system_branches {
            short_name
            long_name
            branches {
              name
              long_name
              value_options
            }
          }
        }
      }
    }
    SOLVIS_get_radii_set(radii_set_id: $radiiSetId) {
      radii
    }
    SOLVIS_get_location_list(list_id: $locationListId) {
      list_id
      locations {
        location_id
        name
        latitude
        longitude
      }
    }
  }
`;
