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

import { RolleResponse } from "../models/RolleResponse.ts";
import { HttpFile } from "../http/http.ts";

export class FindRollenResponse {
  "moeglicheRollen": Array<RolleResponse>;
  "total": number;

  static readonly discriminator: string | undefined = undefined;

  static readonly mapping: { [index: string]: string } | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "moeglicheRollen",
      baseName: "moeglicheRollen",
      type: "Array<RolleResponse>",
      format: "",
    },
    {
      name: "total",
      baseName: "total",
      type: "number",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return FindRollenResponse.attributeTypeMap;
  }

  public constructor() {}
}
