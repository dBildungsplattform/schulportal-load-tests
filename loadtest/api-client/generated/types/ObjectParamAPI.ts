import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

import { AddSystemrechtBodyParams } from '../models/AddSystemrechtBodyParams.ts';
import { AssignHardwareTokenBodyParams } from '../models/AssignHardwareTokenBodyParams.ts';
import { AssignHardwareTokenResponse } from '../models/AssignHardwareTokenResponse.ts';
import { CreateOrganisationBodyParams } from '../models/CreateOrganisationBodyParams.ts';
import { CreatePersonMigrationBodyParams } from '../models/CreatePersonMigrationBodyParams.ts';
import { CreateRolleBodyParams } from '../models/CreateRolleBodyParams.ts';
import { DBiamPersonResponse } from '../models/DBiamPersonResponse.ts';
import { DBiamPersonenkontextResponse } from '../models/DBiamPersonenkontextResponse.ts';
import { DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response } from '../models/DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response.ts';
import { DBiamPersonenuebersichtResponse } from '../models/DBiamPersonenuebersichtResponse.ts';
import { DBiamPersonenzuordnungResponse } from '../models/DBiamPersonenzuordnungResponse.ts';
import { DbiamCreatePersonWithPersonenkontexteBodyParams } from '../models/DbiamCreatePersonWithPersonenkontexteBodyParams.ts';
import { DbiamCreatePersonenkontextBodyParams } from '../models/DbiamCreatePersonenkontextBodyParams.ts';
import { DbiamImportError } from '../models/DbiamImportError.ts';
import { DbiamOrganisationError } from '../models/DbiamOrganisationError.ts';
import { DbiamPersonError } from '../models/DbiamPersonError.ts';
import { DbiamPersonenkontextBodyParams } from '../models/DbiamPersonenkontextBodyParams.ts';
import { DbiamPersonenkontextError } from '../models/DbiamPersonenkontextError.ts';
import { DbiamPersonenkontextMigrationBodyParams } from '../models/DbiamPersonenkontextMigrationBodyParams.ts';
import { DbiamPersonenkontexteUpdateError } from '../models/DbiamPersonenkontexteUpdateError.ts';
import { DbiamRolleError } from '../models/DbiamRolleError.ts';
import { DbiamUpdatePersonenkontexteBodyParams } from '../models/DbiamUpdatePersonenkontexteBodyParams.ts';
import { DeleteRevisionBodyParams } from '../models/DeleteRevisionBodyParams.ts';
import { EmailAddressStatus } from '../models/EmailAddressStatus.ts';
import { FindRollenResponse } from '../models/FindRollenResponse.ts';
import { FindSchulstrukturknotenResponse } from '../models/FindSchulstrukturknotenResponse.ts';
import { Geschlecht } from '../models/Geschlecht.ts';
import { ImportDataItemResponse } from '../models/ImportDataItemResponse.ts';
import { ImportUploadResponse } from '../models/ImportUploadResponse.ts';
import { ImportvorgangByIdBodyParams } from '../models/ImportvorgangByIdBodyParams.ts';
import { LockUserBodyParams } from '../models/LockUserBodyParams.ts';
import { LoeschungResponse } from '../models/LoeschungResponse.ts';
import { OrganisationByIdBodyParams } from '../models/OrganisationByIdBodyParams.ts';
import { OrganisationByNameBodyParams } from '../models/OrganisationByNameBodyParams.ts';
import { OrganisationResponse } from '../models/OrganisationResponse.ts';
import { OrganisationResponseLegacy } from '../models/OrganisationResponseLegacy.ts';
import { OrganisationRootChildrenResponse } from '../models/OrganisationRootChildrenResponse.ts';
import { OrganisationsTyp } from '../models/OrganisationsTyp.ts';
import { ParentOrganisationenResponse } from '../models/ParentOrganisationenResponse.ts';
import { ParentOrganisationsByIdsBodyParams } from '../models/ParentOrganisationsByIdsBodyParams.ts';
import { Person } from '../models/Person.ts';
import { PersonBirthParams } from '../models/PersonBirthParams.ts';
import { PersonBirthResponse } from '../models/PersonBirthResponse.ts';
import { PersonControllerFindPersonenkontexte200Response } from '../models/PersonControllerFindPersonenkontexte200Response.ts';
import { PersonEmailResponse } from '../models/PersonEmailResponse.ts';
import { PersonFrontendControllerFindPersons200Response } from '../models/PersonFrontendControllerFindPersons200Response.ts';
import { PersonIdResponse } from '../models/PersonIdResponse.ts';
import { PersonInfoResponse } from '../models/PersonInfoResponse.ts';
import { PersonLockResponse } from '../models/PersonLockResponse.ts';
import { PersonMetadataBodyParams } from '../models/PersonMetadataBodyParams.ts';
import { PersonNameParams } from '../models/PersonNameParams.ts';
import { PersonNameResponse } from '../models/PersonNameResponse.ts';
import { PersonResponse } from '../models/PersonResponse.ts';
import { PersonResponseAutomapper } from '../models/PersonResponseAutomapper.ts';
import { PersonendatensatzResponse } from '../models/PersonendatensatzResponse.ts';
import { PersonendatensatzResponseAutomapper } from '../models/PersonendatensatzResponseAutomapper.ts';
import { PersonenkontextMigrationRuntype } from '../models/PersonenkontextMigrationRuntype.ts';
import { PersonenkontextResponse } from '../models/PersonenkontextResponse.ts';
import { PersonenkontextRolleFieldsResponse } from '../models/PersonenkontextRolleFieldsResponse.ts';
import { PersonenkontextWorkflowResponse } from '../models/PersonenkontextWorkflowResponse.ts';
import { PersonenkontextdatensatzResponse } from '../models/PersonenkontextdatensatzResponse.ts';
import { PersonenkontexteUpdateResponse } from '../models/PersonenkontexteUpdateResponse.ts';
import { Personenstatus } from '../models/Personenstatus.ts';
import { PersonenuebersichtBodyParams } from '../models/PersonenuebersichtBodyParams.ts';
import { RawPagedResponse } from '../models/RawPagedResponse.ts';
import { RolleResponse } from '../models/RolleResponse.ts';
import { RolleServiceProviderBodyParams } from '../models/RolleServiceProviderBodyParams.ts';
import { RolleServiceProviderResponse } from '../models/RolleServiceProviderResponse.ts';
import { RolleWithServiceProvidersResponse } from '../models/RolleWithServiceProvidersResponse.ts';
import { RollenArt } from '../models/RollenArt.ts';
import { RollenMerkmal } from '../models/RollenMerkmal.ts';
import { RollenSystemRecht } from '../models/RollenSystemRecht.ts';
import { RollenSystemRechtServiceProviderIDResponse } from '../models/RollenSystemRechtServiceProviderIDResponse.ts';
import { ServiceProviderIdNameResponse } from '../models/ServiceProviderIdNameResponse.ts';
import { ServiceProviderKategorie } from '../models/ServiceProviderKategorie.ts';
import { ServiceProviderResponse } from '../models/ServiceProviderResponse.ts';
import { ServiceProviderTarget } from '../models/ServiceProviderTarget.ts';
import { Sichtfreigabe } from '../models/Sichtfreigabe.ts';
import { SystemrechtResponse } from '../models/SystemrechtResponse.ts';
import { TokenInitBodyParams } from '../models/TokenInitBodyParams.ts';
import { TokenRequiredResponse } from '../models/TokenRequiredResponse.ts';
import { TokenStateResponse } from '../models/TokenStateResponse.ts';
import { TokenVerifyBodyParams } from '../models/TokenVerifyBodyParams.ts';
import { TraegerschaftTyp } from '../models/TraegerschaftTyp.ts';
import { UpdateOrganisationBodyParams } from '../models/UpdateOrganisationBodyParams.ts';
import { UpdatePersonBodyParams } from '../models/UpdatePersonBodyParams.ts';
import { UpdateRolleBodyParams } from '../models/UpdateRolleBodyParams.ts';
import { UserLockParams } from '../models/UserLockParams.ts';
import { UserinfoResponse } from '../models/UserinfoResponse.ts';
import { Vertrauensstufe } from '../models/Vertrauensstufe.ts';

import { ObservableAuthApi } from "./ObservableAPI.ts";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi.ts";

export interface AuthApiAuthenticationControllerInfoRequest {
}

export interface AuthApiAuthenticationControllerLoginRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthenticationControllerLogin
     */
    redirectUrl?: string
}

export interface AuthApiAuthenticationControllerLogoutRequest {
}

export interface AuthApiAuthenticationControllerResetPasswordRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthenticationControllerResetPassword
     */
    redirectUrl: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthenticationControllerResetPassword
     */
    loginHint: string
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Info about logged in user.
     * @param param the request object
     */
    public authenticationControllerInfoWithHttpInfo(param: AuthApiAuthenticationControllerInfoRequest = {}, options?: Configuration): Promise<HttpInfo<UserinfoResponse>> {
        return this.api.authenticationControllerInfoWithHttpInfo( options).toPromise();
    }

    /**
     * Info about logged in user.
     * @param param the request object
     */
    public authenticationControllerInfo(param: AuthApiAuthenticationControllerInfoRequest = {}, options?: Configuration): Promise<UserinfoResponse> {
        return this.api.authenticationControllerInfo( options).toPromise();
    }

    /**
     * Used to start OIDC authentication.
     * @param param the request object
     */
    public authenticationControllerLoginWithHttpInfo(param: AuthApiAuthenticationControllerLoginRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authenticationControllerLoginWithHttpInfo(param.redirectUrl,  options).toPromise();
    }

    /**
     * Used to start OIDC authentication.
     * @param param the request object
     */
    public authenticationControllerLogin(param: AuthApiAuthenticationControllerLoginRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authenticationControllerLogin(param.redirectUrl,  options).toPromise();
    }

    /**
     * Used to log out the current user.
     * @param param the request object
     */
    public authenticationControllerLogoutWithHttpInfo(param: AuthApiAuthenticationControllerLogoutRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authenticationControllerLogoutWithHttpInfo( options).toPromise();
    }

    /**
     * Used to log out the current user.
     * @param param the request object
     */
    public authenticationControllerLogout(param: AuthApiAuthenticationControllerLogoutRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authenticationControllerLogout( options).toPromise();
    }

    /**
     * Redirect to Keycloak password reset.
     * @param param the request object
     */
    public authenticationControllerResetPasswordWithHttpInfo(param: AuthApiAuthenticationControllerResetPasswordRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.authenticationControllerResetPasswordWithHttpInfo(param.redirectUrl, param.loginHint,  options).toPromise();
    }

    /**
     * Redirect to Keycloak password reset.
     * @param param the request object
     */
    public authenticationControllerResetPassword(param: AuthApiAuthenticationControllerResetPasswordRequest, options?: Configuration): Promise<void> {
        return this.api.authenticationControllerResetPassword(param.redirectUrl, param.loginHint,  options).toPromise();
    }

}

import { ObservableClass2FAApi } from "./ObservableAPI.ts";
import { Class2FAApiRequestFactory, Class2FAApiResponseProcessor} from "../apis/Class2FAApi.ts";

