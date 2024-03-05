#!/bin/bash

# Setup postgres
/etc/init.d/postgresql start || true
cp sql/*.sql /tmp/
su - postgres -c psql < /tmp/init.sql || true
su - postgres -c "echo \"SELECT * FROM pg_create_logical_replication_slot('slot_wal2json', 'wal2json');\" | psql -d demodb"

# Startup background job script that generates "traffic" to the db
su - postgres -c "( while :; do psql -d demodb < /tmp/example.sql || true ; sleep 2; done )" &

# Start the replication server that pushes data to Boiling Data Tap URL
/root/.nvm/versions/node/v20.11.1/bin/node /var/task/src/index.js