# .AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticationControllerInfo**](AuthApi.md#authenticationControllerInfo) | **GET** /api/auth/logininfo | Info about logged in user.
[**authenticationControllerLogin**](AuthApi.md#authenticationControllerLogin) | **GET** /api/auth/login | Used to start OIDC authentication.
[**authenticationControllerLogout**](AuthApi.md#authenticationControllerLogout) | **GET** /api/auth/logout | Used to log out the current user.
[**authenticationControllerResetPassword**](AuthApi.md#authenticationControllerResetPassword) | **GET** /api/auth/reset-password | Redirect to Keycloak password reset.


# **authenticationControllerInfo**
> UserinfoResponse authenticationControllerInfo()


### Example


```typescript
import { createConfiguration, AuthApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.authenticationControllerInfo(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UserinfoResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns info about the logged in user. |  -  |
**401** | User is not logged in. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authenticationControllerLogin**
> authenticationControllerLogin()


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthenticationControllerLoginRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthenticationControllerLoginRequest = {
  
  redirectUrl: "redirectUrl_example",
};

const data = await apiInstance.authenticationControllerLogin(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectUrl** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Redirection to orchestrate OIDC flow. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authenticationControllerLogout**
> authenticationControllerLogout()


### Example


```typescript
import { createConfiguration, AuthApi } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request = {};

const data = await apiInstance.authenticationControllerLogout(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

void (empty response body)

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Redirect to logout. |  -  |
**500** | Internal server error while trying to log out. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authenticationControllerResetPassword**
> authenticationControllerResetPassword()


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiAuthenticationControllerResetPasswordRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiAuthenticationControllerResetPasswordRequest = {
  
  redirectUrl: "redirectUrl_example",
  
  loginHint: "login_hint_example",
};

const data = await apiInstance.authenticationControllerResetPassword(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectUrl** | [**string**] |  | defaults to undefined
 **loginHint** | [**string**] |  | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Redirect to Keycloak password reset page. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


