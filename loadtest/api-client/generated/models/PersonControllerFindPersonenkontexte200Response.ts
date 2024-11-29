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

import { PersonenkontextResponse } from '../models/PersonenkontextResponse.ts';
import { HttpFile } from '../http/http.ts';

export class PersonControllerFindPersonenkontexte200Response {
    'total': number;
    'offset': number;
    'limit': number;
    'items': Array<PersonenkontextResponse>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": ""
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<PersonenkontextResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PersonControllerFindPersonenkontexte200Response.attributeTypeMap;
    }

    public constructor() {
    }
}
