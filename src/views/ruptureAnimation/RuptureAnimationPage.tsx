import React, { useMemo, useState, useEffect, useReducer, useTransition } from "react";
import { LeafletMap, LeafletDrawer } from "@gns-science/toshi-nest";
import { Box, Typography } from "@mui/material";
import { useLazyLoadQuery, usePaginationFragment, graphql } from "react-relay";
import "../../css/leaflet.timedimension.control.css";
import { HAZARD_MODEL } from "../../utils/environmentVariables";
import { GeoJsonObject } from "geojson";
import { LatLngExpression } from "leaflet";

import { InfoTooltip } from "../../components/common/InfoTooltip";
import RuptureAnimationControls from "./RuptureAnimationPageControls";
import SimpleBackdrop from "../../components/common/SimpleBackdrop";
import { ruptureAnimationPageReducer, ruptureAnimationPageReducerInitialState } from "./ruptureAnimationPageReducer";
import {
  RuptureAnimationPageQuery,
  RuptureAnimationPageQuery$data,
} from "./__generated__/RuptureAnimationPageQuery.graphql";
import { RuptureAnimationPage_queryRoot$key } from "./__generated__/RuptureAnimationPage_queryRoot.graphql";

type Props = {
  queryData: RuptureAnimationPageQuery$data;
  ruptureConnectionRef: RuptureAnimationPage_queryRoot$key;
  setFullscreen: (fullscreen: boolean) => void;
  isPending: boolean;
  setGeoJsonError: (geoJsonError: string | null) => void;
};

export const RuptureAnimationComponent: React.FC = () => {
  const [state, dispatch] = useReducer(ruptureAnimationPageReducer, ruptureAnimationPageReducerInitialState);
  const [isPending, startTransition] = useTransition();
  const [fullscreen, setFullscreen] = React.useState<boolean>(false);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [geoJsonError, setGeoJsonError] = useState<string | null>(null);

  const initialData = useLazyLoadQuery<RuptureAnimationPageQuery>(ruptureAnimationPageQuery, {
    first: 10,
    location_ids: state.locationCodes,
    radius_km: state.radius,
    minimum_mag: state.magnitudeRange[0],
    maximum_mag: state.magnitudeRange[1],
    minimum_rate: state.rateRange[0],
    maximum_rate: state.rateRange[1],
    model_id: HAZARD_MODEL,
    fault_system: state.faultSystem.slice(0, 3).toUpperCase(),
    sortby: state.sortby,
  });

  useEffect(() => {
    function updateScrollHeight() {
      setScrollHeight(window.scrollY);
    }
    window.addEventListener("scroll", updateScrollHeight);
    updateScrollHeight();
    return () => window.removeEventListener("scroll", updateScrollHeight);
  }, []);

  return (
    <>
      <Box id="map" sx={{ width: "100%", height: "80vh" }}>
        <RuptureAnimationPaginationComponent
          setFullscreen={setFullscreen}
          ruptureConnectionRef={initialData}
          queryData={initialData}
          isPending={isPending}
          setGeoJsonError={setGeoJsonError}
        />
      </Box>
      <LeafletDrawer
        drawerHeight={"80vh"}
        headerHeight={`${100 - scrollHeight}px`}
        width={"400px"}
        fullscreen={fullscreen}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          IFM Rupture Animation
          <InfoTooltip content={"tooltip to come"} format={false} />
        </Typography>
        <RuptureAnimationControls
          startTransition={startTransition}
          isPending={isPending}
          dispatch={dispatch}
          geoJsonError={geoJsonError}
        />
      </LeafletDrawer>
    </>
  );
};

