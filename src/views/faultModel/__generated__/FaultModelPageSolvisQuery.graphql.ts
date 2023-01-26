/**
 * @generated SignedSource<<3e5e0f78982e9b7c4e48d5f6770338ab>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FaultModelPageSolvisQuery$variables = {
  solution_id: string;
  location_codes?: ReadonlyArray<string | null> | null;
  radius_km?: number | null;
  minimum_mag?: number | null;
  maximum_mag?: number | null;
  minimum_rate?: number | null;
  maximum_rate?: number | null;
};
export type FaultModelPageSolvisQuery$data = {
  readonly SOLVIS_about: string | null;
  readonly SOLVIS_analyse_solution: {
    readonly analysis: {
      readonly fault_sections_geojson: any | null;
      readonly solution_id: string | null;
    } | null;
  } | null;
};
export type FaultModelPageSolvisQuery = {
  variables: FaultModelPageSolvisQuery$variables;
  response: FaultModelPageSolvisQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "location_codes"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "maximum_mag"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "maximum_rate"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "minimum_mag"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "minimum_rate"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "radius_km"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "solution_id"
},
v7 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "SOLVIS_about",
    "storageKey": null
  },
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "location_codes",
            "variableName": "location_codes"
          },
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
            "name": "radius_km",
            "variableName": "radius_km"
          },
          {
            "kind": "Variable",
            "name": "solution_id",
            "variableName": "solution_id"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "SOLVIS_FilterInversionSolution",
    "kind": "LinkedField",
    "name": "SOLVIS_analyse_solution",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "SOLVIS_InversionSolutionAnalysis",
        "kind": "LinkedField",
        "name": "analysis",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fault_sections_geojson",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "solution_id",
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
      (v6/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "FaultModelPageSolvisQuery",
    "selections": (v7/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v6/*: any*/),
      (v0/*: any*/),
      (v5/*: any*/),
      (v3/*: any*/),
      (v1/*: any*/),
      (v4/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "FaultModelPageSolvisQuery",
    "selections": (v7/*: any*/)
  },
  "params": {
    "cacheID": "2ba2befc589cd9f9f2b3d02e41e2e17a",
    "id": null,
    "metadata": {},
    "name": "FaultModelPageSolvisQuery",
    "operationKind": "query",
    "text": "query FaultModelPageSolvisQuery(\n  $solution_id: ID!\n  $location_codes: [String]\n  $radius_km: Int\n  $minimum_mag: Float\n  $maximum_mag: Float\n  $minimum_rate: Float\n  $maximum_rate: Float\n) {\n  SOLVIS_about\n  SOLVIS_analyse_solution(input: {solution_id: $solution_id, location_codes: $location_codes, radius_km: $radius_km, minimum_mag: $minimum_mag, maximum_mag: $maximum_mag, minimum_rate: $minimum_rate, maximum_rate: $maximum_rate}) {\n    analysis {\n      fault_sections_geojson\n      solution_id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a854a99c50b58d35e77eb853fc02e281";

export default node;