export interface Class2FAApiPrivacyIdeaAdministrationControllerAssignHardwareTokenRequest {
    /**
     * 
     * @type AssignHardwareTokenBodyParams
     * @memberof Class2FAApiprivacyIdeaAdministrationControllerAssignHardwareToken
     */
    assignHardwareTokenBodyParams: AssignHardwareTokenBodyParams
}

export interface Class2FAApiPrivacyIdeaAdministrationControllerGetTwoAuthStateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof Class2FAApiprivacyIdeaAdministrationControllerGetTwoAuthState
     */
    personId: string
}

export interface Class2FAApiPrivacyIdeaAdministrationControllerInitializeSoftwareTokenRequest {
    /**
     * 
     * @type TokenInitBodyParams
     * @memberof Class2FAApiprivacyIdeaAdministrationControllerInitializeSoftwareToken
     */
    tokenInitBodyParams: TokenInitBodyParams
}

export interface Class2FAApiPrivacyIdeaAdministrationControllerRequiresTwoFactorAuthenticationRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof Class2FAApiprivacyIdeaAdministrationControllerRequiresTwoFactorAuthentication
     */
    personId: string
}

export interface Class2FAApiPrivacyIdeaAdministrationControllerResetTokenRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof Class2FAApiprivacyIdeaAdministrationControllerResetToken
     */
    personId: string
}

export interface Class2FAApiPrivacyIdeaAdministrationControllerVerifyTokenRequest {
    /**
     * 
     * @type TokenVerifyBodyParams
     * @memberof Class2FAApiprivacyIdeaAdministrationControllerVerifyToken
     */
    tokenVerifyBodyParams: TokenVerifyBodyParams
}

export class ObjectClass2FAApi {
    private api: ObservableClass2FAApi

