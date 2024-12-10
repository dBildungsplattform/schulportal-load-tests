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

import { FindRollenResponse } from "../models/FindRollenResponse.ts";

/**
 * no description
 */
export class PersonAdministrationApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * @param rolleName Rolle name used to filter for rollen in personenkontext.
   * @param limit The limit of items for the request.
   */
  public async personAdministrationControllerFindRollen(
    rolleName?: string,
    limit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/person-administration/rollen";

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (rolleName !== undefined) {
      requestContext.setQueryParam(
        "rolleName",
        ObjectSerializer.serialize(rolleName, "string", ""),
      );
    }

    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }

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

export class PersonAdministrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to personAdministrationControllerFindRollen
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async personAdministrationControllerFindRollenWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<FindRollenResponse>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: FindRollenResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FindRollenResponse",
        "",
      ) as FindRollenResponse;
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
        "Not authorized to get available rollen for the logged-in user.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permission to get rollen for the logged-in user.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Internal server error while getting rollen for the logged-in user.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: FindRollenResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FindRollenResponse",
        "",
      ) as FindRollenResponse;
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
