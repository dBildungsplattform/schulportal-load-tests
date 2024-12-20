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

export class PersonNameParams {
  "familienname": string;
  "vorname": string;
  "initialenfamilienname"?: string;
  "initialenvorname"?: string;
  "rufname"?: string;
  "titel"?: string;
  "anrede"?: Array<string>;
  "namenssuffix"?: Array<string>;
  "namenspraefix"?: Array<string>;
  "sortierindex"?: string;

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
      name: "initialenfamilienname",
      baseName: "initialenfamilienname",
      type: "string",
      format: "",
    },
    {
      name: "initialenvorname",
      baseName: "initialenvorname",
      type: "string",
      format: "",
    },
    {
      name: "rufname",
      baseName: "rufname",
      type: "string",
      format: "",
    },
    {
      name: "titel",
      baseName: "titel",
      type: "string",
      format: "",
    },
    {
      name: "anrede",
      baseName: "anrede",
      type: "Array<string>",
      format: "",
    },
    {
      name: "namenssuffix",
      baseName: "namenssuffix",
      type: "Array<string>",
      format: "",
    },
    {
      name: "namenspraefix",
      baseName: "namenspraefix",
      type: "Array<string>",
      format: "",
    },
    {
      name: "sortierindex",
      baseName: "sortierindex",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return PersonNameParams.attributeTypeMap;
  }

  public constructor() {}
}
