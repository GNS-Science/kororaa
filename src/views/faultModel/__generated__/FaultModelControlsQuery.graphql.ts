/**
 * @generated SignedSource<<caeb302470dd90ceea4aeed0275e4638>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FaultModelControlsQuery$variables = {};
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
};
export type FaultModelControlsQuery = {
  variables: FaultModelControlsQuery$variables;
  response: FaultModelControlsQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "long_name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "short_name",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "version",
        "value": "NSHM_1.0.0"
      }
    ],
    "concreteType": "NzshmModelResult",
    "kind": "LinkedField",
    "name": "nzshm_model",
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
                  (v0/*: any*/),
                  (v1/*: any*/),
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
                          (v0/*: any*/),
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
                  (v1/*: any*/),
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "BranchAttributeValueSpec",
                    "kind": "LinkedField",
                    "name": "branches",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      (v0/*: any*/),
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
    "storageKey": "nzshm_model(version:\"NSHM_1.0.0\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FaultModelControlsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FaultModelControlsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "2de8ee1f2c5f686a37ceaf6d274924c8",
    "id": null,
    "metadata": {},
    "name": "FaultModelControlsQuery",
    "operationKind": "query",
    "text": "query FaultModelControlsQuery {\n  nzshm_model(version: \"NSHM_1.0.0\") {\n    model {\n      version\n      title\n      source_logic_tree {\n        fault_system_branches {\n          long_name\n          short_name\n          branches {\n            weight\n            inversion_solution_id\n            inversion_solution_type\n            onfault_nrml_id\n            distributed_nrml_id\n            values {\n              long_name\n              json_value\n            }\n          }\n        }\n      }\n      source_logic_tree_spec {\n        fault_system_branches {\n          short_name\n          long_name\n          branches {\n            name\n            long_name\n            value_options\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1c01469b474176571aac66d7cbdd61cb";

export default node;
