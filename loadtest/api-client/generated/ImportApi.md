# .ImportApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**importControllerDeleteImportTransaction**](ImportApi.md#importControllerDeleteImportTransaction) | **DELETE** /api/import/{importvorgangId} | 
[**importControllerExecuteImport**](ImportApi.md#importControllerExecuteImport) | **POST** /api/import/execute | 
[**importControllerUploadFile**](ImportApi.md#importControllerUploadFile) | **POST** /api/import/upload | 


# **importControllerDeleteImportTransaction**
> void importControllerDeleteImportTransaction()

Delete a role by id.

### Example


```typescript
import { createConfiguration, ImportApi } from '';
import type { ImportApiImportControllerDeleteImportTransactionRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImportApi(configuration);

const request: ImportApiImportControllerDeleteImportTransactionRequest = {
    // The id of an import transaction
  importvorgangId: "importvorgangId_example",
};

const data = await apiInstance.importControllerDeleteImportTransaction(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **importvorgangId** | [**string**] | The id of an import transaction | defaults to undefined


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
**204** | Import transaction was deleted successfully. |  -  |
**400** | Something went wrong with the found import transaction. |  -  |
**401** | Not authorized to delete the import transaction. |  -  |
**404** | The import transaction that should be deleted does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **importControllerExecuteImport**
> HttpFile importControllerExecuteImport(importvorgangByIdBodyParams)


### Example


```typescript
import { createConfiguration, ImportApi } from '';
import type { ImportApiImportControllerExecuteImportRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImportApi(configuration);

const request: ImportApiImportControllerExecuteImportRequest = {
  
  importvorgangByIdBodyParams: {
    importvorgangId: "importvorgangId_example",
    organisationId: "organisationId_example",
    rolleId: "rolleId_example",
  },
};

const data = await apiInstance.importControllerExecuteImport(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **importvorgangByIdBodyParams** | **ImportvorgangByIdBodyParams**|  |


### Return type

**HttpFile**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Import transaction was executed successfully. The text file can be downloaded |  -  |
**400** | Something went wrong with the found import transaction. |  -  |
**401** | Not authorized to execute the import transaction. |  -  |
**403** | Insufficient permissions to execute the import transaction. |  -  |
**404** | The import transaction does not exist. |  -  |
**500** | Internal server error while executing the import transaction. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **importControllerUploadFile**
> ImportUploadResponse importControllerUploadFile()


### Example


```typescript
import { createConfiguration, ImportApi } from '';
import type { ImportApiImportControllerUploadFileRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImportApi(configuration);

const request: ImportApiImportControllerUploadFileRequest = {
  
  organisationId: "organisationId_example",
  
  rolleId: "rolleId_example",
  
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.importControllerUploadFile(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organisationId** | [**string**] |  | defaults to undefined
 **rolleId** | [**string**] |  | defaults to undefined
 **file** | [**HttpFile**] |  | defaults to undefined


### Return type

**ImportUploadResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an import upload response object. |  -  |
**400** | The CSV file was not valid. |  -  |
**401** | Not authorized to import data with a CSV file. |  -  |
**403** | Insufficient permissions to import data with a CSV file. |  -  |
**500** | Internal server error while importing data with a CSV file. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


