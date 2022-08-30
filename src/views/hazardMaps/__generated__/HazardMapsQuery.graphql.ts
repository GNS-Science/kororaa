/**
 * @generated SignedSource<<2f9d3db16ef005b30a559989189d160c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type RegionGrid = "NZ_0_1_NB_1_0" | "NZ_0_1_NB_1_1" | "NZ_0_2_NB_1_1" | "WLG_0_01_nb_1_1" | "WLG_0_05_nb_1_1" | "%future added value";
export type HazardMapsQuery$variables = {
  grid_id?: RegionGrid | null;
  hazard_model_ids?: ReadonlyArray<string | null> | null;
  imts?: ReadonlyArray<string | null> | null;
  aggs?: ReadonlyArray<string | null> | null;
  vs30s?: ReadonlyArray<number | null> | null;
  poes?: ReadonlyArray<number | null> | null;
  color_scale?: string | null;
  fill_opacity?: number | null;
  stroke_width?: number | null;
  stroke_opacity?: number | null;
};
export type HazardMapsQuery$data = {
  readonly gridded_hazard: {
    readonly ok: boolean | null;
    readonly gridded_hazard: ReadonlyArray<{
      readonly grid_id: RegionGrid | null;
      readonly hazard_model: string | null;
      readonly imt: string | null;
      readonly agg: string | null;
      readonly hazard_map: {
        readonly geojson: any | null;
        readonly colour_scale: {
          readonly levels: ReadonlyArray<number | null> | null;
          readonly hexrgbs: ReadonlyArray<string | null> | null;
        } | null;
      } | null;
    } | null> | null;
  } | null;
};
export type HazardMapsQuery = {
  variables: HazardMapsQuery$variables;
  response: HazardMapsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "aggs"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "color_scale"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "fill_opacity"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "grid_id"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "hazard_model_ids"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "imts"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "poes"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "stroke_opacity"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "stroke_width"
},
v9 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "vs30s"
},
v10 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "aggs",
        "variableName": "aggs"
      },
      {
        "kind": "Variable",
        "name": "grid_id",
        "variableName": "grid_id"
      },
      {
        "kind": "Variable",
        "name": "hazard_model_ids",
        "variableName": "hazard_model_ids"
      },
      {
        "kind": "Variable",
        "name": "imts",
        "variableName": "imts"
      },
      {
        "kind": "Variable",
        "name": "poes",
        "variableName": "poes"
      },
      {
        "kind": "Variable",
        "name": "vs30s",
        "variableName": "vs30s"
      }
    ],
    "concreteType": "GriddedHazardResult",
    "kind": "LinkedField",
    "name": "gridded_hazard",
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
        "concreteType": "GriddedHazard",
        "kind": "LinkedField",
        "name": "gridded_hazard",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "grid_id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hazard_model",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "imt",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "agg",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "color_scale",
                "variableName": "color_scale"
              },
              {
                "kind": "Variable",
                "name": "fill_opacity",
                "variableName": "fill_opacity"
              },
              {
                "kind": "Variable",
                "name": "stroke_opacity",
                "variableName": "stroke_opacity"
              },
              {
                "kind": "Variable",
                "name": "stroke_width",
                "variableName": "stroke_width"
              }
            ],
            "concreteType": "GeoJsonHazardMap",
            "kind": "LinkedField",
            "name": "hazard_map",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "geojson",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "HexRgbValueMapping",
                "kind": "LinkedField",
                "name": "colour_scale",
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
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
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
      (v9/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "HazardMapsQuery",
    "selections": (v10/*: any*/),
    "type": "QueryRoot",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v0/*: any*/),
      (v9/*: any*/),
      (v6/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v8/*: any*/),
      (v7/*: any*/)
    ],
    "kind": "Operation",
    "name": "HazardMapsQuery",
    "selections": (v10/*: any*/)
  },
  "params": {
    "cacheID": "04dc2cc108f736ce00f4e4d3cc2678bd",
    "id": null,
    "metadata": {},
    "name": "HazardMapsQuery",
    "operationKind": "query",
    "text": "query HazardMapsQuery(\n  $grid_id: RegionGrid\n  $hazard_model_ids: [String]\n  $imts: [String]\n  $aggs: [String]\n  $vs30s: [Float]\n  $poes: [Float]\n  $color_scale: String\n  $fill_opacity: Float\n  $stroke_width: Float\n  $stroke_opacity: Float\n) {\n  gridded_hazard(grid_id: $grid_id, hazard_model_ids: $hazard_model_ids, imts: $imts, aggs: $aggs, vs30s: $vs30s, poes: $poes) {\n    ok\n    gridded_hazard {\n      grid_id\n      hazard_model\n      imt\n      agg\n      hazard_map(color_scale: $color_scale, fill_opacity: $fill_opacity, stroke_width: $stroke_width, stroke_opacity: $stroke_opacity) {\n        geojson\n        colour_scale {\n          levels\n          hexrgbs\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "120a2d0d3a4f5418af0d112ca98d9fcd";

export default node;
