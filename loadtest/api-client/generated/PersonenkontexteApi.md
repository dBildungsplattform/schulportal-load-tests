# .PersonenkontexteApi

All URIs are relative to _http://localhost_

| Method                                                                                                                                  | HTTP request                                            | Description |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ----------- |
| [**personenkontextControllerDeletePersonenkontextById**](PersonenkontexteApi.md#personenkontextControllerDeletePersonenkontextById)     | **DELETE** /api/personenkontexte/{personenkontextId}    |
| [**personenkontextControllerFindPersonenkontextById**](PersonenkontexteApi.md#personenkontextControllerFindPersonenkontextById)         | **GET** /api/personenkontexte/{personenkontextId}       |
| [**personenkontextControllerFindPersonenkontexte**](PersonenkontexteApi.md#personenkontextControllerFindPersonenkontexte)               | **GET** /api/personenkontexte                           |
| [**personenkontextControllerHatSystemRecht**](PersonenkontexteApi.md#personenkontextControllerHatSystemRecht)                           | **GET** /api/personenkontexte/{personId}/hatSystemrecht |
| [**personenkontextControllerUpdatePersonenkontextWithId**](PersonenkontexteApi.md#personenkontextControllerUpdatePersonenkontextWithId) | **PUT** /api/personenkontexte/{personenkontextId}       |

# **personenkontextControllerDeletePersonenkontextById**

> void personenkontextControllerDeletePersonenkontextById(deleteRevisionBodyParams)

### Example

```typescript
import { createConfiguration, PersonenkontexteApi } from "";
import type { PersonenkontexteApiPersonenkontextControllerDeletePersonenkontextByIdRequest } from "";

const configuration = createConfiguration();
const apiInstance = new PersonenkontexteApi(configuration);

const request: PersonenkontexteApiPersonenkontextControllerDeletePersonenkontextByIdRequest =
  {
    // The id for the personenkontext.
    personenkontextId: "personenkontextId_example",

    deleteRevisionBodyParams: {
      revision: "revision_example",
    },
  };

const data =
  await apiInstance.personenkontextControllerDeletePersonenkontextById(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name                         | Type                         | Description                     | Notes                 |
| ---------------------------- | ---------------------------- | ------------------------------- | --------------------- |
| **deleteRevisionBodyParams** | **DeleteRevisionBodyParams** |                                 |
| **personenkontextId**        | [**string**]                 | The id for the personenkontext. | defaults to undefined |

### Return type

**void**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details

| Status code | Description                                    | Response headers |
| ----------- | ---------------------------------------------- | ---------------- |
| **204**     | The personenkontext was successfully deleted.  | -                |
| **400**     | Request has wrong format.                      | -                |
| **401**     | Request is not authorized.                     | -                |
| **403**     | Insufficient permissions to perform operation. | -                |
| **404**     | The personenkontext was not found.             | -                |
| **500**     | An internal server error occurred.             | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **personenkontextControllerFindPersonenkontextById**

> PersonendatensatzResponseAutomapper personenkontextControllerFindPersonenkontextById()

### Example

```typescript
import { createConfiguration, PersonenkontexteApi } from "";
import type { PersonenkontexteApiPersonenkontextControllerFindPersonenkontextByIdRequest } from "";

const configuration = createConfiguration();
const apiInstance = new PersonenkontexteApi(configuration);

const request: PersonenkontexteApiPersonenkontextControllerFindPersonenkontextByIdRequest =
  {
    // The id for the personenkontext.
    personenkontextId: "personenkontextId_example",
  };

const data =
  await apiInstance.personenkontextControllerFindPersonenkontextById(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name                  | Type         | Description                     | Notes                 |
| --------------------- | ------------ | ------------------------------- | --------------------- |
| **personenkontextId** | [**string**] | The id for the personenkontext. | defaults to undefined |

### Return type

**PersonendatensatzResponseAutomapper**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                    | Response headers |
| ----------- | ---------------------------------------------- | ---------------- |
| **200**     | The personenkontext was successfully returned. | -                |
| **400**     | Request has wrong format.                      | -                |
| **401**     | Request is not authorized.                     | -                |
| **403**     | Insufficient permissions to perform operation. | -                |
| **404**     | The personenkontext was not found.             | -                |
| **500**     | An internal server error occurred.             | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **personenkontextControllerFindPersonenkontexte**

> Array<PersonenkontextdatensatzResponse> personenkontextControllerFindPersonenkontexte()

### Example

```typescript
import { createConfiguration, PersonenkontexteApi } from "";
import type { PersonenkontexteApiPersonenkontextControllerFindPersonenkontexteRequest } from "";

const configuration = createConfiguration();
const apiInstance = new PersonenkontexteApi(configuration);

const request: PersonenkontexteApiPersonenkontextControllerFindPersonenkontexteRequest =
  {
    // The offset of the paginated list. (optional)
    offset: 3.14,
    // The requested limit for the page size. (optional)
    limit: 3.14,

    personId: "personId_example",

    referrer: "referrer_example",

    personenstatus: "AKTIV",

    sichtfreigabe: "ja",
  };

const data =
  await apiInstance.personenkontextControllerFindPersonenkontexte(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name               | Type               | Description                            | Notes                            |
| ------------------ | ------------------ | -------------------------------------- | -------------------------------- |
| **offset**         | [**number**]       | The offset of the paginated list.      | (optional) defaults to undefined |
| **limit**          | [**number**]       | The requested limit for the page size. | (optional) defaults to undefined |
| **personId**       | [**string**]       |                                        | (optional) defaults to undefined |
| **referrer**       | [**string**]       |                                        | (optional) defaults to undefined |
| **personenstatus** | **Personenstatus** |                                        | (optional) defaults to undefined |
| **sichtfreigabe**  | **Sichtfreigabe**  |                                        | (optional) defaults to undefined |

### Return type

**Array<PersonenkontextdatensatzResponse>**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                      | Response headers                                                                                                                                                                                                                                                                                                        |
| ----------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **200**     | The personenkontexte were successfully returned. | _ X-Paging-Offset - The offset of the first item from the list. List starts with index 0. <br> _ X-Paging-Limit - The maximum amount of items returned in one request. <br> _ X-Paging-Total - The total amount of items in the list. <br> _ X-Paging-pageTotal - The total amount of items in the paginated list. <br> |
| **400**     | Request has wrong format.                        | -                                                                                                                                                                                                                                                                                                                       |
| **401**     | Request is not authorized.                       | -                                                                                                                                                                                                                                                                                                                       |
| **403**     | Insufficient permissions to perform operation.   | -                                                                                                                                                                                                                                                                                                                       |
| **404**     | The personenkontexte were not found.             | -                                                                                                                                                                                                                                                                                                                       |
| **500**     | An internal server error occurred.               | -                                                                                                                                                                                                                                                                                                                       |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **personenkontextControllerHatSystemRecht**

> SystemrechtResponse personenkontextControllerHatSystemRecht()

### Example

```typescript
import { createConfiguration, PersonenkontexteApi } from "";
import type { PersonenkontexteApiPersonenkontextControllerHatSystemRechtRequest } from "";

const configuration = createConfiguration();
const apiInstance = new PersonenkontexteApi(configuration);

const request: PersonenkontexteApiPersonenkontextControllerHatSystemRechtRequest =
  {
    // The id for the account.
    personId: "personId_example",

    systemRecht: "ROLLEN_VERWALTEN",
  };

const data = await apiInstance.personenkontextControllerHatSystemRecht(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name            | Type                  | Description             | Notes                 |
| --------------- | --------------------- | ----------------------- | --------------------- |
| **personId**    | [**string**]          | The id for the account. | defaults to undefined |
| **systemRecht** | **RollenSystemRecht** |                         | defaults to undefined |

### Return type

**SystemrechtResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                                                  | Response headers |
| ----------- | -------------------------------------------------------------------------------------------- | ---------------- |
| **200**     | The SchulStrukturKnoten associated with this personId and systemrecht. Can return empty list | -                |
| **404**     | The systemrecht could not be found (does not exist as type of systemrecht).                  | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **personenkontextControllerUpdatePersonenkontextWithId**

> PersonenkontextResponse personenkontextControllerUpdatePersonenkontextWithId()

### Example

```typescript
import { createConfiguration, PersonenkontexteApi } from "";
import type { PersonenkontexteApiPersonenkontextControllerUpdatePersonenkontextWithIdRequest } from "";

const configuration = createConfiguration();
const apiInstance = new PersonenkontexteApi(configuration);

const request: PersonenkontexteApiPersonenkontextControllerUpdatePersonenkontextWithIdRequest =
  {
    personenkontextId: "personenkontextId_example",
  };

const data =
  await apiInstance.personenkontextControllerUpdatePersonenkontextWithId(
    request,
  );
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name                  | Type         | Description | Notes                 |
| --------------------- | ------------ | ----------- | --------------------- |
| **personenkontextId** | [**string**] |             | defaults to undefined |

### Return type

**PersonenkontextResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                    | Response headers |
| ----------- | ---------------------------------------------- | ---------------- |
| **200**     | The personenkontext was successfully updated.  | -                |
| **400**     | Request has wrong format.                      | -                |
| **401**     | Request is not authorized.                     | -                |
| **403**     | Insufficient permissions to perform operation. | -                |
| **404**     | The personenkontext was not found.             | -                |
| **500**     | An internal server error occurred.             | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
