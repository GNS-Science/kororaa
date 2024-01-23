import React, { useEffect, useState, useMemo } from "react";
import { Alert, Box, Button, styled } from "@mui/material";
import { RangeSliderWithInputs } from "@gns-science/toshi-nest";
import { toPng } from "html-to-image";
import { useLazyLoadQuery } from "react-relay";
import { graphql } from "react-relay";
import { SelectControl } from "@gns-science/toshi-nest";

import { flexParentCenter } from "../../utils/styleUtils";
import CustomControlsBar from "../../components/common/CustomControlsBar";
import { SOLVIS_RADII_ID, SOLVIS_LOCATION_LIST, HAZARD_MODEL } from "../../utils/environmentVariables";
import SelectControlMultiple from "../../components/common/SelectControlMultiple";
import SelectControlWithDisable from "../../components/common/SelectControlWithDisable";
import { RuptureAnimationPageControlsQuery } from "./__generated__/RuptureAnimationPageControlsQuery.graphql";
import { RuptureAnimationPageState } from "./ruptureAnimationPageReducer";

const StyledButton = styled(Button)(() => ({
  margin: "10px",
}));

const StyledCustomControlsBar = styled(CustomControlsBar)(() => ({
  margin: "0 0 0 10px",
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

const faultSystemOptions = ["Crustal", "Hikurangi", "Puysegur"];

interface RuptureAnimationControlsProps {
  startTransition: React.TransitionStartFunction;
  isPending: boolean;
  dispatch: React.Dispatch<Partial<RuptureAnimationPageState>>;
  geoJsonError: string | null;
}

type SortDict = {
  [key: string]: {
    attribute: string;
    ascending: boolean;
  } | null;
};

const sortDict: SortDict = {
  Unsorted: null,
  Magnitude: { attribute: "magnitude", ascending: false },
  "Rate (weighted mean)": { attribute: "rate_weighted_mean", ascending: false },
  "Rate (maximum)": { attribute: "rate_max", ascending: false },
  "Rate (minimum)": { attribute: "rate_min", ascending: false },
};

const RuptureAnimationControls: React.FC<RuptureAnimationControlsProps> = ({
  startTransition,
  isPending,
  dispatch,
  geoJsonError,
}: RuptureAnimationControlsProps) => {
  const [faultSystem, setFaultSystem] = useState<string>("Crustal");
  const [locations, setLocations] = useState<string[]>([]);
  const [locationOptions, setLocationOptions] = useState<string[]>([]);
  const [locationIdArray, setLocationIdArray] = useState<string[]>([]);
  const [radiiOptions, setRadiiOptions] = useState<string[]>([]);
  const [magnitudeRange, setMagnitudeRange] = useState<number[]>([6, 10]);
  const [rateRange, setRateRange] = useState<number[]>([-20, 0]);
  const [radius, setRadius] = useState<string>("");
  const [radiusError, setRadiusError] = useState<string | null>(null);
  const [sortBy1, setSortBy1] = useState<string>("Unsorted");
  const [sortBy2, setSortBy2] = useState<string>("");

  const data = useLazyLoadQuery<RuptureAnimationPageControlsQuery>(ruptureAnimationPageControlsQuery, {
    radiiSetId: SOLVIS_RADII_ID,
    locationListId: SOLVIS_LOCATION_LIST,
  });
  const locationData = data?.SOLVIS_get_location_list?.locations;
  const radiiData = data?.SOLVIS_get_radii_set?.radii;
  const sortByOptions = useMemo(
    () => ["Unsorted", "Magnitude", "Rate (weighted mean)", "Rate (maximum)", "Rate (minimum)"],
    []
  );
  const sortByOptions2 = useMemo(() => sortByOptions.filter((option) => option !== sortBy1), [sortBy1, sortByOptions]);

  const sortByFormatted = useMemo(() => {
    if (sortBy1 !== "Unsorted") {
      if (sortBy2 === "" || sortBy2 === "Unsorted") {
        return [sortDict[sortBy1]];
      } else if (sortBy2 !== "" && sortBy2 !== "Unsorted") {
        return [sortDict[sortBy1], sortDict[sortBy2]];
      }
    }
  }, [sortBy1, sortBy2]);

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
          locationDataItem && locationDataItem?.location_id !== null ? locationDataItem?.location_id : ""
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

  const handleSubmit = async () => {
    startTransition(() => {
      dispatch({
        faultSystem: faultSystem,
        locationCodes: locationIdArray,
        radius: Number(radius.replace("km", "")),
        magnitudeRange: magnitudeRange,
        rateRange: rateRange.map((rate) => Math.pow(10, rate)),
        sortby: sortByFormatted,
      });
    });
  };

  return (
    <Box sx={{ width: "100%", ...flexParentCenter, flexDirection: "column" }}>
      <StyledCustomControlsBar direction="column">
        <SelectControl
          name="Fault System"
          selection={faultSystem}
          setSelection={setFaultSystem}
          options={faultSystemOptions}
          tooltip={"fault system"}
        />
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
        <SelectControl
          name="Sort By 1"
          selection={sortBy1}
          setSelection={setSortBy1}
          options={sortByOptions}
          tooltip={"sort by"}
        />
        <SelectControlWithDisable
          disabled={sortBy1 === "Unsorted"}
          name="Sort By 2"
          selection={sortBy2}
          setSelection={setSortBy2}
          options={sortByOptions2}
          tooltip={"then sort by"}
        />
      </StyledCustomControlsBar>
      {geoJsonError && <Alert severity="error">{geoJsonError}</Alert>}
      <StyledButton disabled={isPending || !!radiusError} variant="contained" type="submit" onClick={handleSubmit}>
        Submit
      </StyledButton>
      <StyledButton variant="contained" onClick={handleDownload}>
        Download Image
      </StyledButton>
    </Box>
  );
};

export default RuptureAnimationControls;

export const ruptureAnimationPageControlsQuery = graphql`
  query RuptureAnimationPageControlsQuery($radiiSetId: Int!, $locationListId: String!) {
    SOLVIS_get_radii_set(radii_set_id: $radiiSetId) {
      radii
    }
    SOLVIS_get_location_list(list_id: $locationListId) {
      locations {
        name
        location_id
      }
    }
  }
`;
