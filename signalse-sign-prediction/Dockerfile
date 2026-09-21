FROM python:3.11-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    libgl1 \
    libglib2.0-0 \
    libgles2 \
    libegl1 \
    libegl-mesa0 \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt && \
    pip uninstall -y opencv-contrib-python && \
    pip install --no-cache-dir --force-reinstall opencv-python-headless

COPY . .

EXPOSE 8000
CMD ["python", "sign_prediction_api.py"]