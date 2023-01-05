/**
 * @generated SignedSource<<c69a5529842cfa90a4f1c9c762815b87>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FaultModelPageQuery$variables = {};
export type FaultModelPageQuery$data = {
  readonly nzshm_model: {
    readonly model: {
      readonly version: string | null;
      readonly title: string | null;
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
export type FaultModelPageQuery = {
  variables: FaultModelPageQuery$variables;
  response: FaultModelPageQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "long_name",
  "storageKey": null
},
v1 = [
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
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "short_name",
                    "storageKey": null
                  },
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
    "name": "FaultModelPageQuery",
    "selections": (v1/*: any*/),
    "type": "QueryRoot",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FaultModelPageQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "eddf17e954c38d18a48c2fda78ce7695",
    "id": null,
    "metadata": {},
    "name": "FaultModelPageQuery",
    "operationKind": "query",
    "text": "query FaultModelPageQuery {\n  nzshm_model(version: \"NSHM_1.0.0\") {\n    model {\n      version\n      title\n      source_logic_tree_spec {\n        fault_system_branches {\n          short_name\n          long_name\n          branches {\n            name\n            long_name\n            value_options\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9fbc72a8098632eca3ba87d9689fc708";

export default node;