export const RuptureAnimationPaginationComponent: React.FC<Props> = (props: Props) => {
  const { queryData, setFullscreen, ruptureConnectionRef, isPending, setGeoJsonError } = props;
  const { data, hasNext, loadNext } = usePaginationFragment<
    RuptureAnimationPageQuery,
    RuptureAnimationPage_queryRoot$key
  >(ruptureAnimationPage_queryRoot, ruptureConnectionRef);
  const [zoomLevel, setZoomLevel] = useState<number>(5);
  const [needsMore, setNeedsMore] = useState<boolean>(false);
  const [hasNoMore, setHasNoMore] = useState<boolean>(false);

  const locationData = queryData?.SOLVIS_locations_by_id?.edges?.map((edge) => {
    return edge?.node?.radius_geojson;
  });

  const totalRuptures = useMemo(() => {
    return queryData?.SOLVIS_filter_ruptures?.total_count;
  }, [queryData]);

  const ruptureData = useMemo(() => {
    return data?.SOLVIS_filter_ruptures?.edges?.map((edge) => {
      return JSON.parse(edge?.node?.fault_surfaces);
    });
  }, [data]);

  const surfaceProperties = useMemo(() => {
    return data?.SOLVIS_filter_ruptures?.edges?.map((edge) => {
      return {
        magnitude: edge?.node?.magnitude,
        area: edge?.node?.area,
        length: edge?.node?.length,
        rate_weighted_mean: edge?.node?.rate_weighted_mean,
      };
    });
  }, [data]);

  useEffect(() => {
    if (locationData && locationData.length > 0 && ruptureData?.length === 0) {
      setGeoJsonError("No ruptures satisfy the filter.");
    } else {
      setGeoJsonError(null);
    }
  }, [locationData, ruptureData, setGeoJsonError]);

  const zoom = 5;
  const nzCentre = [-40.946, 174.167];

  const timeArray = useMemo(() => {
    return (
      totalRuptures &&
      Array(totalRuptures)
        .fill(0)
        .map((_, i) => i + 1)
    );
  }, [totalRuptures]);

  const timeDimensionOptions = {
    currentTime: 1,
    times: timeArray || [],
    timeInterval: "P1M/2021-01-01T00:00:00Z/P1M",
    period: "P1D",
  };

  const timeDimensionControlOptions = {
    position: "bottomright",
    displayDate: false,
    maxSpeed: 5,
    minSpeed: 1,
    playerOptions: {
      loop: true,
    },
  };

  useEffect(() => {
    if (needsMore && hasNext) {
      loadNext(5);
      setNeedsMore(false);
    }
  }, [hasNext, needsMore, loadNext]);

  useEffect(() => {
    if (!needsMore && !hasNoMore) {
      setHasNoMore(false);
    }
  }, [needsMore, hasNoMore]);

  const timeDimensionLayerProps = {
    geoJsonData: (ruptureData as typeof GeoJsonObject[]) || "",
    setTimeDimensionNeedsMore: setNeedsMore,
    setTimeDimensionHasNoMore: setHasNoMore,
    surfaceProperties: surfaceProperties || [],
    timeDimensionTotalLength: totalRuptures || 0,
  };

  return (
    <>
      <React.Suspense fallback={<SimpleBackdrop />}>
        {isPending && <SimpleBackdrop />}
        <LeafletMap
          zoom={zoom}
          zoomLevel={zoomLevel}
          setZoomLevel={setZoomLevel}
          nzCentre={nzCentre as typeof LatLngExpression}
          geoJsonData={locationData ? locationData : [""]}
          height={"80vh"}
          width={"100%"}
          setFullscreen={setFullscreen}
          timeDimension={true}
          timeDimensionOptions={timeDimensionOptions}
          timeDimensionControlOptions={timeDimensionControlOptions}
          // eslint-disable-next-line prettier/prettier
          timeDimensionGeoJsonData={(ruptureData as typeof GeoJsonObject[]) || ''}
          timeDimensionLayerProps={timeDimensionLayerProps}
          //timeDimensionUnderlay={'' as unknown as typeof GeoJsonObject}
          // setTimeDimensionNeedsMore={setNeedsMore}
          // setTimeDimensionHasNoMore={setHasNoMore}
          // surfaceProperties={surfaceProperties || []}
          // timeDimensionTotalLength={totalRuptures || 0}
        />
      </React.Suspense>
    </>
  );
};

export const RuptureAnimationPage: React.FC = () => {
  return (
    <React.Suspense fallback={<SimpleBackdrop />}>
      <RuptureAnimationComponent />
    </React.Suspense>
  );
};

export default RuptureAnimationPage;

export const ruptureAnimationPage_queryRoot = graphql`
  fragment RuptureAnimationPage_queryRoot on Query
  @refetchable(queryName: "RuptureAnimationPagePaginationQuery")
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 5 }
    after: { type: "String" }
    filter: { type: "FilterRupturesArgsInput!" }
    sortby: { type: "[SimpleSortRupturesArgs]" }
  ) {
    SOLVIS_filter_ruptures(first: $first, after: $after, filter: $filter, sortby: $sortby)
      @connection(key: "RuptureAnimationPage_queryRoot_SOLVIS_filter_ruptures") {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          fault_surfaces
          magnitude
          rate_weighted_mean
          area
          length
        }
      }
    }
  }
`;

export const ruptureAnimationPageQuery = graphql`
  query RuptureAnimationPageQuery(
    $first: Int!
    $after: String
    $model_id: String!
    $fault_system: String!
    $location_ids: [String]!
    $radius_km: Int!
    $minimum_mag: Float
    $maximum_mag: Float
    $minimum_rate: Float
    $maximum_rate: Float
    $sortby: [SimpleSortRupturesArgs]
  ) {
    SOLVIS_locations_by_id(location_ids: $location_ids) {
      edges {
        node {
          ... on LocationDetail {
            radius_geojson(
              radius_km: $radius_km
              style: {
                stroke_color: "royalblue"
                stroke_width: 3
                stroke_opacity: 0.2
                fill_opacity: 0.5
                fill_color: "royalblue"
              }
            )
          }
        }
      }
    }
    SOLVIS_filter_ruptures(
      first: $first
      after: $after
      filter: {
        model_id: $model_id
        fault_system: $fault_system
        location_ids: $location_ids
        radius_km: $radius_km
        minimum_mag: $minimum_mag
        maximum_mag: $maximum_mag
        minimum_rate: $minimum_rate
        maximum_rate: $maximum_rate
      }
      sortby: $sortby
    ) {
      total_count
    }
    ...RuptureAnimationPage_queryRoot
      @arguments(
        first: $first
        after: $after
        filter: {
          model_id: $model_id
          fault_system: $fault_system
          location_ids: $location_ids
          radius_km: $radius_km
          minimum_mag: $minimum_mag
          maximum_mag: $maximum_mag
          minimum_rate: $minimum_rate
          maximum_rate: $maximum_rate
        }
        sortby: $sortby
      )
  }
`;
