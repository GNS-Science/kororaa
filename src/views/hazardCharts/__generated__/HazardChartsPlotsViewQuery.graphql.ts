/**
 * @generated SignedSource<<abe9f350ae4165f886cdd68eceb0e95f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type HazardChartsPlotsViewQuery$variables = {
  aggs?: ReadonlyArray<string | null | undefined> | null | undefined;
  hazard_model?: string | null | undefined;
  imts?: ReadonlyArray<string | null | undefined> | null | undefined;
  locs?: ReadonlyArray<string | null | undefined> | null | undefined;
  resolution?: number | null | undefined;
  vs30s?: ReadonlyArray<number | null | undefined> | null | undefined;
};
export type HazardChartsPlotsViewQuery$data = {
  readonly hazard_curves: {
    readonly curves: ReadonlyArray<{
      readonly agg: string | null | undefined;
      readonly curve: {
        readonly levels: ReadonlyArray<number | null | undefined> | null | undefined;
        readonly values: ReadonlyArray<number | null | undefined> | null | undefined;
      } | null | undefined;
      readonly hazard_model: string | null | undefined;
      readonly imt: string | null | undefined;
      readonly loc: string | null | undefined;
      readonly vs30: number | null | undefined;
    } | null | undefined> | null | undefined;
    readonly locations: ReadonlyArray<{
      readonly code: string | null | undefined;
      readonly key: string | null | undefined;
      readonly lat: number | null | undefined;
      readonly lon: number | null | undefined;
      readonly name: string | null | undefined;
      readonly resolution: number | null | undefined;
    } | null | undefined> | null | undefined;
    readonly ok: boolean | null | undefined;
  } | null | undefined;
};
export type HazardChartsPlotsViewQuery = {
  response: HazardChartsPlotsViewQuery$data;
  variables: HazardChartsPlotsViewQuery$variables;
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
    "alias": "hazard_curves",
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
    "name": "HAZARD_hazard_curves",
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
    "cacheID": "abc3434508bddc1a158cce78bfbeda81",
    "id": null,
    "metadata": {},
    "name": "HazardChartsPlotsViewQuery",
    "operationKind": "query",
    "text": "query HazardChartsPlotsViewQuery(\n  $hazard_model: String\n  $vs30s: [Int]\n  $imts: [String]\n  $locs: [String]\n  $aggs: [String]\n  $resolution: Float\n) {\n  hazard_curves: HAZARD_hazard_curves(hazard_model: $hazard_model, vs30s: $vs30s, imts: $imts, locs: $locs, aggs: $aggs, resolution: $resolution) {\n    ok\n    locations {\n      lat\n      lon\n      resolution\n      code\n      name\n      key\n    }\n    curves {\n      hazard_model\n      imt\n      loc\n      agg\n      vs30\n      curve {\n        levels\n        values\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2859b7096e8f3f3f3259c33fb4acc13d";

export default node;
