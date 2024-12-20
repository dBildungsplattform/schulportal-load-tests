/**
 * dBildungs IAM
 * The dBildungs IAM server API description
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PersonResponseAutomapper } from "../models/PersonResponseAutomapper.ts";
import { PersonenkontextResponse } from "../models/PersonenkontextResponse.ts";
import { HttpFile } from "../http/http.ts";

export class PersonendatensatzResponseAutomapper {
  "person": PersonResponseAutomapper;
  "personenkontexte": Array<PersonenkontextResponse>;

  static readonly discriminator: string | undefined = undefined;

  static readonly mapping: { [index: string]: string } | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "person",
      baseName: "person",
      type: "PersonResponseAutomapper",
      format: "",
    },
    {
      name: "personenkontexte",
      baseName: "personenkontexte",
      type: "Array<PersonenkontextResponse>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return PersonendatensatzResponseAutomapper.attributeTypeMap;
  }

  public constructor() {}
}
