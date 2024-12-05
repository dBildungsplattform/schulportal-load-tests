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

import { PersonBirthParams } from '../models/PersonBirthParams.ts';
import { PersonNameParams } from '../models/PersonNameParams.ts';
import { Vertrauensstufe } from '../models/Vertrauensstufe.ts';
import { HttpFile } from '../http/http.ts';

export class PersonResponseAutomapper {
    'id': string;
    'referrer': string;
    'mandant': string;
    'name': PersonNameParams;
    'geburt': PersonBirthParams;
    'stammorganisation': string;
    'geschlecht': string;
    'lokalisierung': string;
    'vertrauensstufe': Vertrauensstufe;
    'revision': string;
    /**
    * Initiales Benutzerpasswort, muss nach der ersten Anmeldung geändert werden
    */
    'startpasswort': string;
    'personalnummer': string;

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
            "name": "name",
            "baseName": "name",
            "type": "PersonNameParams",
            "format": ""
        },
        {
            "name": "geburt",
            "baseName": "geburt",
            "type": "PersonBirthParams",
            "format": ""
        },
        {
            "name": "stammorganisation",
            "baseName": "stammorganisation",
            "type": "string",
            "format": ""
        },
        {
            "name": "geschlecht",
            "baseName": "geschlecht",
            "type": "string",
            "format": ""
        },
        {
            "name": "lokalisierung",
            "baseName": "lokalisierung",
            "type": "string",
            "format": ""
        },
        {
            "name": "vertrauensstufe",
            "baseName": "vertrauensstufe",
            "type": "Vertrauensstufe",
            "format": ""
        },
        {
            "name": "revision",
            "baseName": "revision",
            "type": "string",
            "format": ""
        },
        {
            "name": "startpasswort",
            "baseName": "startpasswort",
            "type": "string",
            "format": ""
        },
        {
            "name": "personalnummer",
            "baseName": "personalnummer",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PersonResponseAutomapper.attributeTypeMap;
    }

    public constructor() {
    }
}


