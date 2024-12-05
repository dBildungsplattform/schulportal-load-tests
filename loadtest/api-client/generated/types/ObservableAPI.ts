import {
  ResponseContext,
  RequestContext,
  HttpFile,
  HttpInfo,
} from "../http/http.ts";
import { Configuration } from "../configuration.ts";
import { Observable, of, from } from "../rxjsStub.ts";
import { mergeMap, map } from "../rxjsStub.ts";
import { AddSystemrechtBodyParams } from "../models/AddSystemrechtBodyParams.ts";
import { AssignHardwareTokenBodyParams } from "../models/AssignHardwareTokenBodyParams.ts";
import { AssignHardwareTokenResponse } from "../models/AssignHardwareTokenResponse.ts";
import { CreateOrganisationBodyParams } from "../models/CreateOrganisationBodyParams.ts";
import { CreatePersonMigrationBodyParams } from "../models/CreatePersonMigrationBodyParams.ts";
import { CreateRolleBodyParams } from "../models/CreateRolleBodyParams.ts";
import { DBiamPersonResponse } from "../models/DBiamPersonResponse.ts";
import { DBiamPersonenkontextResponse } from "../models/DBiamPersonenkontextResponse.ts";
import { DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response } from "../models/DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response.ts";
import { DBiamPersonenuebersichtResponse } from "../models/DBiamPersonenuebersichtResponse.ts";
import { DBiamPersonenzuordnungResponse } from "../models/DBiamPersonenzuordnungResponse.ts";
import { DbiamCreatePersonWithPersonenkontexteBodyParams } from "../models/DbiamCreatePersonWithPersonenkontexteBodyParams.ts";
import { DbiamCreatePersonenkontextBodyParams } from "../models/DbiamCreatePersonenkontextBodyParams.ts";
import { DbiamImportError } from "../models/DbiamImportError.ts";
import { DbiamOrganisationError } from "../models/DbiamOrganisationError.ts";
import { DbiamPersonError } from "../models/DbiamPersonError.ts";
import { DbiamPersonenkontextBodyParams } from "../models/DbiamPersonenkontextBodyParams.ts";
import { DbiamPersonenkontextError } from "../models/DbiamPersonenkontextError.ts";
import { DbiamPersonenkontextMigrationBodyParams } from "../models/DbiamPersonenkontextMigrationBodyParams.ts";
import { DbiamPersonenkontexteUpdateError } from "../models/DbiamPersonenkontexteUpdateError.ts";
import { DbiamRolleError } from "../models/DbiamRolleError.ts";
import { DbiamUpdatePersonenkontexteBodyParams } from "../models/DbiamUpdatePersonenkontexteBodyParams.ts";
import { DeleteRevisionBodyParams } from "../models/DeleteRevisionBodyParams.ts";
import { EmailAddressStatus } from "../models/EmailAddressStatus.ts";
import { FindRollenResponse } from "../models/FindRollenResponse.ts";
import { FindSchulstrukturknotenResponse } from "../models/FindSchulstrukturknotenResponse.ts";
import { Geschlecht } from "../models/Geschlecht.ts";
import { ImportDataItemResponse } from "../models/ImportDataItemResponse.ts";
import { ImportUploadResponse } from "../models/ImportUploadResponse.ts";
import { ImportvorgangByIdBodyParams } from "../models/ImportvorgangByIdBodyParams.ts";
import { LockUserBodyParams } from "../models/LockUserBodyParams.ts";
import { LoeschungResponse } from "../models/LoeschungResponse.ts";
import { OrganisationByIdBodyParams } from "../models/OrganisationByIdBodyParams.ts";
import { OrganisationByNameBodyParams } from "../models/OrganisationByNameBodyParams.ts";
import { OrganisationResponse } from "../models/OrganisationResponse.ts";
import { OrganisationResponseLegacy } from "../models/OrganisationResponseLegacy.ts";
import { OrganisationRootChildrenResponse } from "../models/OrganisationRootChildrenResponse.ts";
import { OrganisationsTyp } from "../models/OrganisationsTyp.ts";
import { ParentOrganisationenResponse } from "../models/ParentOrganisationenResponse.ts";
import { ParentOrganisationsByIdsBodyParams } from "../models/ParentOrganisationsByIdsBodyParams.ts";
import { Person } from "../models/Person.ts";
import { PersonBirthParams } from "../models/PersonBirthParams.ts";
import { PersonBirthResponse } from "../models/PersonBirthResponse.ts";
import { PersonControllerFindPersonenkontexte200Response } from "../models/PersonControllerFindPersonenkontexte200Response.ts";
import { PersonEmailResponse } from "../models/PersonEmailResponse.ts";
import { PersonFrontendControllerFindPersons200Response } from "../models/PersonFrontendControllerFindPersons200Response.ts";
import { PersonIdResponse } from "../models/PersonIdResponse.ts";
import { PersonInfoResponse } from "../models/PersonInfoResponse.ts";
import { PersonLockResponse } from "../models/PersonLockResponse.ts";
import { PersonMetadataBodyParams } from "../models/PersonMetadataBodyParams.ts";
import { PersonNameParams } from "../models/PersonNameParams.ts";
import { PersonNameResponse } from "../models/PersonNameResponse.ts";
import { PersonResponse } from "../models/PersonResponse.ts";
import { PersonResponseAutomapper } from "../models/PersonResponseAutomapper.ts";
import { PersonendatensatzResponse } from "../models/PersonendatensatzResponse.ts";
import { PersonendatensatzResponseAutomapper } from "../models/PersonendatensatzResponseAutomapper.ts";
import { PersonenkontextMigrationRuntype } from "../models/PersonenkontextMigrationRuntype.ts";
import { PersonenkontextResponse } from "../models/PersonenkontextResponse.ts";
import { PersonenkontextRolleFieldsResponse } from "../models/PersonenkontextRolleFieldsResponse.ts";
import { PersonenkontextWorkflowResponse } from "../models/PersonenkontextWorkflowResponse.ts";
import { PersonenkontextdatensatzResponse } from "../models/PersonenkontextdatensatzResponse.ts";
import { PersonenkontexteUpdateResponse } from "../models/PersonenkontexteUpdateResponse.ts";
import { Personenstatus } from "../models/Personenstatus.ts";
import { PersonenuebersichtBodyParams } from "../models/PersonenuebersichtBodyParams.ts";
import { RawPagedResponse } from "../models/RawPagedResponse.ts";
import { RolleResponse } from "../models/RolleResponse.ts";
import { RolleServiceProviderBodyParams } from "../models/RolleServiceProviderBodyParams.ts";
import { RolleServiceProviderResponse } from "../models/RolleServiceProviderResponse.ts";
import { RolleWithServiceProvidersResponse } from "../models/RolleWithServiceProvidersResponse.ts";
import { RollenArt } from "../models/RollenArt.ts";
import { RollenMerkmal } from "../models/RollenMerkmal.ts";
import { RollenSystemRecht } from "../models/RollenSystemRecht.ts";
import { RollenSystemRechtServiceProviderIDResponse } from "../models/RollenSystemRechtServiceProviderIDResponse.ts";
import { ServiceProviderIdNameResponse } from "../models/ServiceProviderIdNameResponse.ts";
import { ServiceProviderKategorie } from "../models/ServiceProviderKategorie.ts";
import { ServiceProviderResponse } from "../models/ServiceProviderResponse.ts";
import { ServiceProviderTarget } from "../models/ServiceProviderTarget.ts";
import { Sichtfreigabe } from "../models/Sichtfreigabe.ts";
import { SystemrechtResponse } from "../models/SystemrechtResponse.ts";
import { TokenInitBodyParams } from "../models/TokenInitBodyParams.ts";
import { TokenRequiredResponse } from "../models/TokenRequiredResponse.ts";
import { TokenStateResponse } from "../models/TokenStateResponse.ts";
import { TokenVerifyBodyParams } from "../models/TokenVerifyBodyParams.ts";
import { TraegerschaftTyp } from "../models/TraegerschaftTyp.ts";
import { UpdateOrganisationBodyParams } from "../models/UpdateOrganisationBodyParams.ts";
import { UpdatePersonBodyParams } from "../models/UpdatePersonBodyParams.ts";
import { UpdateRolleBodyParams } from "../models/UpdateRolleBodyParams.ts";
import { UserLockParams } from "../models/UserLockParams.ts";
import { UserinfoResponse } from "../models/UserinfoResponse.ts";
import { Vertrauensstufe } from "../models/Vertrauensstufe.ts";

