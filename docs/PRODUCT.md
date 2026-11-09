# Product plan

## ICP and JTBD

Opening ICP is a North American jewelry guild with 20–100 professional members, an existing juried standard, and a director responsible for member promotion. Member JTBD: “While I make a high-value piece, help me preserve enough credible evidence that I can answer a buyer or platform challenge without reconstructing my process.” Guild JTBD: publish a consistent maker standard without becoming a forensic lab.

## MVP

One vertical, one guild, four capabilities: mobile stage capture, materials/receipt references, human review queue, and a buyer-readable passport with explicit disclaimers. NFC is a link carrier after workflow validation. The demo implements the core rule evaluation, gap feedback, passport preview, validation, loading/empty/error states and publish-readiness rehearsal with fictional data.

## Data model

- `Guild`, `Maker`, `Item`, `MaterialClaim`, `SupplierEvidence`
- `ProcessStage` (captured_at, device metadata, media digest, notes)
- `Review` (reviewer, decision, gaps, policy version)
- `Passport` (public fields, version, revocation status)
- `TagBinding`, `OwnershipEvent`, `CareEvent`, `RepairEvent`

Evidence media should be private by default; public passports disclose derived facts and selected media. Use append-only event history and versioned policy rules. Never market a score as proof of authorship.

## Architecture and AI strategy

Next.js PWA → FastAPI → PostgreSQL + object storage + background media processing. Signed uploads, tenant-scoped authorization, immutable event records and audit exports are mandatory before real use. A rules engine handles completeness. Optional AI may suggest redactions, classify stage photos and flag contradictions, but cannot approve authenticity or silently reject makers. Every suggestion needs a reason and human override.

## Economics

Lead with a $1,500 assisted pilot, then $299/month for 20 makers plus usage/tag packs. At $299 MRR, gross margin should exceed 75% only if reviewer labor stays under roughly 2 hours/month/guild; otherwise price per reviewed passport. The report's $19/$39 self-serve tiers can become downstream offers, not initial acquisition. A $1.5M ARR outcome needs roughly 418 guild-equivalents at $299/month, materially harder than the report's top-line market size implies.

## Validation and moat

Test one paid pilot before production infrastructure. Primary metrics: second-passport completion, capture overhead, reviewer time, buyer scan rate, dispute-export use and renewal. Moat, if earned: guild distribution, a category-specific evidence policy, longitudinal care/repair/transfer history and a corpus of reviewed process patterns. NFC, QR codes, generic scoring and blockchain are commodities.

## Risks

Fabricated evidence, transferred tags, stolen accounts, sensitive supplier details, false confidence, guild liability, marketplace non-recognition, burdensome capture and incumbent copying. Mitigate with claim-level language, media privacy, revocation, tamper-evident event history, human review, red-team scenarios and no “certified authentic” wording.

## 30/60/90 days

- **0–30:** recruit one jewelry guild, observe five workflows, sell pilot, define v0 evidence policy, run forms-based capture.
- **31–60:** ship private mobile capture and reviewer queue; complete 40 real passports; instrument time and abandonment.
- **61–90:** bind optional tags, deliver buyer pages, run dispute-export drill, measure scans and renewal; choose scale, pivot or stop from thresholds in `OFFICE_HOURS.md`.
