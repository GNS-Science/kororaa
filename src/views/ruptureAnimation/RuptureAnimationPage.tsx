import { graphql } from "react-relay";

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
          rupture_index
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
