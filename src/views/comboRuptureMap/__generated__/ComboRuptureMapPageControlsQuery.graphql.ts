/**
 * @generated SignedSource<<2295246f862206bd352ebf515a7d8901>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ComboRuptureMapPageControlsQuery$variables = {
  radiiSetId: number;
  locationListId: string;
};
export type ComboRuptureMapPageControlsQuery$data = {
  readonly textual_content_faults: {
    readonly content: ReadonlyArray<{
      readonly text: string | null;
    } | null> | null;
  } | null;
  readonly textual_content_locations: {
    readonly content: ReadonlyArray<{
      readonly text: string | null;
    } | null> | null;
  } | null;
  readonly textual_content_animation: {
    readonly content: ReadonlyArray<{
      readonly text: string | null;
    } | null> | null;
  } | null;
  readonly textual_content_rate: {
    readonly content: ReadonlyArray<{
      readonly text: string | null;
    } | null> | null;
  } | null;
  readonly SOLVIS_get_radii_set: {
    readonly radii: ReadonlyArray<number | null> | null;
  } | null;
  readonly SOLVIS_get_location_list: {
    readonly locations: ReadonlyArray<{
      readonly name: string | null;
      readonly location_id: string | null;
    } | null> | null;
  } | null;
  readonly SOLVIS_get_parent_fault_names: ReadonlyArray<string | null> | null;
};
export type ComboRuptureMapPageControlsQuery = {
  variables: ComboRuptureMapPageControlsQuery$variables;
  response: ComboRuptureMapPageControlsQuery$data;
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
    "args": null,
    "concreteType": "TextualContent",
    "kind": "LinkedField",
    "name": "content",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "text",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v3 = [
  {
    "alias": "textual_content_faults",
    "args": [
      {
        "kind": "Literal",
        "name": "index",
        "value": "rupture_map_faults.md"
      }
    ],
    "concreteType": "TextualContentResult",
    "kind": "LinkedField",
    "name": "KORORAA_textual_content",
    "plural": false,
    "selections": (v2/*: any*/),
    "storageKey": "KORORAA_textual_content(index:\"rupture_map_faults.md\")"
  },
  {
    "alias": "textual_content_locations",
    "args": [
      {
        "kind": "Literal",
        "name": "index",
        "value": "rupture_map_locations.md"
      }
    ],
    "concreteType": "TextualContentResult",
    "kind": "LinkedField",
    "name": "KORORAA_textual_content",
    "plural": false,
    "selections": (v2/*: any*/),
    "storageKey": "KORORAA_textual_content(index:\"rupture_map_locations.md\")"
  },
  {
    "alias": "textual_content_animation",
    "args": [
      {
        "kind": "Literal",
        "name": "index",
        "value": "rupture_map_animation.md"
      }
    ],
    "concreteType": "TextualContentResult",
    "kind": "LinkedField",
    "name": "KORORAA_textual_content",
    "plural": false,
    "selections": (v2/*: any*/),
    "storageKey": "KORORAA_textual_content(index:\"rupture_map_animation.md\")"
  },
  {
    "alias": "textual_content_rate",
    "args": [
      {
        "kind": "Literal",
        "name": "index",
        "value": "rupture_map_rate.md"
      }
    ],
    "concreteType": "TextualContentResult",
    "kind": "LinkedField",
    "name": "KORORAA_textual_content",
    "plural": false,
    "selections": (v2/*: any*/),
    "storageKey": "KORORAA_textual_content(index:\"rupture_map_rate.md\")"
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
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "fault_system",
        "value": "CRU"
      },
      {
        "kind": "Literal",
        "name": "model_id",
        "value": "NSHM_v1.0.4"
      }
    ],
    "kind": "ScalarField",
    "name": "SOLVIS_get_parent_fault_names",
    "storageKey": "SOLVIS_get_parent_fault_names(fault_system:\"CRU\",model_id:\"NSHM_v1.0.4\")"
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
    "name": "ComboRuptureMapPageControlsQuery",
    "selections": (v3/*: any*/),
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
    "name": "ComboRuptureMapPageControlsQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "3c40df4325dbc2bd2d90374733713ef5",
    "id": null,
    "metadata": {},
    "name": "ComboRuptureMapPageControlsQuery",
    "operationKind": "query",
    "text": "query ComboRuptureMapPageControlsQuery(\n  $radiiSetId: Int!\n  $locationListId: String!\n) {\n  textual_content_faults: KORORAA_textual_content(index: \"rupture_map_faults.md\") {\n    content {\n      text\n    }\n  }\n  textual_content_locations: KORORAA_textual_content(index: \"rupture_map_locations.md\") {\n    content {\n      text\n    }\n  }\n  textual_content_animation: KORORAA_textual_content(index: \"rupture_map_animation.md\") {\n    content {\n      text\n    }\n  }\n  textual_content_rate: KORORAA_textual_content(index: \"rupture_map_rate.md\") {\n    content {\n      text\n    }\n  }\n  SOLVIS_get_radii_set(radii_set_id: $radiiSetId) {\n    radii\n  }\n  SOLVIS_get_location_list(list_id: $locationListId) {\n    locations {\n      name\n      location_id\n    }\n  }\n  SOLVIS_get_parent_fault_names(model_id: \"NSHM_v1.0.4\", fault_system: \"CRU\")\n}\n"
  }
};
})();

(node as any).hash = "deec2902384fa92d33f48245107da920";

export default node;
