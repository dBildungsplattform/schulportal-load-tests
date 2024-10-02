# schulportal-load-tests

Load and performance tests for the schulportal

## How to run

You will need a working installation of k6. ([How to install k6](https://grafana.com/docs/k6/latest/set-up/install-k6/)).

To run all usecases against `https://example.env/`:
```sh
./run.sh "https://example.env/"
```
Note the trailing slash!

### Configuration

WIP: Currently everything (namely VUs, iterations, target environment) is configured via CLI options in `run.sh`.

You have to provide `loadtest/data/users.json` with usernames and passwords for the tests to work. An example is provided in `loadtest/data/`.

## Development

```sh
npm run check # to format, lint, typecheck the code
```
