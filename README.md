# schulportal-load-tests

Load and performance tests for the schulportal

##

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
