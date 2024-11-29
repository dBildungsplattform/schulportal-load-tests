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

export enum RollenSystemRecht {
    RollenVerwalten = 'ROLLEN_VERWALTEN',
    PersonenSofortLoeschen = 'PERSONEN_SOFORT_LOESCHEN',
    PersonenVerwalten = 'PERSONEN_VERWALTEN',
    SchulenVerwalten = 'SCHULEN_VERWALTEN',
    KlassenVerwalten = 'KLASSEN_VERWALTEN',
    SchultraegerVerwalten = 'SCHULTRAEGER_VERWALTEN',
    MigrationDurchfuehren = 'MIGRATION_DURCHFUEHREN',
    PersonSynchronisieren = 'PERSON_SYNCHRONISIEREN',
    CronDurchfuehren = 'CRON_DURCHFUEHREN',
    PersonenAnlegen = 'PERSONEN_ANLEGEN',
    ImportDurchfuehren = 'IMPORT_DURCHFUEHREN'
}
