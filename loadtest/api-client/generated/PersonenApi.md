# .PersonenApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**personControllerCreatePersonMigration**](PersonenApi.md#personControllerCreatePersonMigration) | **POST** /api/personen | 
[**personControllerCreatePersonenkontext**](PersonenApi.md#personControllerCreatePersonenkontext) | **POST** /api/personen/{personId}/personenkontexte | 
[**personControllerDeletePersonById**](PersonenApi.md#personControllerDeletePersonById) | **DELETE** /api/personen/{personId} | 
[**personControllerFindPersonById**](PersonenApi.md#personControllerFindPersonById) | **GET** /api/personen/{personId} | 
[**personControllerFindPersonenkontexte**](PersonenApi.md#personControllerFindPersonenkontexte) | **GET** /api/personen/{personId}/personenkontexte | 
[**personControllerFindPersons**](PersonenApi.md#personControllerFindPersons) | **GET** /api/personen | 
[**personControllerLockPerson**](PersonenApi.md#personControllerLockPerson) | **PUT** /api/personen/{personId}/lock-user | 
[**personControllerResetPasswordByPersonId**](PersonenApi.md#personControllerResetPasswordByPersonId) | **PATCH** /api/personen/{personId}/password | 
[**personControllerSyncPerson**](PersonenApi.md#personControllerSyncPerson) | **POST** /api/personen/{personId}/sync | 
[**personControllerUpdateMetadata**](PersonenApi.md#personControllerUpdateMetadata) | **PATCH** /api/personen/{personId}/metadata | 
[**personControllerUpdatePerson**](PersonenApi.md#personControllerUpdatePerson) | **PUT** /api/personen/{personId} | 


# **personControllerCreatePersonMigration**
> PersonendatensatzResponse personControllerCreatePersonMigration(createPersonMigrationBodyParams)


### Example


```typescript
import { createConfiguration, PersonenApi } from '';
import type { PersonenApiPersonControllerCreatePersonMigrationRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonenApi(configuration);

const request: PersonenApiPersonControllerCreatePersonMigrationRequest = {
  
  createPersonMigrationBodyParams: {
    personId: "personId_example",
    familienname: "familienname_example",
    vorname: "vorname_example",
    hashedPassword: "hashedPassword_example",
    username: "username_example",
    personalnummer: "personalnummer_example",
  },
};

const data = await apiInstance.personControllerCreatePersonMigration(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPersonMigrationBodyParams** | **CreatePersonMigrationBodyParams**|  |


### Return type

**PersonendatensatzResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The person was successfully created. |  -  |
**400** | A username was given. Creation with username is not supported. |  -  |
**401** | Not authorized to create the person. |  -  |
**403** | Insufficient permissions to create the person. |  -  |
**404** | Insufficient permissions to create the person. |  -  |
**500** | Internal server error while creating the person. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **personControllerCreatePersonenkontext**
> void personControllerCreatePersonenkontext()


### Example


```typescript
import { createConfiguration, PersonenApi } from '';
import type { PersonenApiPersonControllerCreatePersonenkontextRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonenApi(configuration);

const request: PersonenApiPersonControllerCreatePersonenkontextRequest = {
  
  personId: "personId_example",
};

const data = await apiInstance.personControllerCreatePersonenkontext(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The personenkontext was successfully created. |  -  |
**400** | The personenkontext already exists. |  -  |
**401** | Not authorized to create the personenkontext. |  -  |
**403** | Not permitted to create the personenkontext. |  -  |
**404** | Insufficient permissions to create personenkontext for person. |  -  |
**500** | Internal server error while creating the personenkontext. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **personControllerDeletePersonById**
> void personControllerDeletePersonById()


### Example


```typescript
import { createConfiguration, PersonenApi } from '';
import type { PersonenApiPersonControllerDeletePersonByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonenApi(configuration);

const request: PersonenApiPersonControllerDeletePersonByIdRequest = {
    // The id for the account.
  personId: "personId_example",
};

const data = await apiInstance.personControllerDeletePersonById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | [**string**] | The id for the account. | defaults to undefined


### Return type

**void**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The person and all their kontexte were successfully deleted. |  -  |
**400** | Request has wrong format. |  -  |
**401** | Request is not authorized. |  -  |
**403** | Insufficient permissions to perform operation. |  -  |
**404** | The person was not found. |  -  |
**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **personControllerFindPersonById**
> PersonendatensatzResponse personControllerFindPersonById()


### Example


```typescript
import { createConfiguration, PersonenApi } from '';
import type { PersonenApiPersonControllerFindPersonByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonenApi(configuration);

const request: PersonenApiPersonControllerFindPersonByIdRequest = {
    // The id for the account.
  personId: "personId_example",
};

const data = await apiInstance.personControllerFindPersonById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | [**string**] | The id for the account. | defaults to undefined


### Return type

**PersonendatensatzResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The person was successfully returned. |  -  |
**400** | Person ID is required |  -  |
**401** | Not authorized to get the person. |  -  |
**403** | Insufficient permissions to get the person. |  -  |
**404** | The person does not exist or insufficient permissions. |  -  |
**500** | Internal server error while getting the person. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **personControllerFindPersonenkontexte**
> PersonControllerFindPersonenkontexte200Response personControllerFindPersonenkontexte()


### Example


```typescript
import { createConfiguration, PersonenApi } from '';
import type { PersonenApiPersonControllerFindPersonenkontexteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonenApi(configuration);

const request: PersonenApiPersonControllerFindPersonenkontexteRequest = {
    // The id for the account.
  personId: "personId_example",
    // The offset of the paginated list. (optional)
  offset: 3.14,
    // The requested limit for the page size. (optional)
  limit: 3.14,
  
  personId2: "personId_example",
  
  referrer: "referrer_example",
  
  personenstatus: "AKTIV",
  
  sichtfreigabe: "ja",
};

const data = await apiInstance.personControllerFindPersonenkontexte(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | [**string**] | The id for the account. | defaults to undefined
 **offset** | [**number**] | The offset of the paginated list. | (optional) defaults to undefined
 **limit** | [**number**] | The requested limit for the page size. | (optional) defaults to undefined
 **personId2** | [**string**] |  | (optional) defaults to undefined
 **referrer** | [**string**] |  | (optional) defaults to undefined
 **personenstatus** | **Personenstatus** |  | (optional) defaults to undefined
 **sichtfreigabe** | **Sichtfreigabe** |  | (optional) defaults to undefined


### Return type

**PersonControllerFindPersonenkontexte200Response**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The personenkontexte were successfully pulled. |  * X-Paging-Offset - The offset of the first item from the list. List starts with index 0. <br>  * X-Paging-Limit - The maximum amount of items returned in one request. <br>  * X-Paging-Total - The total amount of items in the list. <br>  * X-Paging-pageTotal - The total amount of items in the paginated list. <br>  |
**401** | Not authorized to get personenkontexte. |  -  |
**403** | Insufficient permissions to get personenkontexte. |  -  |
**404** | No personenkontexte were found. |  -  |
**500** | Internal server error while getting all personenkontexte. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **personControllerFindPersons**
> Array<PersonendatensatzResponse> personControllerFindPersons()


### Example


```typescript
import { createConfiguration, PersonenApi } from '';
import type { PersonenApiPersonControllerFindPersonsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonenApi(configuration);

const request: PersonenApiPersonControllerFindPersonsRequest = {
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

const data = await apiInstance.personControllerFindPersons(request);
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

**Array<PersonendatensatzResponse>**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The persons were successfully returned. WARNING: This endpoint returns all persons as default when no paging parameters were set. |  * X-Paging-Offset - The offset of the first item from the list. List starts with index 0. <br>  * X-Paging-Limit - The maximum amount of items returned in one request. <br>  * X-Paging-Total - The total amount of items in the list. <br>  * X-Paging-pageTotal - The total amount of items in the paginated list. <br>  |
**401** | Not authorized to get persons. |  -  |
**403** | Insufficient permissions to get persons. |  -  |
**500** | Internal server error while getting all persons. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **personControllerLockPerson**
> PersonLockResponse personControllerLockPerson(lockUserBodyParams)


### Example


```typescript
import { createConfiguration, PersonenApi } from '';
import type { PersonenApiPersonControllerLockPersonRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonenApi(configuration);

const request: PersonenApiPersonControllerLockPersonRequest = {
  
  personId: "personId_example",
  
  lockUserBodyParams: {
    lock: true,
    lockedBy: "lockedBy_example",
    lockedUntil: new Date('1970-01-01T00:00:00.00Z'),
  },
};

const data = await apiInstance.personControllerLockPerson(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lockUserBodyParams** | **LockUserBodyParams**|  |
 **personId** | [**string**] |  | defaults to undefined


### Return type

**PersonLockResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User has been successfully updated. |  -  |
**403** | Insufficient permissions to perform operation. |  -  |
**404** | The person was not found. |  -  |
**500** | An internal server error occurred. |  -  |
**502** | A downstream server returned an error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **personControllerResetPasswordByPersonId**
> string personControllerResetPasswordByPersonId()


### Example


```typescript
import { createConfiguration, PersonenApi } from '';
import type { PersonenApiPersonControllerResetPasswordByPersonIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonenApi(configuration);

const request: PersonenApiPersonControllerResetPasswordByPersonIdRequest = {
    // The id for the account.
  personId: "personId_example",
};

const data = await apiInstance.personControllerResetPasswordByPersonId(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | [**string**] | The id for the account. | defaults to undefined


### Return type

**string**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Password for person was successfully reset. |  -  |
**404** | The person does not exist or insufficient permissions to update person. |  -  |
**500** | Internal server error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **personControllerSyncPerson**
> void personControllerSyncPerson()


### Example


```typescript
import { createConfiguration, PersonenApi } from '';
import type { PersonenApiPersonControllerSyncPersonRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonenApi(configuration);

const request: PersonenApiPersonControllerSyncPersonRequest = {
  
  personId: "personId_example",
};

const data = await apiInstance.personControllerSyncPerson(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User will be synced. |  -  |
**403** | Insufficient permissions to perform operation. |  -  |
**404** | The person was not found. |  -  |
**500** | An internal server error occurred. |  -  |
**502** | A downstream server returned an error. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **personControllerUpdateMetadata**
> PersonendatensatzResponse personControllerUpdateMetadata(personMetadataBodyParams)


### Example


```typescript
import { createConfiguration, PersonenApi } from '';
import type { PersonenApiPersonControllerUpdateMetadataRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonenApi(configuration);

const request: PersonenApiPersonControllerUpdateMetadataRequest = {
    // The id for the account.
  personId: "personId_example",
  
  personMetadataBodyParams: {
    familienname: "familienname_example",
    vorname: "vorname_example",
    personalnummer: "personalnummer_example",
    lastModified: new Date('1970-01-01T00:00:00.00Z'),
    revision: "revision_example",
  },
};

const data = await apiInstance.personControllerUpdateMetadata(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personMetadataBodyParams** | **PersonMetadataBodyParams**|  |
 **personId** | [**string**] | The id for the account. | defaults to undefined


### Return type

**PersonendatensatzResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The metadata for user was successfully updated. |  -  |
**400** | Request has a wrong format. |  -  |
**401** | Not authorized to update the metadata. |  -  |
**403** | Not permitted to update the metadata. |  -  |
**500** | Internal server error while updating the metadata for user. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **personControllerUpdatePerson**
> PersonendatensatzResponse personControllerUpdatePerson(updatePersonBodyParams)


### Example


```typescript
import { createConfiguration, PersonenApi } from '';
import type { PersonenApiPersonControllerUpdatePersonRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PersonenApi(configuration);

const request: PersonenApiPersonControllerUpdatePersonRequest = {
    // The id for the account.
  personId: "personId_example",
  
  updatePersonBodyParams: {
    referrer: "referrer_example",
    stammorganisation: "stammorganisation_example",
    name: {
      familienname: "familienname_example",
      vorname: "vorname_example",
      initialenfamilienname: "initialenfamilienname_example",
      initialenvorname: "initialenvorname_example",
      rufname: "rufname_example",
      titel: "titel_example",
      anrede: [
        "anrede_example",
      ],
      namenssuffix: [
        "namenssuffix_example",
      ],
      namenspraefix: [
        "namenspraefix_example",
      ],
      sortierindex: "sortierindex_example",
    },
    geburt: {
      datum: new Date('1970-01-01T00:00:00.00Z'),
      geburtsort: "geburtsort_example",
    },
    geschlecht: "m",
    lokalisierung: "lokalisierung_example",
    vertrauensstufe: "KEIN",
    auskunftssperre: true,
    revision: "revision_example",
  },
};

const data = await apiInstance.personControllerUpdatePerson(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePersonBodyParams** | **UpdatePersonBodyParams**|  |
 **personId** | [**string**] | The id for the account. | defaults to undefined


### Return type

**PersonendatensatzResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The person was successfully updated. |  -  |
**400** | Request has wrong format. |  -  |
**401** | Request is not authorized. |  -  |
**403** | Insufficient permissions to perform operation. |  -  |
**404** | The person was not found or insufficient permissions to update person. |  -  |
**500** | An internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


