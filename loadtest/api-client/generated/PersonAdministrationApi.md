# .PersonAdministrationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**personAdministrationControllerFindRollen**](PersonAdministrationApi.md#personAdministrationControllerFindRollen) | **GET** /api/person-administration/rollen | 


# **personAdministrationControllerFindRollen**
> FindRollenResponse personAdministrationControllerFindRollen()


### Example


```typescript
import { createConfiguration, PersonAdministrationApi } from '';
import type { PersonAdministrationApiPersonAdministrationControllerFindRollenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonAdministrationApi(configuration);

const request: PersonAdministrationApiPersonAdministrationControllerFindRollenRequest = {
    // Rolle name used to filter for rollen in personenkontext. (optional)
  rolleName: "rolleName_example",
    // The limit of items for the request. (optional)
  limit: 3.14,
};

const data = await apiInstance.personAdministrationControllerFindRollen(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rolleName** | [**string**] | Rolle name used to filter for rollen in personenkontext. | (optional) defaults to undefined
 **limit** | [**number**] | The limit of items for the request. | (optional) defaults to undefined


### Return type

**FindRollenResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The rollen for the logged-in user were successfully returned. |  -  |
**401** | Not authorized to get available rollen for the logged-in user. |  -  |
**403** | Insufficient permission to get rollen for the logged-in user. |  -  |
**500** | Internal server error while getting rollen for the logged-in user. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


