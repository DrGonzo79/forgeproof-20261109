# Phased build prompts

## Phase 1 — paid-pilot operations

Build a tenant-aware capture service for one jewelry guild. Add Maker, Item, ProcessStage, MaterialClaim and Review models; signed media uploads; server/device timestamps; idempotency keys; role tests; private-by-default fields; and an admin queue. Instrument capture time, abandonment and review time. No AI or tag claims.

## Phase 2 — public passport and lifecycle

Add an allowlisted public projection, consent/unpublish, policy version, review decisions, revocation, optional QR/NFC binding and care/repair events. Threat-model cloned tags and stolen accounts. Add end-to-end tests for publish, revoke, transfer and offline retry. Run accessibility and privacy review.

## Phase 3 — cautious assistance

Only after 100 human-reviewed records, evaluate an assistive model for photo-stage classification, missing-evidence suggestions and PII redaction. Maintain a labeled holdout set, report false-positive/negative rates by craft, show reasons, require human approval and provide a non-AI path. Never let a model assert authenticity.
