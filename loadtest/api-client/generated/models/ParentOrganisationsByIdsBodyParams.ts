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

export class ParentOrganisationsByIdsBodyParams {
  /**
   * The ids of organizations
   */
  "organisationIds": Array<string>;

  static readonly discriminator: string | undefined = undefined;

  static readonly mapping: { [index: string]: string } | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "organisationIds",
      baseName: "organisationIds",
      type: "Array<string>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return ParentOrganisationsByIdsBodyParams.attributeTypeMap;
  }

  public constructor() {}
}
