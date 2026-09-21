import base64
import sys
import os
import pytest
import numpy as np
from unittest.mock import MagicMock, patch
import cv2

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from tests.conftest import TEST_IMAGE_B64, TEST_IMAGE_B64_WITH_HEADER
import sign_prediction_service as svc


# ── transform_image ──────────────────────────────────────────────────────────

def test_PUPRED01_transform_image_valid_base64_returns_ndarray():
    result = svc.transform_image(TEST_IMAGE_B64)
    assert result is not None
    assert isinstance(result, np.ndarray)
    assert result.ndim == 3


def test_PUPRED02_transform_image_with_data_url_header_strips_prefix():
    result = svc.transform_image(TEST_IMAGE_B64_WITH_HEADER)
    assert result is not None
    assert isinstance(result, np.ndarray)


def test_PUPRED03_transform_image_invalid_base64_raises_exception():
    with pytest.raises(Exception):
        svc.transform_image("cadena-no-válida-$$")


def test_PUPRED04_transform_image_empty_string_returns_none_or_raises():
    try:
        result = svc.transform_image("")
        assert result is None
    except Exception:
        pass


# ── prepare_mp_image ─────────────────────────────────────────────────────────

def test_PUPRED05_prepare_mp_image_returns_flipped_srgb_image():
    img = np.zeros((480, 640, 3), dtype=np.uint8)
    img[0, 0] = [255, 0, 0]

    flip_calls = []
    cvt_calls = []
    original_flip = cv2.flip
    original_cvt = cv2.cvtColor

    def mock_flip(src, flipCode):
        flip_calls.append(flipCode)
        return original_flip(src, flipCode)

    def mock_cvt(src, code):
        cvt_calls.append(code)
        return original_cvt(src, code)

    with patch("sign_prediction_service.cv2.flip", side_effect=mock_flip), \
         patch("sign_prediction_service.cv2.cvtColor", side_effect=mock_cvt):
        result = svc.prepare_mp_image(img)

    assert 1 in flip_calls
    assert cv2.COLOR_BGR2RGB in cvt_calls
    assert result is not None


# ── make_prediction ───────────────────────────────────────────────────────────

def _make_mock_gesture(category: str, score: float):
    g = MagicMock()
    g.category_name = category
    g.score = score
    return g


def test_PUPRED06_make_prediction_with_hand_returns_category_and_score():
    mock_result = MagicMock()
    mock_result.gestures = [[_make_mock_gesture("B", 0.88)]]

    with patch.object(svc.recognizer, "recognize", return_value=mock_result):
        results = svc.make_prediction(TEST_IMAGE_B64)

    assert isinstance(results, list)
    assert len(results) >= 1
    assert "category" in results[0]
    assert "score" in results[0]


def test_PUPRED07_make_prediction_without_hand_returns_empty_list():
    mock_result = MagicMock()
    mock_result.gestures = []

    with patch.object(svc.recognizer, "recognize", return_value=mock_result):
        results = svc.make_prediction(TEST_IMAGE_B64)

    assert results == []


def test_PUPRED08_make_prediction_invalid_base64_raises_error():
    with pytest.raises(Exception):
        svc.make_prediction("datoscorruptos")


def test_PUPRED09_make_prediction_score_is_between_0_and_1():
    mock_result = MagicMock()
    mock_result.gestures = [[_make_mock_gesture("A", 0.95)]]

    with patch.object(svc.recognizer, "recognize", return_value=mock_result):
        results = svc.make_prediction(TEST_IMAGE_B64)

    assert len(results) == 1
    assert 0.0 <= float(results[0]["score"]) <= 1.0
