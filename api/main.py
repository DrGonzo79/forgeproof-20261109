from pathlib import Path
import json
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

DEMO = json.loads((Path(__file__).parents[1] / "data" / "demo.json").read_text())
RULES = DEMO["rules"]
app = FastAPI(title="ForgeProof API", version="0.1.0")

class ProofInput(BaseModel):
    name: str = Field(min_length=1, max_length=70)
    category: str = Field(min_length=2, max_length=40)
    value: int = Field(ge=1, le=1_000_000)
    materials: int = Field(ge=0, le=30)
    receipts: int = Field(ge=0, le=30)
    stages: int = Field(ge=0, le=30)
    photos: int = Field(ge=0, le=100)
    timestamps: bool
    inspection: bool

def assess_proof(item: ProofInput) -> dict:
    r = RULES
    score = round(
        min(item.materials / 3, 1) * r["materialWeight"]
        + min(item.receipts / 3, 1) * r["receiptWeight"]
        + min(item.stages / r["minimumStages"], 1) * r["stageWeight"]
        + min(item.photos / r["minimumPhotos"], 1) * r["photoWeight"]
        + (r["timestampWeight"] if item.timestamps else 0)
        + (r["inspectionWeight"] if item.inspection else 0)
    )
    return {"score": score, "band": "strong" if score >= 80 else "credible" if score >= 55 else "thin", "ruleVersion": r["version"], "disclaimer": "Evidence completeness only; not proof of authenticity or ownership."}

@app.get("/health")
def health() -> dict:
    return {"status": "ok", "ruleVersion": RULES["version"]}

@app.post("/proof/assess")
def assess(item: ProofInput) -> dict:
    if item.category.lower() not in {"jewelry", "ceramics", "leather"}:
        raise HTTPException(status_code=422, detail="Demo supports Jewelry, Ceramics, or Leather.")
    return assess_proof(item)
