/**
 * @generated SignedSource<<2a4c105deab57d484ecb8dae8aafa3b2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SetOperationEnum = "DIFFERENCE" | "INTERSECTION" | "UNION" | "%future added value";
export type FilterRupturesArgsInput = {
  corupture_fault_names?: ReadonlyArray<string | null | undefined> | null | undefined;
  fault_system: string;
  filter_set_options?: FilterSetLogicOptionsInput | null | undefined;
  location_ids?: ReadonlyArray<string | null | undefined> | null | undefined;
  maximum_mag?: number | null | undefined;
  maximum_rate?: number | null | undefined;
  minimum_mag?: number | null | undefined;
  minimum_rate?: number | null | undefined;
  model_id: string;
  radius_km?: number | null | undefined;
};
export type FilterSetLogicOptionsInput = {
  locations_and_faults?: SetOperationEnum | null | undefined;
  multiple_faults?: SetOperationEnum | null | undefined;
  multiple_locations?: SetOperationEnum | null | undefined;
};
export type SimpleSortRupturesArgs = {
  ascending?: boolean | null | undefined;
  attribute?: string | null | undefined;
};
export type RuptureAnimationPagePaginationQuery$variables = {
  after?: string | null | undefined;
  filter: FilterRupturesArgsInput;
  first?: number | null | undefined;
  sortby?: ReadonlyArray<SimpleSortRupturesArgs | null | undefined> | null | undefined;
};
export type RuptureAnimationPagePaginationQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"RuptureAnimationPage_queryRoot">;
};
export type RuptureAnimationPagePaginationQuery = {
  response: RuptureAnimationPagePaginationQuery$data;
  variables: RuptureAnimationPagePaginationQuery$variables;
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
    "cacheID": "687a3366bc7f896dfb93bdd4685d2b28",
    "id": null,
    "metadata": {},
    "name": "RuptureAnimationPagePaginationQuery",
    "operationKind": "query",
    "text": "query RuptureAnimationPagePaginationQuery(\n  $after: String\n  $filter: FilterRupturesArgsInput!\n  $first: Int = 5\n  $sortby: [SimpleSortRupturesArgs]\n) {\n  ...RuptureAnimationPage_queryRoot_108mgy\n}\n\nfragment RuptureAnimationPage_queryRoot_108mgy on Query {\n  SOLVIS_filter_ruptures(first: $first, after: $after, filter: $filter, sortby: $sortby) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        fault_surfaces\n        magnitude\n        rate_weighted_mean\n        area\n        length\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7fc988ec6e6bf303e320ece385bbce4a";

export default node;
