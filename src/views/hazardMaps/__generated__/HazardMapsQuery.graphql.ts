/**
 * @generated SignedSource<<6f30d1bb854a7e88b8e679bab1a0c249>>
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
  color_scale_vmax?: number | null;
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
      readonly geojson: any | null;
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
  "name": "color_scale_vmax"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "fill_opacity"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "grid_id"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "hazard_model_ids"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "imts"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "poes"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "stroke_opacity"
},
v9 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "stroke_width"
},
v10 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "vs30s"
},
v11 = [
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
                "name": "color_scale_vmax",
                "variableName": "color_scale_vmax"
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
            "kind": "ScalarField",
            "name": "geojson",
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
      (v9/*: any*/),
      (v10/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "HazardMapsQuery",
    "selections": (v11/*: any*/),
    "type": "QueryRoot",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v0/*: any*/),
      (v10/*: any*/),
      (v7/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v9/*: any*/),
      (v8/*: any*/)
    ],
    "kind": "Operation",
    "name": "HazardMapsQuery",
    "selections": (v11/*: any*/)
  },
  "params": {
    "cacheID": "0b3d81f6ac9c9651185925c393bfc977",
    "id": null,
    "metadata": {},
    "name": "HazardMapsQuery",
    "operationKind": "query",
    "text": "query HazardMapsQuery(\n  $grid_id: RegionGrid\n  $hazard_model_ids: [String]\n  $imts: [String]\n  $aggs: [String]\n  $vs30s: [Float]\n  $poes: [Float]\n  $color_scale: String\n  $color_scale_vmax: Float\n  $fill_opacity: Float\n  $stroke_width: Float\n  $stroke_opacity: Float\n) {\n  gridded_hazard(grid_id: $grid_id, hazard_model_ids: $hazard_model_ids, imts: $imts, aggs: $aggs, vs30s: $vs30s, poes: $poes) {\n    ok\n    gridded_hazard {\n      grid_id\n      hazard_model\n      imt\n      agg\n      geojson(color_scale: $color_scale, color_scale_vmax: $color_scale_vmax, fill_opacity: $fill_opacity, stroke_width: $stroke_width, stroke_opacity: $stroke_opacity)\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "913b387455e250f6a48665e88a6335d5";

export default node;
