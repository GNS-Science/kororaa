/**
 * @generated SignedSource<<7986c6da5db2b66853d3516438166b12>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ColourScaleNormalise = "LOG" | "LIN" | "%future added value";
export type ContentFormatEnum = "Raw" | "Markdown" | "%future added value";
export type ContentStatusEnum = "Undefined" | "Draft" | "Published" | "Deprecated" | "%future added value";
export type RegionGrid = "NZ_0_1_NB_1_0" | "NZ_0_1_NB_1_1" | "NZ_0_2_NB_1_1" | "WLG_0_01_nb_1_1" | "WLG_0_05_nb_1_1" | "%future added value";
export type HazardMapsPageQuery$variables = {
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
  color_scale_normalise?: ColourScaleNormalise | null;
};
export type HazardMapsPageQuery$data = {
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
  readonly textual_content: {
    readonly ok: boolean | null;
    readonly content: ReadonlyArray<{
      readonly index: string | null;
      readonly content_type: ContentFormatEnum | null;
      readonly text: string | null;
      readonly created: any | null;
      readonly author: string | null;
      readonly tags: ReadonlyArray<string | null> | null;
      readonly status: ContentStatusEnum | null;
    } | null> | null;
  } | null;
};
export type HazardMapsPageQuery = {
  variables: HazardMapsPageQuery$variables;
  response: HazardMapsPageQuery$data;
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
  "name": "color_scale_normalise"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "color_scale_vmax"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "fill_opacity"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "grid_id"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "hazard_model_ids"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "imts"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "poes"
},
v9 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "stroke_opacity"
},
v10 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "stroke_width"
},
v11 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "vs30s"
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "ok",
  "storageKey": null
},
v13 = [
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
      (v12/*: any*/),
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
                "name": "color_scale_normalise",
                "variableName": "color_scale_normalise"
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
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "index",
        "value": "hazmap_help.md"
      }
    ],
    "concreteType": "TextualContentResult",
    "kind": "LinkedField",
    "name": "textual_content",
    "plural": false,
    "selections": [
      (v12/*: any*/),
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
            "name": "index",
            "storageKey": null
          },
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "created",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "author",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "tags",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "status",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "textual_content(index:\"hazmap_help.md\")"
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
      (v10/*: any*/),
      (v11/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "HazardMapsPageQuery",
    "selections": (v13/*: any*/),
    "type": "QueryRoot",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v0/*: any*/),
      (v11/*: any*/),
      (v8/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v10/*: any*/),
      (v9/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "HazardMapsPageQuery",
    "selections": (v13/*: any*/)
  },
  "params": {
    "cacheID": "cab22314ac3f32dfcbc557c02cc0bd22",
    "id": null,
    "metadata": {},
    "name": "HazardMapsPageQuery",
    "operationKind": "query",
    "text": "query HazardMapsPageQuery(\n  $grid_id: RegionGrid\n  $hazard_model_ids: [String]\n  $imts: [String]\n  $aggs: [String]\n  $vs30s: [Float]\n  $poes: [Float]\n  $color_scale: String\n  $color_scale_vmax: Float\n  $fill_opacity: Float\n  $stroke_width: Float\n  $stroke_opacity: Float\n  $color_scale_normalise: ColourScaleNormalise\n) {\n  gridded_hazard(grid_id: $grid_id, hazard_model_ids: $hazard_model_ids, imts: $imts, aggs: $aggs, vs30s: $vs30s, poes: $poes) {\n    ok\n    gridded_hazard {\n      grid_id\n      hazard_model\n      imt\n      agg\n      hazard_map(color_scale: $color_scale, color_scale_vmax: $color_scale_vmax, fill_opacity: $fill_opacity, stroke_width: $stroke_width, stroke_opacity: $stroke_opacity, color_scale_normalise: $color_scale_normalise) {\n        geojson\n        colour_scale {\n          levels\n          hexrgbs\n        }\n      }\n    }\n  }\n  textual_content(index: \"hazmap_help.md\") {\n    ok\n    content {\n      index\n      content_type\n      text\n      created\n      author\n      tags\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a69cb4807d959b5241d6f0e2e374c722";

export default node;
