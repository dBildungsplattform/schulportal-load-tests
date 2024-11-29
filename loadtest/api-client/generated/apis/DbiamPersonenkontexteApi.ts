// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { DBiamPersonenkontextResponse } from '../models/DBiamPersonenkontextResponse.ts';
import { DbiamPersonenkontextError } from '../models/DbiamPersonenkontextError.ts';
import { DbiamPersonenkontextMigrationBodyParams } from '../models/DbiamPersonenkontextMigrationBodyParams.ts';

/**
 * no description
 */
export class DbiamPersonenkontexteApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param dbiamPersonenkontextMigrationBodyParams 
     */
    public async dBiamPersonenkontextControllerCreatePersonenkontextMigration(dbiamPersonenkontextMigrationBodyParams: DbiamPersonenkontextMigrationBodyParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'dbiamPersonenkontextMigrationBodyParams' is not null or undefined
        if (dbiamPersonenkontextMigrationBodyParams === null || dbiamPersonenkontextMigrationBodyParams === undefined) {
            throw new RequiredError("DbiamPersonenkontexteApi", "dBiamPersonenkontextControllerCreatePersonenkontextMigration", "dbiamPersonenkontextMigrationBodyParams");
        }


        // Path Params
        const localVarPath = '/api/dbiam/personenkontext';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(dbiamPersonenkontextMigrationBodyParams, "DbiamPersonenkontextMigrationBodyParams", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param personId The ID for the person.
     */
    public async dBiamPersonenkontextControllerFindPersonenkontextsByPerson(personId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'personId' is not null or undefined
        if (personId === null || personId === undefined) {
            throw new RequiredError("DbiamPersonenkontexteApi", "dBiamPersonenkontextControllerFindPersonenkontextsByPerson", "personId");
        }


        // Path Params
        const localVarPath = '/api/dbiam/personenkontext/{personId}'
            .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DbiamPersonenkontexteApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dBiamPersonenkontextControllerCreatePersonenkontextMigration
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dBiamPersonenkontextControllerCreatePersonenkontextMigrationWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DBiamPersonenkontextResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: DBiamPersonenkontextResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DBiamPersonenkontextResponse", ""
            ) as DBiamPersonenkontextResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: DbiamPersonenkontextError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DbiamPersonenkontextError", ""
            ) as DbiamPersonenkontextError;
            throw new ApiException<DbiamPersonenkontextError>(response.httpStatusCode, "The personenkontext could not be created, may due to unsatisfied specifications.", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not authorized to create personenkontext.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Insufficient permission to create personenkontext.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error while creating personenkontext.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DBiamPersonenkontextResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DBiamPersonenkontextResponse", ""
            ) as DBiamPersonenkontextResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to dBiamPersonenkontextControllerFindPersonenkontextsByPerson
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async dBiamPersonenkontextControllerFindPersonenkontextsByPersonWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<DBiamPersonenkontextResponse> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<DBiamPersonenkontextResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DBiamPersonenkontextResponse>", ""
            ) as Array<DBiamPersonenkontextResponse>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not authorized to get available personenkontexte.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Insufficient permission to get personenkontexte for this user.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal server error while getting personenkontexte.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<DBiamPersonenkontextResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DBiamPersonenkontextResponse>", ""
            ) as Array<DBiamPersonenkontextResponse>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
