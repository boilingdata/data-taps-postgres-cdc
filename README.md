[FluentBit](https://github.com/boilingdata/data-taps-fluentbit-example) | [Web Analytics](https://github.com/boilingdata/data-taps-webanalytics-example) | [PostgreSQL CDC](https://github.com/boilingdata/data-taps-postgres-cdc) | [REST API](https://github.com/boilingdata/data-taps-nycopendata-example) | [OpenSearch/ES](https://github.com/boilingdata/data-taps-opensearch-to-s3)

# PostgreSQL CDC --> Data Tap --> S3 Parquet

<p align="center">
  <img src="img/postgres-cdc.png" title="simple architecture">
</p>

Example docker container running PostgreSQL server with [wal2json](https://github.com/eulerto/wal2json) logical CDC plugin, along with node server subscribing to the CDC stream and sending them to Data Taps public Tap URL.

```shell
yarn install
yarn build
yarn start
yarn logs
```
