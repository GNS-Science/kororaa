/**
 * @generated SignedSource<<780e7789f76848228fc37f48ac5fdeb8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type FaultModelControlsQuery$variables = {
  locationListId: string;
  model_id: string;
  radiiSetId: number;
};
export type FaultModelControlsQuery$data = {
  readonly SOLVIS_get_location_list: {
    readonly list_id: string | null | undefined;
    readonly locations: ReadonlyArray<{
      readonly latitude: number | null | undefined;
      readonly location_id: string | null | undefined;
      readonly longitude: number | null | undefined;
      readonly name: string | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly SOLVIS_get_radii_set: {
    readonly radii: ReadonlyArray<number | null | undefined> | null | undefined;
  } | null | undefined;
  readonly nzshm_model: {
    readonly model: {
      readonly source_logic_tree: {
        readonly fault_system_branches: ReadonlyArray<{
          readonly branches: ReadonlyArray<{
            readonly distributed_nrml_id: string | null | undefined;
            readonly inversion_solution_id: string | null | undefined;
            readonly inversion_solution_type: string | null | undefined;
            readonly onfault_nrml_id: string | null | undefined;
            readonly values: ReadonlyArray<{
              readonly json_value: any | null | undefined;
              readonly long_name: string | null | undefined;
            } | null | undefined> | null | undefined;
            readonly weight: number | null | undefined;
          } | null | undefined> | null | undefined;
          readonly long_name: string | null | undefined;
          readonly short_name: string | null | undefined;
        } | null | undefined> | null | undefined;
      } | null | undefined;
      readonly source_logic_tree_spec: {
        readonly fault_system_branches: ReadonlyArray<{
          readonly branches: ReadonlyArray<{
            readonly long_name: string | null | undefined;
            readonly name: string | null | undefined;
            readonly value_options: any | null | undefined;
          } | null | undefined> | null | undefined;
          readonly long_name: string | null | undefined;
          readonly short_name: string | null | undefined;
        } | null | undefined> | null | undefined;
      } | null | undefined;
      readonly title: string | null | undefined;
      readonly version: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type FaultModelControlsQuery = {
  response: FaultModelControlsQuery$data;
  variables: FaultModelControlsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "locationListId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "model_id"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "radiiSetId"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "long_name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "short_name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = [
  {
    "alias": "nzshm_model",
    "args": [
      {
        "kind": "Variable",
        "name": "version",
        "variableName": "model_id"
      }
    ],
    "concreteType": "NzshmModelResult",
    "kind": "LinkedField",
    "name": "KORORAA_nzshm_model",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "NzshmModel",
        "kind": "LinkedField",
        "name": "model",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "version",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "SourceLogicTree",
            "kind": "LinkedField",
            "name": "source_logic_tree",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "FaultSystemLogicTree",
                "kind": "LinkedField",
                "name": "fault_system_branches",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "SourceLogicTreeBranch",
                    "kind": "LinkedField",
                    "name": "branches",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "weight",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "inversion_solution_id",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "inversion_solution_type",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "onfault_nrml_id",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "distributed_nrml_id",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "BranchAttributeValue",
                        "kind": "LinkedField",
                        "name": "values",
                        "plural": true,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "json_value",
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
            "args": null,
            "concreteType": "SourceLogicTreeSpec",
            "kind": "LinkedField",
            "name": "source_logic_tree_spec",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "FaultSystemLogicTreeSpec",
                "kind": "LinkedField",
                "name": "fault_system_branches",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "BranchAttributeValueSpec",
                    "kind": "LinkedField",
                    "name": "branches",
                    "plural": true,
                    "selections": [
                      (v5/*: any*/),
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "value_options",
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
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "radii_set_id",
        "variableName": "radiiSetId"
      }
    ],
    "concreteType": "RadiiSet",
    "kind": "LinkedField",
    "name": "SOLVIS_get_radii_set",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "radii",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "list_id",
        "variableName": "locationListId"
      }
    ],
    "concreteType": "LocationList",
    "kind": "LinkedField",
    "name": "SOLVIS_get_location_list",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "list_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Location",
        "kind": "LinkedField",
        "name": "locations",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "location_id",
            "storageKey": null
          },
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "latitude",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "longitude",
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
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "FaultModelControlsQuery",
    "selections": (v6/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "FaultModelControlsQuery",
    "selections": (v6/*: any*/)
  },
  "params": {
    "cacheID": "f6a793ff54284773d974dbc70bf389e1",
    "id": null,
    "metadata": {},
    "name": "FaultModelControlsQuery",
    "operationKind": "query",
    "text": "query FaultModelControlsQuery(\n  $model_id: String!\n  $radiiSetId: Int!\n  $locationListId: String!\n) {\n  nzshm_model: KORORAA_nzshm_model(version: $model_id) {\n    model {\n      version\n      title\n      source_logic_tree {\n        fault_system_branches {\n          long_name\n          short_name\n          branches {\n            weight\n            inversion_solution_id\n            inversion_solution_type\n            onfault_nrml_id\n            distributed_nrml_id\n            values {\n              long_name\n              json_value\n            }\n          }\n        }\n      }\n      source_logic_tree_spec {\n        fault_system_branches {\n          short_name\n          long_name\n          branches {\n            name\n            long_name\n            value_options\n          }\n        }\n      }\n    }\n  }\n  SOLVIS_get_radii_set(radii_set_id: $radiiSetId) {\n    radii\n  }\n  SOLVIS_get_location_list(list_id: $locationListId) {\n    list_id\n    locations {\n      location_id\n      name\n      latitude\n      longitude\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4f7a930c8d7ba15f765309853a23855e";

export default node;
