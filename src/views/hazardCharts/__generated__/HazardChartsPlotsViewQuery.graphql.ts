/**
 * @generated SignedSource<<1fd06fd69d134d9849a08daab995c9f8>>
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
  resolution?: number | null;
};
export type HazardChartsPlotsViewQuery$data = {
  readonly hazard_curves: {
    readonly ok: boolean | null;
    readonly locations: ReadonlyArray<{
      readonly lat: number | null;
      readonly lon: number | null;
      readonly resolution: number | null;
      readonly code: string | null;
      readonly name: string | null;
      readonly key: string | null;
    } | null> | null;
    readonly curves: ReadonlyArray<{
      readonly hazard_model: string | null;
      readonly imt: string | null;
      readonly loc: string | null;
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
  "name": "resolution"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "vs30s"
},
v6 = [
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
        "name": "resolution",
        "variableName": "resolution"
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
        "concreteType": "GriddedLocation",
        "kind": "LinkedField",
        "name": "locations",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lat",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lon",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "resolution",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "code",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "key",
            "storageKey": null
          }
        ],
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
            "name": "loc",
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
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "HazardChartsPlotsViewQuery",
    "selections": (v6/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v5/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "HazardChartsPlotsViewQuery",
    "selections": (v6/*: any*/)
  },
  "params": {
    "cacheID": "0811de2a56093a331937cd08d67cca4a",
    "id": null,
    "metadata": {},
    "name": "HazardChartsPlotsViewQuery",
    "operationKind": "query",
    "text": "query HazardChartsPlotsViewQuery(\n  $hazard_model: String\n  $vs30s: [Int]\n  $imts: [String]\n  $locs: [String]\n  $aggs: [String]\n  $resolution: Float\n) {\n  hazard_curves(hazard_model: $hazard_model, vs30s: $vs30s, imts: $imts, locs: $locs, aggs: $aggs, resolution: $resolution) {\n    ok\n    locations {\n      lat\n      lon\n      resolution\n      code\n      name\n      key\n    }\n    curves {\n      hazard_model\n      imt\n      loc\n      agg\n      vs30\n      curve {\n        levels\n        values\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f63ce2e33608da9404ed7040395d7f36";

export default node;
