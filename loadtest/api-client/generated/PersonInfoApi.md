# .PersonInfoApi

All URIs are relative to _http://localhost_

| Method                                                                    | HTTP request             | Description                  |
| ------------------------------------------------------------------------- | ------------------------ | ---------------------------- |
| [**personInfoControllerInfo**](PersonInfoApi.md#personInfoControllerInfo) | **GET** /api/person-info | Info about logged in person. |

# **personInfoControllerInfo**

> PersonInfoResponse personInfoControllerInfo()

### Example

```typescript
import { createConfiguration, PersonInfoApi } from "";

const configuration = createConfiguration();
const apiInstance = new PersonInfoApi(configuration);

const request = {};

const data = await apiInstance.personInfoControllerInfo(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**PersonInfoResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                    | Response headers |
| ----------- | ------------------------------ | ---------------- |
| **200**     | Returns info about the person. | -                |
| **401**     | person is not logged in.       | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
