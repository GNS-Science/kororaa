/**
 * @generated SignedSource<<415f93f54789e53ab59ce7152481916d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type RuptureAnimationPageControlsQuery$variables = {
  locationListId: string;
  radiiSetId: number;
};
export type RuptureAnimationPageControlsQuery$data = {
  readonly SOLVIS_get_location_list:
    | {
        readonly locations:
          | ReadonlyArray<
              | {
                  readonly location_id: string | null | undefined;
                  readonly name: string | null | undefined;
                }
              | null
              | undefined
            >
          | null
          | undefined;
      }
    | null
    | undefined;
  readonly SOLVIS_get_radii_set:
    | {
        readonly radii: ReadonlyArray<number | null | undefined> | null | undefined;
      }
    | null
    | undefined;
};
export type RuptureAnimationPageControlsQuery = {
  response: RuptureAnimationPageControlsQuery$data;
  variables: RuptureAnimationPageControlsQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "locationListId",
    },
    v1 = {
      defaultValue: null,
      kind: "LocalArgument",
      name: "radiiSetId",
    },
    v2 = [
      {
        alias: null,
        args: [
          {
            kind: "Variable",
            name: "radii_set_id",
            variableName: "radiiSetId",
          },
        ],
        concreteType: "RadiiSet",
        kind: "LinkedField",
        name: "SOLVIS_get_radii_set",
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "radii",
            storageKey: null,
          },
        ],
        storageKey: null,
      },
      {
        alias: null,
        args: [
          {
            kind: "Variable",
            name: "list_id",
            variableName: "locationListId",
          },
        ],
        concreteType: "LocationList",
        kind: "LinkedField",
        name: "SOLVIS_get_location_list",
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            concreteType: "Location",
            kind: "LinkedField",
            name: "locations",
            plural: true,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "location_id",
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
      argumentDefinitions: [v0 /*: any*/, v1 /*: any*/],
      kind: "Fragment",
      metadata: null,
      name: "RuptureAnimationPageControlsQuery",
      selections: v2 /*: any*/,
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [v1 /*: any*/, v0 /*: any*/],
      kind: "Operation",
      name: "RuptureAnimationPageControlsQuery",
      selections: v2 /*: any*/,
    },
    params: {
      cacheID: "850393ec52ca9b5ef9f82c97c18cff6b",
      id: null,
      metadata: {},
      name: "RuptureAnimationPageControlsQuery",
      operationKind: "query",
      text: "query RuptureAnimationPageControlsQuery(\n  $radiiSetId: Int!\n  $locationListId: String!\n) {\n  SOLVIS_get_radii_set(radii_set_id: $radiiSetId) {\n    radii\n  }\n  SOLVIS_get_location_list(list_id: $locationListId) {\n    locations {\n      name\n      location_id\n    }\n  }\n}\n",
    },
  };
})();

(node as any).hash = "970869184bf74eff63321d5b6f0fd097";

export default node;
