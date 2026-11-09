# Architecture

## Prototype

The static Next.js app imports `data/demo.json` and runs the same deterministic FP-0.1 scoring model implemented by FastAPI. This keeps GitHub Pages useful without pretending the API is hosted. State lives only in React memory. FastAPI exposes `/health` and `/proof/assess` and is verified through integration tests.

## Production boundary

Use Next.js as a PWA and FastAPI for authenticated commands. Store relational metadata in PostgreSQL and media in encrypted object storage via short-lived signed uploads. Hash media at ingestion; write stage, review and policy changes to an append-only event table. Render public passports from an explicit allowlist, never the private evidence object.

Tenant scope must be enforced server-side on every guild/maker relation. Roles: maker, guild reviewer, guild admin and support auditor. Add rate limits, media malware scanning, export/deletion workflows, revocation, structured audit logs and backup-restore drills. Observability: trace capture→upload→review→publish; alert on upload failures, review latency, public-render errors and anomalous revocations.

## Failure modes

Offline upload retries can duplicate stages; use idempotency keys. Device clocks can lie; retain both device and server receipt time. A public record may outlive consent; support immediate unpublish plus auditable tombstones. Tag cloning is inevitable with cheap NFC; state that tag binding is a pointer and graduate to secure chips only if threat modeling and unit economics justify them.

## Security/version floor

Node is pinned to 24.22.2 (official LTS release checked 2026-11-09); Next.js 16.4.5, `source-map-js` 1.2.2 and PostCSS 8.5.32 satisfy the workflow floor. Python requires certifi ≥2026.10.19 and the lock resolves a current release. Docker stages refresh the Debian certificate store before network installs. CI uses exact Node and uv versions and locked installs.
