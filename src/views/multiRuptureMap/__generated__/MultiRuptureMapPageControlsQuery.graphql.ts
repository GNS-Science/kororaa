/**
 * @generated SignedSource<<7bf879b83680b93ae3586cdf1e77a7fb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MultiRuptureMapPageControlsQuery$variables = {
  radiiSetId: number;
  locationListId: string;
};
export type MultiRuptureMapPageControlsQuery$data = {
  readonly SOLVIS_get_radii_set: {
    readonly radii: ReadonlyArray<number | null> | null;
  } | null;
  readonly SOLVIS_get_location_list: {
    readonly locations: ReadonlyArray<{
      readonly name: string | null;
      readonly location_id: string | null;
    } | null> | null;
  } | null;
};
export type MultiRuptureMapPageControlsQuery = {
  variables: MultiRuptureMapPageControlsQuery$variables;
  response: MultiRuptureMapPageControlsQuery$data;
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
v2 = [
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
        "concreteType": "Location",
        "kind": "LinkedField",
        "name": "locations",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "location_id",
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
    "name": "MultiRuptureMapPageControlsQuery",
    "selections": (v2/*: any*/),
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
    "name": "MultiRuptureMapPageControlsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "ef9f99ea009d0ef7866cfcb70dcfe4fc",
    "id": null,
    "metadata": {},
    "name": "MultiRuptureMapPageControlsQuery",
    "operationKind": "query",
    "text": "query MultiRuptureMapPageControlsQuery(\n  $radiiSetId: Int!\n  $locationListId: String!\n) {\n  SOLVIS_get_radii_set(radii_set_id: $radiiSetId) {\n    radii\n  }\n  SOLVIS_get_location_list(list_id: $locationListId) {\n    locations {\n      name\n      location_id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "87972de8d2ab54d957a16655fa7d1173";

export default node;
