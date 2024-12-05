# .DbiamPersonenuebersichtApi

All URIs are relative to _http://localhost_

| Method                                                                                                                                                                   | HTTP request                                     | Description |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | ----------- |
| [**dBiamPersonenuebersichtControllerFindPersonenuebersichten**](DbiamPersonenuebersichtApi.md#dBiamPersonenuebersichtControllerFindPersonenuebersichten)                 | **POST** /api/dbiam/personenuebersicht           |
| [**dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPerson**](DbiamPersonenuebersichtApi.md#dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPerson) | **GET** /api/dbiam/personenuebersicht/{personId} |

# **dBiamPersonenuebersichtControllerFindPersonenuebersichten**

> DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response dBiamPersonenuebersichtControllerFindPersonenuebersichten(personenuebersichtBodyParams)

### Example

```typescript
import { createConfiguration, DbiamPersonenuebersichtApi } from "";
import type { DbiamPersonenuebersichtApiDBiamPersonenuebersichtControllerFindPersonenuebersichtenRequest } from "";

const configuration = createConfiguration();
const apiInstance = new DbiamPersonenuebersichtApi(configuration);

const request: DbiamPersonenuebersichtApiDBiamPersonenuebersichtControllerFindPersonenuebersichtenRequest =
  {
    personenuebersichtBodyParams: {
      personIds: ["personIds_example"],
    },
  };

const data =
  await apiInstance.dBiamPersonenuebersichtControllerFindPersonenuebersichten(
    request,
  );
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name                             | Type                             | Description | Notes |
| -------------------------------- | -------------------------------- | ----------- | ----- |
| **personenuebersichtBodyParams** | **PersonenuebersichtBodyParams** |             |

### Return type

**DBiamPersonenuebersichtControllerFindPersonenuebersichten200Response**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                               | Response headers                                                                                                                                                                                                                                                                                                        |
| ----------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **200**     | The personenuebersichten were successfully returned.      | _ X-Paging-Offset - The offset of the first item from the list. List starts with index 0. <br> _ X-Paging-Limit - The maximum amount of items returned in one request. <br> _ X-Paging-Total - The total amount of items in the list. <br> _ X-Paging-pageTotal - The total amount of items in the paginated list. <br> |
| **401**     | Not authorized to get personenuebersichten.               | -                                                                                                                                                                                                                                                                                                                       |
| **403**     | Insufficient permission to get personenuebersichten.      | -                                                                                                                                                                                                                                                                                                                       |
| **500**     | Internal server error while getting personenuebersichten. | -                                                                                                                                                                                                                                                                                                                       |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPerson**

> DBiamPersonenuebersichtResponse dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPerson()

### Example

```typescript
import { createConfiguration, DbiamPersonenuebersichtApi } from "";
import type { DbiamPersonenuebersichtApiDBiamPersonenuebersichtControllerFindPersonenuebersichtenByPersonRequest } from "";

const configuration = createConfiguration();
const apiInstance = new DbiamPersonenuebersichtApi(configuration);

const request: DbiamPersonenuebersichtApiDBiamPersonenuebersichtControllerFindPersonenuebersichtenByPersonRequest =
  {
    // The ID for the person.
    personId: "personId_example",
  };

const data =
  await apiInstance.dBiamPersonenuebersichtControllerFindPersonenuebersichtenByPerson(
    request,
  );
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name         | Type         | Description            | Notes                 |
| ------------ | ------------ | ---------------------- | --------------------- |
| **personId** | [**string**] | The ID for the person. | defaults to undefined |

### Return type

**DBiamPersonenuebersichtResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                             | Response headers |
| ----------- | ------------------------------------------------------- | ---------------- |
| **200**     | The personenuebersichten were successfully returned.    | -                |
| **401**     | Not authorized to get personenuebersicht.               | -                |
| **403**     | Insufficient permission to get personenuebersicht.      | -                |
| **500**     | Internal server error while getting personenuebersicht. | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