    public constructor(configuration: Configuration, requestFactory?: Class2FAApiRequestFactory, responseProcessor?: Class2FAApiResponseProcessor) {
        this.api = new ObservableClass2FAApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public privacyIdeaAdministrationControllerAssignHardwareTokenWithHttpInfo(param: Class2FAApiPrivacyIdeaAdministrationControllerAssignHardwareTokenRequest, options?: Configuration): Promise<HttpInfo<AssignHardwareTokenResponse>> {
        return this.api.privacyIdeaAdministrationControllerAssignHardwareTokenWithHttpInfo(param.assignHardwareTokenBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public privacyIdeaAdministrationControllerAssignHardwareToken(param: Class2FAApiPrivacyIdeaAdministrationControllerAssignHardwareTokenRequest, options?: Configuration): Promise<AssignHardwareTokenResponse> {
        return this.api.privacyIdeaAdministrationControllerAssignHardwareToken(param.assignHardwareTokenBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public privacyIdeaAdministrationControllerGetTwoAuthStateWithHttpInfo(param: Class2FAApiPrivacyIdeaAdministrationControllerGetTwoAuthStateRequest, options?: Configuration): Promise<HttpInfo<TokenStateResponse>> {
        return this.api.privacyIdeaAdministrationControllerGetTwoAuthStateWithHttpInfo(param.personId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public privacyIdeaAdministrationControllerGetTwoAuthState(param: Class2FAApiPrivacyIdeaAdministrationControllerGetTwoAuthStateRequest, options?: Configuration): Promise<TokenStateResponse> {
        return this.api.privacyIdeaAdministrationControllerGetTwoAuthState(param.personId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public privacyIdeaAdministrationControllerInitializeSoftwareTokenWithHttpInfo(param: Class2FAApiPrivacyIdeaAdministrationControllerInitializeSoftwareTokenRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.privacyIdeaAdministrationControllerInitializeSoftwareTokenWithHttpInfo(param.tokenInitBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public privacyIdeaAdministrationControllerInitializeSoftwareToken(param: Class2FAApiPrivacyIdeaAdministrationControllerInitializeSoftwareTokenRequest, options?: Configuration): Promise<string> {
        return this.api.privacyIdeaAdministrationControllerInitializeSoftwareToken(param.tokenInitBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public privacyIdeaAdministrationControllerRequiresTwoFactorAuthenticationWithHttpInfo(param: Class2FAApiPrivacyIdeaAdministrationControllerRequiresTwoFactorAuthenticationRequest, options?: Configuration): Promise<HttpInfo<TokenRequiredResponse>> {
        return this.api.privacyIdeaAdministrationControllerRequiresTwoFactorAuthenticationWithHttpInfo(param.personId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public privacyIdeaAdministrationControllerRequiresTwoFactorAuthentication(param: Class2FAApiPrivacyIdeaAdministrationControllerRequiresTwoFactorAuthenticationRequest, options?: Configuration): Promise<TokenRequiredResponse> {
        return this.api.privacyIdeaAdministrationControllerRequiresTwoFactorAuthentication(param.personId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public privacyIdeaAdministrationControllerResetTokenWithHttpInfo(param: Class2FAApiPrivacyIdeaAdministrationControllerResetTokenRequest, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.privacyIdeaAdministrationControllerResetTokenWithHttpInfo(param.personId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public privacyIdeaAdministrationControllerResetToken(param: Class2FAApiPrivacyIdeaAdministrationControllerResetTokenRequest, options?: Configuration): Promise<boolean> {
        return this.api.privacyIdeaAdministrationControllerResetToken(param.personId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public privacyIdeaAdministrationControllerVerifyTokenWithHttpInfo(param: Class2FAApiPrivacyIdeaAdministrationControllerVerifyTokenRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.privacyIdeaAdministrationControllerVerifyTokenWithHttpInfo(param.tokenVerifyBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public privacyIdeaAdministrationControllerVerifyToken(param: Class2FAApiPrivacyIdeaAdministrationControllerVerifyTokenRequest, options?: Configuration): Promise<void> {
        return this.api.privacyIdeaAdministrationControllerVerifyToken(param.tokenVerifyBodyParams,  options).toPromise();
    }

}

import { ObservableCronApi } from "./ObservableAPI.ts";
import { CronApiRequestFactory, CronApiResponseProcessor} from "../apis/CronApi.ts";

export interface CronApiCronControllerKoPersUserLockRequest {
}

export interface CronApiCronControllerPersonWithoutOrgDeleteRequest {
}

export interface CronApiCronControllerRemovePersonenKontexteWithExpiredBefristungFromUsersRequest {
}

export interface CronApiCronControllerUnlockUsersWithExpiredLocksRequest {
}

export class ObjectCronApi {
    private api: ObservableCronApi

    public constructor(configuration: Configuration, requestFactory?: CronApiRequestFactory, responseProcessor?: CronApiResponseProcessor) {
        this.api = new ObservableCronApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public cronControllerKoPersUserLockWithHttpInfo(param: CronApiCronControllerKoPersUserLockRequest = {}, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.cronControllerKoPersUserLockWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cronControllerKoPersUserLock(param: CronApiCronControllerKoPersUserLockRequest = {}, options?: Configuration): Promise<boolean> {
        return this.api.cronControllerKoPersUserLock( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cronControllerPersonWithoutOrgDeleteWithHttpInfo(param: CronApiCronControllerPersonWithoutOrgDeleteRequest = {}, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.cronControllerPersonWithoutOrgDeleteWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cronControllerPersonWithoutOrgDelete(param: CronApiCronControllerPersonWithoutOrgDeleteRequest = {}, options?: Configuration): Promise<boolean> {
        return this.api.cronControllerPersonWithoutOrgDelete( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cronControllerRemovePersonenKontexteWithExpiredBefristungFromUsersWithHttpInfo(param: CronApiCronControllerRemovePersonenKontexteWithExpiredBefristungFromUsersRequest = {}, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.cronControllerRemovePersonenKontexteWithExpiredBefristungFromUsersWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cronControllerRemovePersonenKontexteWithExpiredBefristungFromUsers(param: CronApiCronControllerRemovePersonenKontexteWithExpiredBefristungFromUsersRequest = {}, options?: Configuration): Promise<boolean> {
        return this.api.cronControllerRemovePersonenKontexteWithExpiredBefristungFromUsers( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cronControllerUnlockUsersWithExpiredLocksWithHttpInfo(param: CronApiCronControllerUnlockUsersWithExpiredLocksRequest = {}, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.cronControllerUnlockUsersWithExpiredLocksWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cronControllerUnlockUsersWithExpiredLocks(param: CronApiCronControllerUnlockUsersWithExpiredLocksRequest = {}, options?: Configuration): Promise<boolean> {
        return this.api.cronControllerUnlockUsersWithExpiredLocks( options).toPromise();
    }

}

import { ObservableDbiamPersonenkontexteApi } from "./ObservableAPI.ts";
import { DbiamPersonenkontexteApiRequestFactory, DbiamPersonenkontexteApiResponseProcessor} from "../apis/DbiamPersonenkontexteApi.ts";

export interface DbiamPersonenkontexteApiDBiamPersonenkontextControllerCreatePersonenkontextMigrationRequest {
    /**
     * 
     * @type DbiamPersonenkontextMigrationBodyParams
     * @memberof DbiamPersonenkontexteApidBiamPersonenkontextControllerCreatePersonenkontextMigration
     */
    dbiamPersonenkontextMigrationBodyParams: DbiamPersonenkontextMigrationBodyParams
}

export interface DbiamPersonenkontexteApiDBiamPersonenkontextControllerFindPersonenkontextsByPersonRequest {
    /**
     * The ID for the person.
     * Defaults to: undefined
     * @type string
     * @memberof DbiamPersonenkontexteApidBiamPersonenkontextControllerFindPersonenkontextsByPerson
     */
    personId: string
}

export class ObjectDbiamPersonenkontexteApi {
    private api: ObservableDbiamPersonenkontexteApi

    public constructor(configuration: Configuration, requestFactory?: DbiamPersonenkontexteApiRequestFactory, responseProcessor?: DbiamPersonenkontexteApiResponseProcessor) {
        this.api = new ObservableDbiamPersonenkontexteApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public dBiamPersonenkontextControllerCreatePersonenkontextMigrationWithHttpInfo(param: DbiamPersonenkontexteApiDBiamPersonenkontextControllerCreatePersonenkontextMigrationRequest, options?: Configuration): Promise<HttpInfo<DBiamPersonenkontextResponse>> {
        return this.api.dBiamPersonenkontextControllerCreatePersonenkontextMigrationWithHttpInfo(param.dbiamPersonenkontextMigrationBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public dBiamPersonenkontextControllerCreatePersonenkontextMigration(param: DbiamPersonenkontexteApiDBiamPersonenkontextControllerCreatePersonenkontextMigrationRequest, options?: Configuration): Promise<DBiamPersonenkontextResponse> {
        return this.api.dBiamPersonenkontextControllerCreatePersonenkontextMigration(param.dbiamPersonenkontextMigrationBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public dBiamPersonenkontextControllerFindPersonenkontextsByPersonWithHttpInfo(param: DbiamPersonenkontexteApiDBiamPersonenkontextControllerFindPersonenkontextsByPersonRequest, options?: Configuration): Promise<HttpInfo<Array<DBiamPersonenkontextResponse>>> {
        return this.api.dBiamPersonenkontextControllerFindPersonenkontextsByPersonWithHttpInfo(param.personId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public dBiamPersonenkontextControllerFindPersonenkontextsByPerson(param: DbiamPersonenkontexteApiDBiamPersonenkontextControllerFindPersonenkontextsByPersonRequest, options?: Configuration): Promise<Array<DBiamPersonenkontextResponse>> {
        return this.api.dBiamPersonenkontextControllerFindPersonenkontextsByPerson(param.personId,  options).toPromise();
    }

}

import { ObservableDbiamPersonenuebersichtApi } from "./ObservableAPI.ts";
import { DbiamPersonenuebersichtApiRequestFactory, DbiamPersonenuebersichtApiResponseProcessor} from "../apis/DbiamPersonenuebersichtApi.ts";

export interface DbiamPersonenuebersichtApiDBiamPersonenuebersichtControllerFindPersonenuebersichtenRequest {
    /**
     * 
     * @type PersonenuebersichtBodyParams
     * @memberof DbiamPersonenuebersichtApidBiamPersonenuebersichtControllerFindPersonenuebersichten
     */
    personenuebersichtBodyParams: PersonenuebersichtBodyParams
}

export interface DbiamPersonenuebersichtApiDBiamPersonenuebersichtControllerFindPersonenuebersichtenByPersonRequest {
    /**
     * The ID for the person.
     * Defaults to: undefined
     * @type string
     * @memberof DbiamPersonenuebersichtApidBiamPersonenuebersichtControllerFindPersonenuebersichtenByPerson
     */
    personId: string
}

export class ObjectDbiamPersonenuebersichtApi {
    private api: ObservableDbiamPersonenuebersichtApi

    public constructor(configuration: Configuration, requestFactory?: DbiamPersonenuebersichtApiRequestFactory, responseProcessor?: DbiamPersonenuebersichtApiResponseProcessor) {
        this.api = new ObservableDbiamPersonenuebersichtApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public dBiamPersonenuebersichtControllerFindPersonenuebersichtenWithHttpInfo(param: DbiamPersonenuebersichtApiDBiamPersonenuebersichtControllerFindPersonenuebersichtenRequest, options?: Configuration): Promise<HttpInfo<DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response>> {
        return this.api.dBiamPersonenuebersichtControllerFindPersonenuebersichtenWithHttpInfo(param.personenuebersichtBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public dBiamPersonenuebersichtControllerFindPersonenuebersichten(param: DbiamPersonenuebersichtApiDBiamPersonenuebersichtControllerFindPersonenuebersichtenRequest, options?: Configuration): Promise<DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response> {
        return this.api.dBiamPersonenuebersichtControllerFindPersonenuebersichten(param.personenuebersichtBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPersonWithHttpInfo(param: DbiamPersonenuebersichtApiDBiamPersonenuebersichtControllerFindPersonenuebersichtenByPersonRequest, options?: Configuration): Promise<HttpInfo<DBiamPersonenuebersichtResponse>> {
        return this.api.dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPersonWithHttpInfo(param.personId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPerson(param: DbiamPersonenuebersichtApiDBiamPersonenuebersichtControllerFindPersonenuebersichtenByPersonRequest, options?: Configuration): Promise<DBiamPersonenuebersichtResponse> {
        return this.api.dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPerson(param.personId,  options).toPromise();
    }

}

import { ObservableImportApi } from "./ObservableAPI.ts";
import { ImportApiRequestFactory, ImportApiResponseProcessor} from "../apis/ImportApi.ts";

export interface ImportApiImportControllerDeleteImportTransactionRequest {
    /**
     * The id of an import transaction
     * Defaults to: undefined
     * @type string
     * @memberof ImportApiimportControllerDeleteImportTransaction
     */
    importvorgangId: string
}

export interface ImportApiImportControllerExecuteImportRequest {
    /**
     * 
     * @type ImportvorgangByIdBodyParams
     * @memberof ImportApiimportControllerExecuteImport
     */
    importvorgangByIdBodyParams: ImportvorgangByIdBodyParams
}

export interface ImportApiImportControllerUploadFileRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ImportApiimportControllerUploadFile
     */
    organisationId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ImportApiimportControllerUploadFile
     */
    rolleId: string
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof ImportApiimportControllerUploadFile
     */
    file: HttpFile
}

export class ObjectImportApi {
    private api: ObservableImportApi

    public constructor(configuration: Configuration, requestFactory?: ImportApiRequestFactory, responseProcessor?: ImportApiResponseProcessor) {
        this.api = new ObservableImportApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a role by id.
     * 
     * @param param the request object
     */
    public importControllerDeleteImportTransactionWithHttpInfo(param: ImportApiImportControllerDeleteImportTransactionRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.importControllerDeleteImportTransactionWithHttpInfo(param.importvorgangId,  options).toPromise();
    }

    /**
     * Delete a role by id.
     * 
     * @param param the request object
     */
    public importControllerDeleteImportTransaction(param: ImportApiImportControllerDeleteImportTransactionRequest, options?: Configuration): Promise<void> {
        return this.api.importControllerDeleteImportTransaction(param.importvorgangId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public importControllerExecuteImportWithHttpInfo(param: ImportApiImportControllerExecuteImportRequest, options?: Configuration): Promise<HttpInfo<HttpFile>> {
        return this.api.importControllerExecuteImportWithHttpInfo(param.importvorgangByIdBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public importControllerExecuteImport(param: ImportApiImportControllerExecuteImportRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.importControllerExecuteImport(param.importvorgangByIdBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public importControllerUploadFileWithHttpInfo(param: ImportApiImportControllerUploadFileRequest, options?: Configuration): Promise<HttpInfo<ImportUploadResponse>> {
        return this.api.importControllerUploadFileWithHttpInfo(param.organisationId, param.rolleId, param.file,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public importControllerUploadFile(param: ImportApiImportControllerUploadFileRequest, options?: Configuration): Promise<ImportUploadResponse> {
        return this.api.importControllerUploadFile(param.organisationId, param.rolleId, param.file,  options).toPromise();
    }

}

import { ObservableOrganisationenApi } from "./ObservableAPI.ts";
import { OrganisationenApiRequestFactory, OrganisationenApiResponseProcessor} from "../apis/OrganisationenApi.ts";

export interface OrganisationenApiOrganisationControllerAddAdministrierteOrganisationRequest {
    /**
     * The id of an organization
     * Defaults to: undefined
     * @type string
     * @memberof OrganisationenApiorganisationControllerAddAdministrierteOrganisation
     */
    organisationId: string
    /**
     * 
     * @type OrganisationByIdBodyParams
     * @memberof OrganisationenApiorganisationControllerAddAdministrierteOrganisation
     */
    organisationByIdBodyParams: OrganisationByIdBodyParams
}

export interface OrganisationenApiOrganisationControllerAddZugehoerigeOrganisationRequest {
    /**
     * The id of an organization
     * Defaults to: undefined
     * @type string
     * @memberof OrganisationenApiorganisationControllerAddZugehoerigeOrganisation
     */
    organisationId: string
    /**
     * 
     * @type OrganisationByIdBodyParams
     * @memberof OrganisationenApiorganisationControllerAddZugehoerigeOrganisation
     */
    organisationByIdBodyParams: OrganisationByIdBodyParams
}

export interface OrganisationenApiOrganisationControllerCreateOrganisationRequest {
    /**
     * 
     * @type CreateOrganisationBodyParams
     * @memberof OrganisationenApiorganisationControllerCreateOrganisation
     */
    createOrganisationBodyParams: CreateOrganisationBodyParams
}

export interface OrganisationenApiOrganisationControllerDeleteKlasseRequest {
    /**
     * The id of an organization
     * Defaults to: undefined
     * @type string
     * @memberof OrganisationenApiorganisationControllerDeleteKlasse
     */
    organisationId: string
}

export interface OrganisationenApiOrganisationControllerEnableForitslearningRequest {
    /**
     * The id of an organization
     * Defaults to: undefined
     * @type string
     * @memberof OrganisationenApiorganisationControllerEnableForitslearning
     */
    organisationId: string
}

export interface OrganisationenApiOrganisationControllerFindOrganisationByIdRequest {
    /**
     * The id of an organization
     * Defaults to: undefined
     * @type string
     * @memberof OrganisationenApiorganisationControllerFindOrganisationById
     */
    organisationId: string
}

export interface OrganisationenApiOrganisationControllerFindOrganizationsRequest {
    /**
     * The offset of the paginated list.
     * Defaults to: undefined
     * @type number
     * @memberof OrganisationenApiorganisationControllerFindOrganizations
     */
    offset?: number
    /**
     * The requested limit for the page size.
     * Defaults to: undefined
     * @type number
     * @memberof OrganisationenApiorganisationControllerFindOrganizations
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrganisationenApiorganisationControllerFindOrganizations
     */
    kennung?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrganisationenApiorganisationControllerFindOrganizations
     */
    name?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrganisationenApiorganisationControllerFindOrganizations
     */
    searchString?: string
    /**
     * 
     * Defaults to: undefined
     * @type OrganisationsTyp
     * @memberof OrganisationenApiorganisationControllerFindOrganizations
     */
    typ?: OrganisationsTyp
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;RollenSystemRecht&gt;
     * @memberof OrganisationenApiorganisationControllerFindOrganizations
     */
    systemrechte?: Array<RollenSystemRecht>
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;OrganisationsTyp&gt;
     * @memberof OrganisationenApiorganisationControllerFindOrganizations
     */
    excludeTyp?: Array<OrganisationsTyp>
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof OrganisationenApiorganisationControllerFindOrganizations
     */
    administriertVon?: Array<string>
    /**
     * Liefert Organisationen mit den angegebenen IDs, selbst wenn andere Filterkriterien nicht zutreffen (ODER-verknüpft mit anderen Kriterien).
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof OrganisationenApiorganisationControllerFindOrganizations
     */
    organisationIds?: Array<string>
}

export interface OrganisationenApiOrganisationControllerGetAdministrierteOrganisationenRequest {
    /**
     * The id of an organization
     * Defaults to: undefined
     * @type string
     * @memberof OrganisationenApiorganisationControllerGetAdministrierteOrganisationen
     */
    organisationId: string
    /**
     * The offset of the paginated list.
     * Defaults to: undefined
     * @type number
     * @memberof OrganisationenApiorganisationControllerGetAdministrierteOrganisationen
     */
    offset?: number
    /**
     * The requested limit for the page size.
     * Defaults to: undefined
     * @type number
     * @memberof OrganisationenApiorganisationControllerGetAdministrierteOrganisationen
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof OrganisationenApiorganisationControllerGetAdministrierteOrganisationen
     */
    searchFilter?: string
}

export interface OrganisationenApiOrganisationControllerGetParentsByIdsRequest {
    /**
     * 
     * @type ParentOrganisationsByIdsBodyParams
     * @memberof OrganisationenApiorganisationControllerGetParentsByIds
     */
    parentOrganisationsByIdsBodyParams: ParentOrganisationsByIdsBodyParams
}

export interface OrganisationenApiOrganisationControllerGetRootChildrenRequest {
}

export interface OrganisationenApiOrganisationControllerGetRootOrganisationRequest {
}

export interface OrganisationenApiOrganisationControllerGetZugehoerigeOrganisationenRequest {
    /**
     * The id of an organization
     * Defaults to: undefined
     * @type string
     * @memberof OrganisationenApiorganisationControllerGetZugehoerigeOrganisationen
     */
    organisationId: string
}

export interface OrganisationenApiOrganisationControllerUpdateOrganisationRequest {
    /**
     * The id of an organization
     * Defaults to: undefined
     * @type string
     * @memberof OrganisationenApiorganisationControllerUpdateOrganisation
     */
    organisationId: string
    /**
     * 
     * @type UpdateOrganisationBodyParams
     * @memberof OrganisationenApiorganisationControllerUpdateOrganisation
     */
    updateOrganisationBodyParams: UpdateOrganisationBodyParams
}

export interface OrganisationenApiOrganisationControllerUpdateOrganisationNameRequest {
    /**
     * The id of an organization
     * Defaults to: undefined
     * @type string
     * @memberof OrganisationenApiorganisationControllerUpdateOrganisationName
     */
    organisationId: string
    /**
     * 
     * @type OrganisationByNameBodyParams
     * @memberof OrganisationenApiorganisationControllerUpdateOrganisationName
     */
    organisationByNameBodyParams: OrganisationByNameBodyParams
}

export class ObjectOrganisationenApi {
    private api: ObservableOrganisationenApi

    public constructor(configuration: Configuration, requestFactory?: OrganisationenApiRequestFactory, responseProcessor?: OrganisationenApiResponseProcessor) {
        this.api = new ObservableOrganisationenApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public organisationControllerAddAdministrierteOrganisationWithHttpInfo(param: OrganisationenApiOrganisationControllerAddAdministrierteOrganisationRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.organisationControllerAddAdministrierteOrganisationWithHttpInfo(param.organisationId, param.organisationByIdBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerAddAdministrierteOrganisation(param: OrganisationenApiOrganisationControllerAddAdministrierteOrganisationRequest, options?: Configuration): Promise<void> {
        return this.api.organisationControllerAddAdministrierteOrganisation(param.organisationId, param.organisationByIdBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerAddZugehoerigeOrganisationWithHttpInfo(param: OrganisationenApiOrganisationControllerAddZugehoerigeOrganisationRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.organisationControllerAddZugehoerigeOrganisationWithHttpInfo(param.organisationId, param.organisationByIdBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerAddZugehoerigeOrganisation(param: OrganisationenApiOrganisationControllerAddZugehoerigeOrganisationRequest, options?: Configuration): Promise<void> {
        return this.api.organisationControllerAddZugehoerigeOrganisation(param.organisationId, param.organisationByIdBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerCreateOrganisationWithHttpInfo(param: OrganisationenApiOrganisationControllerCreateOrganisationRequest, options?: Configuration): Promise<HttpInfo<OrganisationResponse>> {
        return this.api.organisationControllerCreateOrganisationWithHttpInfo(param.createOrganisationBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerCreateOrganisation(param: OrganisationenApiOrganisationControllerCreateOrganisationRequest, options?: Configuration): Promise<OrganisationResponse> {
        return this.api.organisationControllerCreateOrganisation(param.createOrganisationBodyParams,  options).toPromise();
    }

    /**
     * Delete an organisation of type Klasse by id.
     * 
     * @param param the request object
     */
    public organisationControllerDeleteKlasseWithHttpInfo(param: OrganisationenApiOrganisationControllerDeleteKlasseRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.organisationControllerDeleteKlasseWithHttpInfo(param.organisationId,  options).toPromise();
    }

    /**
     * Delete an organisation of type Klasse by id.
     * 
     * @param param the request object
     */
    public organisationControllerDeleteKlasse(param: OrganisationenApiOrganisationControllerDeleteKlasseRequest, options?: Configuration): Promise<void> {
        return this.api.organisationControllerDeleteKlasse(param.organisationId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerEnableForitslearningWithHttpInfo(param: OrganisationenApiOrganisationControllerEnableForitslearningRequest, options?: Configuration): Promise<HttpInfo<OrganisationResponseLegacy>> {
        return this.api.organisationControllerEnableForitslearningWithHttpInfo(param.organisationId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerEnableForitslearning(param: OrganisationenApiOrganisationControllerEnableForitslearningRequest, options?: Configuration): Promise<OrganisationResponseLegacy> {
        return this.api.organisationControllerEnableForitslearning(param.organisationId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerFindOrganisationByIdWithHttpInfo(param: OrganisationenApiOrganisationControllerFindOrganisationByIdRequest, options?: Configuration): Promise<HttpInfo<OrganisationResponse>> {
        return this.api.organisationControllerFindOrganisationByIdWithHttpInfo(param.organisationId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerFindOrganisationById(param: OrganisationenApiOrganisationControllerFindOrganisationByIdRequest, options?: Configuration): Promise<OrganisationResponse> {
        return this.api.organisationControllerFindOrganisationById(param.organisationId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerFindOrganizationsWithHttpInfo(param: OrganisationenApiOrganisationControllerFindOrganizationsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<OrganisationResponse>>> {
        return this.api.organisationControllerFindOrganizationsWithHttpInfo(param.offset, param.limit, param.kennung, param.name, param.searchString, param.typ, param.systemrechte, param.excludeTyp, param.administriertVon, param.organisationIds,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerFindOrganizations(param: OrganisationenApiOrganisationControllerFindOrganizationsRequest = {}, options?: Configuration): Promise<Array<OrganisationResponse>> {
        return this.api.organisationControllerFindOrganizations(param.offset, param.limit, param.kennung, param.name, param.searchString, param.typ, param.systemrechte, param.excludeTyp, param.administriertVon, param.organisationIds,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerGetAdministrierteOrganisationenWithHttpInfo(param: OrganisationenApiOrganisationControllerGetAdministrierteOrganisationenRequest, options?: Configuration): Promise<HttpInfo<Array<OrganisationResponse>>> {
        return this.api.organisationControllerGetAdministrierteOrganisationenWithHttpInfo(param.organisationId, param.offset, param.limit, param.searchFilter,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerGetAdministrierteOrganisationen(param: OrganisationenApiOrganisationControllerGetAdministrierteOrganisationenRequest, options?: Configuration): Promise<Array<OrganisationResponse>> {
        return this.api.organisationControllerGetAdministrierteOrganisationen(param.organisationId, param.offset, param.limit, param.searchFilter,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerGetParentsByIdsWithHttpInfo(param: OrganisationenApiOrganisationControllerGetParentsByIdsRequest, options?: Configuration): Promise<HttpInfo<ParentOrganisationenResponse>> {
        return this.api.organisationControllerGetParentsByIdsWithHttpInfo(param.parentOrganisationsByIdsBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerGetParentsByIds(param: OrganisationenApiOrganisationControllerGetParentsByIdsRequest, options?: Configuration): Promise<ParentOrganisationenResponse> {
        return this.api.organisationControllerGetParentsByIds(param.parentOrganisationsByIdsBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerGetRootChildrenWithHttpInfo(param: OrganisationenApiOrganisationControllerGetRootChildrenRequest = {}, options?: Configuration): Promise<HttpInfo<OrganisationRootChildrenResponse>> {
        return this.api.organisationControllerGetRootChildrenWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerGetRootChildren(param: OrganisationenApiOrganisationControllerGetRootChildrenRequest = {}, options?: Configuration): Promise<OrganisationRootChildrenResponse> {
        return this.api.organisationControllerGetRootChildren( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerGetRootOrganisationWithHttpInfo(param: OrganisationenApiOrganisationControllerGetRootOrganisationRequest = {}, options?: Configuration): Promise<HttpInfo<OrganisationResponse>> {
        return this.api.organisationControllerGetRootOrganisationWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerGetRootOrganisation(param: OrganisationenApiOrganisationControllerGetRootOrganisationRequest = {}, options?: Configuration): Promise<OrganisationResponse> {
        return this.api.organisationControllerGetRootOrganisation( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerGetZugehoerigeOrganisationenWithHttpInfo(param: OrganisationenApiOrganisationControllerGetZugehoerigeOrganisationenRequest, options?: Configuration): Promise<HttpInfo<Array<OrganisationResponse>>> {
        return this.api.organisationControllerGetZugehoerigeOrganisationenWithHttpInfo(param.organisationId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerGetZugehoerigeOrganisationen(param: OrganisationenApiOrganisationControllerGetZugehoerigeOrganisationenRequest, options?: Configuration): Promise<Array<OrganisationResponse>> {
        return this.api.organisationControllerGetZugehoerigeOrganisationen(param.organisationId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerUpdateOrganisationWithHttpInfo(param: OrganisationenApiOrganisationControllerUpdateOrganisationRequest, options?: Configuration): Promise<HttpInfo<OrganisationResponse>> {
        return this.api.organisationControllerUpdateOrganisationWithHttpInfo(param.organisationId, param.updateOrganisationBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerUpdateOrganisation(param: OrganisationenApiOrganisationControllerUpdateOrganisationRequest, options?: Configuration): Promise<OrganisationResponse> {
        return this.api.organisationControllerUpdateOrganisation(param.organisationId, param.updateOrganisationBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerUpdateOrganisationNameWithHttpInfo(param: OrganisationenApiOrganisationControllerUpdateOrganisationNameRequest, options?: Configuration): Promise<HttpInfo<OrganisationResponseLegacy>> {
        return this.api.organisationControllerUpdateOrganisationNameWithHttpInfo(param.organisationId, param.organisationByNameBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public organisationControllerUpdateOrganisationName(param: OrganisationenApiOrganisationControllerUpdateOrganisationNameRequest, options?: Configuration): Promise<OrganisationResponseLegacy> {
        return this.api.organisationControllerUpdateOrganisationName(param.organisationId, param.organisationByNameBodyParams,  options).toPromise();
    }

}

import { ObservablePersonAdministrationApi } from "./ObservableAPI.ts";
import { PersonAdministrationApiRequestFactory, PersonAdministrationApiResponseProcessor} from "../apis/PersonAdministrationApi.ts";

export interface PersonAdministrationApiPersonAdministrationControllerFindRollenRequest {
    /**
     * Rolle name used to filter for rollen in personenkontext.
     * Defaults to: undefined
     * @type string
     * @memberof PersonAdministrationApipersonAdministrationControllerFindRollen
     */
    rolleName?: string
    /**
     * The limit of items for the request.
     * Defaults to: undefined
     * @type number
     * @memberof PersonAdministrationApipersonAdministrationControllerFindRollen
     */
    limit?: number
}

export class ObjectPersonAdministrationApi {
    private api: ObservablePersonAdministrationApi

    public constructor(configuration: Configuration, requestFactory?: PersonAdministrationApiRequestFactory, responseProcessor?: PersonAdministrationApiResponseProcessor) {
        this.api = new ObservablePersonAdministrationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public personAdministrationControllerFindRollenWithHttpInfo(param: PersonAdministrationApiPersonAdministrationControllerFindRollenRequest = {}, options?: Configuration): Promise<HttpInfo<FindRollenResponse>> {
        return this.api.personAdministrationControllerFindRollenWithHttpInfo(param.rolleName, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personAdministrationControllerFindRollen(param: PersonAdministrationApiPersonAdministrationControllerFindRollenRequest = {}, options?: Configuration): Promise<FindRollenResponse> {
        return this.api.personAdministrationControllerFindRollen(param.rolleName, param.limit,  options).toPromise();
    }

}

import { ObservablePersonInfoApi } from "./ObservableAPI.ts";
import { PersonInfoApiRequestFactory, PersonInfoApiResponseProcessor} from "../apis/PersonInfoApi.ts";

export interface PersonInfoApiPersonInfoControllerInfoRequest {
}

export class ObjectPersonInfoApi {
    private api: ObservablePersonInfoApi

    public constructor(configuration: Configuration, requestFactory?: PersonInfoApiRequestFactory, responseProcessor?: PersonInfoApiResponseProcessor) {
        this.api = new ObservablePersonInfoApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Info about logged in person.
     * @param param the request object
     */
    public personInfoControllerInfoWithHttpInfo(param: PersonInfoApiPersonInfoControllerInfoRequest = {}, options?: Configuration): Promise<HttpInfo<PersonInfoResponse>> {
        return this.api.personInfoControllerInfoWithHttpInfo( options).toPromise();
    }

    /**
     * Info about logged in person.
     * @param param the request object
     */
    public personInfoControllerInfo(param: PersonInfoApiPersonInfoControllerInfoRequest = {}, options?: Configuration): Promise<PersonInfoResponse> {
        return this.api.personInfoControllerInfo( options).toPromise();
    }

}

import { ObservablePersonenApi } from "./ObservableAPI.ts";
import { PersonenApiRequestFactory, PersonenApiResponseProcessor} from "../apis/PersonenApi.ts";

export interface PersonenApiPersonControllerCreatePersonMigrationRequest {
    /**
     * 
     * @type CreatePersonMigrationBodyParams
     * @memberof PersonenApipersonControllerCreatePersonMigration
     */
    createPersonMigrationBodyParams: CreatePersonMigrationBodyParams
}

export interface PersonenApiPersonControllerCreatePersonenkontextRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PersonenApipersonControllerCreatePersonenkontext
     */
    personId: string
}

export interface PersonenApiPersonControllerDeletePersonByIdRequest {
    /**
     * The id for the account.
     * Defaults to: undefined
     * @type string
     * @memberof PersonenApipersonControllerDeletePersonById
     */
    personId: string
}

export interface PersonenApiPersonControllerFindPersonByIdRequest {
    /**
     * The id for the account.
     * Defaults to: undefined
     * @type string
     * @memberof PersonenApipersonControllerFindPersonById
     */
    personId: string
}

export interface PersonenApiPersonControllerFindPersonenkontexteRequest {
    /**
     * The id for the account.
     * Defaults to: undefined
     * @type string
     * @memberof PersonenApipersonControllerFindPersonenkontexte
     */
    personId: string
    /**
     * The offset of the paginated list.
     * Defaults to: undefined
     * @type number
     * @memberof PersonenApipersonControllerFindPersonenkontexte
     */
    offset?: number
    /**
     * The requested limit for the page size.
     * Defaults to: undefined
     * @type number
     * @memberof PersonenApipersonControllerFindPersonenkontexte
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PersonenApipersonControllerFindPersonenkontexte
     */
    personId2?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PersonenApipersonControllerFindPersonenkontexte
     */
    referrer?: string
    /**
     * 
     * Defaults to: undefined
     * @type Personenstatus
     * @memberof PersonenApipersonControllerFindPersonenkontexte
     */
    personenstatus?: Personenstatus
    /**
     * 
     * Defaults to: undefined
     * @type Sichtfreigabe
     * @memberof PersonenApipersonControllerFindPersonenkontexte
     */
    sichtfreigabe?: Sichtfreigabe
}

export interface PersonenApiPersonControllerFindPersonsRequest {
    /**
     * The offset of the paginated list.
     * Defaults to: undefined
     * @type number
     * @memberof PersonenApipersonControllerFindPersons
     */
    offset?: number
    /**
     * The requested limit for the page size.
     * Defaults to: undefined
     * @type number
     * @memberof PersonenApipersonControllerFindPersons
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PersonenApipersonControllerFindPersons
     */
    referrer?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PersonenApipersonControllerFindPersons
     */
    familienname?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PersonenApipersonControllerFindPersons
     */
    vorname?: string
    /**
     * 
     * Defaults to: &#39;nein&#39;
     * @type &#39;ja&#39; | &#39;nein&#39;
     * @memberof PersonenApipersonControllerFindPersons
     */
    sichtfreigabe?: 'ja' | 'nein'
    /**
     * List of Organisation ID used to filter for Persons.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PersonenApipersonControllerFindPersons
     */
    organisationIDs?: Array<string>
    /**
     * List of Role ID used to filter for Persons.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PersonenApipersonControllerFindPersons
     */
    rolleIDs?: Array<string>
    /**
     * Search filter used to filter for Persons. It could be the vorname, familienname, referrer or the personalnummer.
     * Defaults to: undefined
     * @type string
     * @memberof PersonenApipersonControllerFindPersons
     */
    suchFilter?: string
    /**
     * Order to sort by.
     * Defaults to: undefined
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof PersonenApipersonControllerFindPersons
     */
    sortOrder?: 'asc' | 'desc'
    /**
     * Field to sort by.
     * Defaults to: undefined
     * @type &#39;familienname&#39; | &#39;vorname&#39; | &#39;personalnummer&#39; | &#39;referrer&#39;
     * @memberof PersonenApipersonControllerFindPersons
     */
    sortField?: 'familienname' | 'vorname' | 'personalnummer' | 'referrer'
}

export interface PersonenApiPersonControllerLockPersonRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PersonenApipersonControllerLockPerson
     */
    personId: string
    /**
     * 
     * @type LockUserBodyParams
     * @memberof PersonenApipersonControllerLockPerson
     */
    lockUserBodyParams: LockUserBodyParams
}

export interface PersonenApiPersonControllerResetPasswordByPersonIdRequest {
    /**
     * The id for the account.
     * Defaults to: undefined
     * @type string
     * @memberof PersonenApipersonControllerResetPasswordByPersonId
     */
    personId: string
}

export interface PersonenApiPersonControllerSyncPersonRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PersonenApipersonControllerSyncPerson
     */
    personId: string
}

export interface PersonenApiPersonControllerUpdateMetadataRequest {
    /**
     * The id for the account.
     * Defaults to: undefined
     * @type string
     * @memberof PersonenApipersonControllerUpdateMetadata
     */
    personId: string
    /**
     * 
     * @type PersonMetadataBodyParams
     * @memberof PersonenApipersonControllerUpdateMetadata
     */
    personMetadataBodyParams: PersonMetadataBodyParams
}

export interface PersonenApiPersonControllerUpdatePersonRequest {
    /**
     * The id for the account.
     * Defaults to: undefined
     * @type string
     * @memberof PersonenApipersonControllerUpdatePerson
     */
    personId: string
    /**
     * 
     * @type UpdatePersonBodyParams
     * @memberof PersonenApipersonControllerUpdatePerson
     */
    updatePersonBodyParams: UpdatePersonBodyParams
}

export class ObjectPersonenApi {
    private api: ObservablePersonenApi

    public constructor(configuration: Configuration, requestFactory?: PersonenApiRequestFactory, responseProcessor?: PersonenApiResponseProcessor) {
        this.api = new ObservablePersonenApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public personControllerCreatePersonMigrationWithHttpInfo(param: PersonenApiPersonControllerCreatePersonMigrationRequest, options?: Configuration): Promise<HttpInfo<PersonendatensatzResponse>> {
        return this.api.personControllerCreatePersonMigrationWithHttpInfo(param.createPersonMigrationBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personControllerCreatePersonMigration(param: PersonenApiPersonControllerCreatePersonMigrationRequest, options?: Configuration): Promise<PersonendatensatzResponse> {
        return this.api.personControllerCreatePersonMigration(param.createPersonMigrationBodyParams,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public personControllerCreatePersonenkontextWithHttpInfo(param: PersonenApiPersonControllerCreatePersonenkontextRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.personControllerCreatePersonenkontextWithHttpInfo(param.personId,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public personControllerCreatePersonenkontext(param: PersonenApiPersonControllerCreatePersonenkontextRequest, options?: Configuration): Promise<void> {
        return this.api.personControllerCreatePersonenkontext(param.personId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personControllerDeletePersonByIdWithHttpInfo(param: PersonenApiPersonControllerDeletePersonByIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.personControllerDeletePersonByIdWithHttpInfo(param.personId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personControllerDeletePersonById(param: PersonenApiPersonControllerDeletePersonByIdRequest, options?: Configuration): Promise<void> {
        return this.api.personControllerDeletePersonById(param.personId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personControllerFindPersonByIdWithHttpInfo(param: PersonenApiPersonControllerFindPersonByIdRequest, options?: Configuration): Promise<HttpInfo<PersonendatensatzResponse>> {
        return this.api.personControllerFindPersonByIdWithHttpInfo(param.personId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personControllerFindPersonById(param: PersonenApiPersonControllerFindPersonByIdRequest, options?: Configuration): Promise<PersonendatensatzResponse> {
        return this.api.personControllerFindPersonById(param.personId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personControllerFindPersonenkontexteWithHttpInfo(param: PersonenApiPersonControllerFindPersonenkontexteRequest, options?: Configuration): Promise<HttpInfo<PersonControllerFindPersonenkontexte200Response>> {
        return this.api.personControllerFindPersonenkontexteWithHttpInfo(param.personId, param.offset, param.limit, param.personId2, param.referrer, param.personenstatus, param.sichtfreigabe,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personControllerFindPersonenkontexte(param: PersonenApiPersonControllerFindPersonenkontexteRequest, options?: Configuration): Promise<PersonControllerFindPersonenkontexte200Response> {
        return this.api.personControllerFindPersonenkontexte(param.personId, param.offset, param.limit, param.personId2, param.referrer, param.personenstatus, param.sichtfreigabe,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personControllerFindPersonsWithHttpInfo(param: PersonenApiPersonControllerFindPersonsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<PersonendatensatzResponse>>> {
        return this.api.personControllerFindPersonsWithHttpInfo(param.offset, param.limit, param.referrer, param.familienname, param.vorname, param.sichtfreigabe, param.organisationIDs, param.rolleIDs, param.suchFilter, param.sortOrder, param.sortField,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personControllerFindPersons(param: PersonenApiPersonControllerFindPersonsRequest = {}, options?: Configuration): Promise<Array<PersonendatensatzResponse>> {
        return this.api.personControllerFindPersons(param.offset, param.limit, param.referrer, param.familienname, param.vorname, param.sichtfreigabe, param.organisationIDs, param.rolleIDs, param.suchFilter, param.sortOrder, param.sortField,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personControllerLockPersonWithHttpInfo(param: PersonenApiPersonControllerLockPersonRequest, options?: Configuration): Promise<HttpInfo<PersonLockResponse>> {
        return this.api.personControllerLockPersonWithHttpInfo(param.personId, param.lockUserBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personControllerLockPerson(param: PersonenApiPersonControllerLockPersonRequest, options?: Configuration): Promise<PersonLockResponse> {
        return this.api.personControllerLockPerson(param.personId, param.lockUserBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personControllerResetPasswordByPersonIdWithHttpInfo(param: PersonenApiPersonControllerResetPasswordByPersonIdRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.personControllerResetPasswordByPersonIdWithHttpInfo(param.personId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personControllerResetPasswordByPersonId(param: PersonenApiPersonControllerResetPasswordByPersonIdRequest, options?: Configuration): Promise<string> {
        return this.api.personControllerResetPasswordByPersonId(param.personId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personControllerSyncPersonWithHttpInfo(param: PersonenApiPersonControllerSyncPersonRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.personControllerSyncPersonWithHttpInfo(param.personId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personControllerSyncPerson(param: PersonenApiPersonControllerSyncPersonRequest, options?: Configuration): Promise<void> {
        return this.api.personControllerSyncPerson(param.personId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personControllerUpdateMetadataWithHttpInfo(param: PersonenApiPersonControllerUpdateMetadataRequest, options?: Configuration): Promise<HttpInfo<PersonendatensatzResponse>> {
        return this.api.personControllerUpdateMetadataWithHttpInfo(param.personId, param.personMetadataBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personControllerUpdateMetadata(param: PersonenApiPersonControllerUpdateMetadataRequest, options?: Configuration): Promise<PersonendatensatzResponse> {
        return this.api.personControllerUpdateMetadata(param.personId, param.personMetadataBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personControllerUpdatePersonWithHttpInfo(param: PersonenApiPersonControllerUpdatePersonRequest, options?: Configuration): Promise<HttpInfo<PersonendatensatzResponse>> {
        return this.api.personControllerUpdatePersonWithHttpInfo(param.personId, param.updatePersonBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personControllerUpdatePerson(param: PersonenApiPersonControllerUpdatePersonRequest, options?: Configuration): Promise<PersonendatensatzResponse> {
        return this.api.personControllerUpdatePerson(param.personId, param.updatePersonBodyParams,  options).toPromise();
    }

}

import { ObservablePersonenFrontendApi } from "./ObservableAPI.ts";
import { PersonenFrontendApiRequestFactory, PersonenFrontendApiResponseProcessor} from "../apis/PersonenFrontendApi.ts";

export interface PersonenFrontendApiPersonFrontendControllerFindPersonsRequest {
    /**
     * The offset of the paginated list.
     * Defaults to: undefined
     * @type number
     * @memberof PersonenFrontendApipersonFrontendControllerFindPersons
     */
    offset?: number
    /**
     * The requested limit for the page size.
     * Defaults to: undefined
     * @type number
     * @memberof PersonenFrontendApipersonFrontendControllerFindPersons
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PersonenFrontendApipersonFrontendControllerFindPersons
     */
    referrer?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PersonenFrontendApipersonFrontendControllerFindPersons
     */
    familienname?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PersonenFrontendApipersonFrontendControllerFindPersons
     */
    vorname?: string
    /**
     * 
     * Defaults to: &#39;nein&#39;
     * @type &#39;ja&#39; | &#39;nein&#39;
     * @memberof PersonenFrontendApipersonFrontendControllerFindPersons
     */
    sichtfreigabe?: 'ja' | 'nein'
    /**
     * List of Organisation ID used to filter for Persons.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PersonenFrontendApipersonFrontendControllerFindPersons
     */
    organisationIDs?: Array<string>
    /**
     * List of Role ID used to filter for Persons.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof PersonenFrontendApipersonFrontendControllerFindPersons
     */
    rolleIDs?: Array<string>
    /**
     * Search filter used to filter for Persons. It could be the vorname, familienname, referrer or the personalnummer.
     * Defaults to: undefined
     * @type string
     * @memberof PersonenFrontendApipersonFrontendControllerFindPersons
     */
    suchFilter?: string
    /**
     * Order to sort by.
     * Defaults to: undefined
     * @type &#39;asc&#39; | &#39;desc&#39;
     * @memberof PersonenFrontendApipersonFrontendControllerFindPersons
     */
    sortOrder?: 'asc' | 'desc'
    /**
     * Field to sort by.
     * Defaults to: undefined
     * @type &#39;familienname&#39; | &#39;vorname&#39; | &#39;personalnummer&#39; | &#39;referrer&#39;
     * @memberof PersonenFrontendApipersonFrontendControllerFindPersons
     */
    sortField?: 'familienname' | 'vorname' | 'personalnummer' | 'referrer'
}

export class ObjectPersonenFrontendApi {
    private api: ObservablePersonenFrontendApi

    public constructor(configuration: Configuration, requestFactory?: PersonenFrontendApiRequestFactory, responseProcessor?: PersonenFrontendApiResponseProcessor) {
        this.api = new ObservablePersonenFrontendApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public personFrontendControllerFindPersonsWithHttpInfo(param: PersonenFrontendApiPersonFrontendControllerFindPersonsRequest = {}, options?: Configuration): Promise<HttpInfo<PersonFrontendControllerFindPersons200Response>> {
        return this.api.personFrontendControllerFindPersonsWithHttpInfo(param.offset, param.limit, param.referrer, param.familienname, param.vorname, param.sichtfreigabe, param.organisationIDs, param.rolleIDs, param.suchFilter, param.sortOrder, param.sortField,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personFrontendControllerFindPersons(param: PersonenFrontendApiPersonFrontendControllerFindPersonsRequest = {}, options?: Configuration): Promise<PersonFrontendControllerFindPersons200Response> {
        return this.api.personFrontendControllerFindPersons(param.offset, param.limit, param.referrer, param.familienname, param.vorname, param.sichtfreigabe, param.organisationIDs, param.rolleIDs, param.suchFilter, param.sortOrder, param.sortField,  options).toPromise();
    }

}

import { ObservablePersonenkontextApi } from "./ObservableAPI.ts";
import { PersonenkontextApiRequestFactory, PersonenkontextApiResponseProcessor} from "../apis/PersonenkontextApi.ts";

export interface PersonenkontextApiDbiamPersonenkontextWorkflowControllerCommitRequest {
    /**
     * The ID for the person.
     * Defaults to: undefined
     * @type string
     * @memberof PersonenkontextApidbiamPersonenkontextWorkflowControllerCommit
     */
    personId: string
    /**
     * 
     * @type DbiamUpdatePersonenkontexteBodyParams
     * @memberof PersonenkontextApidbiamPersonenkontextWorkflowControllerCommit
     */
    dbiamUpdatePersonenkontexteBodyParams: DbiamUpdatePersonenkontexteBodyParams
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PersonenkontextApidbiamPersonenkontextWorkflowControllerCommit
     */
    personalnummer?: string
}

export interface PersonenkontextApiDbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexteRequest {
    /**
     * 
     * @type DbiamCreatePersonWithPersonenkontexteBodyParams
     * @memberof PersonenkontextApidbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexte
     */
    dbiamCreatePersonWithPersonenkontexteBodyParams: DbiamCreatePersonWithPersonenkontexteBodyParams
}

export interface PersonenkontextApiDbiamPersonenkontextWorkflowControllerFindSchulstrukturknotenRequest {
    /**
     * RolleId used to filter for schulstrukturknoten in personenkontext.
     * Defaults to: undefined
     * @type string
     * @memberof PersonenkontextApidbiamPersonenkontextWorkflowControllerFindSchulstrukturknoten
     */
    rolleId: string
    /**
     * Organisation/SSK name used to filter for schulstrukturknoten in personenkontext.
     * Defaults to: undefined
     * @type string
     * @memberof PersonenkontextApidbiamPersonenkontextWorkflowControllerFindSchulstrukturknoten
     */
    sskName?: string
    /**
     * The limit of items for the request.
     * Defaults to: undefined
     * @type number
     * @memberof PersonenkontextApidbiamPersonenkontextWorkflowControllerFindSchulstrukturknoten
     */
    limit?: number
}

export interface PersonenkontextApiDbiamPersonenkontextWorkflowControllerProcessStepRequest {
    /**
     * ID of the organisation to filter the rollen later
     * Defaults to: undefined
     * @type string
     * @memberof PersonenkontextApidbiamPersonenkontextWorkflowControllerProcessStep
     */
    organisationId?: string
    /**
     * ID of the rolle.
     * Defaults to: undefined
     * @type string
     * @memberof PersonenkontextApidbiamPersonenkontextWorkflowControllerProcessStep
     */
    rolleId?: string
    /**
     * Rolle name used to filter for rollen in personenkontext.
     * Defaults to: undefined
     * @type string
     * @memberof PersonenkontextApidbiamPersonenkontextWorkflowControllerProcessStep
     */
    rolleName?: string
    /**
     * Organisation/SSK name used to filter for schulstrukturknoten in personenkontext.
     * Defaults to: undefined
     * @type string
     * @memberof PersonenkontextApidbiamPersonenkontextWorkflowControllerProcessStep
     */
    organisationName?: string
    /**
     * The limit of items for the request.
     * Defaults to: undefined
     * @type number
     * @memberof PersonenkontextApidbiamPersonenkontextWorkflowControllerProcessStep
     */
    limit?: number
}

export class ObjectPersonenkontextApi {
    private api: ObservablePersonenkontextApi

    public constructor(configuration: Configuration, requestFactory?: PersonenkontextApiRequestFactory, responseProcessor?: PersonenkontextApiResponseProcessor) {
        this.api = new ObservablePersonenkontextApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public dbiamPersonenkontextWorkflowControllerCommitWithHttpInfo(param: PersonenkontextApiDbiamPersonenkontextWorkflowControllerCommitRequest, options?: Configuration): Promise<HttpInfo<PersonenkontexteUpdateResponse>> {
        return this.api.dbiamPersonenkontextWorkflowControllerCommitWithHttpInfo(param.personId, param.dbiamUpdatePersonenkontexteBodyParams, param.personalnummer,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public dbiamPersonenkontextWorkflowControllerCommit(param: PersonenkontextApiDbiamPersonenkontextWorkflowControllerCommitRequest, options?: Configuration): Promise<PersonenkontexteUpdateResponse> {
        return this.api.dbiamPersonenkontextWorkflowControllerCommit(param.personId, param.dbiamUpdatePersonenkontexteBodyParams, param.personalnummer,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexteWithHttpInfo(param: PersonenkontextApiDbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexteRequest, options?: Configuration): Promise<HttpInfo<DBiamPersonResponse>> {
        return this.api.dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexteWithHttpInfo(param.dbiamCreatePersonWithPersonenkontexteBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexte(param: PersonenkontextApiDbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexteRequest, options?: Configuration): Promise<DBiamPersonResponse> {
        return this.api.dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexte(param.dbiamCreatePersonWithPersonenkontexteBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public dbiamPersonenkontextWorkflowControllerFindSchulstrukturknotenWithHttpInfo(param: PersonenkontextApiDbiamPersonenkontextWorkflowControllerFindSchulstrukturknotenRequest, options?: Configuration): Promise<HttpInfo<FindSchulstrukturknotenResponse>> {
        return this.api.dbiamPersonenkontextWorkflowControllerFindSchulstrukturknotenWithHttpInfo(param.rolleId, param.sskName, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public dbiamPersonenkontextWorkflowControllerFindSchulstrukturknoten(param: PersonenkontextApiDbiamPersonenkontextWorkflowControllerFindSchulstrukturknotenRequest, options?: Configuration): Promise<FindSchulstrukturknotenResponse> {
        return this.api.dbiamPersonenkontextWorkflowControllerFindSchulstrukturknoten(param.rolleId, param.sskName, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public dbiamPersonenkontextWorkflowControllerProcessStepWithHttpInfo(param: PersonenkontextApiDbiamPersonenkontextWorkflowControllerProcessStepRequest = {}, options?: Configuration): Promise<HttpInfo<PersonenkontextWorkflowResponse>> {
        return this.api.dbiamPersonenkontextWorkflowControllerProcessStepWithHttpInfo(param.organisationId, param.rolleId, param.rolleName, param.organisationName, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public dbiamPersonenkontextWorkflowControllerProcessStep(param: PersonenkontextApiDbiamPersonenkontextWorkflowControllerProcessStepRequest = {}, options?: Configuration): Promise<PersonenkontextWorkflowResponse> {
        return this.api.dbiamPersonenkontextWorkflowControllerProcessStep(param.organisationId, param.rolleId, param.rolleName, param.organisationName, param.limit,  options).toPromise();
    }

}

import { ObservablePersonenkontexteApi } from "./ObservableAPI.ts";
import { PersonenkontexteApiRequestFactory, PersonenkontexteApiResponseProcessor} from "../apis/PersonenkontexteApi.ts";

export interface PersonenkontexteApiPersonenkontextControllerDeletePersonenkontextByIdRequest {
    /**
     * The id for the personenkontext.
     * Defaults to: undefined
     * @type string
     * @memberof PersonenkontexteApipersonenkontextControllerDeletePersonenkontextById
     */
    personenkontextId: string
    /**
     * 
     * @type DeleteRevisionBodyParams
     * @memberof PersonenkontexteApipersonenkontextControllerDeletePersonenkontextById
     */
    deleteRevisionBodyParams: DeleteRevisionBodyParams
}

export interface PersonenkontexteApiPersonenkontextControllerFindPersonenkontextByIdRequest {
    /**
     * The id for the personenkontext.
     * Defaults to: undefined
     * @type string
     * @memberof PersonenkontexteApipersonenkontextControllerFindPersonenkontextById
     */
    personenkontextId: string
}

export interface PersonenkontexteApiPersonenkontextControllerFindPersonenkontexteRequest {
    /**
     * The offset of the paginated list.
     * Defaults to: undefined
     * @type number
     * @memberof PersonenkontexteApipersonenkontextControllerFindPersonenkontexte
     */
    offset?: number
    /**
     * The requested limit for the page size.
     * Defaults to: undefined
     * @type number
     * @memberof PersonenkontexteApipersonenkontextControllerFindPersonenkontexte
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PersonenkontexteApipersonenkontextControllerFindPersonenkontexte
     */
    personId?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PersonenkontexteApipersonenkontextControllerFindPersonenkontexte
     */
    referrer?: string
    /**
     * 
     * Defaults to: undefined
     * @type Personenstatus
     * @memberof PersonenkontexteApipersonenkontextControllerFindPersonenkontexte
     */
    personenstatus?: Personenstatus
    /**
     * 
     * Defaults to: undefined
     * @type Sichtfreigabe
     * @memberof PersonenkontexteApipersonenkontextControllerFindPersonenkontexte
     */
    sichtfreigabe?: Sichtfreigabe
}

export interface PersonenkontexteApiPersonenkontextControllerHatSystemRechtRequest {
    /**
     * The id for the account.
     * Defaults to: undefined
     * @type string
     * @memberof PersonenkontexteApipersonenkontextControllerHatSystemRecht
     */
    personId: string
    /**
     * 
     * Defaults to: undefined
     * @type RollenSystemRecht
     * @memberof PersonenkontexteApipersonenkontextControllerHatSystemRecht
     */
    systemRecht: RollenSystemRecht
}

export interface PersonenkontexteApiPersonenkontextControllerUpdatePersonenkontextWithIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PersonenkontexteApipersonenkontextControllerUpdatePersonenkontextWithId
     */
    personenkontextId: string
}

export class ObjectPersonenkontexteApi {
    private api: ObservablePersonenkontexteApi

    public constructor(configuration: Configuration, requestFactory?: PersonenkontexteApiRequestFactory, responseProcessor?: PersonenkontexteApiResponseProcessor) {
        this.api = new ObservablePersonenkontexteApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public personenkontextControllerDeletePersonenkontextByIdWithHttpInfo(param: PersonenkontexteApiPersonenkontextControllerDeletePersonenkontextByIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.personenkontextControllerDeletePersonenkontextByIdWithHttpInfo(param.personenkontextId, param.deleteRevisionBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personenkontextControllerDeletePersonenkontextById(param: PersonenkontexteApiPersonenkontextControllerDeletePersonenkontextByIdRequest, options?: Configuration): Promise<void> {
        return this.api.personenkontextControllerDeletePersonenkontextById(param.personenkontextId, param.deleteRevisionBodyParams,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personenkontextControllerFindPersonenkontextByIdWithHttpInfo(param: PersonenkontexteApiPersonenkontextControllerFindPersonenkontextByIdRequest, options?: Configuration): Promise<HttpInfo<PersonendatensatzResponseAutomapper>> {
        return this.api.personenkontextControllerFindPersonenkontextByIdWithHttpInfo(param.personenkontextId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personenkontextControllerFindPersonenkontextById(param: PersonenkontexteApiPersonenkontextControllerFindPersonenkontextByIdRequest, options?: Configuration): Promise<PersonendatensatzResponseAutomapper> {
        return this.api.personenkontextControllerFindPersonenkontextById(param.personenkontextId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personenkontextControllerFindPersonenkontexteWithHttpInfo(param: PersonenkontexteApiPersonenkontextControllerFindPersonenkontexteRequest = {}, options?: Configuration): Promise<HttpInfo<Array<PersonenkontextdatensatzResponse>>> {
        return this.api.personenkontextControllerFindPersonenkontexteWithHttpInfo(param.offset, param.limit, param.personId, param.referrer, param.personenstatus, param.sichtfreigabe,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personenkontextControllerFindPersonenkontexte(param: PersonenkontexteApiPersonenkontextControllerFindPersonenkontexteRequest = {}, options?: Configuration): Promise<Array<PersonenkontextdatensatzResponse>> {
        return this.api.personenkontextControllerFindPersonenkontexte(param.offset, param.limit, param.personId, param.referrer, param.personenstatus, param.sichtfreigabe,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personenkontextControllerHatSystemRechtWithHttpInfo(param: PersonenkontexteApiPersonenkontextControllerHatSystemRechtRequest, options?: Configuration): Promise<HttpInfo<SystemrechtResponse>> {
        return this.api.personenkontextControllerHatSystemRechtWithHttpInfo(param.personId, param.systemRecht,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public personenkontextControllerHatSystemRecht(param: PersonenkontexteApiPersonenkontextControllerHatSystemRechtRequest, options?: Configuration): Promise<SystemrechtResponse> {
        return this.api.personenkontextControllerHatSystemRecht(param.personId, param.systemRecht,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public personenkontextControllerUpdatePersonenkontextWithIdWithHttpInfo(param: PersonenkontexteApiPersonenkontextControllerUpdatePersonenkontextWithIdRequest, options?: Configuration): Promise<HttpInfo<PersonenkontextResponse>> {
        return this.api.personenkontextControllerUpdatePersonenkontextWithIdWithHttpInfo(param.personenkontextId,  options).toPromise();
    }

    /**
     * 
     * @param param the request object
     */
    public personenkontextControllerUpdatePersonenkontextWithId(param: PersonenkontexteApiPersonenkontextControllerUpdatePersonenkontextWithIdRequest, options?: Configuration): Promise<PersonenkontextResponse> {
        return this.api.personenkontextControllerUpdatePersonenkontextWithId(param.personenkontextId,  options).toPromise();
    }

}

import { ObservableProviderApi } from "./ObservableAPI.ts";
import { ProviderApiRequestFactory, ProviderApiResponseProcessor} from "../apis/ProviderApi.ts";

export interface ProviderApiProviderControllerGetAllServiceProvidersRequest {
}

export interface ProviderApiProviderControllerGetAvailableServiceProvidersRequest {
}

export interface ProviderApiProviderControllerGetServiceProviderLogoRequest {
    /**
     * The id of the service provider
     * Defaults to: undefined
     * @type string
     * @memberof ProviderApiproviderControllerGetServiceProviderLogo
     */
    angebotId: string
}

export class ObjectProviderApi {
    private api: ObservableProviderApi

    public constructor(configuration: Configuration, requestFactory?: ProviderApiRequestFactory, responseProcessor?: ProviderApiResponseProcessor) {
        this.api = new ObservableProviderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all service-providers.
     * 
     * @param param the request object
     */
    public providerControllerGetAllServiceProvidersWithHttpInfo(param: ProviderApiProviderControllerGetAllServiceProvidersRequest = {}, options?: Configuration): Promise<HttpInfo<Array<ServiceProviderResponse>>> {
        return this.api.providerControllerGetAllServiceProvidersWithHttpInfo( options).toPromise();
    }

    /**
     * Get all service-providers.
     * 
     * @param param the request object
     */
    public providerControllerGetAllServiceProviders(param: ProviderApiProviderControllerGetAllServiceProvidersRequest = {}, options?: Configuration): Promise<Array<ServiceProviderResponse>> {
        return this.api.providerControllerGetAllServiceProviders( options).toPromise();
    }

    /**
     * Get service-providers available for logged-in user.
     * 
     * @param param the request object
     */
    public providerControllerGetAvailableServiceProvidersWithHttpInfo(param: ProviderApiProviderControllerGetAvailableServiceProvidersRequest = {}, options?: Configuration): Promise<HttpInfo<Array<ServiceProviderResponse>>> {
        return this.api.providerControllerGetAvailableServiceProvidersWithHttpInfo( options).toPromise();
    }

    /**
     * Get service-providers available for logged-in user.
     * 
     * @param param the request object
     */
    public providerControllerGetAvailableServiceProviders(param: ProviderApiProviderControllerGetAvailableServiceProvidersRequest = {}, options?: Configuration): Promise<Array<ServiceProviderResponse>> {
        return this.api.providerControllerGetAvailableServiceProviders( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public providerControllerGetServiceProviderLogoWithHttpInfo(param: ProviderApiProviderControllerGetServiceProviderLogoRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.providerControllerGetServiceProviderLogoWithHttpInfo(param.angebotId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public providerControllerGetServiceProviderLogo(param: ProviderApiProviderControllerGetServiceProviderLogoRequest, options?: Configuration): Promise<any> {
        return this.api.providerControllerGetServiceProviderLogo(param.angebotId,  options).toPromise();
    }

}

import { ObservableRolleApi } from "./ObservableAPI.ts";
import { RolleApiRequestFactory, RolleApiResponseProcessor} from "../apis/RolleApi.ts";

export interface RolleApiRolleControllerAddSystemRechtRequest {
    /**
     * The id for the rolle.
     * Defaults to: undefined
     * @type string
     * @memberof RolleApirolleControllerAddSystemRecht
     */
    rolleId: string
    /**
     * 
     * @type AddSystemrechtBodyParams
     * @memberof RolleApirolleControllerAddSystemRecht
     */
    addSystemrechtBodyParams: AddSystemrechtBodyParams
}

export interface RolleApiRolleControllerCreateRolleRequest {
    /**
     * 
     * @type CreateRolleBodyParams
     * @memberof RolleApirolleControllerCreateRolle
     */
    createRolleBodyParams: CreateRolleBodyParams
}

export interface RolleApiRolleControllerDeleteRolleRequest {
    /**
     * The id for the rolle.
     * Defaults to: undefined
     * @type string
     * @memberof RolleApirolleControllerDeleteRolle
     */
    rolleId: string
}

export interface RolleApiRolleControllerFindRolleByIdWithServiceProvidersRequest {
    /**
     * The id for the rolle.
     * Defaults to: undefined
     * @type string
     * @memberof RolleApirolleControllerFindRolleByIdWithServiceProviders
     */
    rolleId: string
}

export interface RolleApiRolleControllerFindRollenRequest {
    /**
     * The offset of the paginated list.
     * Defaults to: undefined
     * @type number
     * @memberof RolleApirolleControllerFindRollen
     */
    offset?: number
    /**
     * The requested limit for the page size.
     * Defaults to: undefined
     * @type number
     * @memberof RolleApirolleControllerFindRollen
     */
    limit?: number
    /**
     * The name for the role.
     * Defaults to: undefined
     * @type string
     * @memberof RolleApirolleControllerFindRollen
     */
    searchStr?: string
}

export interface RolleApiRolleControllerGetRolleServiceProviderIdsRequest {
    /**
     * The id for the rolle.
     * Defaults to: undefined
     * @type string
     * @memberof RolleApirolleControllerGetRolleServiceProviderIds
     */
    rolleId: string
}

export interface RolleApiRolleControllerRemoveServiceProviderByIdRequest {
    /**
     * The id for the rolle.
     * Defaults to: undefined
     * @type string
     * @memberof RolleApirolleControllerRemoveServiceProviderById
     */
    rolleId: string
    /**
     * 
     * @type RolleServiceProviderBodyParams
     * @memberof RolleApirolleControllerRemoveServiceProviderById
     */
    rolleServiceProviderBodyParams: RolleServiceProviderBodyParams
}

export interface RolleApiRolleControllerUpdateRolleRequest {
    /**
     * The id for the rolle.
     * Defaults to: undefined
     * @type string
     * @memberof RolleApirolleControllerUpdateRolle
     */
    rolleId: string
    /**
     * 
     * @type UpdateRolleBodyParams
     * @memberof RolleApirolleControllerUpdateRolle
     */
    updateRolleBodyParams: UpdateRolleBodyParams
}

export interface RolleApiRolleControllerUpdateServiceProvidersByIdRequest {
    /**
     * The id for the rolle.
     * Defaults to: undefined
     * @type string
     * @memberof RolleApirolleControllerUpdateServiceProvidersById
     */
    rolleId: string
    /**
     * 
     * @type RolleServiceProviderBodyParams
     * @memberof RolleApirolleControllerUpdateServiceProvidersById
     */
    rolleServiceProviderBodyParams: RolleServiceProviderBodyParams
}

export class ObjectRolleApi {
    private api: ObservableRolleApi

    public constructor(configuration: Configuration, requestFactory?: RolleApiRequestFactory, responseProcessor?: RolleApiResponseProcessor) {
        this.api = new ObservableRolleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add systemrecht to a rolle.
     * 
     * @param param the request object
     */
    public rolleControllerAddSystemRechtWithHttpInfo(param: RolleApiRolleControllerAddSystemRechtRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.rolleControllerAddSystemRechtWithHttpInfo(param.rolleId, param.addSystemrechtBodyParams,  options).toPromise();
    }

    /**
     * Add systemrecht to a rolle.
     * 
     * @param param the request object
     */
    public rolleControllerAddSystemRecht(param: RolleApiRolleControllerAddSystemRechtRequest, options?: Configuration): Promise<void> {
        return this.api.rolleControllerAddSystemRecht(param.rolleId, param.addSystemrechtBodyParams,  options).toPromise();
    }

    /**
     * Create a new rolle.
     * 
     * @param param the request object
     */
    public rolleControllerCreateRolleWithHttpInfo(param: RolleApiRolleControllerCreateRolleRequest, options?: Configuration): Promise<HttpInfo<RolleResponse>> {
        return this.api.rolleControllerCreateRolleWithHttpInfo(param.createRolleBodyParams,  options).toPromise();
    }

    /**
     * Create a new rolle.
     * 
     * @param param the request object
     */
    public rolleControllerCreateRolle(param: RolleApiRolleControllerCreateRolleRequest, options?: Configuration): Promise<RolleResponse> {
        return this.api.rolleControllerCreateRolle(param.createRolleBodyParams,  options).toPromise();
    }

    /**
     * Delete a role by id.
     * 
     * @param param the request object
     */
    public rolleControllerDeleteRolleWithHttpInfo(param: RolleApiRolleControllerDeleteRolleRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.rolleControllerDeleteRolleWithHttpInfo(param.rolleId,  options).toPromise();
    }

    /**
     * Delete a role by id.
     * 
     * @param param the request object
     */
    public rolleControllerDeleteRolle(param: RolleApiRolleControllerDeleteRolleRequest, options?: Configuration): Promise<void> {
        return this.api.rolleControllerDeleteRolle(param.rolleId,  options).toPromise();
    }

    /**
     * Get rolle by id.
     * 
     * @param param the request object
     */
    public rolleControllerFindRolleByIdWithServiceProvidersWithHttpInfo(param: RolleApiRolleControllerFindRolleByIdWithServiceProvidersRequest, options?: Configuration): Promise<HttpInfo<RolleWithServiceProvidersResponse>> {
        return this.api.rolleControllerFindRolleByIdWithServiceProvidersWithHttpInfo(param.rolleId,  options).toPromise();
    }

    /**
     * Get rolle by id.
     * 
     * @param param the request object
     */
    public rolleControllerFindRolleByIdWithServiceProviders(param: RolleApiRolleControllerFindRolleByIdWithServiceProvidersRequest, options?: Configuration): Promise<RolleWithServiceProvidersResponse> {
        return this.api.rolleControllerFindRolleByIdWithServiceProviders(param.rolleId,  options).toPromise();
    }

    /**
     * List all rollen.
     * 
     * @param param the request object
     */
    public rolleControllerFindRollenWithHttpInfo(param: RolleApiRolleControllerFindRollenRequest = {}, options?: Configuration): Promise<HttpInfo<Array<RolleWithServiceProvidersResponse>>> {
        return this.api.rolleControllerFindRollenWithHttpInfo(param.offset, param.limit, param.searchStr,  options).toPromise();
    }

    /**
     * List all rollen.
     * 
     * @param param the request object
     */
    public rolleControllerFindRollen(param: RolleApiRolleControllerFindRollenRequest = {}, options?: Configuration): Promise<Array<RolleWithServiceProvidersResponse>> {
        return this.api.rolleControllerFindRollen(param.offset, param.limit, param.searchStr,  options).toPromise();
    }

    /**
     * Get service-providers for a rolle by its id.
     * 
     * @param param the request object
     */
    public rolleControllerGetRolleServiceProviderIdsWithHttpInfo(param: RolleApiRolleControllerGetRolleServiceProviderIdsRequest, options?: Configuration): Promise<HttpInfo<RolleServiceProviderResponse>> {
        return this.api.rolleControllerGetRolleServiceProviderIdsWithHttpInfo(param.rolleId,  options).toPromise();
    }

    /**
     * Get service-providers for a rolle by its id.
     * 
     * @param param the request object
     */
    public rolleControllerGetRolleServiceProviderIds(param: RolleApiRolleControllerGetRolleServiceProviderIdsRequest, options?: Configuration): Promise<RolleServiceProviderResponse> {
        return this.api.rolleControllerGetRolleServiceProviderIds(param.rolleId,  options).toPromise();
    }

    /**
     * Remove a service-provider from a rolle by id.
     * 
     * @param param the request object
     */
    public rolleControllerRemoveServiceProviderByIdWithHttpInfo(param: RolleApiRolleControllerRemoveServiceProviderByIdRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.rolleControllerRemoveServiceProviderByIdWithHttpInfo(param.rolleId, param.rolleServiceProviderBodyParams,  options).toPromise();
    }

    /**
     * Remove a service-provider from a rolle by id.
     * 
     * @param param the request object
     */
    public rolleControllerRemoveServiceProviderById(param: RolleApiRolleControllerRemoveServiceProviderByIdRequest, options?: Configuration): Promise<void> {
        return this.api.rolleControllerRemoveServiceProviderById(param.rolleId, param.rolleServiceProviderBodyParams,  options).toPromise();
    }

    /**
     * Update rolle.
     * 
     * @param param the request object
     */
    public rolleControllerUpdateRolleWithHttpInfo(param: RolleApiRolleControllerUpdateRolleRequest, options?: Configuration): Promise<HttpInfo<RolleWithServiceProvidersResponse>> {
        return this.api.rolleControllerUpdateRolleWithHttpInfo(param.rolleId, param.updateRolleBodyParams,  options).toPromise();
    }

    /**
     * Update rolle.
     * 
     * @param param the request object
     */
    public rolleControllerUpdateRolle(param: RolleApiRolleControllerUpdateRolleRequest, options?: Configuration): Promise<RolleWithServiceProvidersResponse> {
        return this.api.rolleControllerUpdateRolle(param.rolleId, param.updateRolleBodyParams,  options).toPromise();
    }

    /**
     * Add a service-provider to a rolle by id.
     * 
     * @param param the request object
     */
    public rolleControllerUpdateServiceProvidersByIdWithHttpInfo(param: RolleApiRolleControllerUpdateServiceProvidersByIdRequest, options?: Configuration): Promise<HttpInfo<Array<ServiceProviderResponse>>> {
        return this.api.rolleControllerUpdateServiceProvidersByIdWithHttpInfo(param.rolleId, param.rolleServiceProviderBodyParams,  options).toPromise();
    }

    /**
     * Add a service-provider to a rolle by id.
     * 
     * @param param the request object
     */
    public rolleControllerUpdateServiceProvidersById(param: RolleApiRolleControllerUpdateServiceProvidersByIdRequest, options?: Configuration): Promise<Array<ServiceProviderResponse>> {
        return this.api.rolleControllerUpdateServiceProvidersById(param.rolleId, param.rolleServiceProviderBodyParams,  options).toPromise();
    }

}

import { ObservableStatusApi } from "./ObservableAPI.ts";
import { StatusApiRequestFactory, StatusApiResponseProcessor} from "../apis/StatusApi.ts";

export interface StatusApiStatusControllerGetStatusRequest {
}

export class ObjectStatusApi {
    private api: ObservableStatusApi

    public constructor(configuration: Configuration, requestFactory?: StatusApiRequestFactory, responseProcessor?: StatusApiResponseProcessor) {
        this.api = new ObservableStatusApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public statusControllerGetStatusWithHttpInfo(param: StatusApiStatusControllerGetStatusRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.statusControllerGetStatusWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public statusControllerGetStatus(param: StatusApiStatusControllerGetStatusRequest = {}, options?: Configuration): Promise<void> {
        return this.api.statusControllerGetStatus( options).toPromise();
    }

}
