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

import { RollenSystemRecht } from "../models/RollenSystemRecht.ts";
import { HttpFile } from "../http/http.ts";

export class AddSystemrechtBodyParams {
  "systemRecht": RollenSystemRecht;

  static readonly discriminator: string | undefined = undefined;

  static readonly mapping: { [index: string]: string } | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "systemRecht",
      baseName: "systemRecht",
      type: "RollenSystemRecht",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return AddSystemrechtBodyParams.attributeTypeMap;
  }

  public constructor() {}
}
