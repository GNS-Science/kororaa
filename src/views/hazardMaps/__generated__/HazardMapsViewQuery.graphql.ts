/**
 * @generated SignedSource<<0b2203ee68ac627773ec245d4a8c99e4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type RegionGrid = "NZ_0_1_NB_1_0" | "NZ_0_1_NB_1_1" | "NZ_0_2_NB_1_1" | "WLG_0_01_nb_1_1" | "WLG_0_05_nb_1_1" | "%future added value";
export type HazardMapsViewQuery$variables = {
  grid_id?: RegionGrid | null;
  hazard_model_ids?: ReadonlyArray<string | null> | null;
  imts?: ReadonlyArray<string | null> | null;
  aggs?: ReadonlyArray<string | null> | null;
  vs30s?: ReadonlyArray<number | null> | null;
  poes?: ReadonlyArray<number | null> | null;
};
export type HazardMapsViewQuery$data = {
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
export type HazardMapsViewQuery = {
  variables: HazardMapsViewQuery$variables;
  response: HazardMapsViewQuery$data;
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
  "name": "grid_id"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "hazard_model_ids"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "imts"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "poes"
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
            "args": null,
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
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "HazardMapsViewQuery",
    "selections": (v6/*: any*/),
    "type": "QueryRoot",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/),
      (v5/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "HazardMapsViewQuery",
    "selections": (v6/*: any*/)
  },
  "params": {
    "cacheID": "2e1628756fc6d168125f78aca550abf9",
    "id": null,
    "metadata": {},
    "name": "HazardMapsViewQuery",
    "operationKind": "query",
    "text": "query HazardMapsViewQuery(\n  $grid_id: RegionGrid\n  $hazard_model_ids: [String]\n  $imts: [String]\n  $aggs: [String]\n  $vs30s: [Float]\n  $poes: [Float]\n) {\n  gridded_hazard(grid_id: $grid_id, hazard_model_ids: $hazard_model_ids, imts: $imts, aggs: $aggs, vs30s: $vs30s, poes: $poes) {\n    ok\n    gridded_hazard {\n      grid_id\n      hazard_model\n      imt\n      agg\n      geojson\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f4315197dd3416e23539fb2577824be5";

export default node;