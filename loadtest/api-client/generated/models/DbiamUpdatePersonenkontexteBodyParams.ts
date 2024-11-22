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

import { DbiamPersonenkontextBodyParams } from '../models/DbiamPersonenkontextBodyParams.ts';
import { HttpFile } from '../http/http.ts';

export class DbiamUpdatePersonenkontexteBodyParams {
    /**
    * Date of the most recent changed personenkontext
    */
    'lastModified'?: Date | null;
    /**
    * The amount of personenkontexte
    */
    'count': number;
    'personenkontexte': Array<DbiamPersonenkontextBodyParams>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "lastModified",
            "baseName": "lastModified",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "personenkontexte",
            "baseName": "personenkontexte",
            "type": "Array<DbiamPersonenkontextBodyParams>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DbiamUpdatePersonenkontexteBodyParams.attributeTypeMap;
    }

    public constructor() {
    }
}
