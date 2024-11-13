# schulportal-load-tests

Load and performance tests for the schulportal

## Running in the cluster

Go to Actions > Trigger Loadtest > Run workflow.

In the dialog enter the following and replace the UPPERCASE words in the right column with the appropriate values (see explanation below).

| Field | Value |
| --- | --- |
| Use workflow from | main |
| Branch to take tests and helm/cron setup from | main |
| sets PATTERN env var used as k6 input | PATTERN |
| sets CONFIG env var used as k6 input | CONFIG |
| name of test scenario defined in values.yaml | SCENARIO |
| execute cronjob scenario after install | true |

### Values explained

| Value | Description |
| --- | --- |
| PATTERN | a glob that matches a file in `loadtest/usecases`, i.e. `1` or `login` |
| CONFIG | one of spike, stress, breakpoint, debug; see `loadtest/util/config.ts` |
| SCENARIO | target environment; one of dev-scenario, staging-scenario, prod-scenario; see `charts/schulportal-load-tests/values.yaml` |

## Local

### Setup

You will need a working installation of k6. ([How to install k6](https://grafana.com/docs/k6/latest/set-up/install-k6/)).

You have to provide `loadtest/data/users.json` with usernames, passwords and role for the tests to work. An example is provided in `loadtest/data/`.

To create type-definitions for the API run:

```sh
npm run generate-client # to generate new type-definitions for the api
```

This uses `loadtest\api-client\openapispec.json`. You can obtain the file from the `schulportal-client` or a running instance of `dbildungs-iam-server`. Sadly the generated client itself is not usable here, but the types/models are.

### How to run

Tests are categorized as

```
spike
stress
breakpoint
```

To run all usecases with the stress-configuration against `https://example.env/`:

```sh
./run.sh "https://example.env/" stress
```

And you can selectively run usecases by providing a regex for the filename:

```sh
./run.sh "https://example.env/" stress login
```

## Development

```sh
npm run check # to format, lint, typecheck the code
```

```sh
npm run generate-client # to generate new type-definitions for the api
```

```sh
 # k6 requires filetypes on some imports and won't run without them.
 # The error does not give you a lot to go on, but this will list all locations where these extensions are missing.
./find-bad-imports.sh
```
