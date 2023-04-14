/**
 * @generated SignedSource<<71eea7195f51366ebe20bf9bfe931da6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FaultModelControlsQuery$variables = {
  radiiSetId: number;
  locationListId: string;
};
export type FaultModelControlsQuery$data = {
  readonly nzshm_model: {
    readonly model: {
      readonly version: string | null;
      readonly title: string | null;
      readonly source_logic_tree: {
        readonly fault_system_branches: ReadonlyArray<{
          readonly long_name: string | null;
          readonly short_name: string | null;
          readonly branches: ReadonlyArray<{
            readonly weight: number | null;
            readonly inversion_solution_id: string | null;
            readonly inversion_solution_type: string | null;
            readonly onfault_nrml_id: string | null;
            readonly distributed_nrml_id: string | null;
            readonly values: ReadonlyArray<{
              readonly long_name: string | null;
              readonly json_value: any | null;
            } | null> | null;
          } | null> | null;
        } | null> | null;
      } | null;
      readonly source_logic_tree_spec: {
        readonly fault_system_branches: ReadonlyArray<{
          readonly short_name: string | null;
          readonly long_name: string | null;
          readonly branches: ReadonlyArray<{
            readonly name: string | null;
            readonly long_name: string | null;
            readonly value_options: any | null;
          } | null> | null;
        } | null> | null;
      } | null;
    } | null;
  } | null;
  readonly SOLVIS_get_radii_set: {
    readonly radii: ReadonlyArray<number | null> | null;
  } | null;
  readonly SOLVIS_get_location_list: {
    readonly list_id: string | null;
    readonly locations: ReadonlyArray<{
      readonly location_id: string | null;
      readonly name: string | null;
      readonly latitude: number | null;
      readonly longitude: number | null;
    } | null> | null;
  } | null;
};
export type FaultModelControlsQuery = {
  variables: FaultModelControlsQuery$variables;
  response: FaultModelControlsQuery$data;
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
  "name": "radiiSetId"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "long_name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "short_name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  {
    "alias": "nzshm_model",
    "args": [
      {
        "kind": "Literal",
        "name": "version",
        "value": "NSHM_1.0.0"
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
                  (v2/*: any*/),
                  (v3/*: any*/),
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
                          (v2/*: any*/),
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
                  (v3/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "BranchAttributeValueSpec",
                    "kind": "LinkedField",
                    "name": "branches",
                    "plural": true,
                    "selections": [
                      (v4/*: any*/),
                      (v2/*: any*/),
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
    "storageKey": "KORORAA_nzshm_model(version:\"NSHM_1.0.0\")"
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
          (v4/*: any*/),
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "FaultModelControlsQuery",
    "selections": (v5/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "FaultModelControlsQuery",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "3493b8f04cf1be4683a3146f9b16368a",
    "id": null,
    "metadata": {},
    "name": "FaultModelControlsQuery",
    "operationKind": "query",
    "text": "query FaultModelControlsQuery(\n  $radiiSetId: Int!\n  $locationListId: String!\n) {\n  nzshm_model: KORORAA_nzshm_model(version: \"NSHM_1.0.0\") {\n    model {\n      version\n      title\n      source_logic_tree {\n        fault_system_branches {\n          long_name\n          short_name\n          branches {\n            weight\n            inversion_solution_id\n            inversion_solution_type\n            onfault_nrml_id\n            distributed_nrml_id\n            values {\n              long_name\n              json_value\n            }\n          }\n        }\n      }\n      source_logic_tree_spec {\n        fault_system_branches {\n          short_name\n          long_name\n          branches {\n            name\n            long_name\n            value_options\n          }\n        }\n      }\n    }\n  }\n  SOLVIS_get_radii_set(radii_set_id: $radiiSetId) {\n    radii\n  }\n  SOLVIS_get_location_list(list_id: $locationListId) {\n    list_id\n    locations {\n      location_id\n      name\n      latitude\n      longitude\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fc842283e16dafeab9af8a4357db7f82";

export default node;
