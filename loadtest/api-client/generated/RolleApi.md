# .RolleApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rolleControllerAddSystemRecht**](RolleApi.md#rolleControllerAddSystemRecht) | **PATCH** /api/rolle/{rolleId} | 
[**rolleControllerCreateRolle**](RolleApi.md#rolleControllerCreateRolle) | **POST** /api/rolle | 
[**rolleControllerDeleteRolle**](RolleApi.md#rolleControllerDeleteRolle) | **DELETE** /api/rolle/{rolleId} | 
[**rolleControllerFindRolleByIdWithServiceProviders**](RolleApi.md#rolleControllerFindRolleByIdWithServiceProviders) | **GET** /api/rolle/{rolleId} | 
[**rolleControllerFindRollen**](RolleApi.md#rolleControllerFindRollen) | **GET** /api/rolle | 
[**rolleControllerGetRolleServiceProviderIds**](RolleApi.md#rolleControllerGetRolleServiceProviderIds) | **GET** /api/rolle/{rolleId}/serviceProviders | 
[**rolleControllerRemoveServiceProviderById**](RolleApi.md#rolleControllerRemoveServiceProviderById) | **DELETE** /api/rolle/{rolleId}/serviceProviders | 
[**rolleControllerUpdateRolle**](RolleApi.md#rolleControllerUpdateRolle) | **PUT** /api/rolle/{rolleId} | 
[**rolleControllerUpdateServiceProvidersById**](RolleApi.md#rolleControllerUpdateServiceProvidersById) | **PUT** /api/rolle/{rolleId}/serviceProviders | 


# **rolleControllerAddSystemRecht**
> void rolleControllerAddSystemRecht(addSystemrechtBodyParams)

Add systemrecht to a rolle.

### Example


```typescript
import { createConfiguration, RolleApi } from '';
import type { RolleApiRolleControllerAddSystemRechtRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RolleApi(configuration);

const request: RolleApiRolleControllerAddSystemRechtRequest = {
    // The id for the rolle.
  rolleId: "rolleId_example",
  
  addSystemrechtBodyParams: {
    systemRecht: "ROLLEN_VERWALTEN",
  },
};

const data = await apiInstance.rolleControllerAddSystemRecht(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addSystemrechtBodyParams** | **AddSystemrechtBodyParams**|  |
 **rolleId** | [**string**] | The id for the rolle. | defaults to undefined


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
**200** | The systemrecht was successfully added to rolle. |  -  |
**400** | The input was not valid. |  -  |
**401** | Not authorized to create the rolle. |  -  |
**403** | Insufficient permissions to create the rolle. |  -  |
**500** | Internal server error while adding systemrecht to rolle. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rolleControllerCreateRolle**
> RolleResponse rolleControllerCreateRolle(createRolleBodyParams)

Create a new rolle.

### Example


```typescript
import { createConfiguration, RolleApi } from '';
import type { RolleApiRolleControllerCreateRolleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RolleApi(configuration);

const request: RolleApiRolleControllerCreateRolleRequest = {
  
  createRolleBodyParams: {
    name: "name_example",
    administeredBySchulstrukturknoten: "administeredBySchulstrukturknoten_example",
    rollenart: "LERN",
    merkmale: [
      "BEFRISTUNG_PFLICHT",
    ],
    systemrechte: [
      "ROLLEN_VERWALTEN",
    ],
  },
};

const data = await apiInstance.rolleControllerCreateRolle(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRolleBodyParams** | **CreateRolleBodyParams**|  |


### Return type

**RolleResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The rolle was successfully created. |  -  |
**400** | The input was not valid. |  -  |
**401** | Not authorized to create the rolle. |  -  |
**403** | Insufficient permissions to create the rolle. |  -  |
**500** | Internal server error while creating the rolle. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rolleControllerDeleteRolle**
> void rolleControllerDeleteRolle()

Delete a role by id.

### Example


```typescript
import { createConfiguration, RolleApi } from '';
import type { RolleApiRolleControllerDeleteRolleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RolleApi(configuration);

const request: RolleApiRolleControllerDeleteRolleRequest = {
    // The id for the rolle.
  rolleId: "rolleId_example",
};

const data = await apiInstance.rolleControllerDeleteRolle(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rolleId** | [**string**] | The id for the rolle. | defaults to undefined


### Return type

**void**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Role was deleted successfully. |  -  |
**400** | The input was not valid. |  -  |
**401** | Not authorized to delete the role. |  -  |
**404** | The rolle that should be deleted does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rolleControllerFindRolleByIdWithServiceProviders**
> RolleWithServiceProvidersResponse rolleControllerFindRolleByIdWithServiceProviders()

Get rolle by id.

### Example


```typescript
import { createConfiguration, RolleApi } from '';
import type { RolleApiRolleControllerFindRolleByIdWithServiceProvidersRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RolleApi(configuration);

const request: RolleApiRolleControllerFindRolleByIdWithServiceProvidersRequest = {
    // The id for the rolle.
  rolleId: "rolleId_example",
};

const data = await apiInstance.rolleControllerFindRolleByIdWithServiceProviders(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rolleId** | [**string**] | The id for the rolle. | defaults to undefined


### Return type

**RolleWithServiceProvidersResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The rolle was successfully returned. |  -  |
**401** | Not authorized to get rolle by id. |  -  |
**403** | Insufficient permission to get rolle by id. |  -  |
**500** | Internal server error while getting rolle by id. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rolleControllerFindRollen**
> Array<RolleWithServiceProvidersResponse> rolleControllerFindRollen()

List all rollen.

### Example


```typescript
import { createConfiguration, RolleApi } from '';
import type { RolleApiRolleControllerFindRollenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RolleApi(configuration);

const request: RolleApiRolleControllerFindRollenRequest = {
    // The offset of the paginated list. (optional)
  offset: 3.14,
    // The requested limit for the page size. (optional)
  limit: 3.14,
    // The name for the role. (optional)
  searchStr: "searchStr_example",
};

const data = await apiInstance.rolleControllerFindRollen(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | [**number**] | The offset of the paginated list. | (optional) defaults to undefined
 **limit** | [**number**] | The requested limit for the page size. | (optional) defaults to undefined
 **searchStr** | [**string**] | The name for the role. | (optional) defaults to undefined


### Return type

**Array<RolleWithServiceProvidersResponse>**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The rollen were successfully returned |  * X-Paging-Offset - The offset of the first item from the list. List starts with index 0. <br>  * X-Paging-Limit - The maximum amount of items returned in one request. <br>  * X-Paging-Total - The total amount of items in the list. <br>  * X-Paging-pageTotal - The total amount of items in the paginated list. <br>  |
**401** | Not authorized to get rollen. |  -  |
**403** | Insufficient permissions to get rollen. |  -  |
**500** | Internal server error while getting all rollen. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rolleControllerGetRolleServiceProviderIds**
> RolleServiceProviderResponse rolleControllerGetRolleServiceProviderIds()

Get service-providers for a rolle by its id.

### Example


```typescript
import { createConfiguration, RolleApi } from '';
import type { RolleApiRolleControllerGetRolleServiceProviderIdsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RolleApi(configuration);

const request: RolleApiRolleControllerGetRolleServiceProviderIdsRequest = {
    // The id for the rolle.
  rolleId: "rolleId_example",
};

const data = await apiInstance.rolleControllerGetRolleServiceProviderIds(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rolleId** | [**string**] | The id for the rolle. | defaults to undefined


### Return type

**RolleServiceProviderResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a list of service-provider ids. |  -  |
**401** | Not authorized to retrieve service-providers for rolle. |  -  |
**404** | The rolle does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rolleControllerRemoveServiceProviderById**
> void rolleControllerRemoveServiceProviderById(rolleServiceProviderBodyParams)

Remove a service-provider from a rolle by id.

### Example


```typescript
import { createConfiguration, RolleApi } from '';
import type { RolleApiRolleControllerRemoveServiceProviderByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RolleApi(configuration);

const request: RolleApiRolleControllerRemoveServiceProviderByIdRequest = {
    // The id for the rolle.
  rolleId: "rolleId_example",
  
  rolleServiceProviderBodyParams: {
    serviceProviderIds: [
      "serviceProviderIds_example",
    ],
    version: 3.14,
  },
};

const data = await apiInstance.rolleControllerRemoveServiceProviderById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rolleServiceProviderBodyParams** | **RolleServiceProviderBodyParams**|  |
 **rolleId** | [**string**] | The id for the rolle. | defaults to undefined


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
**200** | Removing service-provider finished successfully. |  -  |
**401** | Not authorized to retrieve service-providers for rolle. |  -  |
**404** | The rolle or the service-provider that should be removed does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rolleControllerUpdateRolle**
> RolleWithServiceProvidersResponse rolleControllerUpdateRolle(updateRolleBodyParams)

Update rolle.

### Example


```typescript
import { createConfiguration, RolleApi } from '';
import type { RolleApiRolleControllerUpdateRolleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RolleApi(configuration);

const request: RolleApiRolleControllerUpdateRolleRequest = {
    // The id for the rolle.
  rolleId: "rolleId_example",
  
  updateRolleBodyParams: {
    name: "name_example",
    merkmale: [
      "BEFRISTUNG_PFLICHT",
    ],
    systemrechte: [
      "ROLLEN_VERWALTEN",
    ],
    serviceProviderIds: [
      "serviceProviderIds_example",
    ],
    version: 3.14,
  },
};

const data = await apiInstance.rolleControllerUpdateRolle(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateRolleBodyParams** | **UpdateRolleBodyParams**|  |
 **rolleId** | [**string**] | The id for the rolle. | defaults to undefined


### Return type

**RolleWithServiceProvidersResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The rolle was successfully updated. |  -  |
**400** | The input was not valid. |  -  |
**401** | Not authorized to update the rolle. |  -  |
**403** | Insufficient permissions to update the rolle. |  -  |
**500** | Internal server error while updating the rolle. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **rolleControllerUpdateServiceProvidersById**
> Array<ServiceProviderResponse> rolleControllerUpdateServiceProvidersById(rolleServiceProviderBodyParams)

Add a service-provider to a rolle by id.

### Example


```typescript
import { createConfiguration, RolleApi } from '';
import type { RolleApiRolleControllerUpdateServiceProvidersByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RolleApi(configuration);

const request: RolleApiRolleControllerUpdateServiceProvidersByIdRequest = {
    // The id for the rolle.
  rolleId: "rolleId_example",
  
  rolleServiceProviderBodyParams: {
    serviceProviderIds: [
      "serviceProviderIds_example",
    ],
    version: 3.14,
  },
};

const data = await apiInstance.rolleControllerUpdateServiceProvidersById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rolleServiceProviderBodyParams** | **RolleServiceProviderBodyParams**|  |
 **rolleId** | [**string**] | The id for the rolle. | defaults to undefined


### Return type

**Array<ServiceProviderResponse>**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Adding service-provider finished successfully. |  -  |
**400** | The service-provider is already attached to rolle. |  -  |
**401** | Not authorized to retrieve service-providers for rolle. |  -  |
**404** | The rolle or the service-provider to add does not exist. |  -  |
**500** | Internal server error, the service-provider may could not be found after attaching to rolle. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


