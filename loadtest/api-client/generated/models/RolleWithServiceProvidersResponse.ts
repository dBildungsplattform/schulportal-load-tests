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

import { RollenArt } from "../models/RollenArt.ts";
import { RollenMerkmal } from "../models/RollenMerkmal.ts";
import { RollenSystemRecht } from "../models/RollenSystemRecht.ts";
import { ServiceProviderIdNameResponse } from "../models/ServiceProviderIdNameResponse.ts";
import { HttpFile } from "../http/http.ts";

export class RolleWithServiceProvidersResponse {
  "id": string;
  "createdAt": Date;
  "updatedAt": Date;
  "name": string;
  "administeredBySchulstrukturknoten": string;
  "rollenart": RollenArt;
  "merkmale": Set<RollenMerkmal>;
  "systemrechte": Set<RollenSystemRecht>;
  "administeredBySchulstrukturknotenName": string | null;
  "administeredBySchulstrukturknotenKennung": string | null;
  "version": number;
  "serviceProviders": Array<ServiceProviderIdNameResponse>;

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
      type: "string",
      format: "",
    },
    {
      name: "createdAt",
      baseName: "createdAt",
      type: "Date",
      format: "date-time",
    },
    {
      name: "updatedAt",
      baseName: "updatedAt",
      type: "Date",
      format: "date-time",
    },
    {
      name: "name",
      baseName: "name",
      type: "string",
      format: "",
    },
    {
      name: "administeredBySchulstrukturknoten",
      baseName: "administeredBySchulstrukturknoten",
      type: "string",
      format: "",
    },
    {
      name: "rollenart",
      baseName: "rollenart",
      type: "RollenArt",
      format: "",
    },
    {
      name: "merkmale",
      baseName: "merkmale",
      type: "Set<RollenMerkmal>",
      format: "",
    },
    {
      name: "systemrechte",
      baseName: "systemrechte",
      type: "Set<RollenSystemRecht>",
      format: "",
    },
    {
      name: "administeredBySchulstrukturknotenName",
      baseName: "administeredBySchulstrukturknotenName",
      type: "string",
      format: "",
    },
    {
      name: "administeredBySchulstrukturknotenKennung",
      baseName: "administeredBySchulstrukturknotenKennung",
      type: "string",
      format: "",
    },
    {
      name: "version",
      baseName: "version",
      type: "number",
      format: "",
    },
    {
      name: "serviceProviders",
      baseName: "serviceProviders",
      type: "Array<ServiceProviderIdNameResponse>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return RolleWithServiceProvidersResponse.attributeTypeMap;
  }

  public constructor() {}
}
