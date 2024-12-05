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

export class PersonenuebersichtBodyParams {
  /**
   * An array of IDs for the persons.
   */
  "personIds": Array<string>;

  static readonly discriminator: string | undefined = undefined;

  static readonly mapping: { [index: string]: string } | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "personIds",
      baseName: "personIds",
      type: "Array<string>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return PersonenuebersichtBodyParams.attributeTypeMap;
  }

  public constructor() {}
}
