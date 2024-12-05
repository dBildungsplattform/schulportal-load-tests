# .DbiamPersonenkontexteApi

All URIs are relative to _http://localhost_

| Method                                                                                                                                                       | HTTP request                                  | Description |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- | ----------- |
| [**dBiamPersonenkontextControllerCreatePersonenkontextMigration**](DbiamPersonenkontexteApi.md#dBiamPersonenkontextControllerCreatePersonenkontextMigration) | **POST** /api/dbiam/personenkontext           |
| [**dBiamPersonenkontextControllerFindPersonenkontextsByPerson**](DbiamPersonenkontexteApi.md#dBiamPersonenkontextControllerFindPersonenkontextsByPerson)     | **GET** /api/dbiam/personenkontext/{personId} |

# **dBiamPersonenkontextControllerCreatePersonenkontextMigration**

> DBiamPersonenkontextResponse dBiamPersonenkontextControllerCreatePersonenkontextMigration(dbiamPersonenkontextMigrationBodyParams)

### Example

```typescript
import { createConfiguration, DbiamPersonenkontexteApi } from "";
import type { DbiamPersonenkontexteApiDBiamPersonenkontextControllerCreatePersonenkontextMigrationRequest } from "";

const configuration = createConfiguration();
const apiInstance = new DbiamPersonenkontexteApi(configuration);

const request: DbiamPersonenkontexteApiDBiamPersonenkontextControllerCreatePersonenkontextMigrationRequest =
  {
    dbiamPersonenkontextMigrationBodyParams: {
      personId: "personId_example",
      username: "username_example",
      organisationId: "organisationId_example",
      rolleId: "rolleId_example",
      befristung: new Date("1970-01-01T00:00:00.00Z"),
      email: "email_example",
      migrationRunType: "ITSLEARNING",
    },
  };

const data =
  await apiInstance.dBiamPersonenkontextControllerCreatePersonenkontextMigration(
    request,
  );
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name                                        | Type                                        | Description | Notes |
| ------------------------------------------- | ------------------------------------------- | ----------- | ----- |
| **dbiamPersonenkontextMigrationBodyParams** | **DbiamPersonenkontextMigrationBodyParams** |             |

### Return type

**DBiamPersonenkontextResponse**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                                      | Response headers |
| ----------- | -------------------------------------------------------------------------------- | ---------------- |
| **201**     | Personenkontext was successfully created.                                        | -                |
| **400**     | The personenkontext could not be created, may due to unsatisfied specifications. | -                |
| **401**     | Not authorized to create personenkontext.                                        | -                |
| **403**     | Insufficient permission to create personenkontext.                               | -                |
| **500**     | Internal server error while creating personenkontext.                            | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dBiamPersonenkontextControllerFindPersonenkontextsByPerson**

> Array<DBiamPersonenkontextResponse> dBiamPersonenkontextControllerFindPersonenkontextsByPerson()

### Example

```typescript
import { createConfiguration, DbiamPersonenkontexteApi } from "";
import type { DbiamPersonenkontexteApiDBiamPersonenkontextControllerFindPersonenkontextsByPersonRequest } from "";

const configuration = createConfiguration();
const apiInstance = new DbiamPersonenkontexteApi(configuration);

const request: DbiamPersonenkontexteApiDBiamPersonenkontextControllerFindPersonenkontextsByPersonRequest =
  {
    // The ID for the person.
    personId: "personId_example",
  };

const data =
  await apiInstance.dBiamPersonenkontextControllerFindPersonenkontextsByPerson(
    request,
  );
console.log("API called successfully. Returned data:", data);
```

### Parameters

| Name         | Type         | Description            | Notes                 |
| ------------ | ------------ | ---------------------- | --------------------- |
| **personId** | [**string**] | The ID for the person. | defaults to undefined |

### Return type

**Array<DBiamPersonenkontextResponse>**

### Authorization

[bearer](README.md#bearer), [oauth2](README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                    | Response headers |
| ----------- | -------------------------------------------------------------- | ---------------- |
| **200**     | The personenkontexte were successfully returned.               | -                |
| **401**     | Not authorized to get available personenkontexte.              | -                |
| **403**     | Insufficient permission to get personenkontexte for this user. | -                |
| **500**     | Internal server error while getting personenkontexte.          | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
