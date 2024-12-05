# .PersonenkontextApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dbiamPersonenkontextWorkflowControllerCommit**](PersonenkontextApi.md#dbiamPersonenkontextWorkflowControllerCommit) | **PUT** /api/personenkontext-workflow/{personId} | 
[**dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexte**](PersonenkontextApi.md#dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexte) | **POST** /api/personenkontext-workflow | 
[**dbiamPersonenkontextWorkflowControllerFindSchulstrukturknoten**](PersonenkontextApi.md#dbiamPersonenkontextWorkflowControllerFindSchulstrukturknoten) | **GET** /api/personenkontext-workflow/schulstrukturknoten | 
[**dbiamPersonenkontextWorkflowControllerProcessStep**](PersonenkontextApi.md#dbiamPersonenkontextWorkflowControllerProcessStep) | **GET** /api/personenkontext-workflow/step | 


# **dbiamPersonenkontextWorkflowControllerCommit**
> PersonenkontexteUpdateResponse dbiamPersonenkontextWorkflowControllerCommit(dbiamUpdatePersonenkontexteBodyParams)


### Example


```typescript
import { createConfiguration, PersonenkontextApi } from '';
import type { PersonenkontextApiDbiamPersonenkontextWorkflowControllerCommitRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonenkontextApi(configuration);

const request: PersonenkontextApiDbiamPersonenkontextWorkflowControllerCommitRequest = {
    // The ID for the person.
  personId: "personId_example",
  
  dbiamUpdatePersonenkontexteBodyParams: {
    lastModified: new Date('1970-01-01T00:00:00.00Z'),
    count: 3.14,
    personenkontexte: [
      {
        personId: "personId_example",
        organisationId: "organisationId_example",
        rolleId: "rolleId_example",
        befristung: new Date('1970-01-01T00:00:00.00Z'),
      },
    ],
  },
  
  personalnummer: "personalnummer_example",
};

const data = await apiInstance.dbiamPersonenkontextWorkflowControllerCommit(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dbiamUpdatePersonenkontexteBodyParams** | **DbiamUpdatePersonenkontexteBodyParams**|  |
 **personId** | [**string**] | The ID for the person. | defaults to undefined
 **personalnummer** | [**string**] |  | (optional) defaults to undefined


### Return type

**PersonenkontexteUpdateResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Add or remove personenkontexte as one operation. Returns the Personenkontexte existing after update. |  -  |
**400** | The personenkontexte could not be updated, may due to unsatisfied specifications. |  -  |
**401** | Not authorized to update personenkontexte. |  -  |
**403** | Insufficient permission to update personenkontexte. |  -  |
**409** | Changes are conflicting with current state of personenkontexte. |  -  |
**500** | Internal server error while updating personenkontexte. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexte**
> DBiamPersonResponse dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexte(dbiamCreatePersonWithPersonenkontexteBodyParams)


### Example


```typescript
import { createConfiguration, PersonenkontextApi } from '';
import type { PersonenkontextApiDbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonenkontextApi(configuration);

const request: PersonenkontextApiDbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexteRequest = {
  
  dbiamCreatePersonWithPersonenkontexteBodyParams: {
    familienname: "familienname_example",
    vorname: "vorname_example",
    personalnummer: "personalnummer_example",
    befristung: new Date('1970-01-01T00:00:00.00Z'),
    createPersonenkontexte: [
      {
        organisationId: "organisationId_example",
        rolleId: "rolleId_example",
      },
    ],
  },
};

const data = await apiInstance.dbiamPersonenkontextWorkflowControllerCreatePersonWithPersonenkontexte(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dbiamCreatePersonWithPersonenkontexteBodyParams** | **DbiamCreatePersonWithPersonenkontexteBodyParams**|  |


### Return type

**DBiamPersonResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Person with Personenkontext was successfully created. |  -  |
**400** | The person and the personenkontext could not be created, may due to unsatisfied specifications. |  -  |
**401** | Not authorized to create person with personenkontext. |  -  |
**403** | Insufficient permission to create person with personenkontext. |  -  |
**500** | Internal server error while creating person with personenkontext. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dbiamPersonenkontextWorkflowControllerFindSchulstrukturknoten**
> FindSchulstrukturknotenResponse dbiamPersonenkontextWorkflowControllerFindSchulstrukturknoten()


### Example


```typescript
import { createConfiguration, PersonenkontextApi } from '';
import type { PersonenkontextApiDbiamPersonenkontextWorkflowControllerFindSchulstrukturknotenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonenkontextApi(configuration);

const request: PersonenkontextApiDbiamPersonenkontextWorkflowControllerFindSchulstrukturknotenRequest = {
    // RolleId used to filter for schulstrukturknoten in personenkontext.
  rolleId: "rolleId_example",
    // Organisation/SSK name used to filter for schulstrukturknoten in personenkontext. (optional)
  sskName: "sskName_example",
    // The limit of items for the request. (optional)
  limit: 3.14,
};

const data = await apiInstance.dbiamPersonenkontextWorkflowControllerFindSchulstrukturknoten(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rolleId** | [**string**] | RolleId used to filter for schulstrukturknoten in personenkontext. | defaults to undefined
 **sskName** | [**string**] | Organisation/SSK name used to filter for schulstrukturknoten in personenkontext. | (optional) defaults to undefined
 **limit** | [**number**] | The limit of items for the request. | (optional) defaults to undefined


### Return type

**FindSchulstrukturknotenResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The schulstrukturknoten for a personenkontext were successfully returned. |  -  |
**401** | Not authorized to get available schulstrukturknoten for personenkontexte. |  -  |
**403** | Insufficient permission to get schulstrukturknoten for personenkontext. |  -  |
**500** | Internal server error while getting schulstrukturknoten for personenkontexte. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dbiamPersonenkontextWorkflowControllerProcessStep**
> PersonenkontextWorkflowResponse dbiamPersonenkontextWorkflowControllerProcessStep()


### Example


```typescript
import { createConfiguration, PersonenkontextApi } from '';
import type { PersonenkontextApiDbiamPersonenkontextWorkflowControllerProcessStepRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonenkontextApi(configuration);

const request: PersonenkontextApiDbiamPersonenkontextWorkflowControllerProcessStepRequest = {
    // ID of the organisation to filter the rollen later (optional)
  organisationId: "organisationId_example",
    // ID of the rolle. (optional)
  rolleId: "rolleId_example",
    // Rolle name used to filter for rollen in personenkontext. (optional)
  rolleName: "rolleName_example",
    // Organisation/SSK name used to filter for schulstrukturknoten in personenkontext. (optional)
  organisationName: "organisationName_example",
    // The limit of items for the request. (optional)
  limit: 3.14,
};

const data = await apiInstance.dbiamPersonenkontextWorkflowControllerProcessStep(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationId** | [**string**] | ID of the organisation to filter the rollen later | (optional) defaults to undefined
 **rolleId** | [**string**] | ID of the rolle. | (optional) defaults to undefined
 **rolleName** | [**string**] | Rolle name used to filter for rollen in personenkontext. | (optional) defaults to undefined
 **organisationName** | [**string**] | Organisation/SSK name used to filter for schulstrukturknoten in personenkontext. | (optional) defaults to undefined
 **limit** | [**number**] | The limit of items for the request. | (optional) defaults to undefined


### Return type

**PersonenkontextWorkflowResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Initialize or process data from the person creation form.                       Valid combinations:                       - Both organisationId and rolleId are undefined: Fetch all possible organisations.                       - organisationId is provided, but rolleId is undefined: Fetch Rollen for the given organisation.                       - Both organisationId and rolleId are provided: Check if the Rolle can be committed for the organisation.                       Note: Providing rolleId without organisationId is invalid. |  -  |
**401** | Not authorized to get available data for personenkontext. |  -  |
**403** | Insufficient permission to get data for personenkontext. |  -  |
**500** | Internal server error while getting data for personenkontext. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


