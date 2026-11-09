# ForgeProof

A runnable vertical-slice prototype for turning a maker's materials, process stages and inspection notes into an evidence-completeness report and buyer passport preview. All product data is fictional. The score does **not** authenticate an object.

## Run

Requires Node 24.22.2 and Python 3.13.

```bash
npm ci
npm run dev

cd api
uv sync --frozen
uv run uvicorn api.main:app --reload
```

## Verify

```bash
npm run typecheck
npm run build
npm run test:e2e
npm audit --audit-level=high
cd api && uv run pytest
```

The GitHub Pages deployment is frontend-only. FastAPI is tested source and is not deployed. See `research/notes.md`, `docs/OFFICE_HOURS.md`, `docs/PRODUCT.md`, `docs/ARCHITECTURE.md`, `docs/CEO_REVIEW.md` and `docs/OPPORTUNITY_SCORE.md` for source-derived analysis and decisions.

Source idea: https://www.ideabrowser.com/hub/ideas/today
