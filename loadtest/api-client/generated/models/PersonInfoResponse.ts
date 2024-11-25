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

import { Person } from '../models/Person.ts';
import { PersonEmailResponse } from '../models/PersonEmailResponse.ts';
import { PersonenkontextResponse } from '../models/PersonenkontextResponse.ts';
import { HttpFile } from '../http/http.ts';

export class PersonInfoResponse {
    'pid': string;
    'person': Person;
    'personenkontexte': Array<PersonenkontextResponse>;
    'gruppen': Array<string>;
    /**
    * Contains status and address. Returns email-address verified by OX (enabled) if available, otherwise returns most recently updated one (no prioritized status)
    */
    'email': PersonEmailResponse | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pid",
            "baseName": "pid",
            "type": "string",
            "format": ""
        },
        {
            "name": "person",
            "baseName": "person",
            "type": "Person",
            "format": ""
        },
        {
            "name": "personenkontexte",
            "baseName": "personenkontexte",
            "type": "Array<PersonenkontextResponse>",
            "format": ""
        },
        {
            "name": "gruppen",
            "baseName": "gruppen",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "PersonEmailResponse",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PersonInfoResponse.attributeTypeMap;
    }

    public constructor() {
    }
}