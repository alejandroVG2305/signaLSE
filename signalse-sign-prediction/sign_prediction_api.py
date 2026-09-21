from fastapi import FastAPI, WebSocket, WebSocketDisconnect
import json
import jwt
import os
from datetime import datetime, timezone, timedelta
from sign_prediction_service import make_prediction
from dotenv import load_dotenv
import uvicorn

load_dotenv()

app = FastAPI()

JWT_SECRET = os.environ['PREDICTION_JWT_SECRET']
JWT_ALGORITHM = 'HS256'
JWT_TTL_SECONDS = 30 # Token expires in 30s

def sign_prediction(results:dict) -> str:
    """ Signs prediction results and returns JWT """
    now = datetime.now(timezone.utc)
    payload = {
        'prediction': results,
        'iat': now, # issued at
        'exp': now + timedelta(seconds=JWT_TTL_SECONDS) # expiration
    }

    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

@app.websocket('/predict')
async def predict(websocket: WebSocket):
    await websocket.accept() # Waits for handshake
    try:
        while True:
            data = await websocket.receive_text()
            payload = json.loads(data)
            image_base64: str = payload.get('imageBase64', '')
            results = make_prediction(image_base64)
            await websocket.send_text(sign_prediction(results))
    except WebSocketDisconnect:
        pass # Client disconnected
    except Exception as e:
        await websocket.send_text(json.dumps({'error': str(e)}))

if __name__ == '__main__':
    uvicorn.run('sign_prediction_api:app', host='0.0.0.0', port=8000, reload=True)