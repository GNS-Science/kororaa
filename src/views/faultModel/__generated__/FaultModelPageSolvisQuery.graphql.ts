/**
 * @generated SignedSource<<9c4954d2756a370f0046bcb2f8e98aaa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type FaultModelPageSolvisQuery$variables = {
  fault_colour?: string | null | undefined;
  location_colour?: string | null | undefined;
  location_ids?: ReadonlyArray<string | null | undefined> | null | undefined;
  maximum_mag?: number | null | undefined;
  maximum_rate?: number | null | undefined;
  minimum_mag?: number | null | undefined;
  minimum_rate?: number | null | undefined;
  radius_km?: number | null | undefined;
  solution_id: string;
};
export type FaultModelPageSolvisQuery$data = {
  readonly inversion_solution:
    | {
        readonly analysis:
          | {
              readonly fault_sections_geojson: any | null | undefined;
              readonly location_geojson: any | null | undefined;
              readonly solution_id: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};
export type FaultModelPageSolvisQuery = {
  response: FaultModelPageSolvisQuery$data;
  variables: FaultModelPageSolvisQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "fault_colour",
    },
    v1 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "location_colour",
    },
    v2 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "location_ids",
    },
    v3 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "maximum_mag",
    },
    v4 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "maximum_rate",
    },
    v5 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "minimum_mag",
    },
    v6 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "minimum_rate",
    },
    v7 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "radius_km",
    },
    v8 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "solution_id",
    },
    v9 = [
      {
        alias: "inversion_solution",
        args: [
          {
            fields: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "stroke_color",
                    variableName: "fault_colour",
                  },
                  {
                    kind: "Literal",
                    name: "stroke_opacity",
                    value: 1,
                  },
                  {
                    kind: "Literal",
                    name: "stroke_width",
                    value: 3,
                  },
                ],
                kind: "ObjectValue",
                name: "fault_trace_style",
              },
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "fill_color",
                    variableName: "location_colour",
                  },
                  {
                    kind: "Literal",
                    name: "fill_opacity",
                    value: 0.5,
                  },
                  {
                    kind: "Variable",
                    name: "stroke_color",
                    variableName: "location_colour",
                  },
                  {
                    kind: "Literal",
                    name: "stroke_opacity",
                    value: 0.5,
                  },
                  {
                    kind: "Literal",
                    name: "stroke_width",
                    value: 1,
                  },
                ],
                kind: "ObjectValue",
                name: "location_area_style",
              },
              {
                kind: "Variable",
                name: "location_ids",
                variableName: "location_ids",
              },
              {
                kind: "Variable",
                name: "maximum_mag",
                variableName: "maximum_mag",
              },
              {
                kind: "Variable",
                name: "maximum_rate",
                variableName: "maximum_rate",
              },
              {
                kind: "Variable",
                name: "minimum_mag",
                variableName: "minimum_mag",
              },
              {
                kind: "Variable",
                name: "minimum_rate",
                variableName: "minimum_rate",
              },
              {
                kind: "Variable",
                name: "radius_km",
                variableName: "radius_km",
              },
              {
                kind: "Variable",
                name: "solution_id",
                variableName: "solution_id",
              },
            ],
            kind: "ObjectValue",
            name: "filter",
          },
        ],
        concreteType: "FilterInversionSolution",
        kind: "LinkedField",
        name: "SOLVIS_inversion_solution",
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "InversionSolutionAnalysis",
            kind: "LinkedField",
            name: "analysis",
            plural: false,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "fault_sections_geojson",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "solution_id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "location_geojson",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: [
        v0 /*: any*/,
        v1 /*: any*/,
        v2 /*: any*/,
        v3 /*: any*/,
        v4 /*: any*/,
        v5 /*: any*/,
        v6 /*: any*/,
        v7 /*: any*/,
        v8 /*: any*/,
      ],
      kind: "Fragment",
      metadata: null,
      name: "FaultModelPageSolvisQuery",
      selections: v9 /*: any*/,
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [
        v8 /*: any*/,
        v2 /*: any*/,
        v7 /*: any*/,
        v5 /*: any*/,
        v3 /*: any*/,
        v6 /*: any*/,
        v4 /*: any*/,
        v1 /*: any*/,
        v0 /*: any*/,
      ],
      kind: "Operation",
      name: "FaultModelPageSolvisQuery",
      selections: v9 /*: any*/,
    },
    params: {
      cacheID: "3621021c587fc079cc6b51060991550a",
      id: null,
      metadata: {},
      name: "FaultModelPageSolvisQuery",
      operationKind: "query",
      text: "query FaultModelPageSolvisQuery(\n  $solution_id: ID!\n  $location_ids: [String]\n  $radius_km: Int\n  $minimum_mag: Float\n  $maximum_mag: Float\n  $minimum_rate: Float\n  $maximum_rate: Float\n  $location_colour: String\n  $fault_colour: String\n) {\n  inversion_solution: SOLVIS_inversion_solution(filter: {solution_id: $solution_id, location_ids: $location_ids, radius_km: $radius_km, minimum_mag: $minimum_mag, maximum_mag: $maximum_mag, minimum_rate: $minimum_rate, maximum_rate: $maximum_rate, location_area_style: {stroke_color: $location_colour, stroke_width: 1, stroke_opacity: 0.5, fill_color: $location_colour, fill_opacity: 0.5}, fault_trace_style: {stroke_color: $fault_colour, stroke_width: 3, stroke_opacity: 1}}) {\n    analysis {\n      fault_sections_geojson\n      solution_id\n      location_geojson\n    }\n  }\n}\n",
    },
  };
})();

(node as any).hash = "a3f0fd9dd28c56fcc7694376c6a9445c";

export default node;
