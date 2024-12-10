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

import { OrganisationsTyp } from "../models/OrganisationsTyp.ts";
import { TraegerschaftTyp } from "../models/TraegerschaftTyp.ts";
import { HttpFile } from "../http/http.ts";

export class UpdateOrganisationBodyParams {
  "administriertVon"?: string;
  "zugehoerigZu"?: string;
  /**
   * Required, if `typ` is equal to `SCHULE`
   */
  "kennung"?: string;
  "name": string;
  "namensergaenzung"?: string;
  "kuerzel"?: string;
  "typ": OrganisationsTyp;
  "traegerschaft"?: TraegerschaftTyp;
  "emailAdress"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly mapping: { [index: string]: string } | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "administriertVon",
      baseName: "administriertVon",
      type: "string",
      format: "",
    },
    {
      name: "zugehoerigZu",
      baseName: "zugehoerigZu",
      type: "string",
      format: "",
    },
    {
      name: "kennung",
      baseName: "kennung",
      type: "string",
      format: "",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
      format: "",
    },
    {
      name: "namensergaenzung",
      baseName: "namensergaenzung",
      type: "string",
      format: "",
    },
    {
      name: "kuerzel",
      baseName: "kuerzel",
      type: "string",
      format: "",
    },
    {
      name: "typ",
      baseName: "typ",
      type: "OrganisationsTyp",
      format: "",
    },
    {
      name: "traegerschaft",
      baseName: "traegerschaft",
      type: "TraegerschaftTyp",
      format: "",
    },
    {
      name: "emailAdress",
      baseName: "emailAdress",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return UpdateOrganisationBodyParams.attributeTypeMap;
  }

  public constructor() {}
}
