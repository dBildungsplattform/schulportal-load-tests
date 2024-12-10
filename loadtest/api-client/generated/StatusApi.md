# .StatusApi

All URIs are relative to _http://localhost_

| Method                                                                  | HTTP request        | Description |
| ----------------------------------------------------------------------- | ------------------- | ----------- |
| [**statusControllerGetStatus**](StatusApi.md#statusControllerGetStatus) | **GET** /api/status |

# **statusControllerGetStatus**

> void statusControllerGetStatus()

### Example

```typescript
import { createConfiguration, StatusApi } from "";

const configuration = createConfiguration();
const apiInstance = new StatusApi(configuration);

const request = {};

const data = await apiInstance.statusControllerGetStatus(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     |             | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
