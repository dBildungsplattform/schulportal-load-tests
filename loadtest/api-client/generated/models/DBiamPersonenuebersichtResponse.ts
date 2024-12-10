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

import { DBiamPersonenzuordnungResponse } from "../models/DBiamPersonenzuordnungResponse.ts";
import { HttpFile } from "../http/http.ts";

export class DBiamPersonenuebersichtResponse {
  "personId": string;
  "vorname": string;
  "nachname": string;
  "benutzername": string;
  /**
   * Date of the most recent changed personenkontext in the Zuordnungen
   */
  "lastModifiedZuordnungen": Date | null;
  "zuordnungen": Array<DBiamPersonenzuordnungResponse>;

  static readonly discriminator: string | undefined = undefined;

  static readonly mapping: { [index: string]: string } | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "personId",
      baseName: "personId",
      type: "string",
      format: "",
    },
    {
      name: "vorname",
      baseName: "vorname",
      type: "string",
      format: "",
    },
    {
      name: "nachname",
      baseName: "nachname",
      type: "string",
      format: "",
    },
    {
      name: "benutzername",
      baseName: "benutzername",
      type: "string",
      format: "",
    },
    {
      name: "lastModifiedZuordnungen",
      baseName: "lastModifiedZuordnungen",
      type: "Date",
      format: "date-time",
    },
    {
      name: "zuordnungen",
      baseName: "zuordnungen",
      type: "Array<DBiamPersonenzuordnungResponse>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return DBiamPersonenuebersichtResponse.attributeTypeMap;
  }

  public constructor() {}
}
