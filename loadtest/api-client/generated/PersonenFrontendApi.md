# .PersonenFrontendApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**personFrontendControllerFindPersons**](PersonenFrontendApi.md#personFrontendControllerFindPersons) | **GET** /api/personen-frontend | 


# **personFrontendControllerFindPersons**
> PersonFrontendControllerFindPersons200Response personFrontendControllerFindPersons()


### Example


```typescript
import { createConfiguration, PersonenFrontendApi } from '';
import type { PersonenFrontendApiPersonFrontendControllerFindPersonsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonenFrontendApi(configuration);

const request: PersonenFrontendApiPersonFrontendControllerFindPersonsRequest = {
    // The offset of the paginated list. (optional)
  offset: 3.14,
    // The requested limit for the page size. (optional)
  limit: 3.14,
  
  referrer: "referrer_example",
  
  familienname: "familienname_example",
  
  vorname: "vorname_example",
  
  sichtfreigabe: "nein",
    // List of Organisation ID used to filter for Persons. (optional)
  organisationIDs: [
    "organisationIDs_example",
  ],
    // List of Role ID used to filter for Persons. (optional)
  rolleIDs: [
    "rolleIDs_example",
  ],
    // Search filter used to filter for Persons. It could be the vorname, familienname, referrer or the personalnummer. (optional)
  suchFilter: "suchFilter_example",
    // Order to sort by. (optional)
  sortOrder: "asc",
    // Field to sort by. (optional)
  sortField: "familienname",
};

const data = await apiInstance.personFrontendControllerFindPersons(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | [**number**] | The offset of the paginated list. | (optional) defaults to undefined
 **limit** | [**number**] | The requested limit for the page size. | (optional) defaults to undefined
 **referrer** | [**string**] |  | (optional) defaults to undefined
 **familienname** | [**string**] |  | (optional) defaults to undefined
 **vorname** | [**string**] |  | (optional) defaults to undefined
 **sichtfreigabe** | [**&#39;ja&#39; | &#39;nein&#39;**]**Array<&#39;ja&#39; &#124; &#39;nein&#39;>** |  | (optional) defaults to 'nein'
 **organisationIDs** | **Array&lt;string&gt;** | List of Organisation ID used to filter for Persons. | (optional) defaults to undefined
 **rolleIDs** | **Array&lt;string&gt;** | List of Role ID used to filter for Persons. | (optional) defaults to undefined
 **suchFilter** | [**string**] | Search filter used to filter for Persons. It could be the vorname, familienname, referrer or the personalnummer. | (optional) defaults to undefined
 **sortOrder** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Order to sort by. | (optional) defaults to undefined
 **sortField** | [**&#39;familienname&#39; | &#39;vorname&#39; | &#39;personalnummer&#39; | &#39;referrer&#39;**]**Array<&#39;familienname&#39; &#124; &#39;vorname&#39; &#124; &#39;personalnummer&#39; &#124; &#39;referrer&#39;>** | Field to sort by. | (optional) defaults to undefined


### Return type

**PersonFrontendControllerFindPersons200Response**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The persons were successfully returned. WARNING: This endpoint returns all persons as default when no paging parameters were set. |  -  |
**401** | Not authorized to get persons. |  -  |
**403** | Insufficient permissions to get persons. |  -  |
**500** | Internal server error while getting all persons. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


