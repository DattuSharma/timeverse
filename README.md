# TIMEVERSE — BY DATTU SHARMA

**The World of Watch Intelligence**

TIMEVERSE is an evidence-first watch discovery and ownership intelligence platform. Its ambition is to connect watch research, fit, purchase decisions, education, ownership, servicing, valuation and resale in one coherent product.

> Product principle: useful, verifiable watch information before impressive-looking AI.

## Current status

**Milestone:** Initial foundation scaffold on `develop`.  
**Not yet verified:** Local installation, automated tests, browser behavior and production deployment.  
**Data:** No live watch catalogue or live pricing is claimed.

## Repository structure

- `frontend/` — Next.js, React, TypeScript and Tailwind application.
- `backend/` — FastAPI service and pytest tests.
- `docs/` — product, architecture, research and roadmap.
- `CONTRIBUTING.md` — branch and AI-tool workflow.

## Run locally (Windows PowerShell)

Backend:
```powershell
cd backend
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

Open API docs at http://127.0.0.1:8000/docs and health at http://127.0.0.1:8000/api/v1/health.

Frontend (in a second terminal):
```powershell
cd frontend
npm install
npm run dev
```

Open http://localhost:3000.

## Product trust rules

- Identify exact references and variants wherever possible.
- Attach sources and retrieval dates to factual claims.
- Distinguish verified, partially verified, unverified, conflicting and unavailable data.
- Never invent specifications, prices, availability, price history or seller information.
- Clearly label estimates, illustrative visuals and sample/demo data.
- An image or AI-generated scene is not proof of physical authenticity.
- Respect source terms, licensing, privacy and rate limits.

## Architecture and roadmap

- [Product brief](docs/PRODUCT_BRIEF.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Research plan](docs/RESEARCH_PLAN.md)
- [Roadmap](docs/ROADMAP.md)
- [Contribution workflow](CONTRIBUTING.md)

## Local-first principle

The first milestone should run on an ordinary Windows laptop without paid APIs, heavyweight local AI models or cloud infrastructure. External providers must be optional adapters, not hard dependencies.
