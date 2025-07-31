/**
 * @generated SignedSource<<f167ac1e42209f517641e160a30906ac>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RuptureAnimationPage_queryRoot$data = {
  readonly SOLVIS_filter_ruptures:
    | {
        readonly edges: ReadonlyArray<
          | {
              readonly node:
                | {
                    readonly area: number | null | undefined;
                    readonly fault_surfaces: any | null | undefined;
                    readonly length: number | null | undefined;
                    readonly magnitude: number | null | undefined;
                    readonly rate_weighted_mean: number | null | undefined;
                    readonly rupture_index: number | null | undefined;
                  }
                | null
                | undefined;
            }
          | null
          | undefined
        >;
        readonly pageInfo: {
          readonly endCursor: string | null | undefined;
          readonly hasNextPage: boolean;
        };
      }
    | null
    | undefined;
  readonly " $fragmentType": "RuptureAnimationPage_queryRoot";
};
export type RuptureAnimationPage_queryRoot$key = {
  readonly " $data"?: RuptureAnimationPage_queryRoot$data;
  readonly " $fragmentSpreads": FragmentRefs<"RuptureAnimationPage_queryRoot">;
};

import RuptureAnimationPagePaginationQuery_graphql from "./RuptureAnimationPagePaginationQuery.graphql";

const node: ReaderFragment = (function () {
  var v0 = ["SOLVIS_filter_ruptures"];
  return {
    argumentDefinitions: [
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "after",
      },
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "filter",
      },
      {
        defaultValue: 5,
        kind: "LocalArgument",
        name: "first",
      },
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "sortby",
      },
    ],
    kind: "Fragment",
    metadata: {
      connection: [
        {
          count: "first",
          cursor: "after",
          direction: "forward",
          path: v0 /*: any*/,
        },
      ],
      refetch: {
        connection: {
          forward: {
            count: "first",
            cursor: "after",
          },
          backward: null,
          path: v0 /*: any*/,
        },
        fragmentPathInResult: [],
        operation: RuptureAnimationPagePaginationQuery_graphql,
      },
    },
    name: "RuptureAnimationPage_queryRoot",
    selections: [
      {
        alias: "SOLVIS_filter_ruptures",
        args: [
          {
            kind: "Variable",
            name: "filter",
            variableName: "filter",
          },
          {
            kind: "Variable",
            name: "sortby",
            variableName: "sortby",
          },
        ],
        concreteType: "RuptureDetailConnection",
        kind: "LinkedField",
        name: "__RuptureAnimationPage_queryRoot_SOLVIS_filter_ruptures_connection",
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "PageInfo",
            kind: "LinkedField",
            name: "pageInfo",
            plural: false,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "hasNextPage",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "endCursor",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "RuptureDetailEdge",
            kind: "LinkedField",
            name: "edges",
            plural: true,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "CompositeRuptureDetail",
                kind: "LinkedField",
                name: "node",
                plural: false,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "rupture_index",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "fault_surfaces",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "magnitude",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "rate_weighted_mean",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "area",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "length",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "__typename",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "cursor",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ],
    type: "Query",
    abstractKey: null,
  };
})();

(node as any).hash = "e49092cd51e40628d741e2b28a9ed44d";

export default node;
