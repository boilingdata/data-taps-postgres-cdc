import { LogicalReplicationService, Wal2JsonPlugin } from "pg-logical-replication";

const PG_SLOTNAME = process.env["PG_SLOTNAME"];
const PG_USERNAME = process.env["PG_USERNAME"];
const PG_PASSWORD = process.env["PG_PASSWORD"];
const PG_DBNAME = process.env["PG_DBNAME"];
const BD_TAP_URL = process.env["BD_TAP_URL"];
const DEBUG = process.env["DEBUG"] == "true";

const plugin = new Wal2JsonPlugin();
const service = new LogicalReplicationService({ database: PG_DBNAME, user: PG_USERNAME, password: PG_PASSWORD });

service.on("data", async (lsn, log) => {
  try {
    // send whole batch if it has any change records
    const method = "POST";
    const headers = { "Content-Type": "application/json" };
    if (!Array.isArray(log.change) || log.change.length <= 0) return;
    const body = JSON.stringify({ lsn, log });
    if (DEBUG) console.log(body);
    await fetch(BD_TAP_URL, { method, body, headers });
  } catch (err) {
    console.error(err);
  }
});

// Start subscribing to data change events
(function proc() {
  service
    .subscribe(plugin, PG_SLOTNAME)
    .catch((e) => console.error(e))
    .then(() => setTimeout(proc, 100));
})();
