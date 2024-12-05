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

import { PersonFrontendControllerFindPersons200Response } from "../models/PersonFrontendControllerFindPersons200Response.ts";

/**
 * no description
 */
export class PersonenFrontendApiRequestFactory extends BaseAPIRequestFactory {
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
  public async personFrontendControllerFindPersons(
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
    const localVarPath = "/api/personen-frontend";

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
}

export class PersonenFrontendApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to personFrontendControllerFindPersons
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async personFrontendControllerFindPersonsWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<PersonFrontendControllerFindPersons200Response>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: PersonFrontendControllerFindPersons200Response =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "PersonFrontendControllerFindPersons200Response",
          "",
        ) as PersonFrontendControllerFindPersons200Response;
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
      const body: PersonFrontendControllerFindPersons200Response =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "PersonFrontendControllerFindPersons200Response",
          "",
        ) as PersonFrontendControllerFindPersons200Response;
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
