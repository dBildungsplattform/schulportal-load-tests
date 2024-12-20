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

import { OrganisationResponse } from "../models/OrganisationResponse.ts";
import { HttpFile } from "../http/http.ts";

export class OrganisationRootChildrenResponse {
  "oeffentlich": OrganisationResponse;
  "ersatz": OrganisationResponse;

  static readonly discriminator: string | undefined = undefined;

  static readonly mapping: { [index: string]: string } | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "oeffentlich",
      baseName: "oeffentlich",
      type: "OrganisationResponse",
      format: "",
    },
    {
      name: "ersatz",
      baseName: "ersatz",
      type: "OrganisationResponse",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return OrganisationRootChildrenResponse.attributeTypeMap;
  }

  public constructor() {}
}
