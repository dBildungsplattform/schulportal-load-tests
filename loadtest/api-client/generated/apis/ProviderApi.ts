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

import { ServiceProviderResponse } from "../models/ServiceProviderResponse.ts";

/**
 * no description
 */
export class ProviderApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Get all service-providers.
   *
   */
  public async providerControllerGetAllServiceProviders(
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/provider/all";

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

  /**
   * Get service-providers available for logged-in user.
   *
   */
  public async providerControllerGetAvailableServiceProviders(
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/provider";

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

  /**
   * @param angebotId The id of the service provider
   */
  public async providerControllerGetServiceProviderLogo(
    angebotId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'angebotId' is not null or undefined
    if (angebotId === null || angebotId === undefined) {
      throw new RequiredError(
        "ProviderApi",
        "providerControllerGetServiceProviderLogo",
        "angebotId",
      );
    }

    // Path Params
    const localVarPath = "/api/provider/{angebotId}/logo".replace(
      "{" + "angebotId" + "}",
      encodeURIComponent(String(angebotId)),
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

export class ProviderApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to providerControllerGetAllServiceProviders
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async providerControllerGetAllServiceProvidersWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<Array<ServiceProviderResponse>>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Array<ServiceProviderResponse> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<ServiceProviderResponse>",
        "",
      ) as Array<ServiceProviderResponse>;
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
        "Not authorized to get available service providers.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permissions to get service-providers.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Internal server error while getting all service-providers.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<ServiceProviderResponse> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<ServiceProviderResponse>",
        "",
      ) as Array<ServiceProviderResponse>;
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
   * @params response Response returned by the server for a request to providerControllerGetAvailableServiceProviders
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async providerControllerGetAvailableServiceProvidersWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<Array<ServiceProviderResponse>>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Array<ServiceProviderResponse> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<ServiceProviderResponse>",
        "",
      ) as Array<ServiceProviderResponse>;
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
        "Not authorized to get available service providers.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permissions to get service-providers.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Internal server error while getting all service-providers.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<ServiceProviderResponse> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<ServiceProviderResponse>",
        "",
      ) as Array<ServiceProviderResponse>;
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
   * @params response Response returned by the server for a request to providerControllerGetServiceProviderLogo
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async providerControllerGetServiceProviderLogoWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<any>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        "binary",
      ) as any;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Angebot ID is required.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Not authorized to get service provider logo.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permissions to get the logo.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "The service-provider does not exist or has no logo.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Internal server error while getting the logo.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        "binary",
      ) as any;
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
