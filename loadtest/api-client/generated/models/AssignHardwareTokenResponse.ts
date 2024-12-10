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

export class AssignHardwareTokenResponse {
  "id": number;
  "jsonrpc": string;
  "time": number;
  "version": string;
  "versionnumber": string;
  "signature": string;
  "dialogText": string;

  static readonly discriminator: string | undefined = undefined;

  static readonly mapping: { [index: string]: string } | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "id",
      baseName: "id",
      type: "number",
      format: "",
    },
    {
      name: "jsonrpc",
      baseName: "jsonrpc",
      type: "string",
      format: "",
    },
    {
      name: "time",
      baseName: "time",
      type: "number",
      format: "",
    },
    {
      name: "version",
      baseName: "version",
      type: "string",
      format: "",
    },
    {
      name: "versionnumber",
      baseName: "versionnumber",
      type: "string",
      format: "",
    },
    {
      name: "signature",
      baseName: "signature",
      type: "string",
      format: "",
    },
    {
      name: "dialogText",
      baseName: "dialogText",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return AssignHardwareTokenResponse.attributeTypeMap;
  }

  public constructor() {}
}
