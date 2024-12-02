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

import { EmailAddressStatus } from '../models/EmailAddressStatus.ts';
import { HttpFile } from '../http/http.ts';

export class PersonEmailResponse {
    'status': EmailAddressStatus;
    'address': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "EmailAddressStatus",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PersonEmailResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


