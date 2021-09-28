/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Beer_beer = {
    readonly id: number;
    readonly name: string;
    readonly image: string;
    readonly " $refType": "Beer_beer";
};
export type Beer_beer$data = Beer_beer;
export type Beer_beer$key = {
    readonly " $data"?: Beer_beer$data;
    readonly " $fragmentRefs": FragmentRefs<"Beer_beer">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Beer_beer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
      "name": "image",
      "storageKey": null
    }
  ],
  "type": "beer",
  "abstractKey": null
};
(node as any).hash = '9661ee31d85211f75e754ae4931e1d5b';
export default node;
