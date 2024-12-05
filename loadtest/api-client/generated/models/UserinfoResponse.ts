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

import { PersonenkontextRolleFieldsResponse } from "../models/PersonenkontextRolleFieldsResponse.ts";
import { HttpFile } from "../http/http.ts";

export class UserinfoResponse {
  "sub": string;
  "personId": string | null;
  "name": string | null;
  "givenName": string | null;
  "familyName": string | null;
  "middleName": string | null;
  "nickname": string | null;
  "preferredUsername": string | null;
  "profile": string | null;
  "picture": string | null;
  "website": string | null;
  "email": string | null;
  "emailVerified": boolean | null;
  "gender": string | null;
  "birthdate": string | null;
  "zoneinfo": string | null;
  "locale": string | null;
  "phoneNumber": string | null;
  "updatedAt": string | null;
  "passwordUpdatedAt": string | null;
  "personenkontexte": Array<PersonenkontextRolleFieldsResponse>;
  "acr": string;

  static readonly discriminator: string | undefined = undefined;

  static readonly mapping: { [index: string]: string } | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "sub",
      baseName: "sub",
      type: "string",
      format: "",
    },
    {
      name: "personId",
      baseName: "personId",
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
      name: "givenName",
      baseName: "given_name",
      type: "string",
      format: "",
    },
    {
      name: "familyName",
      baseName: "family_name",
      type: "string",
      format: "",
    },
    {
      name: "middleName",
      baseName: "middle_name",
      type: "string",
      format: "",
    },
    {
      name: "nickname",
      baseName: "nickname",
      type: "string",
      format: "",
    },
    {
      name: "preferredUsername",
      baseName: "preferred_username",
      type: "string",
      format: "",
    },
    {
      name: "profile",
      baseName: "profile",
      type: "string",
      format: "",
    },
    {
      name: "picture",
      baseName: "picture",
      type: "string",
      format: "",
    },
    {
      name: "website",
      baseName: "website",
      type: "string",
      format: "",
    },
    {
      name: "email",
      baseName: "email",
      type: "string",
      format: "",
    },
    {
      name: "emailVerified",
      baseName: "email_verified",
      type: "boolean",
      format: "",
    },
    {
      name: "gender",
      baseName: "gender",
      type: "string",
      format: "",
    },
    {
      name: "birthdate",
      baseName: "birthdate",
      type: "string",
      format: "",
    },
    {
      name: "zoneinfo",
      baseName: "zoneinfo",
      type: "string",
      format: "",
    },
    {
      name: "locale",
      baseName: "locale",
      type: "string",
      format: "",
    },
    {
      name: "phoneNumber",
      baseName: "phone_number",
      type: "string",
      format: "",
    },
    {
      name: "updatedAt",
      baseName: "updated_at",
      type: "string",
      format: "",
    },
    {
      name: "passwordUpdatedAt",
      baseName: "password_updated_at",
      type: "string",
      format: "",
    },
    {
      name: "personenkontexte",
      baseName: "personenkontexte",
      type: "Array<PersonenkontextRolleFieldsResponse>",
      format: "",
    },
    {
      name: "acr",
      baseName: "acr",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return UserinfoResponse.attributeTypeMap;
  }

  public constructor() {}
}
