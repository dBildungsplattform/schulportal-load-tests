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

import { RollenMerkmal } from "../models/RollenMerkmal.ts";
import { RollenSystemRecht } from "../models/RollenSystemRecht.ts";
import { HttpFile } from "../http/http.ts";

export class UpdateRolleBodyParams {
  "name": string;
  "merkmale": Set<RollenMerkmal>;
  "systemrechte": Set<RollenSystemRecht>;
  "serviceProviderIds": Set<string>;
  "version": number;

  static readonly discriminator: string | undefined = undefined;

  static readonly mapping: { [index: string]: string } | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "name",
      baseName: "name",
      type: "string",
      format: "",
    },
    {
      name: "merkmale",
      baseName: "merkmale",
      type: "Set<RollenMerkmal>",
      format: "",
    },
    {
      name: "systemrechte",
      baseName: "systemrechte",
      type: "Set<RollenSystemRecht>",
      format: "",
    },
    {
      name: "serviceProviderIds",
      baseName: "serviceProviderIds",
      type: "Set<string>",
      format: "",
    },
    {
      name: "version",
      baseName: "version",
      type: "number",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return UpdateRolleBodyParams.attributeTypeMap;
  }

  public constructor() {}
}
