from fastapi.testclient import TestClient
from api.main import app

client = TestClient(app)
BASE = {"name":"Demo ring","category":"Jewelry","value":680,"materials":3,"receipts":3,"stages":5,"photos":11,"timestamps":True,"inspection":True}

def test_health():
    assert client.get("/health").json() == {"status":"ok","ruleVersion":"FP-0.1"}

def test_strong_packet():
    response = client.post("/proof/assess", json=BASE)
    assert response.status_code == 200
    assert response.json()["score"] == 100
    assert response.json()["band"] == "strong"

def test_thin_packet_and_validation():
    weak = {**BASE, "materials":0, "receipts":0, "stages":1, "photos":0, "timestamps":False, "inspection":False}
    assert client.post("/proof/assess", json=weak).json()["band"] == "thin"
    assert client.post("/proof/assess", json={**BASE, "value":0}).status_code == 422

def test_unsupported_category():
    response = client.post("/proof/assess", json={**BASE, "category":"Furniture"})
    assert response.status_code == 422
    assert "supports" in response.json()["detail"]
