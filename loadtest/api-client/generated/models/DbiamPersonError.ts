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

export class DbiamPersonError {
  "i18nKey": DbiamPersonErrorI18nKeyEnum;
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
      type: "DbiamPersonErrorI18nKeyEnum",
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
    return DbiamPersonError.attributeTypeMap;
  }

  public constructor() {}
}

export enum DbiamPersonErrorI18nKeyEnum {
  PersonError = "PERSON_ERROR",
  VornameEnthaeltLeerzeichen = "VORNAME_ENTHAELT_LEERZEICHEN",
  FamiliennameEnthaeltLeerzeichen = "FAMILIENNAME_ENTHAELT_LEERZEICHEN",
  PersonNotFound = "PERSON_NOT_FOUND",
  DownstreamUnreachable = "DOWNSTREAM_UNREACHABLE",
  PersonalnummerRequired = "PERSONALNUMMER_REQUIRED",
  NewerVersionOfPersonAvailable = "NEWER_VERSION_OF_PERSON_AVAILABLE",
  PersonalnummerNichtEindeutig = "PERSONALNUMMER_NICHT_EINDEUTIG",
}
