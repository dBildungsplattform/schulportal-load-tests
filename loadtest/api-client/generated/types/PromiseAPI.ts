import {
  ResponseContext,
  RequestContext,
  HttpFile,
  HttpInfo,
} from "../http/http.ts";
import { Configuration } from "../configuration.ts";

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
import { ObservableAuthApi } from "./ObservableAPI.ts";

import {
  AuthApiRequestFactory,
  AuthApiResponseProcessor,
} from "../apis/AuthApi.ts";
export class PromiseAuthApi {
  private api: ObservableAuthApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: AuthApiRequestFactory,
    responseProcessor?: AuthApiResponseProcessor,
  ) {
    this.api = new ObservableAuthApi(
      configuration,
      requestFactory,
      responseProcessor,
    );
  }

  /**
   * Info about logged in user.
   */
  public authenticationControllerInfoWithHttpInfo(
    _options?: Configuration,
  ): Promise<HttpInfo<UserinfoResponse>> {
    const result = this.api.authenticationControllerInfoWithHttpInfo(_options);
    return result.toPromise();
  }

  /**
   * Info about logged in user.
   */
  public authenticationControllerInfo(
    _options?: Configuration,
  ): Promise<UserinfoResponse> {
    const result = this.api.authenticationControllerInfo(_options);
    return result.toPromise();
  }

  /**
   * Used to start OIDC authentication.
   * @param [redirectUrl]
   */
  public authenticationControllerLoginWithHttpInfo(
    redirectUrl?: string,
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result = this.api.authenticationControllerLoginWithHttpInfo(
      redirectUrl,
      _options,
    );
    return result.toPromise();
  }

  /**
   * Used to start OIDC authentication.
   * @param [redirectUrl]
   */
  public authenticationControllerLogin(
    redirectUrl?: string,
    _options?: Configuration,
  ): Promise<void> {
    const result = this.api.authenticationControllerLogin(
      redirectUrl,
      _options,
    );
    return result.toPromise();
  }

  /**
   * Used to log out the current user.
   */
  public authenticationControllerLogoutWithHttpInfo(
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result =
      this.api.authenticationControllerLogoutWithHttpInfo(_options);
    return result.toPromise();
  }

  /**
   * Used to log out the current user.
   */
  public authenticationControllerLogout(
    _options?: Configuration,
  ): Promise<void> {
    const result = this.api.authenticationControllerLogout(_options);
    return result.toPromise();
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
  ): Promise<HttpInfo<void>> {
    const result = this.api.authenticationControllerResetPasswordWithHttpInfo(
      redirectUrl,
      loginHint,
      _options,
    );
    return result.toPromise();
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
  ): Promise<void> {
    const result = this.api.authenticationControllerResetPassword(
      redirectUrl,
      loginHint,
      _options,
    );
    return result.toPromise();
  }
}

import { ObservableClass2FAApi } from "./ObservableAPI.ts";

