# TIMEVERSE Architecture — Initial Decision

Status: Proposed; validate before implementation.

## System shape

- `apps/web`: Next.js App Router, React, TypeScript, Tailwind.
- `apps/api`: FastAPI service, Pydantic schemas, SQLAlchemy persistence.
- `packages/contracts`: shared API documentation and generated client types where practical.
- `docs`: product, research, architecture and operational decisions.

A monorepo keeps the first release understandable. Avoid premature microservices.

## Backend modules

- catalogue: brands, models, references and variants.
- specifications: typed facts and units.
- evidence: sources, claim provenance, retrieval dates and confidence.
- search: normalized search and filters.
- comparison: compatible-reference comparison.
- collection: user-owned saved watches.
- lifecycle: purchases, warranty, condition and service events (later).
- market: offers and price observations (later; only with trustworthy sources).
- media: licensed assets and generated illustrative media metadata (later).

## Core data concepts

- Brand
- WatchModel
- WatchReference
- Variant
- SpecificationClaim
- Source
- ClaimEvidence
- PriceObservation
- Collection
- CollectionItem
- OwnershipEvent

Do not conflate a marketing model name with an exact reference or variant.

## Evidence model

Each claim should carry:
- subject/reference and variant;
- property name, normalized value and unit;
- source identity and source URL where available;
- observed/retrieved date;
- source type;
- verification status;
- confidence rationale;
- notes about conflicts or ambiguity.

Suggested statuses: VERIFIED, PARTIALLY_VERIFIED, UNVERIFIED, CONFLICTING, NOT_AVAILABLE.

A status must be derived from documented review rules, not invented by a language model.

## API conventions

Prefix API routes with `/api/v1`. Return structured errors, validate input, paginate list endpoints and document schemas with OpenAPI.

Initial endpoints:
- GET /api/v1/health
- GET /api/v1/brands
- GET /api/v1/watches
- GET /api/v1/watches/{watch_id}
- GET /api/v1/watches/{watch_id}/evidence
- GET /api/v1/search?q=
- POST /api/v1/compare

Add write endpoints only with appropriate ownership and authorization design.

## Data and provider strategy

SQLite for local development. Use SQLAlchemy migrations and avoid SQLite-only assumptions so PostgreSQL remains viable.

External data integrations must sit behind provider adapters. Each adapter documents permitted use, rate limits, attribution, freshness and failure behavior. Do not scrape sites contrary to their terms or bypass controls.

## Security and privacy

- Validate all request data.
- Keep secrets in environment variables; never commit credentials.
- Restrict uploads by type, size and content inspection if uploads are introduced.
- Use authentication and per-user authorization before storing private collections or ownership records.
- Minimize personal data; provide export and deletion paths before public launch.
- Log operational events without logging secrets or unnecessary personal data.

## Performance and hardware

Target a modest Windows laptop with 16 GB RAM and integrated graphics. Avoid requiring local LLMs, GPU inference or heavy 3D scenes. Use optimized images, pagination, lazy loading and server-side data fetching where appropriate.

## Testing

- Unit tests for validation and evidence status.
- API integration tests against temporary test databases.
- Frontend component and interaction tests.
- End-to-end tests for search, detail, evidence and compare.
- Migration tests and basic accessibility checks.
