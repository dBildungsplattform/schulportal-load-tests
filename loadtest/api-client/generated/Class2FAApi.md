# .Class2FAApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**privacyIdeaAdministrationControllerAssignHardwareToken**](Class2FAApi.md#privacyIdeaAdministrationControllerAssignHardwareToken) | **POST** /api/2fa-token/assign/hardwareToken | 
[**privacyIdeaAdministrationControllerGetTwoAuthState**](Class2FAApi.md#privacyIdeaAdministrationControllerGetTwoAuthState) | **GET** /api/2fa-token/state | 
[**privacyIdeaAdministrationControllerInitializeSoftwareToken**](Class2FAApi.md#privacyIdeaAdministrationControllerInitializeSoftwareToken) | **POST** /api/2fa-token/init | 
[**privacyIdeaAdministrationControllerRequiresTwoFactorAuthentication**](Class2FAApi.md#privacyIdeaAdministrationControllerRequiresTwoFactorAuthentication) | **GET** /api/2fa-token/required | 
[**privacyIdeaAdministrationControllerResetToken**](Class2FAApi.md#privacyIdeaAdministrationControllerResetToken) | **PUT** /api/2fa-token/reset | 
[**privacyIdeaAdministrationControllerVerifyToken**](Class2FAApi.md#privacyIdeaAdministrationControllerVerifyToken) | **POST** /api/2fa-token/verify | 


# **privacyIdeaAdministrationControllerAssignHardwareToken**
> AssignHardwareTokenResponse privacyIdeaAdministrationControllerAssignHardwareToken(assignHardwareTokenBodyParams)


### Example


```typescript
import { createConfiguration, Class2FAApi } from '';
import type { Class2FAApiPrivacyIdeaAdministrationControllerAssignHardwareTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Class2FAApi(configuration);

const request: Class2FAApiPrivacyIdeaAdministrationControllerAssignHardwareTokenRequest = {
  
  assignHardwareTokenBodyParams: {
    serial: "serial_example",
    otp: "otp_example",
    referrer: "referrer_example",
    userId: "userId_example",
  },
};

const data = await apiInstance.privacyIdeaAdministrationControllerAssignHardwareToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignHardwareTokenBodyParams** | **AssignHardwareTokenBodyParams**|  |


### Return type

**AssignHardwareTokenResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The hardware token was successfully assigned. |  -  |
**400** | Not found. |  -  |
**401** | Not authorized to assign hardware token. |  -  |
**403** | Insufficient permissions to reset token. |  -  |
**404** | Insufficient permissions to assign hardware token. |  -  |
**500** | Internal server error while assigning a hardware token. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **privacyIdeaAdministrationControllerGetTwoAuthState**
> TokenStateResponse privacyIdeaAdministrationControllerGetTwoAuthState()


### Example


```typescript
import { createConfiguration, Class2FAApi } from '';
import type { Class2FAApiPrivacyIdeaAdministrationControllerGetTwoAuthStateRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Class2FAApi(configuration);

const request: Class2FAApiPrivacyIdeaAdministrationControllerGetTwoAuthStateRequest = {
  
  personId: "personId_example",
};

const data = await apiInstance.privacyIdeaAdministrationControllerGetTwoAuthState(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | [**string**] |  | defaults to undefined


### Return type

**TokenStateResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The token state was successfully returned. |  -  |
**400** | A username was not given or not found. |  -  |
**401** | Not authorized to get token state. |  -  |
**403** | Insufficient permissions to get token state. |  -  |
**404** | Insufficient permissions to get token state. |  -  |
**500** | Internal server error while retrieving token state. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **privacyIdeaAdministrationControllerInitializeSoftwareToken**
> string privacyIdeaAdministrationControllerInitializeSoftwareToken(tokenInitBodyParams)


### Example


```typescript
import { createConfiguration, Class2FAApi } from '';
import type { Class2FAApiPrivacyIdeaAdministrationControllerInitializeSoftwareTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Class2FAApi(configuration);

const request: Class2FAApiPrivacyIdeaAdministrationControllerInitializeSoftwareTokenRequest = {
  
  tokenInitBodyParams: {
    personId: "personId_example",
  },
};

const data = await apiInstance.privacyIdeaAdministrationControllerInitializeSoftwareToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenInitBodyParams** | **TokenInitBodyParams**|  |


### Return type

**string**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The token was successfully created. |  -  |
**400** | A username was not given or not found. |  -  |
**401** | Not authorized to create token. |  -  |
**403** | Insufficient permissions to create token. |  -  |
**404** | Insufficient permissions to create token. |  -  |
**500** | Internal server error while creating a token. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **privacyIdeaAdministrationControllerRequiresTwoFactorAuthentication**
> TokenRequiredResponse privacyIdeaAdministrationControllerRequiresTwoFactorAuthentication()


### Example


```typescript
import { createConfiguration, Class2FAApi } from '';
import type { Class2FAApiPrivacyIdeaAdministrationControllerRequiresTwoFactorAuthenticationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Class2FAApi(configuration);

const request: Class2FAApiPrivacyIdeaAdministrationControllerRequiresTwoFactorAuthenticationRequest = {
  
  personId: "personId_example",
};

const data = await apiInstance.privacyIdeaAdministrationControllerRequiresTwoFactorAuthentication(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | [**string**] |  | defaults to undefined


### Return type

**TokenRequiredResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requirement was successfully returned. |  -  |
**400** | A username was not given or not found. |  -  |
**401** | Not authorized to get requirement information. |  -  |
**403** | Insufficient permissions to get requirement information. |  -  |
**404** | Insufficient permissions to get requirement information. |  -  |
**500** | Internal server error while getting requirement information. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **privacyIdeaAdministrationControllerResetToken**
> boolean privacyIdeaAdministrationControllerResetToken()


### Example


```typescript
import { createConfiguration, Class2FAApi } from '';
import type { Class2FAApiPrivacyIdeaAdministrationControllerResetTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Class2FAApi(configuration);

const request: Class2FAApiPrivacyIdeaAdministrationControllerResetTokenRequest = {
  
  personId: "personId_example",
};

const data = await apiInstance.privacyIdeaAdministrationControllerResetToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | [**string**] |  | defaults to undefined


### Return type

**boolean**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The token was successfully reset. |  -  |
**400** | A username was not given or not found. |  -  |
**401** | Not authorized to reset token. |  -  |
**403** | Insufficient permissions to reset token. |  -  |
**404** | Insufficient permissions to reset token. |  -  |
**500** | Internal server error while reseting a token. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **privacyIdeaAdministrationControllerVerifyToken**
> void privacyIdeaAdministrationControllerVerifyToken(tokenVerifyBodyParams)


### Example


```typescript
import { createConfiguration, Class2FAApi } from '';
import type { Class2FAApiPrivacyIdeaAdministrationControllerVerifyTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new Class2FAApi(configuration);

const request: Class2FAApiPrivacyIdeaAdministrationControllerVerifyTokenRequest = {
  
  tokenVerifyBodyParams: {
    personId: "personId_example",
    otp: "otp_example",
  },
};

const data = await apiInstance.privacyIdeaAdministrationControllerVerifyToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenVerifyBodyParams** | **TokenVerifyBodyParams**|  |


### Return type

**void**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The token was successfully verified. |  -  |
**400** | A username was not given or not found. |  -  |
**401** | Not authorized to verify token. |  -  |
**403** | Insufficient permissions to verify token. |  -  |
**404** | Insufficient permissions to verify token. |  -  |
**500** | Internal server error while verifying a token. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


