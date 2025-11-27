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
