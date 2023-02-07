/**
 * @generated SignedSource<<d50e330e44fb5c47f115ab2ad7612620>>
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
  location_colour?: string | null;
  fault_colour?: string | null;
};
export type FaultModelPageSolvisQuery$data = {
  readonly SOLVIS_analyse_solution: {
    readonly analysis: {
      readonly fault_sections_geojson: any | null;
      readonly solution_id: string | null;
      readonly location_geojson: any | null;
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
  "name": "fault_colour"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "location_codes"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "location_colour"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "maximum_mag"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "maximum_rate"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "minimum_mag"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "minimum_rate"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "radius_km"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "solution_id"
},
v9 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "stroke_color",
                "variableName": "fault_colour"
              },
              {
                "kind": "Literal",
                "name": "stroke_opacity",
                "value": 1
              },
              {
                "kind": "Literal",
                "name": "stroke_width",
                "value": 3
              }
            ],
            "kind": "ObjectValue",
            "name": "fault_trace_style"
          },
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "fill_color",
                "variableName": "location_colour"
              },
              {
                "kind": "Literal",
                "name": "fill_opacity",
                "value": 0.5
              },
              {
                "kind": "Variable",
                "name": "stroke_color",
                "variableName": "location_colour"
              },
              {
                "kind": "Literal",
                "name": "stroke_opacity",
                "value": 0.5
              },
              {
                "kind": "Literal",
                "name": "stroke_width",
                "value": 1
              }
            ],
            "kind": "ObjectValue",
            "name": "location_area_style"
          },
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "location_geojson",
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
      (v8/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "FaultModelPageSolvisQuery",
    "selections": (v9/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v8/*: any*/),
      (v1/*: any*/),
      (v7/*: any*/),
      (v5/*: any*/),
      (v3/*: any*/),
      (v6/*: any*/),
      (v4/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "FaultModelPageSolvisQuery",
    "selections": (v9/*: any*/)
  },
  "params": {
    "cacheID": "668a77c79a082db5d5caf463f0c80567",
    "id": null,
    "metadata": {},
    "name": "FaultModelPageSolvisQuery",
    "operationKind": "query",
    "text": "query FaultModelPageSolvisQuery(\n  $solution_id: ID!\n  $location_codes: [String]\n  $radius_km: Int\n  $minimum_mag: Float\n  $maximum_mag: Float\n  $minimum_rate: Float\n  $maximum_rate: Float\n  $location_colour: String\n  $fault_colour: String\n) {\n  SOLVIS_analyse_solution(input: {solution_id: $solution_id, location_codes: $location_codes, radius_km: $radius_km, minimum_mag: $minimum_mag, maximum_mag: $maximum_mag, minimum_rate: $minimum_rate, maximum_rate: $maximum_rate, location_area_style: {stroke_color: $location_colour, stroke_width: 1, stroke_opacity: 0.5, fill_color: $location_colour, fill_opacity: 0.5}, fault_trace_style: {stroke_color: $fault_colour, stroke_width: 3, stroke_opacity: 1}}) {\n    analysis {\n      fault_sections_geojson\n      solution_id\n      location_geojson\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "77ffb513fef2ac96022c4560ef70adac";

export default node;
