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

import { PersonResponse } from "../models/PersonResponse.ts";
import { HttpFile } from "../http/http.ts";

export class PersonendatensatzResponse {
  "person": PersonResponse;

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
      type: "PersonResponse",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return PersonendatensatzResponse.attributeTypeMap;
  }

  public constructor() {}
}
