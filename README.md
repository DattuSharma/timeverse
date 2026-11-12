# TIMEVERSE — BY DATTU SHARMA

**The World of Watch Intelligence**

TIMEVERSE is an evidence-first watch discovery and ownership intelligence platform. Its ambition is to connect watch research, fit, purchase decisions, education, ownership records, servicing, valuation and resale in one coherent product.

> Product principle: useful, verifiable watch information before impressive-looking AI.

## Product status

**Stage:** Foundation and research  
**Release:** Not yet implemented  
**Data:** No live watch catalogue or live pricing is claimed at this stage.

## Product pillars

1. **Discover** — search watch brands, models and exact references.
2. **Understand** — inspect specifications, movement, materials and construction.
3. **Verify** — trace claims to sources, dates and confidence states.
4. **Decide** — compare watches and match them to a buyer's needs.
5. **Fit** — understand case dimensions and wrist-fit approximations.
6. **Own** — keep purchase, warranty, service and condition records.
7. **Learn** — explore watchmaking and movement engineering.
8. **Create** — produce watch presentations and clearly labelled illustrative cinematic content.

## Trust rules

- Identify the exact reference and variant wherever possible.
- Attach sources and retrieval dates to factual claims.
- Distinguish verified, partially verified, unverified, conflicting and unavailable data.
- Never invent specifications, prices, availability, price history or seller information.
- Clearly label estimates, illustrative visuals and sample/demo data.
- An image or AI-generated scene is not proof of physical authenticity.
- Respect source terms, licensing, privacy and rate limits.

## Initial technical direction

- Frontend: Next.js App Router, React, TypeScript and Tailwind CSS.
- Backend: Python FastAPI, Pydantic and SQLAlchemy.
- Development database: SQLite; keep the data layer PostgreSQL-compatible.
- Tests: pytest, frontend tests and browser-level end-to-end tests.
- Repository workflow: stable `main`, integration `develop`, short-lived feature branches and reviewed pull requests.

Technology choices are provisional until the architecture decision record is completed.

## Documentation

- [Product brief](docs/PRODUCT_BRIEF.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Research and validation plan](docs/RESEARCH_PLAN.md)
- [Development roadmap](docs/ROADMAP.md)
- [Contribution workflow](CONTRIBUTING.md)

## Local-first development

The first milestone must run on an ordinary Windows laptop without paid APIs, heavyweight local AI models or cloud infrastructure. External providers must be optional adapters, not hard dependencies.

## Current milestone

**Milestone 0–1:** Validate the product opportunity, establish the architecture and create a tested application foundation. No production data providers, AI video promises or paid services are assumed.
