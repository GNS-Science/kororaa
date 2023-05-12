/**
 * @generated SignedSource<<1925e335ff9435e3da45c1b3dbf8e744>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SimpleSortRupturesArgs = {
  attribute?: string | null;
  ascending?: boolean | null;
};
export type ComboRuptureMapPageQuery$variables = {
  first: number;
  after?: string | null;
  model_id: string;
  fault_system: string;
  location_ids: ReadonlyArray<string | null>;
  radius_km: number;
  minimum_mag?: number | null;
  maximum_mag?: number | null;
  minimum_rate?: number | null;
  maximum_rate?: number | null;
  sortby?: ReadonlyArray<SimpleSortRupturesArgs | null> | null;
};
export type ComboRuptureMapPageQuery$data = {
  readonly SOLVIS_locations_by_id: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly location_id: string | null;
        readonly name: string | null;
        readonly radius_geojson: any | null;
      } | null;
    } | null>;
  } | null;
  readonly SOLVIS_filter_rupture_sections: {
    readonly model_id: string | null;
    readonly section_count: number | null;
    readonly fault_surfaces: any | null;
    readonly fault_traces: any | null;
    readonly color_scale: {
      readonly name: string | null;
      readonly min_value: number | null;
      readonly max_value: number | null;
      readonly color_map: {
        readonly levels: ReadonlyArray<number | null> | null;
        readonly hexrgbs: ReadonlyArray<string | null> | null;
      } | null;
    } | null;
    readonly mfd_histogram: ReadonlyArray<{
      readonly bin_center: number | null;
      readonly rate: number | null;
      readonly cumulative_rate: number | null;
    } | null> | null;
  } | null;
  readonly SOLVIS_filter_ruptures: {
    readonly total_count: number | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"RuptureAnimationPage_queryRoot">;
};
export type ComboRuptureMapPageQuery = {
  variables: ComboRuptureMapPageQuery$variables;
  response: ComboRuptureMapPageQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "fault_system"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "location_ids"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "maximum_mag"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "maximum_rate"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "minimum_mag"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "minimum_rate"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "model_id"
},
v9 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "radius_km"
},
v10 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sortby"
},
v11 = {
  "kind": "Variable",
  "name": "location_ids",
  "variableName": "location_ids"
},
v12 = [
  (v11/*: any*/)
],
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "location_id",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v15 = {
  "kind": "Variable",
  "name": "radius_km",
  "variableName": "radius_km"
},
v16 = {
  "alias": null,
  "args": [
    (v15/*: any*/),
    {
      "kind": "Literal",
      "name": "style",
      "value": {
        "fill_color": "royalblue",
        "fill_opacity": 0.01,
        "stroke_color": "royalblue",
        "stroke_opacity": 1,
        "stroke_width": 3
      }
    }
  ],
  "kind": "ScalarField",
  "name": "radius_geojson",
  "storageKey": null
},
v17 = {
  "fields": [
    {
      "kind": "Variable",
      "name": "fault_system",
      "variableName": "fault_system"
    },
    (v11/*: any*/),
    {
      "kind": "Variable",
      "name": "maximum_mag",
      "variableName": "maximum_mag"
    },
    {
      "kind": "Variable",
      "name": "maximum_rate",
      "variableName": "maximum_rate"
    },
    {
      "kind": "Variable",
      "name": "minimum_mag",
      "variableName": "minimum_mag"
    },
    {
      "kind": "Variable",
      "name": "minimum_rate",
      "variableName": "minimum_rate"
    },
    {
      "kind": "Variable",
      "name": "model_id",
      "variableName": "model_id"
    },
    (v15/*: any*/)
  ],
  "kind": "ObjectValue",
  "name": "filter"
},
v18 = {
  "alias": null,
  "args": [
    (v17/*: any*/)
  ],
  "concreteType": "CompositeRuptureSections",
  "kind": "LinkedField",
  "name": "SOLVIS_filter_rupture_sections",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "model_id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "section_count",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "style",
          "value": {
            "fill_color": "silver",
            "fill_opacity": 0.25,
            "stroke_color": "silver"
          }
        }
      ],
      "kind": "ScalarField",
      "name": "fault_surfaces",
      "storageKey": "fault_surfaces(style:{\"fill_color\":\"silver\",\"fill_opacity\":0.25,\"stroke_color\":\"silver\"})"
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "color_scale",
          "value": {
            "name": "inferno"
          }
        },
        {
          "kind": "Literal",
          "name": "style",
          "value": {
            "stroke_width": 5
          }
        }
      ],
      "kind": "ScalarField",
      "name": "fault_traces",
      "storageKey": "fault_traces(color_scale:{\"name\":\"inferno\"},style:{\"stroke_width\":5})"
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "name",
          "value": "inferno"
        }
      ],
      "concreteType": "ColorScale",
      "kind": "LinkedField",
      "name": "color_scale",
      "plural": false,
      "selections": [
        (v14/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "min_value",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "max_value",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "HexRgbValueMapping",
          "kind": "LinkedField",
          "name": "color_map",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "levels",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hexrgbs",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "color_scale(name:\"inferno\")"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MagFreqDist",
      "kind": "LinkedField",
      "name": "mfd_histogram",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "bin_center",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "rate",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cumulative_rate",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v19 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  (v17/*: any*/),
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
],
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "total_count",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/),
      (v10/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ComboRuptureMapPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v12/*: any*/),
        "concreteType": "LocationDetailConnection",
        "kind": "LinkedField",
        "name": "SOLVIS_locations_by_id",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "LocationDetailEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "LocationDetail",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v16/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v18/*: any*/),
      {
        "alias": null,
        "args": (v19/*: any*/),
        "concreteType": "RuptureDetailConnection",
        "kind": "LinkedField",
        "name": "SOLVIS_filter_ruptures",
        "plural": false,
        "selections": [
          (v20/*: any*/)
        ],
        "storageKey": null
      },
      {
        "args": (v19/*: any*/),
        "kind": "FragmentSpread",
        "name": "RuptureAnimationPage_queryRoot"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v8/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v9/*: any*/),
      (v6/*: any*/),
      (v4/*: any*/),
      (v7/*: any*/),
      (v5/*: any*/),
      (v10/*: any*/)
    ],
    "kind": "Operation",
    "name": "ComboRuptureMapPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v12/*: any*/),
        "concreteType": "LocationDetailConnection",
        "kind": "LinkedField",
        "name": "SOLVIS_locations_by_id",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "LocationDetailEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "LocationDetail",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v16/*: any*/),
                  (v21/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v18/*: any*/),
      {
        "alias": null,
        "args": (v19/*: any*/),
        "concreteType": "RuptureDetailConnection",
        "kind": "LinkedField",
        "name": "SOLVIS_filter_ruptures",
        "plural": false,
        "selections": [
          (v20/*: any*/),
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
                  (v21/*: any*/),
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
        "args": (v19/*: any*/),
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
    "cacheID": "8f593a639942c36884f6605011a34ed1",
    "id": null,
    "metadata": {},
    "name": "ComboRuptureMapPageQuery",
    "operationKind": "query",
    "text": "query ComboRuptureMapPageQuery(\n  $first: Int!\n  $after: String\n  $model_id: String!\n  $fault_system: String!\n  $location_ids: [String]!\n  $radius_km: Int!\n  $minimum_mag: Float\n  $maximum_mag: Float\n  $minimum_rate: Float\n  $maximum_rate: Float\n  $sortby: [SimpleSortRupturesArgs]\n) {\n  SOLVIS_locations_by_id(location_ids: $location_ids) {\n    edges {\n      node {\n        location_id\n        name\n        radius_geojson(radius_km: $radius_km, style: {stroke_color: \"royalblue\", stroke_width: 3, stroke_opacity: 1, fill_opacity: 0.01, fill_color: \"royalblue\"})\n        id\n      }\n    }\n  }\n  SOLVIS_filter_rupture_sections(filter: {model_id: $model_id, location_ids: $location_ids, fault_system: $fault_system, radius_km: $radius_km, minimum_mag: $minimum_mag, maximum_mag: $maximum_mag, minimum_rate: $minimum_rate, maximum_rate: $maximum_rate}) {\n    model_id\n    section_count\n    fault_surfaces(style: {stroke_color: \"silver\", fill_color: \"silver\", fill_opacity: 0.25})\n    fault_traces(color_scale: {name: \"inferno\"}, style: {stroke_width: 5})\n    color_scale(name: \"inferno\") {\n      name\n      min_value\n      max_value\n      color_map {\n        levels\n        hexrgbs\n      }\n    }\n    mfd_histogram {\n      bin_center\n      rate\n      cumulative_rate\n    }\n  }\n  SOLVIS_filter_ruptures(first: $first, after: $after, filter: {model_id: $model_id, fault_system: $fault_system, location_ids: $location_ids, radius_km: $radius_km, minimum_mag: $minimum_mag, maximum_mag: $maximum_mag, minimum_rate: $minimum_rate, maximum_rate: $maximum_rate}, sortby: $sortby) {\n    total_count\n  }\n  ...RuptureAnimationPage_queryRoot_45dR5v\n}\n\nfragment RuptureAnimationPage_queryRoot_45dR5v on Query {\n  SOLVIS_filter_ruptures(first: $first, after: $after, filter: {model_id: $model_id, fault_system: $fault_system, location_ids: $location_ids, radius_km: $radius_km, minimum_mag: $minimum_mag, maximum_mag: $maximum_mag, minimum_rate: $minimum_rate, maximum_rate: $maximum_rate}, sortby: $sortby) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        fault_surfaces\n        magnitude\n        rate_weighted_mean\n        area\n        length\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e297ad9129f59dfa6e95efbb746ef345";

export default node;
