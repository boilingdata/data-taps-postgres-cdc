[Collect(d)ion and FluentBit](https://github.com/boilingdata/data-taps-fluentbit-example) | [Web Analytics capture](https://github.com/boilingdata/data-taps-webanalytics-example) | [PostgreSQL CDC](https://github.com/boilingdata/data-taps-postgres-cdc)

# PostgreSQL CDC to Data Taps

Example docker container running PostgreSQL server with [wal2json](https://github.com/eulerto/wal2json) logical CDC plugin, along with node server subscribing to the CDC stream and sending them to Data Taps public Tap URL.

```shell
yarn install
yarn build
yarn start
yarn logs
```

==> You can go to Data Taps home page and see the metrics flowing in at: https://www.taps.boilingdata.com/
