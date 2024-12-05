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

import { CreatePersonMigrationBodyParams } from "../models/CreatePersonMigrationBodyParams.ts";
import { DbiamPersonError } from "../models/DbiamPersonError.ts";
import { LockUserBodyParams } from "../models/LockUserBodyParams.ts";
import { PersonControllerFindPersonenkontexte200Response } from "../models/PersonControllerFindPersonenkontexte200Response.ts";
import { PersonLockResponse } from "../models/PersonLockResponse.ts";
import { PersonMetadataBodyParams } from "../models/PersonMetadataBodyParams.ts";
import { PersonendatensatzResponse } from "../models/PersonendatensatzResponse.ts";
import { Personenstatus } from "../models/Personenstatus.ts";
import { Sichtfreigabe } from "../models/Sichtfreigabe.ts";
import { UpdatePersonBodyParams } from "../models/UpdatePersonBodyParams.ts";

/**
 * no description
 */
export class PersonenApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * @param createPersonMigrationBodyParams
   */
  public async personControllerCreatePersonMigration(
    createPersonMigrationBodyParams: CreatePersonMigrationBodyParams,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'createPersonMigrationBodyParams' is not null or undefined
    if (
      createPersonMigrationBodyParams === null ||
      createPersonMigrationBodyParams === undefined
    ) {
      throw new RequiredError(
        "PersonenApi",
        "personControllerCreatePersonMigration",
        "createPersonMigrationBodyParams",
      );
    }

    // Path Params
    const localVarPath = "/api/personen";

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
        createPersonMigrationBodyParams,
        "CreatePersonMigrationBodyParams",
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
   *
   * @param personId
   */
  public async personControllerCreatePersonenkontext(
    personId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'personId' is not null or undefined
    if (personId === null || personId === undefined) {
      throw new RequiredError(
        "PersonenApi",
        "personControllerCreatePersonenkontext",
        "personId",
      );
    }

    // Path Params
    const localVarPath = "/api/personen/{personId}/personenkontexte".replace(
      "{" + "personId" + "}",
      encodeURIComponent(String(personId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
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
   * @param personId The id for the account.
   */
  public async personControllerDeletePersonById(
    personId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'personId' is not null or undefined
    if (personId === null || personId === undefined) {
      throw new RequiredError(
        "PersonenApi",
        "personControllerDeletePersonById",
        "personId",
      );
    }

    // Path Params
    const localVarPath = "/api/personen/{personId}".replace(
      "{" + "personId" + "}",
      encodeURIComponent(String(personId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
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
   * @param personId The id for the account.
   */
  public async personControllerFindPersonById(
    personId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'personId' is not null or undefined
    if (personId === null || personId === undefined) {
      throw new RequiredError(
        "PersonenApi",
        "personControllerFindPersonById",
        "personId",
      );
    }

    // Path Params
    const localVarPath = "/api/personen/{personId}".replace(
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

  /**
   * @param personId The id for the account.
   * @param offset The offset of the paginated list.
   * @param limit The requested limit for the page size.
   * @param personId2
   * @param referrer
   * @param personenstatus
   * @param sichtfreigabe
   */
  public async personControllerFindPersonenkontexte(
    personId: string,
    offset?: number,
    limit?: number,
    personId2?: string,
    referrer?: string,
    personenstatus?: Personenstatus,
    sichtfreigabe?: Sichtfreigabe,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'personId' is not null or undefined
    if (personId === null || personId === undefined) {
      throw new RequiredError(
        "PersonenApi",
        "personControllerFindPersonenkontexte",
        "personId",
      );
    }

    // Path Params
    const localVarPath = "/api/personen/{personId}/personenkontexte".replace(
      "{" + "personId" + "}",
      encodeURIComponent(String(personId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (offset !== undefined) {
      requestContext.setQueryParam(
        "offset",
        ObjectSerializer.serialize(offset, "number", ""),
      );
    }

    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }

    // Query Params
    if (personId2 !== undefined) {
      requestContext.setQueryParam(
        "personId",
        ObjectSerializer.serialize(personId2, "string", ""),
      );
    }

    // Query Params
    if (referrer !== undefined) {
      requestContext.setQueryParam(
        "referrer",
        ObjectSerializer.serialize(referrer, "string", ""),
      );
    }

    // Query Params
    if (personenstatus !== undefined) {
      const serializedParams = ObjectSerializer.serialize(
        personenstatus,
        "Personenstatus",
        "",
      );
      for (const key of Object.keys(serializedParams)) {
        requestContext.setQueryParam(key, serializedParams[key]);
      }
    }

    // Query Params
    if (sichtfreigabe !== undefined) {
      const serializedParams = ObjectSerializer.serialize(
        sichtfreigabe,
        "Sichtfreigabe",
        "",
      );
      for (const key of Object.keys(serializedParams)) {
        requestContext.setQueryParam(key, serializedParams[key]);
      }
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
   * @param offset The offset of the paginated list.
   * @param limit The requested limit for the page size.
   * @param referrer
   * @param familienname
   * @param vorname
   * @param sichtfreigabe
   * @param organisationIDs List of Organisation ID used to filter for Persons.
   * @param rolleIDs List of Role ID used to filter for Persons.
   * @param suchFilter Search filter used to filter for Persons. It could be the vorname, familienname, referrer or the personalnummer.
   * @param sortOrder Order to sort by.
   * @param sortField Field to sort by.
   */
  public async personControllerFindPersons(
    offset?: number,
    limit?: number,
    referrer?: string,
    familienname?: string,
    vorname?: string,
    sichtfreigabe?: "ja" | "nein",
    organisationIDs?: Array<string>,
    rolleIDs?: Array<string>,
    suchFilter?: string,
    sortOrder?: "asc" | "desc",
    sortField?: "familienname" | "vorname" | "personalnummer" | "referrer",
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/personen";

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (offset !== undefined) {
      requestContext.setQueryParam(
        "offset",
        ObjectSerializer.serialize(offset, "number", ""),
      );
    }

    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", ""),
      );
    }

    // Query Params
    if (referrer !== undefined) {
      requestContext.setQueryParam(
        "referrer",
        ObjectSerializer.serialize(referrer, "string", ""),
      );
    }

    // Query Params
    if (familienname !== undefined) {
      requestContext.setQueryParam(
        "familienname",
        ObjectSerializer.serialize(familienname, "string", ""),
      );
    }

    // Query Params
    if (vorname !== undefined) {
      requestContext.setQueryParam(
        "vorname",
        ObjectSerializer.serialize(vorname, "string", ""),
      );
    }

    // Query Params
    if (sichtfreigabe !== undefined) {
      requestContext.setQueryParam(
        "sichtfreigabe",
        ObjectSerializer.serialize(sichtfreigabe, "'ja' | 'nein'", ""),
      );
    }

    // Query Params
    if (organisationIDs !== undefined) {
      const serializedParams = ObjectSerializer.serialize(
        organisationIDs,
        "Array<string>",
        "",
      );
      for (const serializedParam of serializedParams) {
        requestContext.appendQueryParam("organisationIDs", serializedParam);
      }
    }

    // Query Params
    if (rolleIDs !== undefined) {
      const serializedParams = ObjectSerializer.serialize(
        rolleIDs,
        "Array<string>",
        "",
      );
      for (const serializedParam of serializedParams) {
        requestContext.appendQueryParam("rolleIDs", serializedParam);
      }
    }

    // Query Params
    if (suchFilter !== undefined) {
      requestContext.setQueryParam(
        "suchFilter",
        ObjectSerializer.serialize(suchFilter, "string", ""),
      );
    }

    // Query Params
    if (sortOrder !== undefined) {
      requestContext.setQueryParam(
        "sortOrder",
        ObjectSerializer.serialize(sortOrder, "'asc' | 'desc'", ""),
      );
    }

    // Query Params
    if (sortField !== undefined) {
      requestContext.setQueryParam(
        "sortField",
        ObjectSerializer.serialize(
          sortField,
          "'familienname' | 'vorname' | 'personalnummer' | 'referrer'",
          "",
        ),
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
   * @param personId
   * @param lockUserBodyParams
   */
  public async personControllerLockPerson(
    personId: string,
    lockUserBodyParams: LockUserBodyParams,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'personId' is not null or undefined
    if (personId === null || personId === undefined) {
      throw new RequiredError(
        "PersonenApi",
        "personControllerLockPerson",
        "personId",
      );
    }

    // verify required parameter 'lockUserBodyParams' is not null or undefined
    if (lockUserBodyParams === null || lockUserBodyParams === undefined) {
      throw new RequiredError(
        "PersonenApi",
        "personControllerLockPerson",
        "lockUserBodyParams",
      );
    }

    // Path Params
    const localVarPath = "/api/personen/{personId}/lock-user".replace(
      "{" + "personId" + "}",
      encodeURIComponent(String(personId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(lockUserBodyParams, "LockUserBodyParams", ""),
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
   * @param personId The id for the account.
   */
  public async personControllerResetPasswordByPersonId(
    personId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'personId' is not null or undefined
    if (personId === null || personId === undefined) {
      throw new RequiredError(
        "PersonenApi",
        "personControllerResetPasswordByPersonId",
        "personId",
      );
    }

    // Path Params
    const localVarPath = "/api/personen/{personId}/password".replace(
      "{" + "personId" + "}",
      encodeURIComponent(String(personId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
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
   * @param personId
   */
  public async personControllerSyncPerson(
    personId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'personId' is not null or undefined
    if (personId === null || personId === undefined) {
      throw new RequiredError(
        "PersonenApi",
        "personControllerSyncPerson",
        "personId",
      );
    }

    // Path Params
    const localVarPath = "/api/personen/{personId}/sync".replace(
      "{" + "personId" + "}",
      encodeURIComponent(String(personId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
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
   * @param personId The id for the account.
   * @param personMetadataBodyParams
   */
  public async personControllerUpdateMetadata(
    personId: string,
    personMetadataBodyParams: PersonMetadataBodyParams,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'personId' is not null or undefined
    if (personId === null || personId === undefined) {
      throw new RequiredError(
        "PersonenApi",
        "personControllerUpdateMetadata",
        "personId",
      );
    }

    // verify required parameter 'personMetadataBodyParams' is not null or undefined
    if (
      personMetadataBodyParams === null ||
      personMetadataBodyParams === undefined
    ) {
      throw new RequiredError(
        "PersonenApi",
        "personControllerUpdateMetadata",
        "personMetadataBodyParams",
      );
    }

    // Path Params
    const localVarPath = "/api/personen/{personId}/metadata".replace(
      "{" + "personId" + "}",
      encodeURIComponent(String(personId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        personMetadataBodyParams,
        "PersonMetadataBodyParams",
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
   * @param personId The id for the account.
   * @param updatePersonBodyParams
   */
  public async personControllerUpdatePerson(
    personId: string,
    updatePersonBodyParams: UpdatePersonBodyParams,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'personId' is not null or undefined
    if (personId === null || personId === undefined) {
      throw new RequiredError(
        "PersonenApi",
        "personControllerUpdatePerson",
        "personId",
      );
    }

    // verify required parameter 'updatePersonBodyParams' is not null or undefined
    if (
      updatePersonBodyParams === null ||
      updatePersonBodyParams === undefined
    ) {
      throw new RequiredError(
        "PersonenApi",
        "personControllerUpdatePerson",
        "updatePersonBodyParams",
      );
    }

    // Path Params
    const localVarPath = "/api/personen/{personId}".replace(
      "{" + "personId" + "}",
      encodeURIComponent(String(personId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        updatePersonBodyParams,
        "UpdatePersonBodyParams",
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
}

export class PersonenApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to personControllerCreatePersonMigration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async personControllerCreatePersonMigrationWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<PersonendatensatzResponse>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: PersonendatensatzResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PersonendatensatzResponse",
        "",
      ) as PersonendatensatzResponse;
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
        "A username was given. Creation with username is not supported.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Not authorized to create the person.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permissions to create the person.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permissions to create the person.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Internal server error while creating the person.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: PersonendatensatzResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PersonendatensatzResponse",
        "",
      ) as PersonendatensatzResponse;
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
   * @params response Response returned by the server for a request to personControllerCreatePersonenkontext
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async personControllerCreatePersonenkontextWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<void>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        undefined,
      );
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "The personenkontext already exists.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Not authorized to create the personenkontext.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Not permitted to create the personenkontext.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permissions to create personenkontext for person.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Internal server error while creating the personenkontext.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        "",
      ) as void;
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
   * @params response Response returned by the server for a request to personControllerDeletePersonById
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async personControllerDeletePersonByIdWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<void>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("204", response.httpStatusCode)) {
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        undefined,
      );
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Request has wrong format.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Request is not authorized.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permissions to perform operation.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "The person was not found.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "An internal server error occurred.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        "",
      ) as void;
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
   * @params response Response returned by the server for a request to personControllerFindPersonById
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async personControllerFindPersonByIdWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<PersonendatensatzResponse>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: PersonendatensatzResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PersonendatensatzResponse",
        "",
      ) as PersonendatensatzResponse;
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
        "Person ID is required",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Not authorized to get the person.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permissions to get the person.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "The person does not exist or insufficient permissions.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Internal server error while getting the person.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: PersonendatensatzResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PersonendatensatzResponse",
        "",
      ) as PersonendatensatzResponse;
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
   * @params response Response returned by the server for a request to personControllerFindPersonenkontexte
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async personControllerFindPersonenkontexteWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<PersonControllerFindPersonenkontexte200Response>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: PersonControllerFindPersonenkontexte200Response =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "PersonControllerFindPersonenkontexte200Response",
          "",
        ) as PersonControllerFindPersonenkontexte200Response;
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
        "Not authorized to get personenkontexte.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permissions to get personenkontexte.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "No personenkontexte were found.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Internal server error while getting all personenkontexte.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: PersonControllerFindPersonenkontexte200Response =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "PersonControllerFindPersonenkontexte200Response",
          "",
        ) as PersonControllerFindPersonenkontexte200Response;
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
   * @params response Response returned by the server for a request to personControllerFindPersons
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async personControllerFindPersonsWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<Array<PersonendatensatzResponse>>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Array<PersonendatensatzResponse> =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "Array<PersonendatensatzResponse>",
          "",
        ) as Array<PersonendatensatzResponse>;
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
        "Not authorized to get persons.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permissions to get persons.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Internal server error while getting all persons.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<PersonendatensatzResponse> =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "Array<PersonendatensatzResponse>",
          "",
        ) as Array<PersonendatensatzResponse>;
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
   * @params response Response returned by the server for a request to personControllerLockPerson
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async personControllerLockPersonWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<PersonLockResponse>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: PersonLockResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PersonLockResponse",
        "",
      ) as PersonLockResponse;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permissions to perform operation.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "The person was not found.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "An internal server error occurred.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("502", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "A downstream server returned an error.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: PersonLockResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PersonLockResponse",
        "",
      ) as PersonLockResponse;
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
   * @params response Response returned by the server for a request to personControllerResetPasswordByPersonId
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async personControllerResetPasswordByPersonIdWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<string>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: string = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "string",
        "",
      ) as string;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "The person does not exist or insufficient permissions to update person.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Internal server error.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: string = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "string",
        "",
      ) as string;
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
   * @params response Response returned by the server for a request to personControllerSyncPerson
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async personControllerSyncPersonWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<void>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        undefined,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permissions to perform operation.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "The person was not found.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "An internal server error occurred.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("502", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "A downstream server returned an error.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        "",
      ) as void;
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
   * @params response Response returned by the server for a request to personControllerUpdateMetadata
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async personControllerUpdateMetadataWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<PersonendatensatzResponse>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: PersonendatensatzResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PersonendatensatzResponse",
        "",
      ) as PersonendatensatzResponse;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: DbiamPersonError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "DbiamPersonError",
        "",
      ) as DbiamPersonError;
      throw new ApiException<DbiamPersonError>(
        response.httpStatusCode,
        "Request has a wrong format.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Not authorized to update the metadata.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Not permitted to update the metadata.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Internal server error while updating the metadata for user.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: PersonendatensatzResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PersonendatensatzResponse",
        "",
      ) as PersonendatensatzResponse;
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
   * @params response Response returned by the server for a request to personControllerUpdatePerson
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async personControllerUpdatePersonWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<PersonendatensatzResponse>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: PersonendatensatzResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PersonendatensatzResponse",
        "",
      ) as PersonendatensatzResponse;
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
        "Request has wrong format.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Request is not authorized.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "Insufficient permissions to perform operation.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "The person was not found or insufficient permissions to update person.",
        undefined,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      throw new ApiException<undefined>(
        response.httpStatusCode,
        "An internal server error occurred.",
        undefined,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: PersonendatensatzResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PersonendatensatzResponse",
        "",
      ) as PersonendatensatzResponse;
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