import {
  Class2FAApiRequestFactory,
  Class2FAApiResponseProcessor,
} from "../apis/Class2FAApi.ts";
export class PromiseClass2FAApi {
  private api: ObservableClass2FAApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: Class2FAApiRequestFactory,
    responseProcessor?: Class2FAApiResponseProcessor,
  ) {
    this.api = new ObservableClass2FAApi(
      configuration,
      requestFactory,
      responseProcessor,
    );
  }

  /**
   * @param assignHardwareTokenBodyParams
   */
  public privacyIdeaAdministrationControllerAssignHardwareTokenWithHttpInfo(
    assignHardwareTokenBodyParams: AssignHardwareTokenBodyParams,
    _options?: Configuration,
  ): Promise<HttpInfo<AssignHardwareTokenResponse>> {
    const result =
      this.api.privacyIdeaAdministrationControllerAssignHardwareTokenWithHttpInfo(
        assignHardwareTokenBodyParams,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param assignHardwareTokenBodyParams
   */
  public privacyIdeaAdministrationControllerAssignHardwareToken(
    assignHardwareTokenBodyParams: AssignHardwareTokenBodyParams,
    _options?: Configuration,
  ): Promise<AssignHardwareTokenResponse> {
    const result =
      this.api.privacyIdeaAdministrationControllerAssignHardwareToken(
        assignHardwareTokenBodyParams,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param personId
   */
  public privacyIdeaAdministrationControllerGetTwoAuthStateWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<TokenStateResponse>> {
    const result =
      this.api.privacyIdeaAdministrationControllerGetTwoAuthStateWithHttpInfo(
        personId,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param personId
   */
  public privacyIdeaAdministrationControllerGetTwoAuthState(
    personId: string,
    _options?: Configuration,
  ): Promise<TokenStateResponse> {
    const result = this.api.privacyIdeaAdministrationControllerGetTwoAuthState(
      personId,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param tokenInitBodyParams
   */
  public privacyIdeaAdministrationControllerInitializeSoftwareTokenWithHttpInfo(
    tokenInitBodyParams: TokenInitBodyParams,
    _options?: Configuration,
  ): Promise<HttpInfo<string>> {
    const result =
      this.api.privacyIdeaAdministrationControllerInitializeSoftwareTokenWithHttpInfo(
        tokenInitBodyParams,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param tokenInitBodyParams
   */
  public privacyIdeaAdministrationControllerInitializeSoftwareToken(
    tokenInitBodyParams: TokenInitBodyParams,
    _options?: Configuration,
  ): Promise<string> {
    const result =
      this.api.privacyIdeaAdministrationControllerInitializeSoftwareToken(
        tokenInitBodyParams,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param personId
   */
  public privacyIdeaAdministrationControllerRequiresTwoFactorAuthenticationWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<TokenRequiredResponse>> {
    const result =
      this.api.privacyIdeaAdministrationControllerRequiresTwoFactorAuthenticationWithHttpInfo(
        personId,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param personId
   */
  public privacyIdeaAdministrationControllerRequiresTwoFactorAuthentication(
    personId: string,
    _options?: Configuration,
  ): Promise<TokenRequiredResponse> {
    const result =
      this.api.privacyIdeaAdministrationControllerRequiresTwoFactorAuthentication(
        personId,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param personId
   */
  public privacyIdeaAdministrationControllerResetTokenWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<boolean>> {
    const result =
      this.api.privacyIdeaAdministrationControllerResetTokenWithHttpInfo(
        personId,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param personId
   */
  public privacyIdeaAdministrationControllerResetToken(
    personId: string,
    _options?: Configuration,
  ): Promise<boolean> {
    const result = this.api.privacyIdeaAdministrationControllerResetToken(
      personId,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param tokenVerifyBodyParams
   */
  public privacyIdeaAdministrationControllerVerifyTokenWithHttpInfo(
    tokenVerifyBodyParams: TokenVerifyBodyParams,
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result =
      this.api.privacyIdeaAdministrationControllerVerifyTokenWithHttpInfo(
        tokenVerifyBodyParams,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param tokenVerifyBodyParams
   */
  public privacyIdeaAdministrationControllerVerifyToken(
    tokenVerifyBodyParams: TokenVerifyBodyParams,
    _options?: Configuration,
  ): Promise<void> {
    const result = this.api.privacyIdeaAdministrationControllerVerifyToken(
      tokenVerifyBodyParams,
      _options,
    );
    return result.toPromise();
  }
}

import { ObservableCronApi } from "./ObservableAPI.ts";

import {
  CronApiRequestFactory,
  CronApiResponseProcessor,
} from "../apis/CronApi.ts";
export class PromiseCronApi {
  private api: ObservableCronApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: CronApiRequestFactory,
    responseProcessor?: CronApiResponseProcessor,
  ) {
    this.api = new ObservableCronApi(
      configuration,
      requestFactory,
      responseProcessor,
    );
  }

  /**
   */
  public cronControllerKoPersUserLockWithHttpInfo(
    _options?: Configuration,
  ): Promise<HttpInfo<boolean>> {
    const result = this.api.cronControllerKoPersUserLockWithHttpInfo(_options);
    return result.toPromise();
  }

  /**
   */
  public cronControllerKoPersUserLock(
    _options?: Configuration,
  ): Promise<boolean> {
    const result = this.api.cronControllerKoPersUserLock(_options);
    return result.toPromise();
  }

  /**
   */
  public cronControllerPersonWithoutOrgDeleteWithHttpInfo(
    _options?: Configuration,
  ): Promise<HttpInfo<boolean>> {
    const result =
      this.api.cronControllerPersonWithoutOrgDeleteWithHttpInfo(_options);
    return result.toPromise();
  }

  /**
   */
  public cronControllerPersonWithoutOrgDelete(
    _options?: Configuration,
  ): Promise<boolean> {
    const result = this.api.cronControllerPersonWithoutOrgDelete(_options);
    return result.toPromise();
  }

  /**
   */
  public cronControllerRemovePersonenKontexteWithExpiredBefristungFromUsersWithHttpInfo(
    _options?: Configuration,
  ): Promise<HttpInfo<boolean>> {
    const result =
      this.api.cronControllerRemovePersonenKontexteWithExpiredBefristungFromUsersWithHttpInfo(
        _options,
      );
    return result.toPromise();
  }

  /**
   */
  public cronControllerRemovePersonenKontexteWithExpiredBefristungFromUsers(
    _options?: Configuration,
  ): Promise<boolean> {
    const result =
      this.api.cronControllerRemovePersonenKontexteWithExpiredBefristungFromUsers(
        _options,
      );
    return result.toPromise();
  }

  /**
   */
  public cronControllerUnlockUsersWithExpiredLocksWithHttpInfo(
    _options?: Configuration,
  ): Promise<HttpInfo<boolean>> {
    const result =
      this.api.cronControllerUnlockUsersWithExpiredLocksWithHttpInfo(_options);
    return result.toPromise();
  }

  /**
   */
  public cronControllerUnlockUsersWithExpiredLocks(
    _options?: Configuration,
  ): Promise<boolean> {
    const result = this.api.cronControllerUnlockUsersWithExpiredLocks(_options);
    return result.toPromise();
  }
}

import { ObservableDbiamPersonenkontexteApi } from "./ObservableAPI.ts";

import {
  DbiamPersonenkontexteApiRequestFactory,
  DbiamPersonenkontexteApiResponseProcessor,
} from "../apis/DbiamPersonenkontexteApi.ts";
export class PromiseDbiamPersonenkontexteApi {
  private api: ObservableDbiamPersonenkontexteApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: DbiamPersonenkontexteApiRequestFactory,
    responseProcessor?: DbiamPersonenkontexteApiResponseProcessor,
  ) {
    this.api = new ObservableDbiamPersonenkontexteApi(
      configuration,
      requestFactory,
      responseProcessor,
    );
  }

  /**
   * @param dbiamPersonenkontextMigrationBodyParams
   */
  public dBiamPersonenkontextControllerCreatePersonenkontextMigrationWithHttpInfo(
    dbiamPersonenkontextMigrationBodyParams: DbiamPersonenkontextMigrationBodyParams,
    _options?: Configuration,
  ): Promise<HttpInfo<DBiamPersonenkontextResponse>> {
    const result =
      this.api.dBiamPersonenkontextControllerCreatePersonenkontextMigrationWithHttpInfo(
        dbiamPersonenkontextMigrationBodyParams,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param dbiamPersonenkontextMigrationBodyParams
   */
  public dBiamPersonenkontextControllerCreatePersonenkontextMigration(
    dbiamPersonenkontextMigrationBodyParams: DbiamPersonenkontextMigrationBodyParams,
    _options?: Configuration,
  ): Promise<DBiamPersonenkontextResponse> {
    const result =
      this.api.dBiamPersonenkontextControllerCreatePersonenkontextMigration(
        dbiamPersonenkontextMigrationBodyParams,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param personId The ID for the person.
   */
  public dBiamPersonenkontextControllerFindPersonenkontextsByPersonWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<Array<DBiamPersonenkontextResponse>>> {
    const result =
      this.api.dBiamPersonenkontextControllerFindPersonenkontextsByPersonWithHttpInfo(
        personId,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param personId The ID for the person.
   */
  public dBiamPersonenkontextControllerFindPersonenkontextsByPerson(
    personId: string,
    _options?: Configuration,
  ): Promise<Array<DBiamPersonenkontextResponse>> {
    const result =
      this.api.dBiamPersonenkontextControllerFindPersonenkontextsByPerson(
        personId,
        _options,
      );
    return result.toPromise();
  }
}

import { ObservableDbiamPersonenuebersichtApi } from "./ObservableAPI.ts";

import {
  DbiamPersonenuebersichtApiRequestFactory,
  DbiamPersonenuebersichtApiResponseProcessor,
} from "../apis/DbiamPersonenuebersichtApi.ts";
export class PromiseDbiamPersonenuebersichtApi {
  private api: ObservableDbiamPersonenuebersichtApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: DbiamPersonenuebersichtApiRequestFactory,
    responseProcessor?: DbiamPersonenuebersichtApiResponseProcessor,
  ) {
    this.api = new ObservableDbiamPersonenuebersichtApi(
      configuration,
      requestFactory,
      responseProcessor,
    );
  }

  /**
   * @param personenuebersichtBodyParams
   */
  public dBiamPersonenuebersichtControllerFindPersonenuebersichtenWithHttpInfo(
    personenuebersichtBodyParams: PersonenuebersichtBodyParams,
    _options?: Configuration,
  ): Promise<
    HttpInfo<DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response>
  > {
    const result =
      this.api.dBiamPersonenuebersichtControllerFindPersonenuebersichtenWithHttpInfo(
        personenuebersichtBodyParams,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param personenuebersichtBodyParams
   */
  public dBiamPersonenuebersichtControllerFindPersonenuebersichten(
    personenuebersichtBodyParams: PersonenuebersichtBodyParams,
    _options?: Configuration,
  ): Promise<DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response> {
    const result =
      this.api.dBiamPersonenuebersichtControllerFindPersonenuebersichten(
        personenuebersichtBodyParams,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param personId The ID for the person.
   */
  public dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPersonWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<DBiamPersonenuebersichtResponse>> {
    const result =
      this.api.dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPersonWithHttpInfo(
        personId,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param personId The ID for the person.
   */
  public dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPerson(
    personId: string,
    _options?: Configuration,
  ): Promise<DBiamPersonenuebersichtResponse> {
    const result =
      this.api.dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPerson(
        personId,
        _options,
      );
    return result.toPromise();
  }
}

import { ObservableImportApi } from "./ObservableAPI.ts";

import {
  ImportApiRequestFactory,
  ImportApiResponseProcessor,
} from "../apis/ImportApi.ts";
export class PromiseImportApi {
  private api: ObservableImportApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: ImportApiRequestFactory,
    responseProcessor?: ImportApiResponseProcessor,
  ) {
    this.api = new ObservableImportApi(
      configuration,
      requestFactory,
      responseProcessor,
    );
  }

  /**
   * Delete a role by id.
   *
   * @param importvorgangId The id of an import transaction
   */
  public importControllerDeleteImportTransactionWithHttpInfo(
    importvorgangId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result = this.api.importControllerDeleteImportTransactionWithHttpInfo(
      importvorgangId,
      _options,
    );
    return result.toPromise();
  }

  /**
   * Delete a role by id.
   *
   * @param importvorgangId The id of an import transaction
   */
  public importControllerDeleteImportTransaction(
    importvorgangId: string,
    _options?: Configuration,
  ): Promise<void> {
    const result = this.api.importControllerDeleteImportTransaction(
      importvorgangId,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param importvorgangByIdBodyParams
   */
  public importControllerExecuteImportWithHttpInfo(
    importvorgangByIdBodyParams: ImportvorgangByIdBodyParams,
    _options?: Configuration,
  ): Promise<HttpInfo<HttpFile>> {
    const result = this.api.importControllerExecuteImportWithHttpInfo(
      importvorgangByIdBodyParams,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param importvorgangByIdBodyParams
   */
  public importControllerExecuteImport(
    importvorgangByIdBodyParams: ImportvorgangByIdBodyParams,
    _options?: Configuration,
  ): Promise<HttpFile> {
    const result = this.api.importControllerExecuteImport(
      importvorgangByIdBodyParams,
      _options,
    );
    return result.toPromise();
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
  ): Promise<HttpInfo<ImportUploadResponse>> {
    const result = this.api.importControllerUploadFileWithHttpInfo(
      organisationId,
      rolleId,
      file,
      _options,
    );
    return result.toPromise();
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
  ): Promise<ImportUploadResponse> {
    const result = this.api.importControllerUploadFile(
      organisationId,
      rolleId,
      file,
      _options,
    );
    return result.toPromise();
  }
}

import { ObservableOrganisationenApi } from "./ObservableAPI.ts";

import {
  OrganisationenApiRequestFactory,
  OrganisationenApiResponseProcessor,
} from "../apis/OrganisationenApi.ts";
export class PromiseOrganisationenApi {
  private api: ObservableOrganisationenApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: OrganisationenApiRequestFactory,
    responseProcessor?: OrganisationenApiResponseProcessor,
  ) {
    this.api = new ObservableOrganisationenApi(
      configuration,
      requestFactory,
      responseProcessor,
    );
  }

  /**
   * @param organisationId The id of an organization
   * @param organisationByIdBodyParams
   */
  public organisationControllerAddAdministrierteOrganisationWithHttpInfo(
    organisationId: string,
    organisationByIdBodyParams: OrganisationByIdBodyParams,
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result =
      this.api.organisationControllerAddAdministrierteOrganisationWithHttpInfo(
        organisationId,
        organisationByIdBodyParams,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param organisationId The id of an organization
   * @param organisationByIdBodyParams
   */
  public organisationControllerAddAdministrierteOrganisation(
    organisationId: string,
    organisationByIdBodyParams: OrganisationByIdBodyParams,
    _options?: Configuration,
  ): Promise<void> {
    const result = this.api.organisationControllerAddAdministrierteOrganisation(
      organisationId,
      organisationByIdBodyParams,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param organisationId The id of an organization
   * @param organisationByIdBodyParams
   */
  public organisationControllerAddZugehoerigeOrganisationWithHttpInfo(
    organisationId: string,
    organisationByIdBodyParams: OrganisationByIdBodyParams,
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result =
      this.api.organisationControllerAddZugehoerigeOrganisationWithHttpInfo(
        organisationId,
        organisationByIdBodyParams,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param organisationId The id of an organization
   * @param organisationByIdBodyParams
   */
  public organisationControllerAddZugehoerigeOrganisation(
    organisationId: string,
    organisationByIdBodyParams: OrganisationByIdBodyParams,
    _options?: Configuration,
  ): Promise<void> {
    const result = this.api.organisationControllerAddZugehoerigeOrganisation(
      organisationId,
      organisationByIdBodyParams,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param createOrganisationBodyParams
   */
  public organisationControllerCreateOrganisationWithHttpInfo(
    createOrganisationBodyParams: CreateOrganisationBodyParams,
    _options?: Configuration,
  ): Promise<HttpInfo<OrganisationResponse>> {
    const result =
      this.api.organisationControllerCreateOrganisationWithHttpInfo(
        createOrganisationBodyParams,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param createOrganisationBodyParams
   */
  public organisationControllerCreateOrganisation(
    createOrganisationBodyParams: CreateOrganisationBodyParams,
    _options?: Configuration,
  ): Promise<OrganisationResponse> {
    const result = this.api.organisationControllerCreateOrganisation(
      createOrganisationBodyParams,
      _options,
    );
    return result.toPromise();
  }

  /**
   * Delete an organisation of type Klasse by id.
   *
   * @param organisationId The id of an organization
   */
  public organisationControllerDeleteKlasseWithHttpInfo(
    organisationId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result = this.api.organisationControllerDeleteKlasseWithHttpInfo(
      organisationId,
      _options,
    );
    return result.toPromise();
  }

  /**
   * Delete an organisation of type Klasse by id.
   *
   * @param organisationId The id of an organization
   */
  public organisationControllerDeleteKlasse(
    organisationId: string,
    _options?: Configuration,
  ): Promise<void> {
    const result = this.api.organisationControllerDeleteKlasse(
      organisationId,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param organisationId The id of an organization
   */
  public organisationControllerEnableForitslearningWithHttpInfo(
    organisationId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<OrganisationResponseLegacy>> {
    const result =
      this.api.organisationControllerEnableForitslearningWithHttpInfo(
        organisationId,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param organisationId The id of an organization
   */
  public organisationControllerEnableForitslearning(
    organisationId: string,
    _options?: Configuration,
  ): Promise<OrganisationResponseLegacy> {
    const result = this.api.organisationControllerEnableForitslearning(
      organisationId,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param organisationId The id of an organization
   */
  public organisationControllerFindOrganisationByIdWithHttpInfo(
    organisationId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<OrganisationResponse>> {
    const result =
      this.api.organisationControllerFindOrganisationByIdWithHttpInfo(
        organisationId,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param organisationId The id of an organization
   */
  public organisationControllerFindOrganisationById(
    organisationId: string,
    _options?: Configuration,
  ): Promise<OrganisationResponse> {
    const result = this.api.organisationControllerFindOrganisationById(
      organisationId,
      _options,
    );
    return result.toPromise();
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
  ): Promise<HttpInfo<Array<OrganisationResponse>>> {
    const result = this.api.organisationControllerFindOrganizationsWithHttpInfo(
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
    return result.toPromise();
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
  ): Promise<Array<OrganisationResponse>> {
    const result = this.api.organisationControllerFindOrganizations(
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
    return result.toPromise();
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
  ): Promise<HttpInfo<Array<OrganisationResponse>>> {
    const result =
      this.api.organisationControllerGetAdministrierteOrganisationenWithHttpInfo(
        organisationId,
        offset,
        limit,
        searchFilter,
        _options,
      );
    return result.toPromise();
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
  ): Promise<Array<OrganisationResponse>> {
    const result =
      this.api.organisationControllerGetAdministrierteOrganisationen(
        organisationId,
        offset,
        limit,
        searchFilter,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param parentOrganisationsByIdsBodyParams
   */
  public organisationControllerGetParentsByIdsWithHttpInfo(
    parentOrganisationsByIdsBodyParams: ParentOrganisationsByIdsBodyParams,
    _options?: Configuration,
  ): Promise<HttpInfo<ParentOrganisationenResponse>> {
    const result = this.api.organisationControllerGetParentsByIdsWithHttpInfo(
      parentOrganisationsByIdsBodyParams,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param parentOrganisationsByIdsBodyParams
   */
  public organisationControllerGetParentsByIds(
    parentOrganisationsByIdsBodyParams: ParentOrganisationsByIdsBodyParams,
    _options?: Configuration,
  ): Promise<ParentOrganisationenResponse> {
    const result = this.api.organisationControllerGetParentsByIds(
      parentOrganisationsByIdsBodyParams,
      _options,
    );
    return result.toPromise();
  }

  /**
   */
  public organisationControllerGetRootChildrenWithHttpInfo(
    _options?: Configuration,
  ): Promise<HttpInfo<OrganisationRootChildrenResponse>> {
    const result =
      this.api.organisationControllerGetRootChildrenWithHttpInfo(_options);
    return result.toPromise();
  }

  /**
   */
  public organisationControllerGetRootChildren(
    _options?: Configuration,
  ): Promise<OrganisationRootChildrenResponse> {
    const result = this.api.organisationControllerGetRootChildren(_options);
    return result.toPromise();
  }

  /**
   */
  public organisationControllerGetRootOrganisationWithHttpInfo(
    _options?: Configuration,
  ): Promise<HttpInfo<OrganisationResponse>> {
    const result =
      this.api.organisationControllerGetRootOrganisationWithHttpInfo(_options);
    return result.toPromise();
  }

  /**
   */
  public organisationControllerGetRootOrganisation(
    _options?: Configuration,
  ): Promise<OrganisationResponse> {
    const result = this.api.organisationControllerGetRootOrganisation(_options);
    return result.toPromise();
  }

  /**
   * @param organisationId The id of an organization
   */
  public organisationControllerGetZugehoerigeOrganisationenWithHttpInfo(
    organisationId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<Array<OrganisationResponse>>> {
    const result =
      this.api.organisationControllerGetZugehoerigeOrganisationenWithHttpInfo(
        organisationId,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param organisationId The id of an organization
   */
  public organisationControllerGetZugehoerigeOrganisationen(
    organisationId: string,
    _options?: Configuration,
  ): Promise<Array<OrganisationResponse>> {
    const result = this.api.organisationControllerGetZugehoerigeOrganisationen(
      organisationId,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param organisationId The id of an organization
   * @param updateOrganisationBodyParams
   */
  public organisationControllerUpdateOrganisationWithHttpInfo(
    organisationId: string,
    updateOrganisationBodyParams: UpdateOrganisationBodyParams,
    _options?: Configuration,
  ): Promise<HttpInfo<OrganisationResponse>> {
    const result =
      this.api.organisationControllerUpdateOrganisationWithHttpInfo(
        organisationId,
        updateOrganisationBodyParams,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param organisationId The id of an organization
   * @param updateOrganisationBodyParams
   */
  public organisationControllerUpdateOrganisation(
    organisationId: string,
    updateOrganisationBodyParams: UpdateOrganisationBodyParams,
    _options?: Configuration,
  ): Promise<OrganisationResponse> {
    const result = this.api.organisationControllerUpdateOrganisation(
      organisationId,
      updateOrganisationBodyParams,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param organisationId The id of an organization
   * @param organisationByNameBodyParams
   */
  public organisationControllerUpdateOrganisationNameWithHttpInfo(
    organisationId: string,
    organisationByNameBodyParams: OrganisationByNameBodyParams,
    _options?: Configuration,
  ): Promise<HttpInfo<OrganisationResponseLegacy>> {
    const result =
      this.api.organisationControllerUpdateOrganisationNameWithHttpInfo(
        organisationId,
        organisationByNameBodyParams,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param organisationId The id of an organization
   * @param organisationByNameBodyParams
   */
  public organisationControllerUpdateOrganisationName(
    organisationId: string,
    organisationByNameBodyParams: OrganisationByNameBodyParams,
    _options?: Configuration,
  ): Promise<OrganisationResponseLegacy> {
    const result = this.api.organisationControllerUpdateOrganisationName(
      organisationId,
      organisationByNameBodyParams,
      _options,
    );
    return result.toPromise();
  }
}

import { ObservablePersonAdministrationApi } from "./ObservableAPI.ts";

import {
  PersonAdministrationApiRequestFactory,
  PersonAdministrationApiResponseProcessor,
} from "../apis/PersonAdministrationApi.ts";
export class PromisePersonAdministrationApi {
  private api: ObservablePersonAdministrationApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: PersonAdministrationApiRequestFactory,
    responseProcessor?: PersonAdministrationApiResponseProcessor,
  ) {
    this.api = new ObservablePersonAdministrationApi(
      configuration,
      requestFactory,
      responseProcessor,
    );
  }

  /**
   * @param [rolleName] Rolle name used to filter for rollen in personenkontext.
   * @param [limit] The limit of items for the request.
   */
  public personAdministrationControllerFindRollenWithHttpInfo(
    rolleName?: string,
    limit?: number,
    _options?: Configuration,
  ): Promise<HttpInfo<FindRollenResponse>> {
    const result =
      this.api.personAdministrationControllerFindRollenWithHttpInfo(
        rolleName,
        limit,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param [rolleName] Rolle name used to filter for rollen in personenkontext.
   * @param [limit] The limit of items for the request.
   */
  public personAdministrationControllerFindRollen(
    rolleName?: string,
    limit?: number,
    _options?: Configuration,
  ): Promise<FindRollenResponse> {
    const result = this.api.personAdministrationControllerFindRollen(
      rolleName,
      limit,
      _options,
    );
    return result.toPromise();
  }
}

import { ObservablePersonInfoApi } from "./ObservableAPI.ts";

import {
  PersonInfoApiRequestFactory,
  PersonInfoApiResponseProcessor,
} from "../apis/PersonInfoApi.ts";
export class PromisePersonInfoApi {
  private api: ObservablePersonInfoApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: PersonInfoApiRequestFactory,
    responseProcessor?: PersonInfoApiResponseProcessor,
  ) {
    this.api = new ObservablePersonInfoApi(
      configuration,
      requestFactory,
      responseProcessor,
    );
  }

  /**
   * Info about logged in person.
   */
  public personInfoControllerInfoWithHttpInfo(
    _options?: Configuration,
  ): Promise<HttpInfo<PersonInfoResponse>> {
    const result = this.api.personInfoControllerInfoWithHttpInfo(_options);
    return result.toPromise();
  }

  /**
   * Info about logged in person.
   */
  public personInfoControllerInfo(
    _options?: Configuration,
  ): Promise<PersonInfoResponse> {
    const result = this.api.personInfoControllerInfo(_options);
    return result.toPromise();
  }
}

import { ObservablePersonenApi } from "./ObservableAPI.ts";

import {
  PersonenApiRequestFactory,
  PersonenApiResponseProcessor,
} from "../apis/PersonenApi.ts";
export class PromisePersonenApi {
  private api: ObservablePersonenApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: PersonenApiRequestFactory,
    responseProcessor?: PersonenApiResponseProcessor,
  ) {
    this.api = new ObservablePersonenApi(
      configuration,
      requestFactory,
      responseProcessor,
    );
  }

  /**
   * @param createPersonMigrationBodyParams
   */
  public personControllerCreatePersonMigrationWithHttpInfo(
    createPersonMigrationBodyParams: CreatePersonMigrationBodyParams,
    _options?: Configuration,
  ): Promise<HttpInfo<PersonendatensatzResponse>> {
    const result = this.api.personControllerCreatePersonMigrationWithHttpInfo(
      createPersonMigrationBodyParams,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param createPersonMigrationBodyParams
   */
  public personControllerCreatePersonMigration(
    createPersonMigrationBodyParams: CreatePersonMigrationBodyParams,
    _options?: Configuration,
  ): Promise<PersonendatensatzResponse> {
    const result = this.api.personControllerCreatePersonMigration(
      createPersonMigrationBodyParams,
      _options,
    );
    return result.toPromise();
  }

  /**
   *
   * @param personId
   */
  public personControllerCreatePersonenkontextWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result = this.api.personControllerCreatePersonenkontextWithHttpInfo(
      personId,
      _options,
    );
    return result.toPromise();
  }

  /**
   *
   * @param personId
   */
  public personControllerCreatePersonenkontext(
    personId: string,
    _options?: Configuration,
  ): Promise<void> {
    const result = this.api.personControllerCreatePersonenkontext(
      personId,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param personId The id for the account.
   */
  public personControllerDeletePersonByIdWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result = this.api.personControllerDeletePersonByIdWithHttpInfo(
      personId,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param personId The id for the account.
   */
  public personControllerDeletePersonById(
    personId: string,
    _options?: Configuration,
  ): Promise<void> {
    const result = this.api.personControllerDeletePersonById(
      personId,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param personId The id for the account.
   */
  public personControllerFindPersonByIdWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<PersonendatensatzResponse>> {
    const result = this.api.personControllerFindPersonByIdWithHttpInfo(
      personId,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param personId The id for the account.
   */
  public personControllerFindPersonById(
    personId: string,
    _options?: Configuration,
  ): Promise<PersonendatensatzResponse> {
    const result = this.api.personControllerFindPersonById(personId, _options);
    return result.toPromise();
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
  ): Promise<HttpInfo<PersonControllerFindPersonenkontexte200Response>> {
    const result = this.api.personControllerFindPersonenkontexteWithHttpInfo(
      personId,
      offset,
      limit,
      personId2,
      referrer,
      personenstatus,
      sichtfreigabe,
      _options,
    );
    return result.toPromise();
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
  ): Promise<PersonControllerFindPersonenkontexte200Response> {
    const result = this.api.personControllerFindPersonenkontexte(
      personId,
      offset,
      limit,
      personId2,
      referrer,
      personenstatus,
      sichtfreigabe,
      _options,
    );
    return result.toPromise();
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
  ): Promise<HttpInfo<Array<PersonendatensatzResponse>>> {
    const result = this.api.personControllerFindPersonsWithHttpInfo(
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
    return result.toPromise();
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
  ): Promise<Array<PersonendatensatzResponse>> {
    const result = this.api.personControllerFindPersons(
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
    return result.toPromise();
  }

  /**
   * @param personId
   * @param lockUserBodyParams
   */
  public personControllerLockPersonWithHttpInfo(
    personId: string,
    lockUserBodyParams: LockUserBodyParams,
    _options?: Configuration,
  ): Promise<HttpInfo<PersonLockResponse>> {
    const result = this.api.personControllerLockPersonWithHttpInfo(
      personId,
      lockUserBodyParams,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param personId
   * @param lockUserBodyParams
   */
  public personControllerLockPerson(
    personId: string,
    lockUserBodyParams: LockUserBodyParams,
    _options?: Configuration,
  ): Promise<PersonLockResponse> {
    const result = this.api.personControllerLockPerson(
      personId,
      lockUserBodyParams,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param personId The id for the account.
   */
  public personControllerResetPasswordByPersonIdWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<string>> {
    const result = this.api.personControllerResetPasswordByPersonIdWithHttpInfo(
      personId,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param personId The id for the account.
   */
  public personControllerResetPasswordByPersonId(
    personId: string,
    _options?: Configuration,
  ): Promise<string> {
    const result = this.api.personControllerResetPasswordByPersonId(
      personId,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param personId
   */
  public personControllerSyncPersonWithHttpInfo(
    personId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result = this.api.personControllerSyncPersonWithHttpInfo(
      personId,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param personId
   */
  public personControllerSyncPerson(
    personId: string,
    _options?: Configuration,
  ): Promise<void> {
    const result = this.api.personControllerSyncPerson(personId, _options);
    return result.toPromise();
  }

  /**
   * @param personId The id for the account.
   * @param personMetadataBodyParams
   */
  public personControllerUpdateMetadataWithHttpInfo(
    personId: string,
    personMetadataBodyParams: PersonMetadataBodyParams,
    _options?: Configuration,
  ): Promise<HttpInfo<PersonendatensatzResponse>> {
    const result = this.api.personControllerUpdateMetadataWithHttpInfo(
      personId,
      personMetadataBodyParams,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param personId The id for the account.
   * @param personMetadataBodyParams
   */
  public personControllerUpdateMetadata(
    personId: string,
    personMetadataBodyParams: PersonMetadataBodyParams,
    _options?: Configuration,
  ): Promise<PersonendatensatzResponse> {
    const result = this.api.personControllerUpdateMetadata(
      personId,
      personMetadataBodyParams,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param personId The id for the account.
   * @param updatePersonBodyParams
   */
  public personControllerUpdatePersonWithHttpInfo(
    personId: string,
    updatePersonBodyParams: UpdatePersonBodyParams,
    _options?: Configuration,
  ): Promise<HttpInfo<PersonendatensatzResponse>> {
    const result = this.api.personControllerUpdatePersonWithHttpInfo(
      personId,
      updatePersonBodyParams,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param personId The id for the account.
   * @param updatePersonBodyParams
   */
  public personControllerUpdatePerson(
    personId: string,
    updatePersonBodyParams: UpdatePersonBodyParams,
    _options?: Configuration,
  ): Promise<PersonendatensatzResponse> {
    const result = this.api.personControllerUpdatePerson(
      personId,
      updatePersonBodyParams,
      _options,
    );
    return result.toPromise();
  }
}

import { ObservablePersonenFrontendApi } from "./ObservableAPI.ts";

import {
  PersonenFrontendApiRequestFactory,
  PersonenFrontendApiResponseProcessor,
} from "../apis/PersonenFrontendApi.ts";
export class PromisePersonenFrontendApi {
  private api: ObservablePersonenFrontendApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: PersonenFrontendApiRequestFactory,
    responseProcessor?: PersonenFrontendApiResponseProcessor,
  ) {
    this.api = new ObservablePersonenFrontendApi(
      configuration,
      requestFactory,
      responseProcessor,
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
  ): Promise<HttpInfo<PersonFrontendControllerFindPersons200Response>> {
    const result = this.api.personFrontendControllerFindPersonsWithHttpInfo(
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
    return result.toPromise();
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
  ): Promise<PersonFrontendControllerFindPersons200Response> {
    const result = this.api.personFrontendControllerFindPersons(
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
    return result.toPromise();
  }
}

import { ObservablePersonenkontextApi } from "./ObservableAPI.ts";

import {
  PersonenkontextApiRequestFactory,
  PersonenkontextApiResponseProcessor,
} from "../apis/PersonenkontextApi.ts";
export class PromisePersonenkontextApi {
  private api: ObservablePersonenkontextApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: PersonenkontextApiRequestFactory,
    responseProcessor?: PersonenkontextApiResponseProcessor,
  ) {
    this.api = new ObservablePersonenkontextApi(
      configuration,
      requestFactory,
      responseProcessor,
    );
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
  ): Promise<HttpInfo<PersonenkontexteUpdateResponse>> {
    const result =
      this.api.dbiamPersonenkontextWorkflowControllerCommitWithHttpInfo(
        personId,
        dbiamUpdatePersonenkontexteBodyParams,
        personalnummer,
        _options,
      );
    return result.toPromise();
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
  ): Promise<PersonenkontexteUpdateResponse> {
    const result = this.api.dbiamPersonenkontextWorkflowControllerCommit(
      personId,
      dbiamUpdatePersonenkontexteBodyParams,
      personalnummer,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param dbiamCreatePersonWithPersonenkontexteBodyParams
   */
  public dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexteWithHttpInfo(
    dbiamCreatePersonWithPersonenkontexteBodyParams: DbiamCreatePersonWithPersonenkontexteBodyParams,
    _options?: Configuration,
  ): Promise<HttpInfo<DBiamPersonResponse>> {
    const result =
      this.api.dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexteWithHttpInfo(
        dbiamCreatePersonWithPersonenkontexteBodyParams,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param dbiamCreatePersonWithPersonenkontexteBodyParams
   */
  public dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexte(
    dbiamCreatePersonWithPersonenkontexteBodyParams: DbiamCreatePersonWithPersonenkontexteBodyParams,
    _options?: Configuration,
  ): Promise<DBiamPersonResponse> {
    const result =
      this.api.dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexte(
        dbiamCreatePersonWithPersonenkontexteBodyParams,
        _options,
      );
    return result.toPromise();
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
  ): Promise<HttpInfo<FindSchulstrukturknotenResponse>> {
    const result =
      this.api.dbiamPersonenkontextWorkflowControllerFindSchulstrukturknotenWithHttpInfo(
        rolleId,
        sskName,
        limit,
        _options,
      );
    return result.toPromise();
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
  ): Promise<FindSchulstrukturknotenResponse> {
    const result =
      this.api.dbiamPersonenkontextWorkflowControllerFindSchulstrukturknoten(
        rolleId,
        sskName,
        limit,
        _options,
      );
    return result.toPromise();
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
  ): Promise<HttpInfo<PersonenkontextWorkflowResponse>> {
    const result =
      this.api.dbiamPersonenkontextWorkflowControllerProcessStepWithHttpInfo(
        organisationId,
        rolleId,
        rolleName,
        organisationName,
        limit,
        _options,
      );
    return result.toPromise();
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
  ): Promise<PersonenkontextWorkflowResponse> {
    const result = this.api.dbiamPersonenkontextWorkflowControllerProcessStep(
      organisationId,
      rolleId,
      rolleName,
      organisationName,
      limit,
      _options,
    );
    return result.toPromise();
  }
}

import { ObservablePersonenkontexteApi } from "./ObservableAPI.ts";

import {
  PersonenkontexteApiRequestFactory,
  PersonenkontexteApiResponseProcessor,
} from "../apis/PersonenkontexteApi.ts";
export class PromisePersonenkontexteApi {
  private api: ObservablePersonenkontexteApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: PersonenkontexteApiRequestFactory,
    responseProcessor?: PersonenkontexteApiResponseProcessor,
  ) {
    this.api = new ObservablePersonenkontexteApi(
      configuration,
      requestFactory,
      responseProcessor,
    );
  }

  /**
   * @param personenkontextId The id for the personenkontext.
   * @param deleteRevisionBodyParams
   */
  public personenkontextControllerDeletePersonenkontextByIdWithHttpInfo(
    personenkontextId: string,
    deleteRevisionBodyParams: DeleteRevisionBodyParams,
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result =
      this.api.personenkontextControllerDeletePersonenkontextByIdWithHttpInfo(
        personenkontextId,
        deleteRevisionBodyParams,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param personenkontextId The id for the personenkontext.
   * @param deleteRevisionBodyParams
   */
  public personenkontextControllerDeletePersonenkontextById(
    personenkontextId: string,
    deleteRevisionBodyParams: DeleteRevisionBodyParams,
    _options?: Configuration,
  ): Promise<void> {
    const result = this.api.personenkontextControllerDeletePersonenkontextById(
      personenkontextId,
      deleteRevisionBodyParams,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param personenkontextId The id for the personenkontext.
   */
  public personenkontextControllerFindPersonenkontextByIdWithHttpInfo(
    personenkontextId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<PersonendatensatzResponseAutomapper>> {
    const result =
      this.api.personenkontextControllerFindPersonenkontextByIdWithHttpInfo(
        personenkontextId,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param personenkontextId The id for the personenkontext.
   */
  public personenkontextControllerFindPersonenkontextById(
    personenkontextId: string,
    _options?: Configuration,
  ): Promise<PersonendatensatzResponseAutomapper> {
    const result = this.api.personenkontextControllerFindPersonenkontextById(
      personenkontextId,
      _options,
    );
    return result.toPromise();
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
  ): Promise<HttpInfo<Array<PersonenkontextdatensatzResponse>>> {
    const result =
      this.api.personenkontextControllerFindPersonenkontexteWithHttpInfo(
        offset,
        limit,
        personId,
        referrer,
        personenstatus,
        sichtfreigabe,
        _options,
      );
    return result.toPromise();
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
  ): Promise<Array<PersonenkontextdatensatzResponse>> {
    const result = this.api.personenkontextControllerFindPersonenkontexte(
      offset,
      limit,
      personId,
      referrer,
      personenstatus,
      sichtfreigabe,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param personId The id for the account.
   * @param systemRecht
   */
  public personenkontextControllerHatSystemRechtWithHttpInfo(
    personId: string,
    systemRecht: RollenSystemRecht,
    _options?: Configuration,
  ): Promise<HttpInfo<SystemrechtResponse>> {
    const result = this.api.personenkontextControllerHatSystemRechtWithHttpInfo(
      personId,
      systemRecht,
      _options,
    );
    return result.toPromise();
  }

  /**
   * @param personId The id for the account.
   * @param systemRecht
   */
  public personenkontextControllerHatSystemRecht(
    personId: string,
    systemRecht: RollenSystemRecht,
    _options?: Configuration,
  ): Promise<SystemrechtResponse> {
    const result = this.api.personenkontextControllerHatSystemRecht(
      personId,
      systemRecht,
      _options,
    );
    return result.toPromise();
  }

  /**
   *
   * @param personenkontextId
   */
  public personenkontextControllerUpdatePersonenkontextWithIdWithHttpInfo(
    personenkontextId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<PersonenkontextResponse>> {
    const result =
      this.api.personenkontextControllerUpdatePersonenkontextWithIdWithHttpInfo(
        personenkontextId,
        _options,
      );
    return result.toPromise();
  }

  /**
   *
   * @param personenkontextId
   */
  public personenkontextControllerUpdatePersonenkontextWithId(
    personenkontextId: string,
    _options?: Configuration,
  ): Promise<PersonenkontextResponse> {
    const result =
      this.api.personenkontextControllerUpdatePersonenkontextWithId(
        personenkontextId,
        _options,
      );
    return result.toPromise();
  }
}

import { ObservableProviderApi } from "./ObservableAPI.ts";

import {
  ProviderApiRequestFactory,
  ProviderApiResponseProcessor,
} from "../apis/ProviderApi.ts";
export class PromiseProviderApi {
  private api: ObservableProviderApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: ProviderApiRequestFactory,
    responseProcessor?: ProviderApiResponseProcessor,
  ) {
    this.api = new ObservableProviderApi(
      configuration,
      requestFactory,
      responseProcessor,
    );
  }

  /**
   * Get all service-providers.
   *
   */
  public providerControllerGetAllServiceProvidersWithHttpInfo(
    _options?: Configuration,
  ): Promise<HttpInfo<Array<ServiceProviderResponse>>> {
    const result =
      this.api.providerControllerGetAllServiceProvidersWithHttpInfo(_options);
    return result.toPromise();
  }

  /**
   * Get all service-providers.
   *
   */
  public providerControllerGetAllServiceProviders(
    _options?: Configuration,
  ): Promise<Array<ServiceProviderResponse>> {
    const result = this.api.providerControllerGetAllServiceProviders(_options);
    return result.toPromise();
  }

  /**
   * Get service-providers available for logged-in user.
   *
   */
  public providerControllerGetAvailableServiceProvidersWithHttpInfo(
    _options?: Configuration,
  ): Promise<HttpInfo<Array<ServiceProviderResponse>>> {
    const result =
      this.api.providerControllerGetAvailableServiceProvidersWithHttpInfo(
        _options,
      );
    return result.toPromise();
  }

  /**
   * Get service-providers available for logged-in user.
   *
   */
  public providerControllerGetAvailableServiceProviders(
    _options?: Configuration,
  ): Promise<Array<ServiceProviderResponse>> {
    const result =
      this.api.providerControllerGetAvailableServiceProviders(_options);
    return result.toPromise();
  }

  /**
   * @param angebotId The id of the service provider
   */
  public providerControllerGetServiceProviderLogoWithHttpInfo(
    angebotId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<any>> {
    const result =
      this.api.providerControllerGetServiceProviderLogoWithHttpInfo(
        angebotId,
        _options,
      );
    return result.toPromise();
  }

  /**
   * @param angebotId The id of the service provider
   */
  public providerControllerGetServiceProviderLogo(
    angebotId: string,
    _options?: Configuration,
  ): Promise<any> {
    const result = this.api.providerControllerGetServiceProviderLogo(
      angebotId,
      _options,
    );
    return result.toPromise();
  }
}

import { ObservableRolleApi } from "./ObservableAPI.ts";

import {
  RolleApiRequestFactory,
  RolleApiResponseProcessor,
} from "../apis/RolleApi.ts";
export class PromiseRolleApi {
  private api: ObservableRolleApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: RolleApiRequestFactory,
    responseProcessor?: RolleApiResponseProcessor,
  ) {
    this.api = new ObservableRolleApi(
      configuration,
      requestFactory,
      responseProcessor,
    );
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
  ): Promise<HttpInfo<void>> {
    const result = this.api.rolleControllerAddSystemRechtWithHttpInfo(
      rolleId,
      addSystemrechtBodyParams,
      _options,
    );
    return result.toPromise();
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
  ): Promise<void> {
    const result = this.api.rolleControllerAddSystemRecht(
      rolleId,
      addSystemrechtBodyParams,
      _options,
    );
    return result.toPromise();
  }

  /**
   * Create a new rolle.
   *
   * @param createRolleBodyParams
   */
  public rolleControllerCreateRolleWithHttpInfo(
    createRolleBodyParams: CreateRolleBodyParams,
    _options?: Configuration,
  ): Promise<HttpInfo<RolleResponse>> {
    const result = this.api.rolleControllerCreateRolleWithHttpInfo(
      createRolleBodyParams,
      _options,
    );
    return result.toPromise();
  }

  /**
   * Create a new rolle.
   *
   * @param createRolleBodyParams
   */
  public rolleControllerCreateRolle(
    createRolleBodyParams: CreateRolleBodyParams,
    _options?: Configuration,
  ): Promise<RolleResponse> {
    const result = this.api.rolleControllerCreateRolle(
      createRolleBodyParams,
      _options,
    );
    return result.toPromise();
  }

  /**
   * Delete a role by id.
   *
   * @param rolleId The id for the rolle.
   */
  public rolleControllerDeleteRolleWithHttpInfo(
    rolleId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result = this.api.rolleControllerDeleteRolleWithHttpInfo(
      rolleId,
      _options,
    );
    return result.toPromise();
  }

  /**
   * Delete a role by id.
   *
   * @param rolleId The id for the rolle.
   */
  public rolleControllerDeleteRolle(
    rolleId: string,
    _options?: Configuration,
  ): Promise<void> {
    const result = this.api.rolleControllerDeleteRolle(rolleId, _options);
    return result.toPromise();
  }

  /**
   * Get rolle by id.
   *
   * @param rolleId The id for the rolle.
   */
  public rolleControllerFindRolleByIdWithServiceProvidersWithHttpInfo(
    rolleId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<RolleWithServiceProvidersResponse>> {
    const result =
      this.api.rolleControllerFindRolleByIdWithServiceProvidersWithHttpInfo(
        rolleId,
        _options,
      );
    return result.toPromise();
  }

  /**
   * Get rolle by id.
   *
   * @param rolleId The id for the rolle.
   */
  public rolleControllerFindRolleByIdWithServiceProviders(
    rolleId: string,
    _options?: Configuration,
  ): Promise<RolleWithServiceProvidersResponse> {
    const result = this.api.rolleControllerFindRolleByIdWithServiceProviders(
      rolleId,
      _options,
    );
    return result.toPromise();
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
  ): Promise<HttpInfo<Array<RolleWithServiceProvidersResponse>>> {
    const result = this.api.rolleControllerFindRollenWithHttpInfo(
      offset,
      limit,
      searchStr,
      _options,
    );
    return result.toPromise();
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
  ): Promise<Array<RolleWithServiceProvidersResponse>> {
    const result = this.api.rolleControllerFindRollen(
      offset,
      limit,
      searchStr,
      _options,
    );
    return result.toPromise();
  }

  /**
   * Get service-providers for a rolle by its id.
   *
   * @param rolleId The id for the rolle.
   */
  public rolleControllerGetRolleServiceProviderIdsWithHttpInfo(
    rolleId: string,
    _options?: Configuration,
  ): Promise<HttpInfo<RolleServiceProviderResponse>> {
    const result =
      this.api.rolleControllerGetRolleServiceProviderIdsWithHttpInfo(
        rolleId,
        _options,
      );
    return result.toPromise();
  }

  /**
   * Get service-providers for a rolle by its id.
   *
   * @param rolleId The id for the rolle.
   */
  public rolleControllerGetRolleServiceProviderIds(
    rolleId: string,
    _options?: Configuration,
  ): Promise<RolleServiceProviderResponse> {
    const result = this.api.rolleControllerGetRolleServiceProviderIds(
      rolleId,
      _options,
    );
    return result.toPromise();
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
  ): Promise<HttpInfo<void>> {
    const result =
      this.api.rolleControllerRemoveServiceProviderByIdWithHttpInfo(
        rolleId,
        rolleServiceProviderBodyParams,
        _options,
      );
    return result.toPromise();
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
  ): Promise<void> {
    const result = this.api.rolleControllerRemoveServiceProviderById(
      rolleId,
      rolleServiceProviderBodyParams,
      _options,
    );
    return result.toPromise();
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
  ): Promise<HttpInfo<RolleWithServiceProvidersResponse>> {
    const result = this.api.rolleControllerUpdateRolleWithHttpInfo(
      rolleId,
      updateRolleBodyParams,
      _options,
    );
    return result.toPromise();
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
  ): Promise<RolleWithServiceProvidersResponse> {
    const result = this.api.rolleControllerUpdateRolle(
      rolleId,
      updateRolleBodyParams,
      _options,
    );
    return result.toPromise();
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
  ): Promise<HttpInfo<Array<ServiceProviderResponse>>> {
    const result =
      this.api.rolleControllerUpdateServiceProvidersByIdWithHttpInfo(
        rolleId,
        rolleServiceProviderBodyParams,
        _options,
      );
    return result.toPromise();
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
  ): Promise<Array<ServiceProviderResponse>> {
    const result = this.api.rolleControllerUpdateServiceProvidersById(
      rolleId,
      rolleServiceProviderBodyParams,
      _options,
    );
    return result.toPromise();
  }
}

import { ObservableStatusApi } from "./ObservableAPI.ts";

import {
  StatusApiRequestFactory,
  StatusApiResponseProcessor,
} from "../apis/StatusApi.ts";
export class PromiseStatusApi {
  private api: ObservableStatusApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: StatusApiRequestFactory,
    responseProcessor?: StatusApiResponseProcessor,
  ) {
    this.api = new ObservableStatusApi(
      configuration,
      requestFactory,
      responseProcessor,
    );
  }

  /**
   */
  public statusControllerGetStatusWithHttpInfo(
    _options?: Configuration,
  ): Promise<HttpInfo<void>> {
    const result = this.api.statusControllerGetStatusWithHttpInfo(_options);
    return result.toPromise();
  }

  /**
   */
  public statusControllerGetStatus(_options?: Configuration): Promise<void> {
    const result = this.api.statusControllerGetStatus(_options);
    return result.toPromise();
  }
}
