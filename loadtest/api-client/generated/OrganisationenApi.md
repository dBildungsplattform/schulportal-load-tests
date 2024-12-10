# .OrganisationenApi

All URIs are relative to _http://localhost_

| Method                                                                                                                                  | HTTP request                                                         | Description |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ----------- |
| [**organisationControllerAddAdministrierteOrganisation**](OrganisationenApi.md#organisationControllerAddAdministrierteOrganisation)     | **POST** /api/organisationen/{organisationId}/administriert          |
| [**organisationControllerAddZugehoerigeOrganisation**](OrganisationenApi.md#organisationControllerAddZugehoerigeOrganisation)           | **POST** /api/organisationen/{organisationId}/zugehoerig             |
| [**organisationControllerCreateOrganisation**](OrganisationenApi.md#organisationControllerCreateOrganisation)                           | **POST** /api/organisationen                                         |
| [**organisationControllerDeleteKlasse**](OrganisationenApi.md#organisationControllerDeleteKlasse)                                       | **DELETE** /api/organisationen/{organisationId}/klasse               |
| [**organisationControllerEnableForitslearning**](OrganisationenApi.md#organisationControllerEnableForitslearning)                       | **PUT** /api/organisationen/{organisationId}/enable-for-its-learning |
| [**organisationControllerFindOrganisationById**](OrganisationenApi.md#organisationControllerFindOrganisationById)                       | **GET** /api/organisationen/{organisationId}                         |
| [**organisationControllerFindOrganizations**](OrganisationenApi.md#organisationControllerFindOrganizations)                             | **GET** /api/organisationen                                          |
| [**organisationControllerGetAdministrierteOrganisationen**](OrganisationenApi.md#organisationControllerGetAdministrierteOrganisationen) | **GET** /api/organisationen/{organisationId}/administriert           |
| [**organisationControllerGetParentsByIds**](OrganisationenApi.md#organisationControllerGetParentsByIds)                                 | **POST** /api/organisationen/parents-by-ids                          |
| [**organisationControllerGetRootChildren**](OrganisationenApi.md#organisationControllerGetRootChildren)                                 | **GET** /api/organisationen/root/children                            |
| [**organisationControllerGetRootOrganisation**](OrganisationenApi.md#organisationControllerGetRootOrganisation)                         | **GET** /api/organisationen/root                                     |
| [**organisationControllerGetZugehoerigeOrganisationen**](OrganisationenApi.md#organisationControllerGetZugehoerigeOrganisationen)       | **GET** /api/organisationen/{organisationId}/zugehoerig              |
| [**organisationControllerUpdateOrganisation**](OrganisationenApi.md#organisationControllerUpdateOrganisation)                           | **PUT** /api/organisationen/{organisationId}                         |
| [**organisationControllerUpdateOrganisationName**](OrganisationenApi.md#organisationControllerUpdateOrganisationName)                   | **PATCH** /api/organisationen/{organisationId}/name                  |

# **organisationControllerAddAdministrierteOrganisation**

> void organisationControllerAddAdministrierteOrganisation(organisationByIdBodyParams)

### Example

```typescript
import { createConfiguration, OrganisationenApi } from "";
import type { OrganisationenApiOrganisationControllerAddAdministrierteOrganisationRequest } from "";

const configuration = createConfiguration();
const apiInstance = new OrganisationenApi(configuration);

const request: OrganisationenApiOrganisationControllerAddAdministrierteOrganisationRequest =
  {
    // The id of an organization
    organisationId: "organisationId_example",

    organisationByIdBodyParams: {
      organisationId: "organisationId_example",
    },
  };

const data =
  await apiInstance.organisationControllerAddAdministrierteOrganisation(
    request,
  );
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name                           | Type                           | Description               | Notes                 |
| ------------------------------ | ------------------------------ | ------------------------- | --------------------- |
| **organisationByIdBodyParams** | **OrganisationByIdBodyParams** |                           |
| **organisationId**             | [**string**]                   | The id of an organization | defaults to undefined |

### Return type

**void**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                             | Response headers |
| ----------- | ------------------------------------------------------- | ---------------- |
| **201**     | The organisation was successfully updated.              | -                |
| **400**     | The organisation could not be modified.                 | -                |
| **401**     | Not authorized to modify the organisation.              | -                |
| **403**     | Not permitted to modify the organisation.               | -                |
| **500**     | Internal server error while modifying the organisation. | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **organisationControllerAddZugehoerigeOrganisation**

> void organisationControllerAddZugehoerigeOrganisation(organisationByIdBodyParams)

### Example

```typescript
import { createConfiguration, OrganisationenApi } from "";
import type { OrganisationenApiOrganisationControllerAddZugehoerigeOrganisationRequest } from "";

const configuration = createConfiguration();
const apiInstance = new OrganisationenApi(configuration);

const request: OrganisationenApiOrganisationControllerAddZugehoerigeOrganisationRequest =
  {
    // The id of an organization
    organisationId: "organisationId_example",

    organisationByIdBodyParams: {
      organisationId: "organisationId_example",
    },
  };

const data =
  await apiInstance.organisationControllerAddZugehoerigeOrganisation(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name                           | Type                           | Description               | Notes                 |
| ------------------------------ | ------------------------------ | ------------------------- | --------------------- |
| **organisationByIdBodyParams** | **OrganisationByIdBodyParams** |                           |
| **organisationId**             | [**string**]                   | The id of an organization | defaults to undefined |

### Return type

**void**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                             | Response headers |
| ----------- | ------------------------------------------------------- | ---------------- |
| **201**     | The organisation was successfully updated.              | -                |
| **400**     | The organisation could not be modified.                 | -                |
| **401**     | Not authorized to modify the organisation.              | -                |
| **403**     | Not permitted to modify the organisation.               | -                |
| **500**     | Internal server error while modifying the organisation. | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **organisationControllerCreateOrganisation**

> OrganisationResponse organisationControllerCreateOrganisation(createOrganisationBodyParams)

### Example

```typescript
import { createConfiguration, OrganisationenApi } from "";
import type { OrganisationenApiOrganisationControllerCreateOrganisationRequest } from "";

const configuration = createConfiguration();
const apiInstance = new OrganisationenApi(configuration);

const request: OrganisationenApiOrganisationControllerCreateOrganisationRequest =
  {
    createOrganisationBodyParams: {
      administriertVon: "administriertVon_example",
      zugehoerigZu: "zugehoerigZu_example",
      kennung: "kennung_example",
      name: "name_example",
      namensergaenzung: "namensergaenzung_example",
      kuerzel: "kuerzel_example",
      typ: "ROOT",
      traegerschaft: "01",
      emailAdress: "emailAdress_example",
    },
  };

const data =
  await apiInstance.organisationControllerCreateOrganisation(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name                             | Type                             | Description | Notes |
| -------------------------------- | -------------------------------- | ----------- | ----- |
| **createOrganisationBodyParams** | **CreateOrganisationBodyParams** |             |

### Return type

**OrganisationResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                            | Response headers |
| ----------- | ------------------------------------------------------ | ---------------- |
| **201**     | The organisation was successfully created.             | -                |
| **400**     | The organisation already exists.                       | -                |
| **401**     | Not authorized to create the organisation.             | -                |
| **403**     | Not permitted to create the organisation.              | -                |
| **500**     | Internal server error while creating the organisation. | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **organisationControllerDeleteKlasse**

> void organisationControllerDeleteKlasse()

Delete an organisation of type Klasse by id.

### Example

```typescript
import { createConfiguration, OrganisationenApi } from "";
import type { OrganisationenApiOrganisationControllerDeleteKlasseRequest } from "";

const configuration = createConfiguration();
const apiInstance = new OrganisationenApi(configuration);

const request: OrganisationenApiOrganisationControllerDeleteKlasseRequest = {
  // The id of an organization
  organisationId: "organisationId_example",
};

const data = await apiInstance.organisationControllerDeleteKlasse(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name               | Type         | Description               | Notes                 |
| ------------------ | ------------ | ------------------------- | --------------------- |
| **organisationId** | [**string**] | The id of an organization | defaults to undefined |

### Return type

**void**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                             | Response headers |
| ----------- | ------------------------------------------------------- | ---------------- |
| **204**     | The organisation was deleted successfully.              | -                |
| **400**     | The input was not valid.                                | -                |
| **401**     | Not authorized to delete the organisation.              | -                |
| **404**     | The organisation that should be deleted does not exist. | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **organisationControllerEnableForitslearning**

> OrganisationResponseLegacy organisationControllerEnableForitslearning()

### Example

```typescript
import { createConfiguration, OrganisationenApi } from "";
import type { OrganisationenApiOrganisationControllerEnableForitslearningRequest } from "";

const configuration = createConfiguration();
const apiInstance = new OrganisationenApi(configuration);

const request: OrganisationenApiOrganisationControllerEnableForitslearningRequest =
  {
    // The id of an organization
    organisationId: "organisationId_example",
  };

const data =
  await apiInstance.organisationControllerEnableForitslearning(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name               | Type         | Description               | Notes                 |
| ------------------ | ------------ | ------------------------- | --------------------- |
| **organisationId** | [**string**] | The id of an organization | defaults to undefined |

### Return type

**OrganisationResponseLegacy**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                | Response headers                                                                                                                                                                                                                                                                                                        |
| ----------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **200**     | The organization was successfully enabled for itslearning. | _ X-Paging-Offset - The offset of the first item from the list. List starts with index 0. <br> _ X-Paging-Limit - The maximum amount of items returned in one request. <br> _ X-Paging-Total - The total amount of items in the list. <br> _ X-Paging-pageTotal - The total amount of items in the paginated list. <br> |
| **400**     | The organisation could not be modified.                    | -                                                                                                                                                                                                                                                                                                                       |
| **401**     | Not authorized to modify the organisation.                 | -                                                                                                                                                                                                                                                                                                                       |
| **403**     | Not permitted to modify the organisation.                  | -                                                                                                                                                                                                                                                                                                                       |
| **500**     | Internal server error while modifying the organisation.    | -                                                                                                                                                                                                                                                                                                                       |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **organisationControllerFindOrganisationById**

> OrganisationResponse organisationControllerFindOrganisationById()

### Example

```typescript
import { createConfiguration, OrganisationenApi } from "";
import type { OrganisationenApiOrganisationControllerFindOrganisationByIdRequest } from "";

const configuration = createConfiguration();
const apiInstance = new OrganisationenApi(configuration);

const request: OrganisationenApiOrganisationControllerFindOrganisationByIdRequest =
  {
    // The id of an organization
    organisationId: "organisationId_example",
  };

const data =
  await apiInstance.organisationControllerFindOrganisationById(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name               | Type         | Description               | Notes                 |
| ------------------ | ------------ | ------------------------- | --------------------- |
| **organisationId** | [**string**] | The id of an organization | defaults to undefined |

### Return type

**OrganisationResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                           | Response headers |
| ----------- | ----------------------------------------------------- | ---------------- |
| **200**     | The organization was successfully pulled.             | -                |
| **400**     | Organization ID is required                           | -                |
| **401**     | Not authorized to get the organization.               | -                |
| **403**     | Insufficient permissions to get the organization.     | -                |
| **404**     | The organization does not exist.                      | -                |
| **500**     | Internal server error while getting the organization. | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **organisationControllerFindOrganizations**

> Array<OrganisationResponse> organisationControllerFindOrganizations()

### Example

```typescript
import { createConfiguration, OrganisationenApi } from "";
import type { OrganisationenApiOrganisationControllerFindOrganizationsRequest } from "";

const configuration = createConfiguration();
const apiInstance = new OrganisationenApi(configuration);

const request: OrganisationenApiOrganisationControllerFindOrganizationsRequest =
  {
    // The offset of the paginated list. (optional)
    offset: 3.14,
    // The requested limit for the page size. (optional)
    limit: 3.14,

    kennung: "kennung_example",

    name: "name_example",

    searchString: "searchString_example",

    typ: "ROOT",

    systemrechte: ["ROLLEN_VERWALTEN"],

    excludeTyp: ["ROOT"],

    administriertVon: ["administriertVon_example"],
    // Liefert Organisationen mit den angegebenen IDs, selbst wenn andere Filterkriterien nicht zutreffen (ODER-verknüpft mit anderen Kriterien). (optional)
    organisationIds: ["organisationIds_example"],
  };

const data = await apiInstance.organisationControllerFindOrganizations(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name                 | Type                               | Description                                                                                                                                | Notes                            |
| -------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| **offset**           | [**number**]                       | The offset of the paginated list.                                                                                                          | (optional) defaults to undefined |
| **limit**            | [**number**]                       | The requested limit for the page size.                                                                                                     | (optional) defaults to undefined |
| **kennung**          | [**string**]                       |                                                                                                                                            | (optional) defaults to undefined |
| **name**             | [**string**]                       |                                                                                                                                            | (optional) defaults to undefined |
| **searchString**     | [**string**]                       |                                                                                                                                            | (optional) defaults to undefined |
| **typ**              | **OrganisationsTyp**               |                                                                                                                                            | (optional) defaults to undefined |
| **systemrechte**     | **Array&lt;RollenSystemRecht&gt;** |                                                                                                                                            | (optional) defaults to undefined |
| **excludeTyp**       | **Array&lt;OrganisationsTyp&gt;**  |                                                                                                                                            | (optional) defaults to undefined |
| **administriertVon** | **Array&lt;string&gt;**            |                                                                                                                                            | (optional) defaults to undefined |
| **organisationIds**  | **Array&lt;string&gt;**            | Liefert Organisationen mit den angegebenen IDs, selbst wenn andere Filterkriterien nicht zutreffen (ODER-verknüpft mit anderen Kriterien). | (optional) defaults to undefined |

### Return type

**Array<OrganisationResponse>**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                            | Response headers                                                                                                                                                                                                                                                                                                        |
| ----------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **200**     | The organizations were successfully returned.          | _ X-Paging-Offset - The offset of the first item from the list. List starts with index 0. <br> _ X-Paging-Limit - The maximum amount of items returned in one request. <br> _ X-Paging-Total - The total amount of items in the list. <br> _ X-Paging-pageTotal - The total amount of items in the paginated list. <br> |
| **401**     | Not authorized to get organizations.                   | -                                                                                                                                                                                                                                                                                                                       |
| **403**     | Insufficient permissions to get organizations.         | -                                                                                                                                                                                                                                                                                                                       |
| **500**     | Internal server error while getting all organizations. | -                                                                                                                                                                                                                                                                                                                       |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **organisationControllerGetAdministrierteOrganisationen**

> Array<OrganisationResponse> organisationControllerGetAdministrierteOrganisationen()

### Example

```typescript
import { createConfiguration, OrganisationenApi } from "";
import type { OrganisationenApiOrganisationControllerGetAdministrierteOrganisationenRequest } from "";

const configuration = createConfiguration();
const apiInstance = new OrganisationenApi(configuration);

const request: OrganisationenApiOrganisationControllerGetAdministrierteOrganisationenRequest =
  {
    // The id of an organization
    organisationId: "organisationId_example",
    // The offset of the paginated list. (optional)
    offset: 3.14,
    // The requested limit for the page size. (optional)
    limit: 3.14,

    searchFilter: "searchFilter_example",
  };

const data =
  await apiInstance.organisationControllerGetAdministrierteOrganisationen(
    request,
  );
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name               | Type         | Description                            | Notes                            |
| ------------------ | ------------ | -------------------------------------- | -------------------------------- |
| **organisationId** | [**string**] | The id of an organization              | defaults to undefined            |
| **offset**         | [**number**] | The offset of the paginated list.      | (optional) defaults to undefined |
| **limit**          | [**number**] | The requested limit for the page size. | (optional) defaults to undefined |
| **searchFilter**   | [**string**] |                                        | (optional) defaults to undefined |

### Return type

**Array<OrganisationResponse>**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                            | Response headers                                                                                                                                                                                                                                                                                                        |
| ----------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **200**     | The organizations were successfully returned.          | _ X-Paging-Offset - The offset of the first item from the list. List starts with index 0. <br> _ X-Paging-Limit - The maximum amount of items returned in one request. <br> _ X-Paging-Total - The total amount of items in the list. <br> _ X-Paging-pageTotal - The total amount of items in the paginated list. <br> |
| **401**     | Not authorized to get organizations.                   | -                                                                                                                                                                                                                                                                                                                       |
| **403**     | Insufficient permissions to get organizations.         | -                                                                                                                                                                                                                                                                                                                       |
| **500**     | Internal server error while getting all organizations. | -                                                                                                                                                                                                                                                                                                                       |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **organisationControllerGetParentsByIds**

> ParentOrganisationenResponse organisationControllerGetParentsByIds(parentOrganisationsByIdsBodyParams)

### Example

```typescript
import { createConfiguration, OrganisationenApi } from "";
import type { OrganisationenApiOrganisationControllerGetParentsByIdsRequest } from "";

const configuration = createConfiguration();
const apiInstance = new OrganisationenApi(configuration);

const request: OrganisationenApiOrganisationControllerGetParentsByIdsRequest = {
  parentOrganisationsByIdsBodyParams: {
    organisationIds: ["organisationIds_example"],
  },
};

const data = await apiInstance.organisationControllerGetParentsByIds(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name                                   | Type                                   | Description | Notes |
| -------------------------------------- | -------------------------------------- | ----------- | ----- |
| **parentOrganisationsByIdsBodyParams** | **ParentOrganisationsByIdsBodyParams** |             |

### Return type

**ParentOrganisationenResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                           | Response headers |
| ----------- | ----------------------------------------------------- | ---------------- |
| **200**     | The parent organizations were successfully pulled.    | -                |
| **401**     | Not authorized to get the organizations.              | -                |
| **403**     | Insufficient permissions to get the organizations.    | -                |
| **500**     | Internal server error while getting the organization. | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **organisationControllerGetRootChildren**

> OrganisationRootChildrenResponse organisationControllerGetRootChildren()

### Example

```typescript
import { createConfiguration, OrganisationenApi } from "";

const configuration = createConfiguration();
const apiInstance = new OrganisationenApi(configuration);

const request = {};

const data = await apiInstance.organisationControllerGetRootChildren(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**OrganisationRootChildrenResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                           | Response headers |
| ----------- | ----------------------------------------------------- | ---------------- |
| **200**     | The root organizations were successfully pulled.      | -                |
| **401**     | Not authorized to get the organizations.              | -                |
| **403**     | Insufficient permissions to get the organizations.    | -                |
| **500**     | Internal server error while getting the organization. | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **organisationControllerGetRootOrganisation**

> OrganisationResponse organisationControllerGetRootOrganisation()

### Example

```typescript
import { createConfiguration, OrganisationenApi } from "";

const configuration = createConfiguration();
const apiInstance = new OrganisationenApi(configuration);

const request = {};

const data =
  await apiInstance.organisationControllerGetRootOrganisation(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**OrganisationResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                | Response headers |
| ----------- | ---------------------------------------------------------- | ---------------- |
| **200**     | The root organization was successfully retrieved.          | -                |
| **401**     | Not authorized to get the root organization.               | -                |
| **403**     | Insufficient permissions to get the root organization.     | -                |
| **404**     | The root organization does not exist.                      | -                |
| **500**     | Internal server error while getting the root organization. | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **organisationControllerGetZugehoerigeOrganisationen**

> Array<OrganisationResponse> organisationControllerGetZugehoerigeOrganisationen()

### Example

```typescript
import { createConfiguration, OrganisationenApi } from "";
import type { OrganisationenApiOrganisationControllerGetZugehoerigeOrganisationenRequest } from "";

const configuration = createConfiguration();
const apiInstance = new OrganisationenApi(configuration);

const request: OrganisationenApiOrganisationControllerGetZugehoerigeOrganisationenRequest =
  {
    // The id of an organization
    organisationId: "organisationId_example",
  };

const data =
  await apiInstance.organisationControllerGetZugehoerigeOrganisationen(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name               | Type         | Description               | Notes                 |
| ------------------ | ------------ | ------------------------- | --------------------- |
| **organisationId** | [**string**] | The id of an organization | defaults to undefined |

### Return type

**Array<OrganisationResponse>**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                            | Response headers                                                                                                                                                                                                                                                                                                        |
| ----------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **200**     | The organizations were successfully returned.          | _ X-Paging-Offset - The offset of the first item from the list. List starts with index 0. <br> _ X-Paging-Limit - The maximum amount of items returned in one request. <br> _ X-Paging-Total - The total amount of items in the list. <br> _ X-Paging-pageTotal - The total amount of items in the paginated list. <br> |
| **401**     | Not authorized to get organizations.                   | -                                                                                                                                                                                                                                                                                                                       |
| **403**     | Insufficient permissions to get organizations.         | -                                                                                                                                                                                                                                                                                                                       |
| **500**     | Internal server error while getting all organizations. | -                                                                                                                                                                                                                                                                                                                       |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **organisationControllerUpdateOrganisation**

> OrganisationResponse organisationControllerUpdateOrganisation(updateOrganisationBodyParams)

### Example

```typescript
import { createConfiguration, OrganisationenApi } from "";
import type { OrganisationenApiOrganisationControllerUpdateOrganisationRequest } from "";

const configuration = createConfiguration();
const apiInstance = new OrganisationenApi(configuration);

const request: OrganisationenApiOrganisationControllerUpdateOrganisationRequest =
  {
    // The id of an organization
    organisationId: "organisationId_example",

    updateOrganisationBodyParams: {
      administriertVon: "administriertVon_example",
      zugehoerigZu: "zugehoerigZu_example",
      kennung: "kennung_example",
      name: "name_example",
      namensergaenzung: "namensergaenzung_example",
      kuerzel: "kuerzel_example",
      typ: "ROOT",
      traegerschaft: "01",
      emailAdress: "emailAdress_example",
    },
  };

const data =
  await apiInstance.organisationControllerUpdateOrganisation(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name                             | Type                             | Description               | Notes                 |
| -------------------------------- | -------------------------------- | ------------------------- | --------------------- |
| **updateOrganisationBodyParams** | **UpdateOrganisationBodyParams** |                           |
| **organisationId**               | [**string**]                     | The id of an organization | defaults to undefined |

### Return type

**OrganisationResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                    | Response headers |
| ----------- | ---------------------------------------------- | ---------------- |
| **200**     | The organisation was successfully updated.     | -                |
| **400**     | Request has wrong format.                      | -                |
| **401**     | Request is not authorized.                     | -                |
| **403**     | Insufficient permissions to perform operation. | -                |
| **404**     | The organisation was not found.                | -                |
| **500**     | An internal server error occurred.             | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **organisationControllerUpdateOrganisationName**

> OrganisationResponseLegacy organisationControllerUpdateOrganisationName(organisationByNameBodyParams)

### Example

```typescript
import { createConfiguration, OrganisationenApi } from "";
import type { OrganisationenApiOrganisationControllerUpdateOrganisationNameRequest } from "";

const configuration = createConfiguration();
const apiInstance = new OrganisationenApi(configuration);

const request: OrganisationenApiOrganisationControllerUpdateOrganisationNameRequest =
  {
    // The id of an organization
    organisationId: "organisationId_example",

    organisationByNameBodyParams: {
      name: "name_example",
      version: 3.14,
    },
  };

const data =
  await apiInstance.organisationControllerUpdateOrganisationName(request);
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name                             | Type                             | Description               | Notes                 |
| -------------------------------- | -------------------------------- | ------------------------- | --------------------- |
| **organisationByNameBodyParams** | **OrganisationByNameBodyParams** |                           |
| **organisationId**               | [**string**]                     | The id of an organization | defaults to undefined |

### Return type

**OrganisationResponseLegacy**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                             | Response headers                                                                                                                                                                                                                                                                                                        |
| ----------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **200**     | The organizations were successfully updated.            | _ X-Paging-Offset - The offset of the first item from the list. List starts with index 0. <br> _ X-Paging-Limit - The maximum amount of items returned in one request. <br> _ X-Paging-Total - The total amount of items in the list. <br> _ X-Paging-pageTotal - The total amount of items in the paginated list. <br> |
| **400**     | The organisation could not be modified.                 | -                                                                                                                                                                                                                                                                                                                       |
| **401**     | Not authorized to modify the organisation.              | -                                                                                                                                                                                                                                                                                                                       |
| **403**     | Not permitted to modify the organisation.               | -                                                                                                                                                                                                                                                                                                                       |
| **500**     | Internal server error while modifying the organisation. | -                                                                                                                                                                                                                                                                                                                       |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
