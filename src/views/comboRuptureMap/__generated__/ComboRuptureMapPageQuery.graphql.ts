/**
 * @generated SignedSource<<17de5a73c39b15a3992aab4c04a67e50>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContentFormatEnum = "Markdown" | "Raw" | "%future added value";
export type SimpleSortRupturesArgs = {
  ascending?: boolean | null | undefined;
  attribute?: string | null | undefined;
};
export type ComboRuptureMapPageQuery$variables = {
  after?: string | null | undefined;
  corupture_fault_names?: ReadonlyArray<string | null | undefined> | null | undefined;
  fault_system: string;
  first: number;
  location_ids: ReadonlyArray<string | null | undefined>;
  maximum_mag?: number | null | undefined;
  maximum_rate?: number | null | undefined;
  minimum_mag?: number | null | undefined;
  minimum_rate?: number | null | undefined;
  model_id: string;
  radius_km: number;
  sortby?: ReadonlyArray<SimpleSortRupturesArgs | null | undefined> | null | undefined;
};
export type ComboRuptureMapPageQuery$data = {
  readonly SOLVIS_filter_rupture_sections: {
    readonly color_scale: {
      readonly color_map: {
        readonly hexrgbs: ReadonlyArray<string | null | undefined> | null | undefined;
        readonly levels: ReadonlyArray<number | null | undefined> | null | undefined;
      } | null | undefined;
      readonly max_value: number | null | undefined;
      readonly min_value: number | null | undefined;
      readonly name: string | null | undefined;
    } | null | undefined;
    readonly fault_surfaces: any | null | undefined;
    readonly fault_traces: any | null | undefined;
    readonly mfd_histogram: ReadonlyArray<{
      readonly bin_center: number | null | undefined;
      readonly cumulative_rate: number | null | undefined;
      readonly rate: number | null | undefined;
    } | null | undefined> | null | undefined;
    readonly model_id: string | null | undefined;
    readonly section_count: number | null | undefined;
  } | null | undefined;
  readonly SOLVIS_filter_ruptures: {
    readonly total_count: number | null | undefined;
  } | null | undefined;
  readonly SOLVIS_locations_by_id: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly location_id: string | null | undefined;
        readonly name: string | null | undefined;
        readonly radius_geojson: any | null | undefined;
      } | null | undefined;
    } | null | undefined>;
  } | null | undefined;
  readonly textual_content_header: {
    readonly content: ReadonlyArray<{
      readonly content_type: ContentFormatEnum | null | undefined;
      readonly text: string | null | undefined;
    } | null | undefined> | null | undefined;
    readonly ok: boolean | null | undefined;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"RuptureAnimationPage_queryRoot">;
};
export type ComboRuptureMapPageQuery = {
  response: ComboRuptureMapPageQuery$data;
  variables: ComboRuptureMapPageQuery$variables;
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
  "name": "corupture_fault_names"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "fault_system"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "location_ids"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "maximum_mag"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "maximum_rate"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "minimum_mag"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "minimum_rate"
},
v9 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "model_id"
},
v10 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "radius_km"
},
v11 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sortby"
},
v12 = {
  "alias": "textual_content_header",
  "args": [
    {
      "kind": "Literal",
      "name": "index",
      "value": "rupture_map_header.md"
    }
  ],
  "concreteType": "TextualContentResult",
  "kind": "LinkedField",
  "name": "KORORAA_textual_content",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "ok",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "TextualContent",
      "kind": "LinkedField",
      "name": "content",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "content_type",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "text",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "KORORAA_textual_content(index:\"rupture_map_header.md\")"
},
v13 = {
  "kind": "Variable",
  "name": "location_ids",
  "variableName": "location_ids"
},
v14 = [
  (v13/*: any*/)
],
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "location_id",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v17 = {
  "kind": "Variable",
  "name": "radius_km",
  "variableName": "radius_km"
},
v18 = {
  "alias": null,
  "args": [
    (v17/*: any*/),
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
v19 = {
  "fields": [
    {
      "kind": "Variable",
      "name": "corupture_fault_names",
      "variableName": "corupture_fault_names"
    },
    {
      "kind": "Variable",
      "name": "fault_system",
      "variableName": "fault_system"
    },
    (v13/*: any*/),
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
    (v17/*: any*/)
  ],
  "kind": "ObjectValue",
  "name": "filter"
},
v20 = {
  "alias": null,
  "args": [
    (v19/*: any*/)
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
        (v16/*: any*/),
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
v21 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  (v19/*: any*/),
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
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "total_count",
  "storageKey": null
},
v23 = {
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
      (v10/*: any*/),
      (v11/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ComboRuptureMapPageQuery",
    "selections": [
      (v12/*: any*/),
      {
        "alias": null,
        "args": (v14/*: any*/),
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
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v18/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v20/*: any*/),
      {
        "alias": null,
        "args": (v21/*: any*/),
        "concreteType": "RuptureDetailConnection",
        "kind": "LinkedField",
        "name": "SOLVIS_filter_ruptures",
        "plural": false,
        "selections": [
          (v22/*: any*/)
        ],
        "storageKey": null
      },
      {
        "args": (v21/*: any*/),
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
      (v3/*: any*/),
      (v0/*: any*/),
      (v9/*: any*/),
      (v2/*: any*/),
      (v4/*: any*/),
      (v10/*: any*/),
      (v1/*: any*/),
      (v7/*: any*/),
      (v5/*: any*/),
      (v8/*: any*/),
      (v6/*: any*/),
      (v11/*: any*/)
    ],
    "kind": "Operation",
    "name": "ComboRuptureMapPageQuery",
    "selections": [
      (v12/*: any*/),
      {
        "alias": null,
        "args": (v14/*: any*/),
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
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v18/*: any*/),
                  (v23/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v20/*: any*/),
      {
        "alias": null,
        "args": (v21/*: any*/),
        "concreteType": "RuptureDetailConnection",
        "kind": "LinkedField",
        "name": "SOLVIS_filter_ruptures",
        "plural": false,
        "selections": [
          (v22/*: any*/),
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
                  (v23/*: any*/),
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
        "args": (v21/*: any*/),
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
    "cacheID": "fd4ed443093527e72c67d290794b03a2",
    "id": null,
    "metadata": {},
    "name": "ComboRuptureMapPageQuery",
    "operationKind": "query",
    "text": "query ComboRuptureMapPageQuery(\n  $first: Int!\n  $after: String\n  $model_id: String!\n  $fault_system: String!\n  $location_ids: [String]!\n  $radius_km: Int!\n  $corupture_fault_names: [String]\n  $minimum_mag: Float\n  $maximum_mag: Float\n  $minimum_rate: Float\n  $maximum_rate: Float\n  $sortby: [SimpleSortRupturesArgs]\n) {\n  textual_content_header: KORORAA_textual_content(index: \"rupture_map_header.md\") {\n    ok\n    content {\n      content_type\n      text\n    }\n  }\n  SOLVIS_locations_by_id(location_ids: $location_ids) {\n    edges {\n      node {\n        location_id\n        name\n        radius_geojson(radius_km: $radius_km, style: {stroke_color: \"royalblue\", stroke_width: 3, stroke_opacity: 1, fill_opacity: 0.01, fill_color: \"royalblue\"})\n        id\n      }\n    }\n  }\n  SOLVIS_filter_rupture_sections(filter: {model_id: $model_id, location_ids: $location_ids, fault_system: $fault_system, corupture_fault_names: $corupture_fault_names, radius_km: $radius_km, minimum_mag: $minimum_mag, maximum_mag: $maximum_mag, minimum_rate: $minimum_rate, maximum_rate: $maximum_rate}) {\n    model_id\n    section_count\n    fault_surfaces(style: {stroke_color: \"silver\", fill_color: \"silver\", fill_opacity: 0.25})\n    fault_traces(color_scale: {name: \"inferno\"}, style: {stroke_width: 5})\n    color_scale(name: \"inferno\") {\n      name\n      min_value\n      max_value\n      color_map {\n        levels\n        hexrgbs\n      }\n    }\n    mfd_histogram {\n      bin_center\n      rate\n      cumulative_rate\n    }\n  }\n  SOLVIS_filter_ruptures(first: $first, after: $after, filter: {model_id: $model_id, fault_system: $fault_system, location_ids: $location_ids, radius_km: $radius_km, corupture_fault_names: $corupture_fault_names, minimum_mag: $minimum_mag, maximum_mag: $maximum_mag, minimum_rate: $minimum_rate, maximum_rate: $maximum_rate}, sortby: $sortby) {\n    total_count\n  }\n  ...RuptureAnimationPage_queryRoot_2Ls9it\n}\n\nfragment RuptureAnimationPage_queryRoot_2Ls9it on Query {\n  SOLVIS_filter_ruptures(first: $first, after: $after, filter: {model_id: $model_id, fault_system: $fault_system, location_ids: $location_ids, radius_km: $radius_km, corupture_fault_names: $corupture_fault_names, minimum_mag: $minimum_mag, maximum_mag: $maximum_mag, minimum_rate: $minimum_rate, maximum_rate: $maximum_rate}, sortby: $sortby) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        fault_surfaces\n        magnitude\n        rate_weighted_mean\n        area\n        length\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8ebefce3dfaf520923cc0908980d5ee6";

export default node;
