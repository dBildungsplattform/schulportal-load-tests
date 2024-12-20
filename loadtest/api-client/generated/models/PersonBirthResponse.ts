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

import { HttpFile } from "../http/http.ts";

export class PersonBirthResponse {
  "datum": Date | null;
  "geburtsort": string | null;

  static readonly discriminator: string | undefined = undefined;

  static readonly mapping: { [index: string]: string } | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "datum",
      baseName: "datum",
      type: "Date",
      format: "date-time",
    },
    {
      name: "geburtsort",
      baseName: "geburtsort",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return PersonBirthResponse.attributeTypeMap;
  }

  public constructor() {}
}
