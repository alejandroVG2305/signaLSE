import sys
import os
import json
import pytest
import jwt
from unittest.mock import patch, MagicMock
from fastapi.testclient import TestClient

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from tests.conftest import TEST_IMAGE_B64, TEST_IMAGE_B64_WITH_HEADER, JWT_SECRET
import sign_prediction_api as api
import sign_prediction_service as service

client = TestClient(api.app)


def _send_and_receive(image_b64: str) -> str:
    with client.websocket_connect("/predict") as ws:
        ws.send_text(json.dumps({"imageBase64": image_b64}))
        return ws.receive_text()


def _send_raw_and_receive(payload: dict) -> str:
    with client.websocket_connect("/predict") as ws:
        ws.send_text(json.dumps(payload))
        return ws.receive_text()


def _make_mock_gesture(category: str, score: float):
    g = MagicMock()
    g.category_name = category
    g.score = score
    return g


def test_PISP1_websocket_connection_is_accepted():
    with client.websocket_connect("/predict") as ws:
        assert ws is not None


def test_PISP2_valid_image_with_hand_returns_jwt_with_prediction():
    mock_prediction = [{"category": "H", "score": 0.97}]
    with patch("sign_prediction_api.make_prediction", return_value=mock_prediction):
        token = _send_and_receive(TEST_IMAGE_B64)

    decoded = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
    assert decoded["prediction"] == mock_prediction
    assert decoded["prediction"][0]["category"] == "H"
    assert decoded["prediction"][0]["score"] == 0.97


def test_PISP3_valid_image_without_hand_returns_jwt_with_empty_prediction():
    with patch("sign_prediction_api.make_prediction", return_value=[]):
        token = _send_and_receive(TEST_IMAGE_B64)

    decoded = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
    assert decoded["prediction"] == []


def test_PISP4_image_with_data_url_header_is_processed_correctly():
    mock_result = MagicMock()
    mock_result.gestures = [[_make_mock_gesture("B", 0.85)]]

    with patch.object(service.recognizer, "recognize", return_value=mock_result):
        token = _send_and_receive(TEST_IMAGE_B64_WITH_HEADER)

    decoded = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
    assert decoded["prediction"] == [{"category": "B", "score": 0.85}]



def test_PISP5_invalid_base64_string_returns_error_message():
    response = _send_and_receive("notavalidbase64!!!")

    data = json.loads(response)
    assert "error" in data



def test_PISP6_missing_image_field_returns_error_message():
    response = _send_raw_and_receive({})

    data = json.loads(response)
    assert "error" in data
    assert len(data["error"]) > 0


def test_PISP7_jwt_is_valid_and_expires_in_30_seconds():
    mock_prediction = [{"category": "A", "score": 0.90}]
    with patch("sign_prediction_api.make_prediction", return_value=mock_prediction):
        token = _send_and_receive(TEST_IMAGE_B64)

    decoded = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
    assert "iat" in decoded
    assert "exp" in decoded
    assert decoded["exp"] - decoded["iat"] == 30


def test_PISP8_client_disconnect_does_not_raise():
    with patch("sign_prediction_api.make_prediction", return_value=[]):
        try:
            with client.websocket_connect("/predict") as ws:
                pass  # Disconnect immediately without sending
        except Exception as e:
            pytest.fail(f"Disconnect raised an unexpected exception: {e}")
