/**
 * @generated SignedSource<<deb4d3cac579457bda29ef1b9129d882>>
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
    "args": [
      {
        "fields": [
          {
            "kind": "Literal",
            "name": "fault_trace_style",
            "value": {
              "stroke_color": "silver",
              "stroke_opacity": 1,
              "stroke_width": 3
            }
          },
          {
            "kind": "Literal",
            "name": "location_area_style",
            "value": {
              "fill_color": "gold",
              "fill_opacity": 0.5,
              "stroke_color": "gold",
              "stroke_opacity": 0.5,
              "stroke_width": 1
            }
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
    "cacheID": "846bfecbee2706d98f38357b105530a3",
    "id": null,
    "metadata": {},
    "name": "FaultModelPageSolvisQuery",
    "operationKind": "query",
    "text": "query FaultModelPageSolvisQuery(\n  $solution_id: ID!\n  $location_codes: [String]\n  $radius_km: Int\n  $minimum_mag: Float\n  $maximum_mag: Float\n  $minimum_rate: Float\n  $maximum_rate: Float\n) {\n  SOLVIS_analyse_solution(input: {solution_id: $solution_id, location_codes: $location_codes, radius_km: $radius_km, minimum_mag: $minimum_mag, maximum_mag: $maximum_mag, minimum_rate: $minimum_rate, maximum_rate: $maximum_rate, location_area_style: {stroke_color: \"gold\", stroke_width: 1, stroke_opacity: 0.5, fill_color: \"gold\", fill_opacity: 0.5}, fault_trace_style: {stroke_color: \"silver\", stroke_width: 3, stroke_opacity: 1}}) {\n    analysis {\n      fault_sections_geojson\n      solution_id\n      location_geojson\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "36a50c13c5196b96e3f4a541ce30ba19";

export default node;
