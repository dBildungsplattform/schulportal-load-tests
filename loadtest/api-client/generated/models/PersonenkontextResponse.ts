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

import { LoeschungResponse } from '../models/LoeschungResponse.ts';
import { HttpFile } from '../http/http.ts';

export class PersonenkontextResponse {
    'id': string;
    'referrer': string | null;
    'mandant': string;
    'organisation': any;
    'rollenart': string | null;
    'rollenname': string | null;
    'personenstatus': PersonenkontextResponsePersonenstatusEnum | null;
    'jahrgangsstufe': PersonenkontextResponseJahrgangsstufeEnum | null;
    'sichtfreigabe': PersonenkontextResponseSichtfreigabeEnum | null;
    'loeschung': LoeschungResponse | null;
    'revision': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "referrer",
            "baseName": "referrer",
            "type": "string",
            "format": ""
        },
        {
            "name": "mandant",
            "baseName": "mandant",
            "type": "string",
            "format": ""
        },
        {
            "name": "organisation",
            "baseName": "organisation",
            "type": "any",
            "format": ""
        },
        {
            "name": "rollenart",
            "baseName": "rollenart",
            "type": "string",
            "format": ""
        },
        {
            "name": "rollenname",
            "baseName": "rollenname",
            "type": "string",
            "format": ""
        },
        {
            "name": "personenstatus",
            "baseName": "personenstatus",
            "type": "PersonenkontextResponsePersonenstatusEnum",
            "format": ""
        },
        {
            "name": "jahrgangsstufe",
            "baseName": "jahrgangsstufe",
            "type": "PersonenkontextResponseJahrgangsstufeEnum",
            "format": ""
        },
        {
            "name": "sichtfreigabe",
            "baseName": "sichtfreigabe",
            "type": "PersonenkontextResponseSichtfreigabeEnum",
            "format": ""
        },
        {
            "name": "loeschung",
            "baseName": "loeschung",
            "type": "LoeschungResponse",
            "format": ""
        },
        {
            "name": "revision",
            "baseName": "revision",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PersonenkontextResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum PersonenkontextResponsePersonenstatusEnum {
    Aktiv = 'AKTIV'
}
export enum PersonenkontextResponseJahrgangsstufeEnum {
    _01 = '01',
    _02 = '02',
    _03 = '03',
    _04 = '04',
    _05 = '05',
    _06 = '06',
    _07 = '07',
    _08 = '08',
    _09 = '09',
    _10 = '10'
}
export enum PersonenkontextResponseSichtfreigabeEnum {
    Ja = 'ja',
    Nein = 'nein'
}
