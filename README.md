# schulportal-load-tests

Load and performance tests for the schulportal

## How to run

You will need a working installation of k6. ([How to install k6](https://grafana.com/docs/k6/latest/set-up/install-k6/)).

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

### Configuration

You have to provide `loadtest/data/users.json` with usernames and passwords for the tests to work. An example is provided in `loadtest/data/`.


## Development

```sh
npm run check # to format, lint, typecheck the code
```
