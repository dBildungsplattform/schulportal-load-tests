# .ProviderApi

All URIs are relative to _http://localhost_

| Method                                                                                                              | HTTP request                           | Description |
| ------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------- |
| [**providerControllerGetAllServiceProviders**](ProviderApi.md#providerControllerGetAllServiceProviders)             | **GET** /api/provider/all              |
| [**providerControllerGetAvailableServiceProviders**](ProviderApi.md#providerControllerGetAvailableServiceProviders) | **GET** /api/provider                  |
| [**providerControllerGetServiceProviderLogo**](ProviderApi.md#providerControllerGetServiceProviderLogo)             | **GET** /api/provider/{angebotId}/logo |

# **providerControllerGetAllServiceProviders**

> Array<ServiceProviderResponse> providerControllerGetAllServiceProviders()

Get all service-providers.

### Example

```typescript
import { createConfiguration, ProviderApi } from "";

const configuration = createConfiguration();
const apiInstance = new ProviderApi(configuration);

const request = {};

const data =
  await apiInstance.providerControllerGetAllServiceProviders(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Array<ServiceProviderResponse>**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                | Response headers |
| ----------- | ---------------------------------------------------------- | ---------------- |
| **200**     | The service-providers were successfully returned.          | -                |
| **401**     | Not authorized to get available service providers.         | -                |
| **403**     | Insufficient permissions to get service-providers.         | -                |
| **500**     | Internal server error while getting all service-providers. | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **providerControllerGetAvailableServiceProviders**

> Array<ServiceProviderResponse> providerControllerGetAvailableServiceProviders()

Get service-providers available for logged-in user.

### Example

```typescript
import { createConfiguration, ProviderApi } from "";

const configuration = createConfiguration();
const apiInstance = new ProviderApi(configuration);

const request = {};

const data =
  await apiInstance.providerControllerGetAvailableServiceProviders(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Array<ServiceProviderResponse>**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                | Response headers |
| ----------- | ---------------------------------------------------------- | ---------------- |
| **200**     | The service-providers were successfully returned.          | -                |
| **401**     | Not authorized to get available service providers.         | -                |
| **403**     | Insufficient permissions to get service-providers.         | -                |
| **500**     | Internal server error while getting all service-providers. | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **providerControllerGetServiceProviderLogo**

> any providerControllerGetServiceProviderLogo()

### Example

```typescript
import { createConfiguration, ProviderApi } from "";
import type { ProviderApiProviderControllerGetServiceProviderLogoRequest } from "";

const configuration = createConfiguration();
const apiInstance = new ProviderApi(configuration);

const request: ProviderApiProviderControllerGetServiceProviderLogoRequest = {
  // The id of the service provider
  angebotId: "angebotId_example",
};

const data =
  await apiInstance.providerControllerGetServiceProviderLogo(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name          | Type         | Description                    | Notes                 |
| ------------- | ------------ | ------------------------------ | --------------------- |
| **angebotId** | [**string**] | The id of the service provider | defaults to undefined |

### Return type

**any**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/\*

### HTTP response details

| Status code | Description                                                  | Response headers |
| ----------- | ------------------------------------------------------------ | ---------------- |
| **200**     | The logo for the service provider was successfully returned. | -                |
| **400**     | Angebot ID is required.                                      | -                |
| **401**     | Not authorized to get service provider logo.                 | -                |
| **403**     | Insufficient permissions to get the logo.                    | -                |
| **404**     | The service-provider does not exist or has no logo.          | -                |
| **500**     | Internal server error while getting the logo.                | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
