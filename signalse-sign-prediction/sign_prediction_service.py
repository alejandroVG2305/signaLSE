import base64
import os
from typing import Optional

import cv2
import numpy as np
import mediapipe as mp

"""
    SIGN PREDICTION SERVICE
    Python service that processes base64 formatted sign images through an AI model and returns a result based on
    the letter category the sign is classified as
"""

# === MODEL INICIALIZATION ===

script_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(script_dir, 'models', 'gesture_recognizer.task')

BaseOptions = mp.tasks.BaseOptions
GestureRecognizer = mp.tasks.vision.GestureRecognizer
GestureRecognizerOptions = mp.tasks.vision.GestureRecognizerOptions
VisionRunningMode = mp.tasks.vision.RunningMode

_options = GestureRecognizerOptions(
    base_options = BaseOptions(model_asset_path=model_path),
    running_mode = VisionRunningMode.IMAGE,
    num_hands = 1
)

recognizer = GestureRecognizer.create_from_options(_options)

# === SERVICE INTERFACE ===

def transform_image(image_base64: str) -> Optional[np.ndarray]:
    """
        Turns a base64 image into an OpenCV image format
    """
    if ',' in image_base64:  # Remove base64 header
        image_base64 = image_base64.split(',')[1]

    image_bytes = base64.b64decode(image_base64)
    image_numpy = np.frombuffer(image_bytes, np.uint8)
    img = cv2.imdecode(image_numpy, cv2.IMREAD_COLOR)
    return img

def prepare_mp_image(img: np.ndarray):
    """
        Makes image transformations to make it understandable to mediapipe
    """
    flipped = cv2.flip(img, 1)
    rgb = cv2.cvtColor(flipped, cv2.COLOR_BGR2RGB)
    return mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb)


def make_prediction(image_base64: str) -> list[dict[str, object]]:
    """
        Runs gesture recognition on a MediaPipe image and returns prediction results.
    """
    img = transform_image(image_base64)
    if img is None:
        raise ValueError('Error decoding image')
    
    mp_image = prepare_mp_image(img)

    recognition_result = recognizer.recognize(mp_image)
    results: list[dict[str, object]] = []
    if recognition_result.gestures:
        for gesture_list in recognition_result.gestures:
            top_gesture = gesture_list[0]
            results.append({
                'category': top_gesture.category_name,
                'score': float(top_gesture.score),
            })
    return results