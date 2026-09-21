import os
import sys
from unittest.mock import MagicMock

# Set env vars before API module import (JWT_SECRET is read at module level)
os.environ.setdefault("PREDICTION_JWT_SECRET", "test-secret-key-for-tests-32bytes")

# Mock mediapipe before service import (model is loaded at module level)
_mock_mp = MagicMock()
for _mod in [
    "mediapipe",
    "mediapipe.tasks",
    "mediapipe.tasks.vision",
    "mediapipe.tasks.components",
    "mediapipe.tasks.components.containers",
]:
    sys.modules.setdefault(_mod, _mock_mp)

import base64
import numpy as np
import cv2


def make_test_image_base64(width: int = 10, height: int = 10) -> str:
    img = np.full((height, width, 3), 255, dtype=np.uint8)
    ok, buf = cv2.imencode(".jpg", img)
    assert ok
    return base64.b64encode(buf).decode("utf-8")


TEST_IMAGE_B64 = make_test_image_base64()
TEST_IMAGE_B64_WITH_HEADER = f"data:image/jpeg;base64,{TEST_IMAGE_B64}"
JWT_SECRET = os.environ["PREDICTION_JWT_SECRET"]
