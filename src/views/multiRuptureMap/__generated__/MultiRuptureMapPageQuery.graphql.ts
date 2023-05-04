/**
 * @generated SignedSource<<8db5802c625b7fea88decfca0867b410>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MultiRuptureMapPageQuery$variables = {
  model_id: string;
  fault_system: string;
  location_ids: ReadonlyArray<string | null>;
  radius_km: number;
  minimum_mag?: number | null;
  maximum_mag?: number | null;
  minimum_rate?: number | null;
  maximum_rate?: number | null;
};
export type MultiRuptureMapPageQuery$data = {
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
    readonly color_scale: {
      readonly name: string | null;
      readonly min_value: number | null;
      readonly max_value: number | null;
      readonly color_map: {
        readonly levels: ReadonlyArray<number | null> | null;
        readonly hexrgbs: ReadonlyArray<string | null> | null;
      } | null;
    } | null;
  } | null;
};
export type MultiRuptureMapPageQuery = {
  variables: MultiRuptureMapPageQuery$variables;
  response: MultiRuptureMapPageQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "fault_system"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "location_ids"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "maximum_mag"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "maximum_rate"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "minimum_mag"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "minimum_rate"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "model_id"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "radius_km"
},
v8 = {
  "kind": "Variable",
  "name": "location_ids",
  "variableName": "location_ids"
},
v9 = [
  (v8/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "location_id",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v12 = {
  "kind": "Variable",
  "name": "radius_km",
  "variableName": "radius_km"
},
v13 = {
  "alias": null,
  "args": [
    (v12/*: any*/),
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
v14 = {
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
      "fields": [
        {
          "kind": "Variable",
          "name": "fault_system",
          "variableName": "fault_system"
        },
        (v8/*: any*/),
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
        (v12/*: any*/)
      ],
      "kind": "ObjectValue",
      "name": "filter"
    }
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
      "args": null,
      "kind": "ScalarField",
      "name": "fault_surfaces",
      "storageKey": null
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
        (v11/*: any*/),
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
    }
  ],
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
      (v7/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "MultiRuptureMapPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v9/*: any*/),
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
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v13/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v14/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v6/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v7/*: any*/),
      (v4/*: any*/),
      (v2/*: any*/),
      (v5/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "MultiRuptureMapPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v9/*: any*/),
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
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v13/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      (v14/*: any*/)
    ]
  },
  "params": {
    "cacheID": "6520e989063cbac110dbf45f6f2e91d8",
    "id": null,
    "metadata": {},
    "name": "MultiRuptureMapPageQuery",
    "operationKind": "query",
    "text": "query MultiRuptureMapPageQuery(\n  $model_id: String!\n  $fault_system: String!\n  $location_ids: [String]!\n  $radius_km: Int!\n  $minimum_mag: Float\n  $maximum_mag: Float\n  $minimum_rate: Float\n  $maximum_rate: Float\n) {\n  SOLVIS_locations_by_id(location_ids: $location_ids) {\n    edges {\n      node {\n        location_id\n        name\n        radius_geojson(radius_km: $radius_km, style: {stroke_color: \"royalblue\", stroke_width: 3, stroke_opacity: 1, fill_opacity: 0.01, fill_color: \"royalblue\"})\n        id\n      }\n    }\n  }\n  SOLVIS_filter_rupture_sections(filter: {model_id: $model_id, location_ids: $location_ids, fault_system: $fault_system, radius_km: $radius_km, minimum_mag: $minimum_mag, maximum_mag: $maximum_mag, minimum_rate: $minimum_rate, maximum_rate: $maximum_rate}, color_scale: {name: \"inferno\"}) {\n    model_id\n    section_count\n    fault_surfaces\n    color_scale(name: \"inferno\") {\n      name\n      min_value\n      max_value\n      color_map {\n        levels\n        hexrgbs\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8cbc60c9c1201ed9ae0b300c46a92cfe";

export default node;
