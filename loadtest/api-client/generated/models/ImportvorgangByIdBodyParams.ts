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

export class ImportvorgangByIdBodyParams {
  /**
   * The id of an import transaction
   */
  "importvorgangId": string;
  "organisationId": string;
  "rolleId": string;

  static readonly discriminator: string | undefined = undefined;

  static readonly mapping: { [index: string]: string } | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "importvorgangId",
      baseName: "importvorgangId",
      type: "string",
      format: "",
    },
    {
      name: "organisationId",
      baseName: "organisationId",
      type: "string",
      format: "",
    },
    {
      name: "rolleId",
      baseName: "rolleId",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return ImportvorgangByIdBodyParams.attributeTypeMap;
  }

  public constructor() {}
}
