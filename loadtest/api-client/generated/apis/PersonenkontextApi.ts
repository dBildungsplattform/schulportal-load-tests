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

import { DBiamPersonResponse } from "../models/DBiamPersonResponse.ts";
import { DbiamCreatePersonWithPersonenkontexteBodyParams } from "../models/DbiamCreatePersonWithPersonenkontexteBodyParams.ts";
import { DbiamPersonenkontextError } from "../models/DbiamPersonenkontextError.ts";
import { DbiamPersonenkontexteUpdateError } from "../models/DbiamPersonenkontexteUpdateError.ts";
import { DbiamUpdatePersonenkontexteBodyParams } from "../models/DbiamUpdatePersonenkontexteBodyParams.ts";
import { FindSchulstrukturknotenResponse } from "../models/FindSchulstrukturknotenResponse.ts";
import { PersonenkontextWorkflowResponse } from "../models/PersonenkontextWorkflowResponse.ts";
import { PersonenkontexteUpdateResponse } from "../models/PersonenkontexteUpdateResponse.ts";

/**
 * no description
 */
export class PersonenkontextApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * @param personId The ID for the person.
   * @param dbiamUpdatePersonenkontexteBodyParams
   * @param personalnummer
   */
  public async dbiamPersonenkontextWorkflowControllerCommit(
    personId: string,
    dbiamUpdatePersonenkontexteBodyParams: DbiamUpdatePersonenkontexteBodyParams,
    personalnummer?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'personId' is not null or undefined
    if (personId === null || personId === undefined) {
      throw new RequiredError(
        "PersonenkontextApi",
        "dbiamPersonenkontextWorkflowControllerCommit",
        "personId",
      );
    }

    // verify required parameter 'dbiamUpdatePersonenkontexteBodyParams' is not null or undefined
    if (
      dbiamUpdatePersonenkontexteBodyParams === null ||
      dbiamUpdatePersonenkontexteBodyParams === undefined
    ) {
      throw new RequiredError(
        "PersonenkontextApi",
        "dbiamPersonenkontextWorkflowControllerCommit",
        "dbiamUpdatePersonenkontexteBodyParams",
      );
    }

    // Path Params
    const localVarPath = "/api/personenkontext-workflow/{personId}".replace(
      "{" + "personId" + "}",
      encodeURIComponent(String(personId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (personalnummer !== undefined) {
      requestContext.setQueryParam(
        "personalnummer",
        ObjectSerializer.serialize(personalnummer, "string", ""),
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        dbiamUpdatePersonenkontexteBodyParams,
        "DbiamUpdatePersonenkontexteBodyParams",
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
   * @param dbiamCreatePersonWithPersonenkontexteBodyParams
   */
  public async dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexte(
    dbiamCreatePersonWithPersonenkontexteBodyParams: DbiamCreatePersonWithPersonenkontexteBodyParams,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'dbiamCreatePersonWithPersonenkontexteBodyParams' is not null or undefined
    if (
      dbiamCreatePersonWithPersonenkontexteBodyParams === null ||
      dbiamCreatePersonWithPersonenkontexteBodyParams === undefined
    ) {
      throw new RequiredError(
        "PersonenkontextApi",
        "dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexte",
        "dbiamCreatePersonWithPersonenkontexteBodyParams",
      );
    }

    // Path Params
    const localVarPath = "/api/personenkontext-workflow";

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
        dbiamCreatePersonWithPersonenkontexteBodyParams,
        "DbiamCreatePersonWithPersonenkontexteBodyParams",
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
   * @param rolleId RolleId used to filter for schulstrukturknoten in personenkontext.
   * @param sskName Organisation/SSK name used to filter for schulstrukturknoten in personenkontext.
   * @param limit The limit of items for the request.
   */
  public async dbiamPersonenkontextWorkflowControllerFindSchulstrukturknoten(
    rolleId: string,
    sskName?: string,
    limit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'rolleId' is not null or undefined
    if (rolleId === null || rolleId === undefined) {
      throw new RequiredError(
        "PersonenkontextApi",
        "dbiamPersonenkontextWorkflowControllerFindSchulstrukturknoten",
        "rolleId",
      );
    }

    // Path Params
    const localVarPath = "/api/personenkontext-workflow/schulstrukturknoten";

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (rolleId !== undefined) {
      requestContext.setQueryParam(
        "rolleId",
        ObjectSerializer.serialize(rolleId, "string", ""),
      );
    }

    // Query Params
    if (sskName !== undefined) {
      requestContext.setQueryParam(
        "sskName",
        ObjectSerializer.serialize(sskName, "string", ""),
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

  /**
   * @param organisationId ID of the organisation to filter the rollen later
   * @param rolleId ID of the rolle.
   * @param rolleName Rolle name used to filter for rollen in personenkontext.
   * @param organisationName Organisation/SSK name used to filter for schulstrukturknoten in personenkontext.
   * @param limit The limit of items for the request.
   */
  public async dbiamPersonenkontextWorkflowControllerProcessStep(
    organisationId?: string,
    rolleId?: string,
    rolleName?: string,
    organisationName?: string,
    limit?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/personenkontext-workflow/step";

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (organisationId !== undefined) {
      requestContext.setQueryParam(
        "organisationId",
        ObjectSerializer.serialize(organisationId, "string", ""),
      );
    }

    // Query Params
    if (rolleId !== undefined) {
      requestContext.setQueryParam(
        "rolleId",
        ObjectSerializer.serialize(rolleId, "string", ""),
      );
    }

    // Query Params
    if (rolleName !== undefined) {
      requestContext.setQueryParam(
        "rolleName",
        ObjectSerializer.serialize(rolleName, "string", ""),
      );
    }

    // Query Params
    if (organisationName !== undefined) {
      requestContext.setQueryParam(
        "organisationName",
        ObjectSerializer.serialize(organisationName, "string", ""),
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

export class PersonenkontextApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to dbiamPersonenkontextWorkflowControllerCommit
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async dbiamPersonenkontextWorkflowControllerCommitWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<PersonenkontexteUpdateResponse>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: PersonenkontexteUpdateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PersonenkontexteUpdateResponse",
        "",
      ) as PersonenkontexteUpdateResponse;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: DbiamPersonenkontexteUpdateError =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "DbiamPersonenkontexteUpdateError",
          "",
        ) as DbiamPersonenkontexteUpdateError;
      throw new ApiException<DbiamPersonenkontexteUpdateError>(
        response.httpStatusCode,
        "The personenkontexte could not be updated, may due to unsatisfied specifications.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Not authorized to update personenkontexte.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permission to update personenkontexte.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("409", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Changes are conflicting with current state of personenkontexte.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Internal server error while updating personenkontexte.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: PersonenkontexteUpdateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PersonenkontexteUpdateResponse",
        "",
      ) as PersonenkontexteUpdateResponse;
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
   * @params response Response returned by the server for a request to dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexte
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexteWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<DBiamPersonResponse>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: DBiamPersonResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DBiamPersonResponse",
        "",
      ) as DBiamPersonResponse;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: DbiamPersonenkontextError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DbiamPersonenkontextError",
        "",
      ) as DbiamPersonenkontextError;
      throw new ApiException<DbiamPersonenkontextError>(
        response.httpStatusCode,
        "The person and the personenkontext could not be created, may due to unsatisfied specifications.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Not authorized to create person with personenkontext.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permission to create person with personenkontext.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Internal server error while creating person with personenkontext.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: DBiamPersonResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DBiamPersonResponse",
        "",
      ) as DBiamPersonResponse;
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
   * @params response Response returned by the server for a request to dbiamPersonenkontextWorkflowControllerFindSchulstrukturknoten
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async dbiamPersonenkontextWorkflowControllerFindSchulstrukturknotenWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<FindSchulstrukturknotenResponse>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: FindSchulstrukturknotenResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "FindSchulstrukturknotenResponse",
          "",
        ) as FindSchulstrukturknotenResponse;
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
        "Not authorized to get available schulstrukturknoten for personenkontexte.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permission to get schulstrukturknoten for personenkontext.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Internal server error while getting schulstrukturknoten for personenkontexte.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: FindSchulstrukturknotenResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "FindSchulstrukturknotenResponse",
          "",
        ) as FindSchulstrukturknotenResponse;
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
   * @params response Response returned by the server for a request to dbiamPersonenkontextWorkflowControllerProcessStep
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async dbiamPersonenkontextWorkflowControllerProcessStepWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<PersonenkontextWorkflowResponse>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: PersonenkontextWorkflowResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "PersonenkontextWorkflowResponse",
          "",
        ) as PersonenkontextWorkflowResponse;
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
        "Not authorized to get available data for personenkontext.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permission to get data for personenkontext.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Internal server error while getting data for personenkontext.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: PersonenkontextWorkflowResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "PersonenkontextWorkflowResponse",
          "",
        ) as PersonenkontextWorkflowResponse;
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
