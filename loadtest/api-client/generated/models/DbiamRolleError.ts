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

export class DbiamRolleError {
  "i18nKey": DbiamRolleErrorI18nKeyEnum;
  /**
   * Corresponds to HTTP Status code like 200, 404, 500
   */
  "code": number;

  static readonly discriminator: string | undefined = undefined;

  static readonly mapping: { [index: string]: string } | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "i18nKey",
      baseName: "i18nKey",
      type: "DbiamRolleErrorI18nKeyEnum",
      format: "",
    },
    {
      name: "code",
      baseName: "code",
      type: "number",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return DbiamRolleError.attributeTypeMap;
  }

  public constructor() {}
}

export enum DbiamRolleErrorI18nKeyEnum {
  RolleError = "ROLLE_ERROR",
  AddSystemrechtError = "ADD_SYSTEMRECHT_ERROR",
  RolleHatPersonenkontexteError = "ROLLE_HAT_PERSONENKONTEXTE_ERROR",
  UpdateMerkmaleError = "UPDATE_MERKMALE_ERROR",
  RollennameEnthaeltLeerzeichen = "ROLLENNAME_ENTHAELT_LEERZEICHEN",
  NewerVersionOfRolleAvailable = "NEWER_VERSION_OF_ROLLE_AVAILABLE",
  RolleNameUniqueOnSsk = "ROLLE_NAME_UNIQUE_ON_SSK",
}
