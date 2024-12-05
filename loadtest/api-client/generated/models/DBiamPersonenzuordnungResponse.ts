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

import { OrganisationsTyp } from '../models/OrganisationsTyp.ts';
import { RollenMerkmal } from '../models/RollenMerkmal.ts';
import { HttpFile } from '../http/http.ts';

export class DBiamPersonenzuordnungResponse {
    'sskId': string;
    'rolleId': string;
    'sskName': string;
    'sskDstNr': string;
    'rolle': string;
    'administriertVon': string;
    'typ': OrganisationsTyp;
    'editable': boolean;
    'befristung': Date;
    'merkmale': RollenMerkmal;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "sskId",
            "baseName": "sskId",
            "type": "string",
            "format": ""
        },
        {
            "name": "rolleId",
            "baseName": "rolleId",
            "type": "string",
            "format": ""
        },
        {
            "name": "sskName",
            "baseName": "sskName",
            "type": "string",
            "format": ""
        },
        {
            "name": "sskDstNr",
            "baseName": "sskDstNr",
            "type": "string",
            "format": ""
        },
        {
            "name": "rolle",
            "baseName": "rolle",
            "type": "string",
            "format": ""
        },
        {
            "name": "administriertVon",
            "baseName": "administriertVon",
            "type": "string",
            "format": ""
        },
        {
            "name": "typ",
            "baseName": "typ",
            "type": "OrganisationsTyp",
            "format": ""
        },
        {
            "name": "editable",
            "baseName": "editable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "befristung",
            "baseName": "befristung",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "merkmale",
            "baseName": "merkmale",
            "type": "RollenMerkmal",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DBiamPersonenzuordnungResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


