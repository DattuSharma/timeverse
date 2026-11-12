from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="TIMEVERSE API",
    description="The World of Watch Intelligence",
    version="0.1.0",
)

# Local development defaults. Restrict this list before public deployment.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type"],
)


@app.get("/api/v1/health", tags=["Health"])
def health_check() -> dict[str, str]:
    """Return service status without exposing secrets or environment details."""
    return {"status": "ok", "service": "timeverse-api", "version": "0.1.0"}


@app.get("/", include_in_schema=False)
def root() -> dict[str, str]:
    return {"message": "TIMEVERSE API", "docs": "/docs"}
