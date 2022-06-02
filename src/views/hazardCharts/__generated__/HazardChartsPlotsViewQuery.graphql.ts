/**
 * @generated SignedSource<<c96f425cf6860d4f0e15126a4ca9ad8d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HazardChartsPlotsViewQuery$variables = {
  hazard_model?: string | null;
  vs30s?: ReadonlyArray<number | null> | null;
  imts?: ReadonlyArray<string | null> | null;
  locs?: ReadonlyArray<string | null> | null;
  aggs?: ReadonlyArray<string | null> | null;
};
export type HazardChartsPlotsViewQuery$data = {
  readonly hazard_curves: {
    readonly ok: boolean | null;
    readonly curves: ReadonlyArray<{
      readonly loc: string | null;
      readonly imt: string | null;
      readonly agg: string | null;
      readonly vs30: number | null;
      readonly curve: {
        readonly levels: ReadonlyArray<number | null> | null;
        readonly values: ReadonlyArray<number | null> | null;
      } | null;
    } | null> | null;
  } | null;
};
export type HazardChartsPlotsViewQuery = {
  variables: HazardChartsPlotsViewQuery$variables;
  response: HazardChartsPlotsViewQuery$data;
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
  "name": "hazard_model"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "imts"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "locs"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "vs30s"
},
v5 = [
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
        "name": "hazard_model",
        "variableName": "hazard_model"
      },
      {
        "kind": "Variable",
        "name": "imts",
        "variableName": "imts"
      },
      {
        "kind": "Variable",
        "name": "locs",
        "variableName": "locs"
      },
      {
        "kind": "Variable",
        "name": "vs30s",
        "variableName": "vs30s"
      }
    ],
    "concreteType": "ToshiHazardCurveResult",
    "kind": "LinkedField",
    "name": "hazard_curves",
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
        "concreteType": "ToshiHazardResult",
        "kind": "LinkedField",
        "name": "curves",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "loc",
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
            "args": null,
            "kind": "ScalarField",
            "name": "vs30",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ToshiHazardCurve",
            "kind": "LinkedField",
            "name": "curve",
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
                "name": "values",
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
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "HazardChartsPlotsViewQuery",
    "selections": (v5/*: any*/),
    "type": "QueryRoot",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v4/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "HazardChartsPlotsViewQuery",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "cd5f4b0eade3f9034296a92057d957fb",
    "id": null,
    "metadata": {},
    "name": "HazardChartsPlotsViewQuery",
    "operationKind": "query",
    "text": "query HazardChartsPlotsViewQuery(\n  $hazard_model: String\n  $vs30s: [Float]\n  $imts: [String]\n  $locs: [String]\n  $aggs: [String]\n) {\n  hazard_curves(hazard_model: $hazard_model, vs30s: $vs30s, imts: $imts, locs: $locs, aggs: $aggs) {\n    ok\n    curves {\n      loc\n      imt\n      agg\n      vs30\n      curve {\n        levels\n        values\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b76ef06f937333b9e8a81020e574134f";

export default node;
