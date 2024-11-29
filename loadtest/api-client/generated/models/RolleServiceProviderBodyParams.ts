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

import { HttpFile } from '../http/http.ts';

export class RolleServiceProviderBodyParams {
    /**
    * An array of ids for the service providers.
    */
    'serviceProviderIds': Array<string>;
    /**
    * The version for the rolle.
    */
    'version': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "serviceProviderIds",
            "baseName": "serviceProviderIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RolleServiceProviderBodyParams.attributeTypeMap;
    }

    public constructor() {
    }
}
