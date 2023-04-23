/**
 * @generated SignedSource<<8e8a51206f7e715ef386c76b98b6992e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilterRupturesArgs = {
  model_id: string;
  fault_system: string;
  location_ids?: ReadonlyArray<string | null> | null;
  radius_km?: number | null;
  minimum_rate?: number | null;
  maximum_rate?: number | null;
  minimum_mag?: number | null;
  maximum_mag?: number | null;
  fault_trace_style?: GeojsonLineStyleArguments | null;
  fault_surface_style?: GeojsonAreaStyleArguments | null;
};
export type GeojsonLineStyleArguments = {
  stroke_color?: string | null;
  stroke_width?: number | null;
  stroke_opacity?: number | null;
};
export type GeojsonAreaStyleArguments = {
  stroke_color?: string | null;
  stroke_width?: number | null;
  stroke_opacity?: number | null;
  fill_color?: string | null;
  fill_opacity?: number | null;
};
export type SimpleSortRupturesArgs = {
  attribute?: string | null;
  ascending?: boolean | null;
};
export type RuptureAnimationPagePaginationQuery$variables = {
  after?: string | null;
  filter: FilterRupturesArgs;
  first?: number | null;
  sortby?: ReadonlyArray<SimpleSortRupturesArgs | null> | null;
};
export type RuptureAnimationPagePaginationQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"RuptureAnimationPage_queryRoot">;
};
export type RuptureAnimationPagePaginationQuery = {
  variables: RuptureAnimationPagePaginationQuery$variables;
  response: RuptureAnimationPagePaginationQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filter"
  },
  {
    "defaultValue": 5,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "sortby"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "filter"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "sortby",
    "variableName": "sortby"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RuptureAnimationPagePaginationQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "RuptureAnimationPage_queryRoot"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RuptureAnimationPagePaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RuptureDetailConnection",
        "kind": "LinkedField",
        "name": "SOLVIS_filter_ruptures",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "RuptureDetailEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CompositeRuptureDetail",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "fault_surfaces",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "magnitude",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "rate_weighted_mean",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "area",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "length",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": [
          "filter",
          "sortby"
        ],
        "handle": "connection",
        "key": "RuptureAnimationPage_queryRoot_SOLVIS_filter_ruptures",
        "kind": "LinkedHandle",
        "name": "SOLVIS_filter_ruptures"
      }
    ]
  },
  "params": {
    "cacheID": "b3e6e48ed93381386045c10b22530771",
    "id": null,
    "metadata": {},
    "name": "RuptureAnimationPagePaginationQuery",
    "operationKind": "query",
    "text": "query RuptureAnimationPagePaginationQuery(\n  $after: String\n  $filter: FilterRupturesArgs!\n  $first: Int = 5\n  $sortby: [SimpleSortRupturesArgs]\n) {\n  ...RuptureAnimationPage_queryRoot_108mgy\n}\n\nfragment RuptureAnimationPage_queryRoot_108mgy on Query {\n  SOLVIS_filter_ruptures(first: $first, after: $after, filter: $filter, sortby: $sortby) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        fault_surfaces\n        magnitude\n        rate_weighted_mean\n        area\n        length\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "13f07a517faecea5273b2d1e24ed9c94";

export default node;
