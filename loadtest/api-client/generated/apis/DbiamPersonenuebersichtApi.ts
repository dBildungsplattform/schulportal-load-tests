// TODO: better import syntax?
import {
  BaseAPIRequestFactory,
  RequiredError,
  COLLECTION_FORMATS,
} from "./baseapi.ts";
import { Configuration } from "../configuration.ts";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
  HttpFile,
  HttpInfo,
} from "../http/http.ts";
import { ObjectSerializer } from "../models/ObjectSerializer.ts";
import { ApiException } from "./exception.ts";
import { canConsumeForm, isCodeInRange } from "../util.ts";
import { SecurityAuthentication } from "../auth/auth.ts";

import { DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response } from "../models/DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response.ts";
import { DBiamPersonenuebersichtResponse } from "../models/DBiamPersonenuebersichtResponse.ts";
import { PersonenuebersichtBodyParams } from "../models/PersonenuebersichtBodyParams.ts";

/**
 * no description
 */
export class DbiamPersonenuebersichtApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * @param personenuebersichtBodyParams
   */
  public async dBiamPersonenuebersichtControllerFindPersonenuebersichten(
    personenuebersichtBodyParams: PersonenuebersichtBodyParams,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'personenuebersichtBodyParams' is not null or undefined
    if (
      personenuebersichtBodyParams === null ||
      personenuebersichtBodyParams === undefined
    ) {
      throw new RequiredError(
        "DbiamPersonenuebersichtApi",
        "dBiamPersonenuebersichtControllerFindPersonenuebersichten",
        "personenuebersichtBodyParams",
      );
    }

    // Path Params
    const localVarPath = "/api/dbiam/personenuebersicht";

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        personenuebersichtBodyParams,
        "PersonenuebersichtBodyParams",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["bearer"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["oauth2"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * @param personId The ID for the person.
   */
  public async dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPerson(
    personId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'personId' is not null or undefined
    if (personId === null || personId === undefined) {
      throw new RequiredError(
        "DbiamPersonenuebersichtApi",
        "dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPerson",
        "personId",
      );
    }

    // Path Params
    const localVarPath = "/api/dbiam/personenuebersicht/{personId}".replace(
      "{" + "personId" + "}",
      encodeURIComponent(String(personId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["bearer"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["oauth2"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }
}

export class DbiamPersonenuebersichtApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to dBiamPersonenuebersichtControllerFindPersonenuebersichten
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async dBiamPersonenuebersichtControllerFindPersonenuebersichtenWithHttpInfo(
    response: ResponseContext,
  ): Promise<
    HttpInfo<DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response>
  > {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response",
          "",
        ) as DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Not authorized to get personenuebersichten.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permission to get personenuebersichten.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Internal server error while getting personenuebersichten.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response",
          "",
        ) as DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPerson
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPersonWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<DBiamPersonenuebersichtResponse>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: DBiamPersonenuebersichtResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DBiamPersonenuebersichtResponse",
          "",
        ) as DBiamPersonenuebersichtResponse;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Not authorized to get personenuebersicht.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permission to get personenuebersicht.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Internal server error while getting personenuebersicht.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DBiamPersonenuebersichtResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DBiamPersonenuebersichtResponse",
          "",
        ) as DBiamPersonenuebersichtResponse;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }
}
