// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { DeleteRevisionBodyParams } from '../models/DeleteRevisionBodyParams.ts';
import { PersonendatensatzResponseAutomapper } from '../models/PersonendatensatzResponseAutomapper.ts';
import { PersonenkontextResponse } from '../models/PersonenkontextResponse.ts';
import { PersonenkontextdatensatzResponse } from '../models/PersonenkontextdatensatzResponse.ts';
import { Personenstatus } from '../models/Personenstatus.ts';
import { RollenSystemRecht } from '../models/RollenSystemRecht.ts';
import { Sichtfreigabe } from '../models/Sichtfreigabe.ts';
import { SystemrechtResponse } from '../models/SystemrechtResponse.ts';

/**
 * no description
 */
export class PersonenkontexteApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param personenkontextId The id for the personenkontext.
     * @param deleteRevisionBodyParams 
     */
    public async personenkontextControllerDeletePersonenkontextById(personenkontextId: string, deleteRevisionBodyParams: DeleteRevisionBodyParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'personenkontextId' is not null or undefined
        if (personenkontextId === null || personenkontextId === undefined) {
            throw new RequiredError("PersonenkontexteApi", "personenkontextControllerDeletePersonenkontextById", "personenkontextId");
        }


        // verify required parameter 'deleteRevisionBodyParams' is not null or undefined
        if (deleteRevisionBodyParams === null || deleteRevisionBodyParams === undefined) {
            throw new RequiredError("PersonenkontexteApi", "personenkontextControllerDeletePersonenkontextById", "deleteRevisionBodyParams");
        }


        // Path Params
        const localVarPath = '/api/personenkontexte/{personenkontextId}'
            .replace('{' + 'personenkontextId' + '}', encodeURIComponent(String(personenkontextId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(deleteRevisionBodyParams, "DeleteRevisionBodyParams", ""),
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
     * @param personenkontextId The id for the personenkontext.
     */
    public async personenkontextControllerFindPersonenkontextById(personenkontextId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'personenkontextId' is not null or undefined
        if (personenkontextId === null || personenkontextId === undefined) {
            throw new RequiredError("PersonenkontexteApi", "personenkontextControllerFindPersonenkontextById", "personenkontextId");
        }


        // Path Params
        const localVarPath = '/api/personenkontexte/{personenkontextId}'
            .replace('{' + 'personenkontextId' + '}', encodeURIComponent(String(personenkontextId)));

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

    /**
     * @param offset The offset of the paginated list.
     * @param limit The requested limit for the page size.
     * @param personId 
     * @param referrer 
     * @param personenstatus 
     * @param sichtfreigabe 
     */
    public async personenkontextControllerFindPersonenkontexte(offset?: number, limit?: number, personId?: string, referrer?: string, personenstatus?: Personenstatus, sichtfreigabe?: Sichtfreigabe, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;







        // Path Params
        const localVarPath = '/api/personenkontexte';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (personId !== undefined) {
            requestContext.setQueryParam("personId", ObjectSerializer.serialize(personId, "string", ""));
        }

        // Query Params
        if (referrer !== undefined) {
            requestContext.setQueryParam("referrer", ObjectSerializer.serialize(referrer, "string", ""));
        }

        // Query Params
        if (personenstatus !== undefined) {
            const serializedParams = ObjectSerializer.serialize(personenstatus, "Personenstatus", "");
            for (const key of Object.keys(serializedParams)) {
                requestContext.setQueryParam(key, serializedParams[key]);
            }
        }

        // Query Params
        if (sichtfreigabe !== undefined) {
            const serializedParams = ObjectSerializer.serialize(sichtfreigabe, "Sichtfreigabe", "");
            for (const key of Object.keys(serializedParams)) {
                requestContext.setQueryParam(key, serializedParams[key]);
            }
        }


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
     * @param personId The id for the account.
     * @param systemRecht 
     */
    public async personenkontextControllerHatSystemRecht(personId: string, systemRecht: RollenSystemRecht, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'personId' is not null or undefined
        if (personId === null || personId === undefined) {
            throw new RequiredError("PersonenkontexteApi", "personenkontextControllerHatSystemRecht", "personId");
        }


        // verify required parameter 'systemRecht' is not null or undefined
        if (systemRecht === null || systemRecht === undefined) {
            throw new RequiredError("PersonenkontexteApi", "personenkontextControllerHatSystemRecht", "systemRecht");
        }


        // Path Params
        const localVarPath = '/api/personenkontexte/{personId}/hatSystemrecht'
            .replace('{' + 'personId' + '}', encodeURIComponent(String(personId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (systemRecht !== undefined) {
            const serializedParams = ObjectSerializer.serialize(systemRecht, "RollenSystemRecht", "");
            for (const key of Object.keys(serializedParams)) {
                requestContext.setQueryParam(key, serializedParams[key]);
            }
        }


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
     * 
     * @param personenkontextId 
     */
    public async personenkontextControllerUpdatePersonenkontextWithId(personenkontextId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'personenkontextId' is not null or undefined
        if (personenkontextId === null || personenkontextId === undefined) {
            throw new RequiredError("PersonenkontexteApi", "personenkontextControllerUpdatePersonenkontextWithId", "personenkontextId");
        }


        // Path Params
        const localVarPath = '/api/personenkontexte/{personenkontextId}'
            .replace('{' + 'personenkontextId' + '}', encodeURIComponent(String(personenkontextId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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

export class PersonenkontexteApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to personenkontextControllerDeletePersonenkontextById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async personenkontextControllerDeletePersonenkontextByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Request has wrong format.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Request is not authorized.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Insufficient permissions to perform operation.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The personenkontext was not found.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An internal server error occurred.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to personenkontextControllerFindPersonenkontextById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async personenkontextControllerFindPersonenkontextByIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PersonendatensatzResponseAutomapper >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PersonendatensatzResponseAutomapper = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PersonendatensatzResponseAutomapper", ""
            ) as PersonendatensatzResponseAutomapper;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Request has wrong format.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Request is not authorized.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Insufficient permissions to perform operation.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The personenkontext was not found.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An internal server error occurred.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PersonendatensatzResponseAutomapper = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PersonendatensatzResponseAutomapper", ""
            ) as PersonendatensatzResponseAutomapper;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to personenkontextControllerFindPersonenkontexte
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async personenkontextControllerFindPersonenkontexteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<PersonenkontextdatensatzResponse> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<PersonenkontextdatensatzResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PersonenkontextdatensatzResponse>", ""
            ) as Array<PersonenkontextdatensatzResponse>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Request has wrong format.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Request is not authorized.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Insufficient permissions to perform operation.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The personenkontexte were not found.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An internal server error occurred.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<PersonenkontextdatensatzResponse> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PersonenkontextdatensatzResponse>", ""
            ) as Array<PersonenkontextdatensatzResponse>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to personenkontextControllerHatSystemRecht
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async personenkontextControllerHatSystemRechtWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SystemrechtResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SystemrechtResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SystemrechtResponse", ""
            ) as SystemrechtResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The systemrecht could not be found (does not exist as type of systemrecht).", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SystemrechtResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SystemrechtResponse", ""
            ) as SystemrechtResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to personenkontextControllerUpdatePersonenkontextWithId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async personenkontextControllerUpdatePersonenkontextWithIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PersonenkontextResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PersonenkontextResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PersonenkontextResponse", ""
            ) as PersonenkontextResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Request has wrong format.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Request is not authorized.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Insufficient permissions to perform operation.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The personenkontext was not found.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "An internal server error occurred.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PersonenkontextResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PersonenkontextResponse", ""
            ) as PersonenkontextResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
