# .CronApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cronControllerKoPersUserLock**](CronApi.md#cronControllerKoPersUserLock) | **PUT** /api/cron/kopers-lock | 
[**cronControllerPersonWithoutOrgDelete**](CronApi.md#cronControllerPersonWithoutOrgDelete) | **PUT** /api/cron/person-without-org | 
[**cronControllerRemovePersonenKontexteWithExpiredBefristungFromUsers**](CronApi.md#cronControllerRemovePersonenKontexteWithExpiredBefristungFromUsers) | **PUT** /api/cron/kontext-expired | 
[**cronControllerUnlockUsersWithExpiredLocks**](CronApi.md#cronControllerUnlockUsersWithExpiredLocks) | **PUT** /api/cron/unlock | 


# **cronControllerKoPersUserLock**
> boolean cronControllerKoPersUserLock()


### Example


```typescript
import { createConfiguration, CronApi } from '';

const configuration = createConfiguration();
const apiInstance = new CronApi(configuration);

const request = {};

const data = await apiInstance.cronControllerKoPersUserLock(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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
**201** | User were successfully locked. |  -  |
**400** | User are not given or not found |  -  |
**401** | Not authorized to lock user. |  -  |
**403** | Insufficient permissions to lock user. |  -  |
**404** | Insufficient permissions to lock user. |  -  |
**500** | Internal server error while trying to lock user. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cronControllerPersonWithoutOrgDelete**
> boolean cronControllerPersonWithoutOrgDelete()


### Example


```typescript
import { createConfiguration, CronApi } from '';

const configuration = createConfiguration();
const apiInstance = new CronApi(configuration);

const request = {};

const data = await apiInstance.cronControllerPersonWithoutOrgDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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
**201** | User were successfully removed. |  -  |
**400** | User are not given or not found |  -  |
**401** | Not authorized to remove user. |  -  |
**403** | Insufficient permissions to delete user. |  -  |
**404** | Insufficient permissions to delete user. |  -  |
**500** | Internal server error while trying to remove user. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cronControllerRemovePersonenKontexteWithExpiredBefristungFromUsers**
> boolean cronControllerRemovePersonenKontexteWithExpiredBefristungFromUsers()


### Example


```typescript
import { createConfiguration, CronApi } from '';

const configuration = createConfiguration();
const apiInstance = new CronApi(configuration);

const request = {};

const data = await apiInstance.cronControllerRemovePersonenKontexteWithExpiredBefristungFromUsers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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
**201** | Personenkontexte were successfully removed from users. |  -  |
**400** | Personenkontexte are not given or not found. |  -  |
**401** | Not authorized to remove personenkontexte from users. |  -  |
**403** | Insufficient permissions to remove personenkontexte from users. |  -  |
**404** | Insufficient permissions to remove personenkontexte from users. |  -  |
**500** | Internal server error while trying to remove personenkontexte from users. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **cronControllerUnlockUsersWithExpiredLocks**
> boolean cronControllerUnlockUsersWithExpiredLocks()


### Example


```typescript
import { createConfiguration, CronApi } from '';

const configuration = createConfiguration();
const apiInstance = new CronApi(configuration);

const request = {};

const data = await apiInstance.cronControllerUnlockUsersWithExpiredLocks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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
**200** | The users were successfully unlocked. |  -  |
**401** | Not authorized to unlock users. |  -  |
**403** | Insufficient permissions to unlock users. |  -  |
**404** | Insufficient permissions to unlock users. |  -  |
**500** | Internal server error while trying to unlock users. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


