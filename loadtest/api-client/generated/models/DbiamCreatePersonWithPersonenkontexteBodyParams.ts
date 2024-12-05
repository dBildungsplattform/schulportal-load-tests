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

import { DbiamCreatePersonenkontextBodyParams } from "../models/DbiamCreatePersonenkontextBodyParams.ts";
import { HttpFile } from "../http/http.ts";

export class DbiamCreatePersonWithPersonenkontexteBodyParams {
  "familienname": string;
  "vorname": string;
  "personalnummer"?: string;
  "befristung"?: Date;
  "createPersonenkontexte": Array<DbiamCreatePersonenkontextBodyParams>;

  static readonly discriminator: string | undefined = undefined;

  static readonly mapping: { [index: string]: string } | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "familienname",
      baseName: "familienname",
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
      name: "personalnummer",
      baseName: "personalnummer",
      type: "string",
      format: "",
    },
    {
      name: "befristung",
      baseName: "befristung",
      type: "Date",
      format: "date-time",
    },
    {
      name: "createPersonenkontexte",
      baseName: "createPersonenkontexte",
      type: "Array<DbiamCreatePersonenkontextBodyParams>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return DbiamCreatePersonWithPersonenkontexteBodyParams.attributeTypeMap;
  }

  public constructor() {}
}