import {
  AuthApiRequestFactory,
  AuthApiResponseProcessor,
} from "../apis/AuthApi.ts";
export class ObservableAuthApi {
  private requestFactory: AuthApiRequestFactory;
  private responseProcessor: AuthApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AuthApiRequestFactory,
    responseProcessor?: AuthApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new AuthApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new AuthApiResponseProcessor();
  }

  /**
   * Info about logged in user.
   */
  public authenticationControllerInfoWithHttpInfo(
    _options?: Configuration,
  ): Observable<HttpInfo<UserinfoResponse>> {
    const requestContextPromise =
      this.requestFactory.authenticationControllerInfo(_options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.authenticationControllerInfoWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * Info about logged in user.
   */
  public authenticationControllerInfo(
    _options?: Configuration,
  ): Observable<UserinfoResponse> {
    return this.authenticationControllerInfoWithHttpInfo(_options).pipe(
      map((apiResponse: HttpInfo<UserinfoResponse>) => apiResponse.data),
    );
  }

  /**
   * Used to start OIDC authentication.
   * @param [redirectUrl]
   */
  public authenticationControllerLoginWithHttpInfo(
    redirectUrl?: string,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.authenticationControllerLogin(redirectUrl, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.authenticationControllerLoginWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * Used to start OIDC authentication.
   * @param [redirectUrl]
   */
  public authenticationControllerLogin(
    redirectUrl?: string,
    _options?: Configuration,
  ): Observable<void> {
    return this.authenticationControllerLoginWithHttpInfo(
      redirectUrl,
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }

  /**
   * Used to log out the current user.
   */
  public authenticationControllerLogoutWithHttpInfo(
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.authenticationControllerLogout(_options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.authenticationControllerLogoutWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * Used to log out the current user.
   */
  public authenticationControllerLogout(
    _options?: Configuration,
  ): Observable<void> {
    return this.authenticationControllerLogoutWithHttpInfo(_options).pipe(
      map((apiResponse: HttpInfo<void>) => apiResponse.data),
    );
  }

  /**
   * Redirect to Keycloak password reset.
   * @param redirectUrl
   * @param loginHint
   */
  public authenticationControllerResetPasswordWithHttpInfo(
    redirectUrl: string,
    loginHint: string,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.authenticationControllerResetPassword(
        redirectUrl,
        loginHint,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.authenticationControllerResetPasswordWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * Redirect to Keycloak password reset.
   * @param redirectUrl
   * @param loginHint
   */
  public authenticationControllerResetPassword(
    redirectUrl: string,
    loginHint: string,
    _options?: Configuration,
  ): Observable<void> {
    return this.authenticationControllerResetPasswordWithHttpInfo(
      redirectUrl,
      loginHint,
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }
}

import {
  Class2FAApiRequestFactory,
  Class2FAApiResponseProcessor,
} from "../apis/Class2FAApi.ts";
export class ObservableClass2FAApi {
  private requestFactory: Class2FAApiRequestFactory;
  private responseProcessor: Class2FAApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: Class2FAApiRequestFactory,
    responseProcessor?: Class2FAApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new Class2FAApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new Class2FAApiResponseProcessor();
  }

  /**
   * @param assignHardwareTokenBodyParams
   */
  public privacyIdeaAdministrationControllerAssignHardwareTokenWithHttpInfo(
    assignHardwareTokenBodyParams: AssignHardwareTokenBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<AssignHardwareTokenResponse>> {
    const requestContextPromise =
      this.requestFactory.privacyIdeaAdministrationControllerAssignHardwareToken(
        assignHardwareTokenBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.privacyIdeaAdministrationControllerAssignHardwareTokenWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param assignHardwareTokenBodyParams
   */
  public privacyIdeaAdministrationControllerAssignHardwareToken(
    assignHardwareTokenBodyParams: AssignHardwareTokenBodyParams,
    _options?: Configuration,
  ): Observable<AssignHardwareTokenResponse> {
    return this.privacyIdeaAdministrationControllerAssignHardwareTokenWithHttpInfo(
      assignHardwareTokenBodyParams,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<AssignHardwareTokenResponse>) =>
          apiResponse.data,
      ),
    );
  }

  /**
   * @param personId
   */
  public privacyIdeaAdministrationControllerGetTwoAuthStateWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<TokenStateResponse>> {
    const requestContextPromise =
      this.requestFactory.privacyIdeaAdministrationControllerGetTwoAuthState(
        personId,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.privacyIdeaAdministrationControllerGetTwoAuthStateWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param personId
   */
  public privacyIdeaAdministrationControllerGetTwoAuthState(
    personId: string,
    _options?: Configuration,
  ): Observable<TokenStateResponse> {
    return this.privacyIdeaAdministrationControllerGetTwoAuthStateWithHttpInfo(
      personId,
      _options,
    ).pipe(
      map((apiResponse: HttpInfo<TokenStateResponse>) => apiResponse.data),
    );
  }

  /**
   * @param tokenInitBodyParams
   */
  public privacyIdeaAdministrationControllerInitializeSoftwareTokenWithHttpInfo(
    tokenInitBodyParams: TokenInitBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<string>> {
    const requestContextPromise =
      this.requestFactory.privacyIdeaAdministrationControllerInitializeSoftwareToken(
        tokenInitBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.privacyIdeaAdministrationControllerInitializeSoftwareTokenWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param tokenInitBodyParams
   */
  public privacyIdeaAdministrationControllerInitializeSoftwareToken(
    tokenInitBodyParams: TokenInitBodyParams,
    _options?: Configuration,
  ): Observable<string> {
    return this.privacyIdeaAdministrationControllerInitializeSoftwareTokenWithHttpInfo(
      tokenInitBodyParams,
      _options,
    ).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
  }

  /**
   * @param personId
   */
  public privacyIdeaAdministrationControllerRequiresTwoFactorAuthenticationWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<TokenRequiredResponse>> {
    const requestContextPromise =
      this.requestFactory.privacyIdeaAdministrationControllerRequiresTwoFactorAuthentication(
        personId,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.privacyIdeaAdministrationControllerRequiresTwoFactorAuthenticationWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param personId
   */
  public privacyIdeaAdministrationControllerRequiresTwoFactorAuthentication(
    personId: string,
    _options?: Configuration,
  ): Observable<TokenRequiredResponse> {
    return this.privacyIdeaAdministrationControllerRequiresTwoFactorAuthenticationWithHttpInfo(
      personId,
      _options,
    ).pipe(
      map((apiResponse: HttpInfo<TokenRequiredResponse>) => apiResponse.data),
    );
  }

  /**
   * @param personId
   */
  public privacyIdeaAdministrationControllerResetTokenWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<boolean>> {
    const requestContextPromise =
      this.requestFactory.privacyIdeaAdministrationControllerResetToken(
        personId,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.privacyIdeaAdministrationControllerResetTokenWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param personId
   */
  public privacyIdeaAdministrationControllerResetToken(
    personId: string,
    _options?: Configuration,
  ): Observable<boolean> {
    return this.privacyIdeaAdministrationControllerResetTokenWithHttpInfo(
      personId,
      _options,
    ).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
  }

  /**
   * @param tokenVerifyBodyParams
   */
  public privacyIdeaAdministrationControllerVerifyTokenWithHttpInfo(
    tokenVerifyBodyParams: TokenVerifyBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.privacyIdeaAdministrationControllerVerifyToken(
        tokenVerifyBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.privacyIdeaAdministrationControllerVerifyTokenWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param tokenVerifyBodyParams
   */
  public privacyIdeaAdministrationControllerVerifyToken(
    tokenVerifyBodyParams: TokenVerifyBodyParams,
    _options?: Configuration,
  ): Observable<void> {
    return this.privacyIdeaAdministrationControllerVerifyTokenWithHttpInfo(
      tokenVerifyBodyParams,
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }
}

import {
  CronApiRequestFactory,
  CronApiResponseProcessor,
} from "../apis/CronApi.ts";
export class ObservableCronApi {
  private requestFactory: CronApiRequestFactory;
  private responseProcessor: CronApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: CronApiRequestFactory,
    responseProcessor?: CronApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new CronApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new CronApiResponseProcessor();
  }

  /**
   */
  public cronControllerKoPersUserLockWithHttpInfo(
    _options?: Configuration,
  ): Observable<HttpInfo<boolean>> {
    const requestContextPromise =
      this.requestFactory.cronControllerKoPersUserLock(_options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.cronControllerKoPersUserLockWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   */
  public cronControllerKoPersUserLock(
    _options?: Configuration,
  ): Observable<boolean> {
    return this.cronControllerKoPersUserLockWithHttpInfo(_options).pipe(
      map((apiResponse: HttpInfo<boolean>) => apiResponse.data),
    );
  }

  /**
   */
  public cronControllerPersonWithoutOrgDeleteWithHttpInfo(
    _options?: Configuration,
  ): Observable<HttpInfo<boolean>> {
    const requestContextPromise =
      this.requestFactory.cronControllerPersonWithoutOrgDelete(_options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.cronControllerPersonWithoutOrgDeleteWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   */
  public cronControllerPersonWithoutOrgDelete(
    _options?: Configuration,
  ): Observable<boolean> {
    return this.cronControllerPersonWithoutOrgDeleteWithHttpInfo(_options).pipe(
      map((apiResponse: HttpInfo<boolean>) => apiResponse.data),
    );
  }

  /**
   */
  public cronControllerRemovePersonenKontexteWithExpiredBefristungFromUsersWithHttpInfo(
    _options?: Configuration,
  ): Observable<HttpInfo<boolean>> {
    const requestContextPromise =
      this.requestFactory.cronControllerRemovePersonenKontexteWithExpiredBefristungFromUsers(
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.cronControllerRemovePersonenKontexteWithExpiredBefristungFromUsersWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   */
  public cronControllerRemovePersonenKontexteWithExpiredBefristungFromUsers(
    _options?: Configuration,
  ): Observable<boolean> {
    return this.cronControllerRemovePersonenKontexteWithExpiredBefristungFromUsersWithHttpInfo(
      _options,
    ).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
  }

  /**
   */
  public cronControllerUnlockUsersWithExpiredLocksWithHttpInfo(
    _options?: Configuration,
  ): Observable<HttpInfo<boolean>> {
    const requestContextPromise =
      this.requestFactory.cronControllerUnlockUsersWithExpiredLocks(_options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.cronControllerUnlockUsersWithExpiredLocksWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   */
  public cronControllerUnlockUsersWithExpiredLocks(
    _options?: Configuration,
  ): Observable<boolean> {
    return this.cronControllerUnlockUsersWithExpiredLocksWithHttpInfo(
      _options,
    ).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
  }
}

import {
  DbiamPersonenkontexteApiRequestFactory,
  DbiamPersonenkontexteApiResponseProcessor,
} from "../apis/DbiamPersonenkontexteApi.ts";
export class ObservableDbiamPersonenkontexteApi {
  private requestFactory: DbiamPersonenkontexteApiRequestFactory;
  private responseProcessor: DbiamPersonenkontexteApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: DbiamPersonenkontexteApiRequestFactory,
    responseProcessor?: DbiamPersonenkontexteApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new DbiamPersonenkontexteApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new DbiamPersonenkontexteApiResponseProcessor();
  }

  /**
   * @param dbiamPersonenkontextMigrationBodyParams
   */
  public dBiamPersonenkontextControllerCreatePersonenkontextMigrationWithHttpInfo(
    dbiamPersonenkontextMigrationBodyParams: DbiamPersonenkontextMigrationBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<DBiamPersonenkontextResponse>> {
    const requestContextPromise =
      this.requestFactory.dBiamPersonenkontextControllerCreatePersonenkontextMigration(
        dbiamPersonenkontextMigrationBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.dBiamPersonenkontextControllerCreatePersonenkontextMigrationWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param dbiamPersonenkontextMigrationBodyParams
   */
  public dBiamPersonenkontextControllerCreatePersonenkontextMigration(
    dbiamPersonenkontextMigrationBodyParams: DbiamPersonenkontextMigrationBodyParams,
    _options?: Configuration,
  ): Observable<DBiamPersonenkontextResponse> {
    return this.dBiamPersonenkontextControllerCreatePersonenkontextMigrationWithHttpInfo(
      dbiamPersonenkontextMigrationBodyParams,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<DBiamPersonenkontextResponse>) =>
          apiResponse.data,
      ),
    );
  }

  /**
   * @param personId The ID for the person.
   */
  public dBiamPersonenkontextControllerFindPersonenkontextsByPersonWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<Array<DBiamPersonenkontextResponse>>> {
    const requestContextPromise =
      this.requestFactory.dBiamPersonenkontextControllerFindPersonenkontextsByPerson(
        personId,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.dBiamPersonenkontextControllerFindPersonenkontextsByPersonWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param personId The ID for the person.
   */
  public dBiamPersonenkontextControllerFindPersonenkontextsByPerson(
    personId: string,
    _options?: Configuration,
  ): Observable<Array<DBiamPersonenkontextResponse>> {
    return this.dBiamPersonenkontextControllerFindPersonenkontextsByPersonWithHttpInfo(
      personId,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<Array<DBiamPersonenkontextResponse>>) =>
          apiResponse.data,
      ),
    );
  }
}

import {
  DbiamPersonenuebersichtApiRequestFactory,
  DbiamPersonenuebersichtApiResponseProcessor,
} from "../apis/DbiamPersonenuebersichtApi.ts";
export class ObservableDbiamPersonenuebersichtApi {
  private requestFactory: DbiamPersonenuebersichtApiRequestFactory;
  private responseProcessor: DbiamPersonenuebersichtApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: DbiamPersonenuebersichtApiRequestFactory,
    responseProcessor?: DbiamPersonenuebersichtApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new DbiamPersonenuebersichtApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new DbiamPersonenuebersichtApiResponseProcessor();
  }

  /**
   * @param personenuebersichtBodyParams
   */
  public dBiamPersonenuebersichtControllerFindPersonenuebersichtenWithHttpInfo(
    personenuebersichtBodyParams: PersonenuebersichtBodyParams,
    _options?: Configuration,
  ): Observable<
    HttpInfo<DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response>
  > {
    const requestContextPromise =
      this.requestFactory.dBiamPersonenuebersichtControllerFindPersonenuebersichten(
        personenuebersichtBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.dBiamPersonenuebersichtControllerFindPersonenuebersichtenWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param personenuebersichtBodyParams
   */
  public dBiamPersonenuebersichtControllerFindPersonenuebersichten(
    personenuebersichtBodyParams: PersonenuebersichtBodyParams,
    _options?: Configuration,
  ): Observable<DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response> {
    return this.dBiamPersonenuebersichtControllerFindPersonenuebersichtenWithHttpInfo(
      personenuebersichtBodyParams,
      _options,
    ).pipe(
      map(
        (
          apiResponse: HttpInfo<DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response>,
        ) => apiResponse.data,
      ),
    );
  }

  /**
   * @param personId The ID for the person.
   */
  public dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPersonWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<DBiamPersonenuebersichtResponse>> {
    const requestContextPromise =
      this.requestFactory.dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPerson(
        personId,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPersonWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param personId The ID for the person.
   */
  public dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPerson(
    personId: string,
    _options?: Configuration,
  ): Observable<DBiamPersonenuebersichtResponse> {
    return this.dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPersonWithHttpInfo(
      personId,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<DBiamPersonenuebersichtResponse>) =>
          apiResponse.data,
      ),
    );
  }
}

import {
  ImportApiRequestFactory,
  ImportApiResponseProcessor,
} from "../apis/ImportApi.ts";
export class ObservableImportApi {
  private requestFactory: ImportApiRequestFactory;
  private responseProcessor: ImportApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ImportApiRequestFactory,
    responseProcessor?: ImportApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ImportApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ImportApiResponseProcessor();
  }

  /**
   * Delete a role by id.
   *
   * @param importvorgangId The id of an import transaction
   */
  public importControllerDeleteImportTransactionWithHttpInfo(
    importvorgangId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.importControllerDeleteImportTransaction(
        importvorgangId,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.importControllerDeleteImportTransactionWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * Delete a role by id.
   *
   * @param importvorgangId The id of an import transaction
   */
  public importControllerDeleteImportTransaction(
    importvorgangId: string,
    _options?: Configuration,
  ): Observable<void> {
    return this.importControllerDeleteImportTransactionWithHttpInfo(
      importvorgangId,
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }

  /**
   * @param importvorgangByIdBodyParams
   */
  public importControllerExecuteImportWithHttpInfo(
    importvorgangByIdBodyParams: ImportvorgangByIdBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<HttpFile>> {
    const requestContextPromise =
      this.requestFactory.importControllerExecuteImport(
        importvorgangByIdBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.importControllerExecuteImportWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param importvorgangByIdBodyParams
   */
  public importControllerExecuteImport(
    importvorgangByIdBodyParams: ImportvorgangByIdBodyParams,
    _options?: Configuration,
  ): Observable<HttpFile> {
    return this.importControllerExecuteImportWithHttpInfo(
      importvorgangByIdBodyParams,
      _options,
    ).pipe(map((apiResponse: HttpInfo<HttpFile>) => apiResponse.data));
  }

  /**
   * @param organisationId
   * @param rolleId
   * @param file
   */
  public importControllerUploadFileWithHttpInfo(
    organisationId: string,
    rolleId: string,
    file: HttpFile,
    _options?: Configuration,
  ): Observable<HttpInfo<ImportUploadResponse>> {
    const requestContextPromise =
      this.requestFactory.importControllerUploadFile(
        organisationId,
        rolleId,
        file,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.importControllerUploadFileWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param organisationId
   * @param rolleId
   * @param file
   */
  public importControllerUploadFile(
    organisationId: string,
    rolleId: string,
    file: HttpFile,
    _options?: Configuration,
  ): Observable<ImportUploadResponse> {
    return this.importControllerUploadFileWithHttpInfo(
      organisationId,
      rolleId,
      file,
      _options,
    ).pipe(
      map((apiResponse: HttpInfo<ImportUploadResponse>) => apiResponse.data),
    );
  }
}

import {
  OrganisationenApiRequestFactory,
  OrganisationenApiResponseProcessor,
} from "../apis/OrganisationenApi.ts";
export class ObservableOrganisationenApi {
  private requestFactory: OrganisationenApiRequestFactory;
  private responseProcessor: OrganisationenApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: OrganisationenApiRequestFactory,
    responseProcessor?: OrganisationenApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new OrganisationenApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new OrganisationenApiResponseProcessor();
  }

  /**
   * @param organisationId The id of an organization
   * @param organisationByIdBodyParams
   */
  public organisationControllerAddAdministrierteOrganisationWithHttpInfo(
    organisationId: string,
    organisationByIdBodyParams: OrganisationByIdBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.organisationControllerAddAdministrierteOrganisation(
        organisationId,
        organisationByIdBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.organisationControllerAddAdministrierteOrganisationWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param organisationId The id of an organization
   * @param organisationByIdBodyParams
   */
  public organisationControllerAddAdministrierteOrganisation(
    organisationId: string,
    organisationByIdBodyParams: OrganisationByIdBodyParams,
    _options?: Configuration,
  ): Observable<void> {
    return this.organisationControllerAddAdministrierteOrganisationWithHttpInfo(
      organisationId,
      organisationByIdBodyParams,
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }

  /**
   * @param organisationId The id of an organization
   * @param organisationByIdBodyParams
   */
  public organisationControllerAddZugehoerigeOrganisationWithHttpInfo(
    organisationId: string,
    organisationByIdBodyParams: OrganisationByIdBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.organisationControllerAddZugehoerigeOrganisation(
        organisationId,
        organisationByIdBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.organisationControllerAddZugehoerigeOrganisationWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param organisationId The id of an organization
   * @param organisationByIdBodyParams
   */
  public organisationControllerAddZugehoerigeOrganisation(
    organisationId: string,
    organisationByIdBodyParams: OrganisationByIdBodyParams,
    _options?: Configuration,
  ): Observable<void> {
    return this.organisationControllerAddZugehoerigeOrganisationWithHttpInfo(
      organisationId,
      organisationByIdBodyParams,
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }

  /**
   * @param createOrganisationBodyParams
   */
  public organisationControllerCreateOrganisationWithHttpInfo(
    createOrganisationBodyParams: CreateOrganisationBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<OrganisationResponse>> {
    const requestContextPromise =
      this.requestFactory.organisationControllerCreateOrganisation(
        createOrganisationBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.organisationControllerCreateOrganisationWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param createOrganisationBodyParams
   */
  public organisationControllerCreateOrganisation(
    createOrganisationBodyParams: CreateOrganisationBodyParams,
    _options?: Configuration,
  ): Observable<OrganisationResponse> {
    return this.organisationControllerCreateOrganisationWithHttpInfo(
      createOrganisationBodyParams,
      _options,
    ).pipe(
      map((apiResponse: HttpInfo<OrganisationResponse>) => apiResponse.data),
    );
  }

  /**
   * Delete an organisation of type Klasse by id.
   *
   * @param organisationId The id of an organization
   */
  public organisationControllerDeleteKlasseWithHttpInfo(
    organisationId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.organisationControllerDeleteKlasse(
        organisationId,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.organisationControllerDeleteKlasseWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * Delete an organisation of type Klasse by id.
   *
   * @param organisationId The id of an organization
   */
  public organisationControllerDeleteKlasse(
    organisationId: string,
    _options?: Configuration,
  ): Observable<void> {
    return this.organisationControllerDeleteKlasseWithHttpInfo(
      organisationId,
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }

  /**
   * @param organisationId The id of an organization
   */
  public organisationControllerEnableForitslearningWithHttpInfo(
    organisationId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<OrganisationResponseLegacy>> {
    const requestContextPromise =
      this.requestFactory.organisationControllerEnableForitslearning(
        organisationId,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.organisationControllerEnableForitslearningWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param organisationId The id of an organization
   */
  public organisationControllerEnableForitslearning(
    organisationId: string,
    _options?: Configuration,
  ): Observable<OrganisationResponseLegacy> {
    return this.organisationControllerEnableForitslearningWithHttpInfo(
      organisationId,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<OrganisationResponseLegacy>) => apiResponse.data,
      ),
    );
  }

  /**
   * @param organisationId The id of an organization
   */
  public organisationControllerFindOrganisationByIdWithHttpInfo(
    organisationId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<OrganisationResponse>> {
    const requestContextPromise =
      this.requestFactory.organisationControllerFindOrganisationById(
        organisationId,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.organisationControllerFindOrganisationByIdWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param organisationId The id of an organization
   */
  public organisationControllerFindOrganisationById(
    organisationId: string,
    _options?: Configuration,
  ): Observable<OrganisationResponse> {
    return this.organisationControllerFindOrganisationByIdWithHttpInfo(
      organisationId,
      _options,
    ).pipe(
      map((apiResponse: HttpInfo<OrganisationResponse>) => apiResponse.data),
    );
  }

  /**
   * @param [offset] The offset of the paginated list.
   * @param [limit] The requested limit for the page size.
   * @param [kennung]
   * @param [name]
   * @param [searchString]
   * @param [typ]
   * @param [systemrechte]
   * @param [excludeTyp]
   * @param [administriertVon]
   * @param [organisationIds] Liefert Organisationen mit den angegebenen IDs, selbst wenn andere Filterkriterien nicht zutreffen (ODER-verknüpft mit anderen Kriterien).
   */
  public organisationControllerFindOrganizationsWithHttpInfo(
    offset?: number,
    limit?: number,
    kennung?: string,
    name?: string,
    searchString?: string,
    typ?: OrganisationsTyp,
    systemrechte?: Array<RollenSystemRecht>,
    excludeTyp?: Array<OrganisationsTyp>,
    administriertVon?: Array<string>,
    organisationIds?: Array<string>,
    _options?: Configuration,
  ): Observable<HttpInfo<Array<OrganisationResponse>>> {
    const requestContextPromise =
      this.requestFactory.organisationControllerFindOrganizations(
        offset,
        limit,
        kennung,
        name,
        searchString,
        typ,
        systemrechte,
        excludeTyp,
        administriertVon,
        organisationIds,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.organisationControllerFindOrganizationsWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param [offset] The offset of the paginated list.
   * @param [limit] The requested limit for the page size.
   * @param [kennung]
   * @param [name]
   * @param [searchString]
   * @param [typ]
   * @param [systemrechte]
   * @param [excludeTyp]
   * @param [administriertVon]
   * @param [organisationIds] Liefert Organisationen mit den angegebenen IDs, selbst wenn andere Filterkriterien nicht zutreffen (ODER-verknüpft mit anderen Kriterien).
   */
  public organisationControllerFindOrganizations(
    offset?: number,
    limit?: number,
    kennung?: string,
    name?: string,
    searchString?: string,
    typ?: OrganisationsTyp,
    systemrechte?: Array<RollenSystemRecht>,
    excludeTyp?: Array<OrganisationsTyp>,
    administriertVon?: Array<string>,
    organisationIds?: Array<string>,
    _options?: Configuration,
  ): Observable<Array<OrganisationResponse>> {
    return this.organisationControllerFindOrganizationsWithHttpInfo(
      offset,
      limit,
      kennung,
      name,
      searchString,
      typ,
      systemrechte,
      excludeTyp,
      administriertVon,
      organisationIds,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<Array<OrganisationResponse>>) =>
          apiResponse.data,
      ),
    );
  }

  /**
   * @param organisationId The id of an organization
   * @param [offset] The offset of the paginated list.
   * @param [limit] The requested limit for the page size.
   * @param [searchFilter]
   */
  public organisationControllerGetAdministrierteOrganisationenWithHttpInfo(
    organisationId: string,
    offset?: number,
    limit?: number,
    searchFilter?: string,
    _options?: Configuration,
  ): Observable<HttpInfo<Array<OrganisationResponse>>> {
    const requestContextPromise =
      this.requestFactory.organisationControllerGetAdministrierteOrganisationen(
        organisationId,
        offset,
        limit,
        searchFilter,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.organisationControllerGetAdministrierteOrganisationenWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param organisationId The id of an organization
   * @param [offset] The offset of the paginated list.
   * @param [limit] The requested limit for the page size.
   * @param [searchFilter]
   */
  public organisationControllerGetAdministrierteOrganisationen(
    organisationId: string,
    offset?: number,
    limit?: number,
    searchFilter?: string,
    _options?: Configuration,
  ): Observable<Array<OrganisationResponse>> {
    return this.organisationControllerGetAdministrierteOrganisationenWithHttpInfo(
      organisationId,
      offset,
      limit,
      searchFilter,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<Array<OrganisationResponse>>) =>
          apiResponse.data,
      ),
    );
  }

  /**
   * @param parentOrganisationsByIdsBodyParams
   */
  public organisationControllerGetParentsByIdsWithHttpInfo(
    parentOrganisationsByIdsBodyParams: ParentOrganisationsByIdsBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<ParentOrganisationenResponse>> {
    const requestContextPromise =
      this.requestFactory.organisationControllerGetParentsByIds(
        parentOrganisationsByIdsBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.organisationControllerGetParentsByIdsWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param parentOrganisationsByIdsBodyParams
   */
  public organisationControllerGetParentsByIds(
    parentOrganisationsByIdsBodyParams: ParentOrganisationsByIdsBodyParams,
    _options?: Configuration,
  ): Observable<ParentOrganisationenResponse> {
    return this.organisationControllerGetParentsByIdsWithHttpInfo(
      parentOrganisationsByIdsBodyParams,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<ParentOrganisationenResponse>) =>
          apiResponse.data,
      ),
    );
  }

  /**
   */
  public organisationControllerGetRootChildrenWithHttpInfo(
    _options?: Configuration,
  ): Observable<HttpInfo<OrganisationRootChildrenResponse>> {
    const requestContextPromise =
      this.requestFactory.organisationControllerGetRootChildren(_options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.organisationControllerGetRootChildrenWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   */
  public organisationControllerGetRootChildren(
    _options?: Configuration,
  ): Observable<OrganisationRootChildrenResponse> {
    return this.organisationControllerGetRootChildrenWithHttpInfo(
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<OrganisationRootChildrenResponse>) =>
          apiResponse.data,
      ),
    );
  }

  /**
   */
  public organisationControllerGetRootOrganisationWithHttpInfo(
    _options?: Configuration,
  ): Observable<HttpInfo<OrganisationResponse>> {
    const requestContextPromise =
      this.requestFactory.organisationControllerGetRootOrganisation(_options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.organisationControllerGetRootOrganisationWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   */
  public organisationControllerGetRootOrganisation(
    _options?: Configuration,
  ): Observable<OrganisationResponse> {
    return this.organisationControllerGetRootOrganisationWithHttpInfo(
      _options,
    ).pipe(
      map((apiResponse: HttpInfo<OrganisationResponse>) => apiResponse.data),
    );
  }

  /**
   * @param organisationId The id of an organization
   */
  public organisationControllerGetZugehoerigeOrganisationenWithHttpInfo(
    organisationId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<Array<OrganisationResponse>>> {
    const requestContextPromise =
      this.requestFactory.organisationControllerGetZugehoerigeOrganisationen(
        organisationId,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.organisationControllerGetZugehoerigeOrganisationenWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param organisationId The id of an organization
   */
  public organisationControllerGetZugehoerigeOrganisationen(
    organisationId: string,
    _options?: Configuration,
  ): Observable<Array<OrganisationResponse>> {
    return this.organisationControllerGetZugehoerigeOrganisationenWithHttpInfo(
      organisationId,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<Array<OrganisationResponse>>) =>
          apiResponse.data,
      ),
    );
  }

  /**
   * @param organisationId The id of an organization
   * @param updateOrganisationBodyParams
   */
  public organisationControllerUpdateOrganisationWithHttpInfo(
    organisationId: string,
    updateOrganisationBodyParams: UpdateOrganisationBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<OrganisationResponse>> {
    const requestContextPromise =
      this.requestFactory.organisationControllerUpdateOrganisation(
        organisationId,
        updateOrganisationBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.organisationControllerUpdateOrganisationWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param organisationId The id of an organization
   * @param updateOrganisationBodyParams
   */
  public organisationControllerUpdateOrganisation(
    organisationId: string,
    updateOrganisationBodyParams: UpdateOrganisationBodyParams,
    _options?: Configuration,
  ): Observable<OrganisationResponse> {
    return this.organisationControllerUpdateOrganisationWithHttpInfo(
      organisationId,
      updateOrganisationBodyParams,
      _options,
    ).pipe(
      map((apiResponse: HttpInfo<OrganisationResponse>) => apiResponse.data),
    );
  }

  /**
   * @param organisationId The id of an organization
   * @param organisationByNameBodyParams
   */
  public organisationControllerUpdateOrganisationNameWithHttpInfo(
    organisationId: string,
    organisationByNameBodyParams: OrganisationByNameBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<OrganisationResponseLegacy>> {
    const requestContextPromise =
      this.requestFactory.organisationControllerUpdateOrganisationName(
        organisationId,
        organisationByNameBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.organisationControllerUpdateOrganisationNameWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param organisationId The id of an organization
   * @param organisationByNameBodyParams
   */
  public organisationControllerUpdateOrganisationName(
    organisationId: string,
    organisationByNameBodyParams: OrganisationByNameBodyParams,
    _options?: Configuration,
  ): Observable<OrganisationResponseLegacy> {
    return this.organisationControllerUpdateOrganisationNameWithHttpInfo(
      organisationId,
      organisationByNameBodyParams,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<OrganisationResponseLegacy>) => apiResponse.data,
      ),
    );
  }
}

import {
  PersonAdministrationApiRequestFactory,
  PersonAdministrationApiResponseProcessor,
} from "../apis/PersonAdministrationApi.ts";
export class ObservablePersonAdministrationApi {
  private requestFactory: PersonAdministrationApiRequestFactory;
  private responseProcessor: PersonAdministrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: PersonAdministrationApiRequestFactory,
    responseProcessor?: PersonAdministrationApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new PersonAdministrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new PersonAdministrationApiResponseProcessor();
  }

  /**
   * @param [rolleName] Rolle name used to filter for rollen in personenkontext.
   * @param [limit] The limit of items for the request.
   */
  public personAdministrationControllerFindRollenWithHttpInfo(
    rolleName?: string,
    limit?: number,
    _options?: Configuration,
  ): Observable<HttpInfo<FindRollenResponse>> {
    const requestContextPromise =
      this.requestFactory.personAdministrationControllerFindRollen(
        rolleName,
        limit,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.personAdministrationControllerFindRollenWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param [rolleName] Rolle name used to filter for rollen in personenkontext.
   * @param [limit] The limit of items for the request.
   */
  public personAdministrationControllerFindRollen(
    rolleName?: string,
    limit?: number,
    _options?: Configuration,
  ): Observable<FindRollenResponse> {
    return this.personAdministrationControllerFindRollenWithHttpInfo(
      rolleName,
      limit,
      _options,
    ).pipe(
      map((apiResponse: HttpInfo<FindRollenResponse>) => apiResponse.data),
    );
  }
}

import {
  PersonInfoApiRequestFactory,
  PersonInfoApiResponseProcessor,
} from "../apis/PersonInfoApi.ts";
export class ObservablePersonInfoApi {
  private requestFactory: PersonInfoApiRequestFactory;
  private responseProcessor: PersonInfoApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: PersonInfoApiRequestFactory,
    responseProcessor?: PersonInfoApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new PersonInfoApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new PersonInfoApiResponseProcessor();
  }

  /**
   * Info about logged in person.
   */
  public personInfoControllerInfoWithHttpInfo(
    _options?: Configuration,
  ): Observable<HttpInfo<PersonInfoResponse>> {
    const requestContextPromise =
      this.requestFactory.personInfoControllerInfo(_options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.personInfoControllerInfoWithHttpInfo(rsp),
            ),
          );
        }),
      );
  }

  /**
   * Info about logged in person.
   */
  public personInfoControllerInfo(
    _options?: Configuration,
  ): Observable<PersonInfoResponse> {
    return this.personInfoControllerInfoWithHttpInfo(_options).pipe(
      map((apiResponse: HttpInfo<PersonInfoResponse>) => apiResponse.data),
    );
  }
}

import {
  PersonenApiRequestFactory,
  PersonenApiResponseProcessor,
} from "../apis/PersonenApi.ts";
export class ObservablePersonenApi {
  private requestFactory: PersonenApiRequestFactory;
  private responseProcessor: PersonenApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: PersonenApiRequestFactory,
    responseProcessor?: PersonenApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new PersonenApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new PersonenApiResponseProcessor();
  }

  /**
   * @param createPersonMigrationBodyParams
   */
  public personControllerCreatePersonMigrationWithHttpInfo(
    createPersonMigrationBodyParams: CreatePersonMigrationBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<PersonendatensatzResponse>> {
    const requestContextPromise =
      this.requestFactory.personControllerCreatePersonMigration(
        createPersonMigrationBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.personControllerCreatePersonMigrationWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param createPersonMigrationBodyParams
   */
  public personControllerCreatePersonMigration(
    createPersonMigrationBodyParams: CreatePersonMigrationBodyParams,
    _options?: Configuration,
  ): Observable<PersonendatensatzResponse> {
    return this.personControllerCreatePersonMigrationWithHttpInfo(
      createPersonMigrationBodyParams,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<PersonendatensatzResponse>) => apiResponse.data,
      ),
    );
  }

  /**
   *
   * @param personId
   */
  public personControllerCreatePersonenkontextWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.personControllerCreatePersonenkontext(
        personId,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.personControllerCreatePersonenkontextWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   *
   * @param personId
   */
  public personControllerCreatePersonenkontext(
    personId: string,
    _options?: Configuration,
  ): Observable<void> {
    return this.personControllerCreatePersonenkontextWithHttpInfo(
      personId,
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }

  /**
   * @param personId The id for the account.
   */
  public personControllerDeletePersonByIdWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.personControllerDeletePersonById(personId, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.personControllerDeletePersonByIdWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param personId The id for the account.
   */
  public personControllerDeletePersonById(
    personId: string,
    _options?: Configuration,
  ): Observable<void> {
    return this.personControllerDeletePersonByIdWithHttpInfo(
      personId,
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }

  /**
   * @param personId The id for the account.
   */
  public personControllerFindPersonByIdWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<PersonendatensatzResponse>> {
    const requestContextPromise =
      this.requestFactory.personControllerFindPersonById(personId, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.personControllerFindPersonByIdWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param personId The id for the account.
   */
  public personControllerFindPersonById(
    personId: string,
    _options?: Configuration,
  ): Observable<PersonendatensatzResponse> {
    return this.personControllerFindPersonByIdWithHttpInfo(
      personId,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<PersonendatensatzResponse>) => apiResponse.data,
      ),
    );
  }

  /**
   * @param personId The id for the account.
   * @param [offset] The offset of the paginated list.
   * @param [limit] The requested limit for the page size.
   * @param [personId2]
   * @param [referrer]
   * @param [personenstatus]
   * @param [sichtfreigabe]
   */
  public personControllerFindPersonenkontexteWithHttpInfo(
    personId: string,
    offset?: number,
    limit?: number,
    personId2?: string,
    referrer?: string,
    personenstatus?: Personenstatus,
    sichtfreigabe?: Sichtfreigabe,
    _options?: Configuration,
  ): Observable<HttpInfo<PersonControllerFindPersonenkontexte200Response>> {
    const requestContextPromise =
      this.requestFactory.personControllerFindPersonenkontexte(
        personId,
        offset,
        limit,
        personId2,
        referrer,
        personenstatus,
        sichtfreigabe,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.personControllerFindPersonenkontexteWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param personId The id for the account.
   * @param [offset] The offset of the paginated list.
   * @param [limit] The requested limit for the page size.
   * @param [personId2]
   * @param [referrer]
   * @param [personenstatus]
   * @param [sichtfreigabe]
   */
  public personControllerFindPersonenkontexte(
    personId: string,
    offset?: number,
    limit?: number,
    personId2?: string,
    referrer?: string,
    personenstatus?: Personenstatus,
    sichtfreigabe?: Sichtfreigabe,
    _options?: Configuration,
  ): Observable<PersonControllerFindPersonenkontexte200Response> {
    return this.personControllerFindPersonenkontexteWithHttpInfo(
      personId,
      offset,
      limit,
      personId2,
      referrer,
      personenstatus,
      sichtfreigabe,
      _options,
    ).pipe(
      map(
        (
          apiResponse: HttpInfo<PersonControllerFindPersonenkontexte200Response>,
        ) => apiResponse.data,
      ),
    );
  }

  /**
   * @param [offset] The offset of the paginated list.
   * @param [limit] The requested limit for the page size.
   * @param [referrer]
   * @param [familienname]
   * @param [vorname]
   * @param [sichtfreigabe]
   * @param [organisationIDs] List of Organisation ID used to filter for Persons.
   * @param [rolleIDs] List of Role ID used to filter for Persons.
   * @param [suchFilter] Search filter used to filter for Persons. It could be the vorname, familienname, referrer or the personalnummer.
   * @param [sortOrder] Order to sort by.
   * @param [sortField] Field to sort by.
   */
  public personControllerFindPersonsWithHttpInfo(
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
  ): Observable<HttpInfo<Array<PersonendatensatzResponse>>> {
    const requestContextPromise =
      this.requestFactory.personControllerFindPersons(
        offset,
        limit,
        referrer,
        familienname,
        vorname,
        sichtfreigabe,
        organisationIDs,
        rolleIDs,
        suchFilter,
        sortOrder,
        sortField,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.personControllerFindPersonsWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param [offset] The offset of the paginated list.
   * @param [limit] The requested limit for the page size.
   * @param [referrer]
   * @param [familienname]
   * @param [vorname]
   * @param [sichtfreigabe]
   * @param [organisationIDs] List of Organisation ID used to filter for Persons.
   * @param [rolleIDs] List of Role ID used to filter for Persons.
   * @param [suchFilter] Search filter used to filter for Persons. It could be the vorname, familienname, referrer or the personalnummer.
   * @param [sortOrder] Order to sort by.
   * @param [sortField] Field to sort by.
   */
  public personControllerFindPersons(
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
  ): Observable<Array<PersonendatensatzResponse>> {
    return this.personControllerFindPersonsWithHttpInfo(
      offset,
      limit,
      referrer,
      familienname,
      vorname,
      sichtfreigabe,
      organisationIDs,
      rolleIDs,
      suchFilter,
      sortOrder,
      sortField,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<Array<PersonendatensatzResponse>>) =>
          apiResponse.data,
      ),
    );
  }

  /**
   * @param personId
   * @param lockUserBodyParams
   */
  public personControllerLockPersonWithHttpInfo(
    personId: string,
    lockUserBodyParams: LockUserBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<PersonLockResponse>> {
    const requestContextPromise =
      this.requestFactory.personControllerLockPerson(
        personId,
        lockUserBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.personControllerLockPersonWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param personId
   * @param lockUserBodyParams
   */
  public personControllerLockPerson(
    personId: string,
    lockUserBodyParams: LockUserBodyParams,
    _options?: Configuration,
  ): Observable<PersonLockResponse> {
    return this.personControllerLockPersonWithHttpInfo(
      personId,
      lockUserBodyParams,
      _options,
    ).pipe(
      map((apiResponse: HttpInfo<PersonLockResponse>) => apiResponse.data),
    );
  }

  /**
   * @param personId The id for the account.
   */
  public personControllerResetPasswordByPersonIdWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<string>> {
    const requestContextPromise =
      this.requestFactory.personControllerResetPasswordByPersonId(
        personId,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.personControllerResetPasswordByPersonIdWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param personId The id for the account.
   */
  public personControllerResetPasswordByPersonId(
    personId: string,
    _options?: Configuration,
  ): Observable<string> {
    return this.personControllerResetPasswordByPersonIdWithHttpInfo(
      personId,
      _options,
    ).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
  }

  /**
   * @param personId
   */
  public personControllerSyncPersonWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.personControllerSyncPerson(personId, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.personControllerSyncPersonWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param personId
   */
  public personControllerSyncPerson(
    personId: string,
    _options?: Configuration,
  ): Observable<void> {
    return this.personControllerSyncPersonWithHttpInfo(personId, _options).pipe(
      map((apiResponse: HttpInfo<void>) => apiResponse.data),
    );
  }

  /**
   * @param personId The id for the account.
   * @param personMetadataBodyParams
   */
  public personControllerUpdateMetadataWithHttpInfo(
    personId: string,
    personMetadataBodyParams: PersonMetadataBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<PersonendatensatzResponse>> {
    const requestContextPromise =
      this.requestFactory.personControllerUpdateMetadata(
        personId,
        personMetadataBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.personControllerUpdateMetadataWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param personId The id for the account.
   * @param personMetadataBodyParams
   */
  public personControllerUpdateMetadata(
    personId: string,
    personMetadataBodyParams: PersonMetadataBodyParams,
    _options?: Configuration,
  ): Observable<PersonendatensatzResponse> {
    return this.personControllerUpdateMetadataWithHttpInfo(
      personId,
      personMetadataBodyParams,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<PersonendatensatzResponse>) => apiResponse.data,
      ),
    );
  }

  /**
   * @param personId The id for the account.
   * @param updatePersonBodyParams
   */
  public personControllerUpdatePersonWithHttpInfo(
    personId: string,
    updatePersonBodyParams: UpdatePersonBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<PersonendatensatzResponse>> {
    const requestContextPromise =
      this.requestFactory.personControllerUpdatePerson(
        personId,
        updatePersonBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.personControllerUpdatePersonWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param personId The id for the account.
   * @param updatePersonBodyParams
   */
  public personControllerUpdatePerson(
    personId: string,
    updatePersonBodyParams: UpdatePersonBodyParams,
    _options?: Configuration,
  ): Observable<PersonendatensatzResponse> {
    return this.personControllerUpdatePersonWithHttpInfo(
      personId,
      updatePersonBodyParams,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<PersonendatensatzResponse>) => apiResponse.data,
      ),
    );
  }
}

import {
  PersonenFrontendApiRequestFactory,
  PersonenFrontendApiResponseProcessor,
} from "../apis/PersonenFrontendApi.ts";
export class ObservablePersonenFrontendApi {
  private requestFactory: PersonenFrontendApiRequestFactory;
  private responseProcessor: PersonenFrontendApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: PersonenFrontendApiRequestFactory,
    responseProcessor?: PersonenFrontendApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new PersonenFrontendApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new PersonenFrontendApiResponseProcessor();
  }

  /**
   * @param [offset] The offset of the paginated list.
   * @param [limit] The requested limit for the page size.
   * @param [referrer]
   * @param [familienname]
   * @param [vorname]
   * @param [sichtfreigabe]
   * @param [organisationIDs] List of Organisation ID used to filter for Persons.
   * @param [rolleIDs] List of Role ID used to filter for Persons.
   * @param [suchFilter] Search filter used to filter for Persons. It could be the vorname, familienname, referrer or the personalnummer.
   * @param [sortOrder] Order to sort by.
   * @param [sortField] Field to sort by.
   */
  public personFrontendControllerFindPersonsWithHttpInfo(
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
  ): Observable<HttpInfo<PersonFrontendControllerFindPersons200Response>> {
    const requestContextPromise =
      this.requestFactory.personFrontendControllerFindPersons(
        offset,
        limit,
        referrer,
        familienname,
        vorname,
        sichtfreigabe,
        organisationIDs,
        rolleIDs,
        suchFilter,
        sortOrder,
        sortField,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.personFrontendControllerFindPersonsWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param [offset] The offset of the paginated list.
   * @param [limit] The requested limit for the page size.
   * @param [referrer]
   * @param [familienname]
   * @param [vorname]
   * @param [sichtfreigabe]
   * @param [organisationIDs] List of Organisation ID used to filter for Persons.
   * @param [rolleIDs] List of Role ID used to filter for Persons.
   * @param [suchFilter] Search filter used to filter for Persons. It could be the vorname, familienname, referrer or the personalnummer.
   * @param [sortOrder] Order to sort by.
   * @param [sortField] Field to sort by.
   */
  public personFrontendControllerFindPersons(
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
  ): Observable<PersonFrontendControllerFindPersons200Response> {
    return this.personFrontendControllerFindPersonsWithHttpInfo(
      offset,
      limit,
      referrer,
      familienname,
      vorname,
      sichtfreigabe,
      organisationIDs,
      rolleIDs,
      suchFilter,
      sortOrder,
      sortField,
      _options,
    ).pipe(
      map(
        (
          apiResponse: HttpInfo<PersonFrontendControllerFindPersons200Response>,
        ) => apiResponse.data,
      ),
    );
  }
}

import {
  PersonenkontextApiRequestFactory,
  PersonenkontextApiResponseProcessor,
} from "../apis/PersonenkontextApi.ts";
export class ObservablePersonenkontextApi {
  private requestFactory: PersonenkontextApiRequestFactory;
  private responseProcessor: PersonenkontextApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: PersonenkontextApiRequestFactory,
    responseProcessor?: PersonenkontextApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new PersonenkontextApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new PersonenkontextApiResponseProcessor();
  }

  /**
   * @param personId The ID for the person.
   * @param dbiamUpdatePersonenkontexteBodyParams
   * @param [personalnummer]
   */
  public dbiamPersonenkontextWorkflowControllerCommitWithHttpInfo(
    personId: string,
    dbiamUpdatePersonenkontexteBodyParams: DbiamUpdatePersonenkontexteBodyParams,
    personalnummer?: string,
    _options?: Configuration,
  ): Observable<HttpInfo<PersonenkontexteUpdateResponse>> {
    const requestContextPromise =
      this.requestFactory.dbiamPersonenkontextWorkflowControllerCommit(
        personId,
        dbiamUpdatePersonenkontexteBodyParams,
        personalnummer,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.dbiamPersonenkontextWorkflowControllerCommitWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param personId The ID for the person.
   * @param dbiamUpdatePersonenkontexteBodyParams
   * @param [personalnummer]
   */
  public dbiamPersonenkontextWorkflowControllerCommit(
    personId: string,
    dbiamUpdatePersonenkontexteBodyParams: DbiamUpdatePersonenkontexteBodyParams,
    personalnummer?: string,
    _options?: Configuration,
  ): Observable<PersonenkontexteUpdateResponse> {
    return this.dbiamPersonenkontextWorkflowControllerCommitWithHttpInfo(
      personId,
      dbiamUpdatePersonenkontexteBodyParams,
      personalnummer,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<PersonenkontexteUpdateResponse>) =>
          apiResponse.data,
      ),
    );
  }

  /**
   * @param dbiamCreatePersonWithPersonenkontexteBodyParams
   */
  public dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexteWithHttpInfo(
    dbiamCreatePersonWithPersonenkontexteBodyParams: DbiamCreatePersonWithPersonenkontexteBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<DBiamPersonResponse>> {
    const requestContextPromise =
      this.requestFactory.dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexte(
        dbiamCreatePersonWithPersonenkontexteBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexteWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param dbiamCreatePersonWithPersonenkontexteBodyParams
   */
  public dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexte(
    dbiamCreatePersonWithPersonenkontexteBodyParams: DbiamCreatePersonWithPersonenkontexteBodyParams,
    _options?: Configuration,
  ): Observable<DBiamPersonResponse> {
    return this.dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexteWithHttpInfo(
      dbiamCreatePersonWithPersonenkontexteBodyParams,
      _options,
    ).pipe(
      map((apiResponse: HttpInfo<DBiamPersonResponse>) => apiResponse.data),
    );
  }

  /**
   * @param rolleId RolleId used to filter for schulstrukturknoten in personenkontext.
   * @param [sskName] Organisation/SSK name used to filter for schulstrukturknoten in personenkontext.
   * @param [limit] The limit of items for the request.
   */
  public dbiamPersonenkontextWorkflowControllerFindSchulstrukturknotenWithHttpInfo(
    rolleId: string,
    sskName?: string,
    limit?: number,
    _options?: Configuration,
  ): Observable<HttpInfo<FindSchulstrukturknotenResponse>> {
    const requestContextPromise =
      this.requestFactory.dbiamPersonenkontextWorkflowControllerFindSchulstrukturknoten(
        rolleId,
        sskName,
        limit,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.dbiamPersonenkontextWorkflowControllerFindSchulstrukturknotenWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param rolleId RolleId used to filter for schulstrukturknoten in personenkontext.
   * @param [sskName] Organisation/SSK name used to filter for schulstrukturknoten in personenkontext.
   * @param [limit] The limit of items for the request.
   */
  public dbiamPersonenkontextWorkflowControllerFindSchulstrukturknoten(
    rolleId: string,
    sskName?: string,
    limit?: number,
    _options?: Configuration,
  ): Observable<FindSchulstrukturknotenResponse> {
    return this.dbiamPersonenkontextWorkflowControllerFindSchulstrukturknotenWithHttpInfo(
      rolleId,
      sskName,
      limit,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<FindSchulstrukturknotenResponse>) =>
          apiResponse.data,
      ),
    );
  }

  /**
   * @param [organisationId] ID of the organisation to filter the rollen later
   * @param [rolleId] ID of the rolle.
   * @param [rolleName] Rolle name used to filter for rollen in personenkontext.
   * @param [organisationName] Organisation/SSK name used to filter for schulstrukturknoten in personenkontext.
   * @param [limit] The limit of items for the request.
   */
  public dbiamPersonenkontextWorkflowControllerProcessStepWithHttpInfo(
    organisationId?: string,
    rolleId?: string,
    rolleName?: string,
    organisationName?: string,
    limit?: number,
    _options?: Configuration,
  ): Observable<HttpInfo<PersonenkontextWorkflowResponse>> {
    const requestContextPromise =
      this.requestFactory.dbiamPersonenkontextWorkflowControllerProcessStep(
        organisationId,
        rolleId,
        rolleName,
        organisationName,
        limit,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.dbiamPersonenkontextWorkflowControllerProcessStepWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param [organisationId] ID of the organisation to filter the rollen later
   * @param [rolleId] ID of the rolle.
   * @param [rolleName] Rolle name used to filter for rollen in personenkontext.
   * @param [organisationName] Organisation/SSK name used to filter for schulstrukturknoten in personenkontext.
   * @param [limit] The limit of items for the request.
   */
  public dbiamPersonenkontextWorkflowControllerProcessStep(
    organisationId?: string,
    rolleId?: string,
    rolleName?: string,
    organisationName?: string,
    limit?: number,
    _options?: Configuration,
  ): Observable<PersonenkontextWorkflowResponse> {
    return this.dbiamPersonenkontextWorkflowControllerProcessStepWithHttpInfo(
      organisationId,
      rolleId,
      rolleName,
      organisationName,
      limit,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<PersonenkontextWorkflowResponse>) =>
          apiResponse.data,
      ),
    );
  }
}

import {
  PersonenkontexteApiRequestFactory,
  PersonenkontexteApiResponseProcessor,
} from "../apis/PersonenkontexteApi.ts";
export class ObservablePersonenkontexteApi {
  private requestFactory: PersonenkontexteApiRequestFactory;
  private responseProcessor: PersonenkontexteApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: PersonenkontexteApiRequestFactory,
    responseProcessor?: PersonenkontexteApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new PersonenkontexteApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new PersonenkontexteApiResponseProcessor();
  }

  /**
   * @param personenkontextId The id for the personenkontext.
   * @param deleteRevisionBodyParams
   */
  public personenkontextControllerDeletePersonenkontextByIdWithHttpInfo(
    personenkontextId: string,
    deleteRevisionBodyParams: DeleteRevisionBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.personenkontextControllerDeletePersonenkontextById(
        personenkontextId,
        deleteRevisionBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.personenkontextControllerDeletePersonenkontextByIdWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param personenkontextId The id for the personenkontext.
   * @param deleteRevisionBodyParams
   */
  public personenkontextControllerDeletePersonenkontextById(
    personenkontextId: string,
    deleteRevisionBodyParams: DeleteRevisionBodyParams,
    _options?: Configuration,
  ): Observable<void> {
    return this.personenkontextControllerDeletePersonenkontextByIdWithHttpInfo(
      personenkontextId,
      deleteRevisionBodyParams,
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }

  /**
   * @param personenkontextId The id for the personenkontext.
   */
  public personenkontextControllerFindPersonenkontextByIdWithHttpInfo(
    personenkontextId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<PersonendatensatzResponseAutomapper>> {
    const requestContextPromise =
      this.requestFactory.personenkontextControllerFindPersonenkontextById(
        personenkontextId,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.personenkontextControllerFindPersonenkontextByIdWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param personenkontextId The id for the personenkontext.
   */
  public personenkontextControllerFindPersonenkontextById(
    personenkontextId: string,
    _options?: Configuration,
  ): Observable<PersonendatensatzResponseAutomapper> {
    return this.personenkontextControllerFindPersonenkontextByIdWithHttpInfo(
      personenkontextId,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<PersonendatensatzResponseAutomapper>) =>
          apiResponse.data,
      ),
    );
  }

  /**
   * @param [offset] The offset of the paginated list.
   * @param [limit] The requested limit for the page size.
   * @param [personId]
   * @param [referrer]
   * @param [personenstatus]
   * @param [sichtfreigabe]
   */
  public personenkontextControllerFindPersonenkontexteWithHttpInfo(
    offset?: number,
    limit?: number,
    personId?: string,
    referrer?: string,
    personenstatus?: Personenstatus,
    sichtfreigabe?: Sichtfreigabe,
    _options?: Configuration,
  ): Observable<HttpInfo<Array<PersonenkontextdatensatzResponse>>> {
    const requestContextPromise =
      this.requestFactory.personenkontextControllerFindPersonenkontexte(
        offset,
        limit,
        personId,
        referrer,
        personenstatus,
        sichtfreigabe,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.personenkontextControllerFindPersonenkontexteWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param [offset] The offset of the paginated list.
   * @param [limit] The requested limit for the page size.
   * @param [personId]
   * @param [referrer]
   * @param [personenstatus]
   * @param [sichtfreigabe]
   */
  public personenkontextControllerFindPersonenkontexte(
    offset?: number,
    limit?: number,
    personId?: string,
    referrer?: string,
    personenstatus?: Personenstatus,
    sichtfreigabe?: Sichtfreigabe,
    _options?: Configuration,
  ): Observable<Array<PersonenkontextdatensatzResponse>> {
    return this.personenkontextControllerFindPersonenkontexteWithHttpInfo(
      offset,
      limit,
      personId,
      referrer,
      personenstatus,
      sichtfreigabe,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<Array<PersonenkontextdatensatzResponse>>) =>
          apiResponse.data,
      ),
    );
  }

  /**
   * @param personId The id for the account.
   * @param systemRecht
   */
  public personenkontextControllerHatSystemRechtWithHttpInfo(
    personId: string,
    systemRecht: RollenSystemRecht,
    _options?: Configuration,
  ): Observable<HttpInfo<SystemrechtResponse>> {
    const requestContextPromise =
      this.requestFactory.personenkontextControllerHatSystemRecht(
        personId,
        systemRecht,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.personenkontextControllerHatSystemRechtWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param personId The id for the account.
   * @param systemRecht
   */
  public personenkontextControllerHatSystemRecht(
    personId: string,
    systemRecht: RollenSystemRecht,
    _options?: Configuration,
  ): Observable<SystemrechtResponse> {
    return this.personenkontextControllerHatSystemRechtWithHttpInfo(
      personId,
      systemRecht,
      _options,
    ).pipe(
      map((apiResponse: HttpInfo<SystemrechtResponse>) => apiResponse.data),
    );
  }

  /**
   *
   * @param personenkontextId
   */
  public personenkontextControllerUpdatePersonenkontextWithIdWithHttpInfo(
    personenkontextId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<PersonenkontextResponse>> {
    const requestContextPromise =
      this.requestFactory.personenkontextControllerUpdatePersonenkontextWithId(
        personenkontextId,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.personenkontextControllerUpdatePersonenkontextWithIdWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   *
   * @param personenkontextId
   */
  public personenkontextControllerUpdatePersonenkontextWithId(
    personenkontextId: string,
    _options?: Configuration,
  ): Observable<PersonenkontextResponse> {
    return this.personenkontextControllerUpdatePersonenkontextWithIdWithHttpInfo(
      personenkontextId,
      _options,
    ).pipe(
      map((apiResponse: HttpInfo<PersonenkontextResponse>) => apiResponse.data),
    );
  }
}

import {
  ProviderApiRequestFactory,
  ProviderApiResponseProcessor,
} from "../apis/ProviderApi.ts";
export class ObservableProviderApi {
  private requestFactory: ProviderApiRequestFactory;
  private responseProcessor: ProviderApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ProviderApiRequestFactory,
    responseProcessor?: ProviderApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ProviderApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ProviderApiResponseProcessor();
  }

  /**
   * Get all service-providers.
   *
   */
  public providerControllerGetAllServiceProvidersWithHttpInfo(
    _options?: Configuration,
  ): Observable<HttpInfo<Array<ServiceProviderResponse>>> {
    const requestContextPromise =
      this.requestFactory.providerControllerGetAllServiceProviders(_options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.providerControllerGetAllServiceProvidersWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * Get all service-providers.
   *
   */
  public providerControllerGetAllServiceProviders(
    _options?: Configuration,
  ): Observable<Array<ServiceProviderResponse>> {
    return this.providerControllerGetAllServiceProvidersWithHttpInfo(
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<Array<ServiceProviderResponse>>) =>
          apiResponse.data,
      ),
    );
  }

  /**
   * Get service-providers available for logged-in user.
   *
   */
  public providerControllerGetAvailableServiceProvidersWithHttpInfo(
    _options?: Configuration,
  ): Observable<HttpInfo<Array<ServiceProviderResponse>>> {
    const requestContextPromise =
      this.requestFactory.providerControllerGetAvailableServiceProviders(
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.providerControllerGetAvailableServiceProvidersWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * Get service-providers available for logged-in user.
   *
   */
  public providerControllerGetAvailableServiceProviders(
    _options?: Configuration,
  ): Observable<Array<ServiceProviderResponse>> {
    return this.providerControllerGetAvailableServiceProvidersWithHttpInfo(
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<Array<ServiceProviderResponse>>) =>
          apiResponse.data,
      ),
    );
  }

  /**
   * @param angebotId The id of the service provider
   */
  public providerControllerGetServiceProviderLogoWithHttpInfo(
    angebotId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<any>> {
    const requestContextPromise =
      this.requestFactory.providerControllerGetServiceProviderLogo(
        angebotId,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.providerControllerGetServiceProviderLogoWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * @param angebotId The id of the service provider
   */
  public providerControllerGetServiceProviderLogo(
    angebotId: string,
    _options?: Configuration,
  ): Observable<any> {
    return this.providerControllerGetServiceProviderLogoWithHttpInfo(
      angebotId,
      _options,
    ).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
  }
}

import {
  RolleApiRequestFactory,
  RolleApiResponseProcessor,
} from "../apis/RolleApi.ts";
export class ObservableRolleApi {
  private requestFactory: RolleApiRequestFactory;
  private responseProcessor: RolleApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: RolleApiRequestFactory,
    responseProcessor?: RolleApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new RolleApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new RolleApiResponseProcessor();
  }

  /**
   * Add systemrecht to a rolle.
   *
   * @param rolleId The id for the rolle.
   * @param addSystemrechtBodyParams
   */
  public rolleControllerAddSystemRechtWithHttpInfo(
    rolleId: string,
    addSystemrechtBodyParams: AddSystemrechtBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.rolleControllerAddSystemRecht(
        rolleId,
        addSystemrechtBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.rolleControllerAddSystemRechtWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * Add systemrecht to a rolle.
   *
   * @param rolleId The id for the rolle.
   * @param addSystemrechtBodyParams
   */
  public rolleControllerAddSystemRecht(
    rolleId: string,
    addSystemrechtBodyParams: AddSystemrechtBodyParams,
    _options?: Configuration,
  ): Observable<void> {
    return this.rolleControllerAddSystemRechtWithHttpInfo(
      rolleId,
      addSystemrechtBodyParams,
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }

  /**
   * Create a new rolle.
   *
   * @param createRolleBodyParams
   */
  public rolleControllerCreateRolleWithHttpInfo(
    createRolleBodyParams: CreateRolleBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<RolleResponse>> {
    const requestContextPromise =
      this.requestFactory.rolleControllerCreateRolle(
        createRolleBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.rolleControllerCreateRolleWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * Create a new rolle.
   *
   * @param createRolleBodyParams
   */
  public rolleControllerCreateRolle(
    createRolleBodyParams: CreateRolleBodyParams,
    _options?: Configuration,
  ): Observable<RolleResponse> {
    return this.rolleControllerCreateRolleWithHttpInfo(
      createRolleBodyParams,
      _options,
    ).pipe(map((apiResponse: HttpInfo<RolleResponse>) => apiResponse.data));
  }

  /**
   * Delete a role by id.
   *
   * @param rolleId The id for the rolle.
   */
  public rolleControllerDeleteRolleWithHttpInfo(
    rolleId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.rolleControllerDeleteRolle(rolleId, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.rolleControllerDeleteRolleWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * Delete a role by id.
   *
   * @param rolleId The id for the rolle.
   */
  public rolleControllerDeleteRolle(
    rolleId: string,
    _options?: Configuration,
  ): Observable<void> {
    return this.rolleControllerDeleteRolleWithHttpInfo(rolleId, _options).pipe(
      map((apiResponse: HttpInfo<void>) => apiResponse.data),
    );
  }

  /**
   * Get rolle by id.
   *
   * @param rolleId The id for the rolle.
   */
  public rolleControllerFindRolleByIdWithServiceProvidersWithHttpInfo(
    rolleId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<RolleWithServiceProvidersResponse>> {
    const requestContextPromise =
      this.requestFactory.rolleControllerFindRolleByIdWithServiceProviders(
        rolleId,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.rolleControllerFindRolleByIdWithServiceProvidersWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * Get rolle by id.
   *
   * @param rolleId The id for the rolle.
   */
  public rolleControllerFindRolleByIdWithServiceProviders(
    rolleId: string,
    _options?: Configuration,
  ): Observable<RolleWithServiceProvidersResponse> {
    return this.rolleControllerFindRolleByIdWithServiceProvidersWithHttpInfo(
      rolleId,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<RolleWithServiceProvidersResponse>) =>
          apiResponse.data,
      ),
    );
  }

  /**
   * List all rollen.
   *
   * @param [offset] The offset of the paginated list.
   * @param [limit] The requested limit for the page size.
   * @param [searchStr] The name for the role.
   */
  public rolleControllerFindRollenWithHttpInfo(
    offset?: number,
    limit?: number,
    searchStr?: string,
    _options?: Configuration,
  ): Observable<HttpInfo<Array<RolleWithServiceProvidersResponse>>> {
    const requestContextPromise = this.requestFactory.rolleControllerFindRollen(
      offset,
      limit,
      searchStr,
      _options,
    );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.rolleControllerFindRollenWithHttpInfo(rsp),
            ),
          );
        }),
      );
  }

  /**
   * List all rollen.
   *
   * @param [offset] The offset of the paginated list.
   * @param [limit] The requested limit for the page size.
   * @param [searchStr] The name for the role.
   */
  public rolleControllerFindRollen(
    offset?: number,
    limit?: number,
    searchStr?: string,
    _options?: Configuration,
  ): Observable<Array<RolleWithServiceProvidersResponse>> {
    return this.rolleControllerFindRollenWithHttpInfo(
      offset,
      limit,
      searchStr,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<Array<RolleWithServiceProvidersResponse>>) =>
          apiResponse.data,
      ),
    );
  }

  /**
   * Get service-providers for a rolle by its id.
   *
   * @param rolleId The id for the rolle.
   */
  public rolleControllerGetRolleServiceProviderIdsWithHttpInfo(
    rolleId: string,
    _options?: Configuration,
  ): Observable<HttpInfo<RolleServiceProviderResponse>> {
    const requestContextPromise =
      this.requestFactory.rolleControllerGetRolleServiceProviderIds(
        rolleId,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.rolleControllerGetRolleServiceProviderIdsWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * Get service-providers for a rolle by its id.
   *
   * @param rolleId The id for the rolle.
   */
  public rolleControllerGetRolleServiceProviderIds(
    rolleId: string,
    _options?: Configuration,
  ): Observable<RolleServiceProviderResponse> {
    return this.rolleControllerGetRolleServiceProviderIdsWithHttpInfo(
      rolleId,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<RolleServiceProviderResponse>) =>
          apiResponse.data,
      ),
    );
  }

  /**
   * Remove a service-provider from a rolle by id.
   *
   * @param rolleId The id for the rolle.
   * @param rolleServiceProviderBodyParams
   */
  public rolleControllerRemoveServiceProviderByIdWithHttpInfo(
    rolleId: string,
    rolleServiceProviderBodyParams: RolleServiceProviderBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.rolleControllerRemoveServiceProviderById(
        rolleId,
        rolleServiceProviderBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.rolleControllerRemoveServiceProviderByIdWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * Remove a service-provider from a rolle by id.
   *
   * @param rolleId The id for the rolle.
   * @param rolleServiceProviderBodyParams
   */
  public rolleControllerRemoveServiceProviderById(
    rolleId: string,
    rolleServiceProviderBodyParams: RolleServiceProviderBodyParams,
    _options?: Configuration,
  ): Observable<void> {
    return this.rolleControllerRemoveServiceProviderByIdWithHttpInfo(
      rolleId,
      rolleServiceProviderBodyParams,
      _options,
    ).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
  }

  /**
   * Update rolle.
   *
   * @param rolleId The id for the rolle.
   * @param updateRolleBodyParams
   */
  public rolleControllerUpdateRolleWithHttpInfo(
    rolleId: string,
    updateRolleBodyParams: UpdateRolleBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<RolleWithServiceProvidersResponse>> {
    const requestContextPromise =
      this.requestFactory.rolleControllerUpdateRolle(
        rolleId,
        updateRolleBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.rolleControllerUpdateRolleWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * Update rolle.
   *
   * @param rolleId The id for the rolle.
   * @param updateRolleBodyParams
   */
  public rolleControllerUpdateRolle(
    rolleId: string,
    updateRolleBodyParams: UpdateRolleBodyParams,
    _options?: Configuration,
  ): Observable<RolleWithServiceProvidersResponse> {
    return this.rolleControllerUpdateRolleWithHttpInfo(
      rolleId,
      updateRolleBodyParams,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<RolleWithServiceProvidersResponse>) =>
          apiResponse.data,
      ),
    );
  }

  /**
   * Add a service-provider to a rolle by id.
   *
   * @param rolleId The id for the rolle.
   * @param rolleServiceProviderBodyParams
   */
  public rolleControllerUpdateServiceProvidersByIdWithHttpInfo(
    rolleId: string,
    rolleServiceProviderBodyParams: RolleServiceProviderBodyParams,
    _options?: Configuration,
  ): Observable<HttpInfo<Array<ServiceProviderResponse>>> {
    const requestContextPromise =
      this.requestFactory.rolleControllerUpdateServiceProvidersById(
        rolleId,
        rolleServiceProviderBodyParams,
        _options,
      );

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.rolleControllerUpdateServiceProvidersByIdWithHttpInfo(
                rsp,
              ),
            ),
          );
        }),
      );
  }

  /**
   * Add a service-provider to a rolle by id.
   *
   * @param rolleId The id for the rolle.
   * @param rolleServiceProviderBodyParams
   */
  public rolleControllerUpdateServiceProvidersById(
    rolleId: string,
    rolleServiceProviderBodyParams: RolleServiceProviderBodyParams,
    _options?: Configuration,
  ): Observable<Array<ServiceProviderResponse>> {
    return this.rolleControllerUpdateServiceProvidersByIdWithHttpInfo(
      rolleId,
      rolleServiceProviderBodyParams,
      _options,
    ).pipe(
      map(
        (apiResponse: HttpInfo<Array<ServiceProviderResponse>>) =>
          apiResponse.data,
      ),
    );
  }
}

import {
  StatusApiRequestFactory,
  StatusApiResponseProcessor,
} from "../apis/StatusApi.ts";
export class ObservableStatusApi {
  private requestFactory: StatusApiRequestFactory;
  private responseProcessor: StatusApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: StatusApiRequestFactory,
    responseProcessor?: StatusApiResponseProcessor,
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new StatusApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new StatusApiResponseProcessor();
  }

  /**
   */
  public statusControllerGetStatusWithHttpInfo(
    _options?: Configuration,
  ): Observable<HttpInfo<void>> {
    const requestContextPromise =
      this.requestFactory.statusControllerGetStatus(_options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx)),
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx)),
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp)),
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.statusControllerGetStatusWithHttpInfo(rsp),
            ),
          );
        }),
      );
  }

  /**
   */
  public statusControllerGetStatus(_options?: Configuration): Observable<void> {
    return this.statusControllerGetStatusWithHttpInfo(_options).pipe(
      map((apiResponse: HttpInfo<void>) => apiResponse.data),
    );
  }
}
