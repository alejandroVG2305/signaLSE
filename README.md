# 🤟 SignaLSE

**SignaLSE** es una aplicación móvil para aprender **Lengua de Signos Española (LSE)** con reconocimiento de gestos en tiempo real mediante inteligencia artificial.

---

## 📱 ¿Qué es SignaLSE?

SignaLSE combina aprendizaje gamificado, un diccionario de signos interactivo y un sistema de entrenamiento con IA que analiza los gestos del usuario a través de la cámara del móvil. Diseñada como Trabajo de Fin de Grado (TFG), la app busca hacer la LSE más accesible y entretenida para todo el mundo.

---

## ✨ Características principales

- 🎥 **Entrenamiento con IA** — Reconocimiento de gestos en tiempo real mediante la cámara usando MediaPipe
- 📖 **Diccionario de signos** — Biblioteca de signos con vídeos demostrativos, descripción y pasos clave
- 🧩 **Retos y desafíos** — 4 tipos de preguntas interactivas (elección de término, identificación de signo, emparejamiento y más)
- 🏆 **Gamificación** — Sistema de XP, niveles, rachas diarias y logros
- 🎯 **Metas diarias** — Seguimiento de retos completados, signos aprendidos y tiempo de entrenamiento
- 👤 **Perfil personalizado** — Estadísticas, avatar, preferencias de sonido y notificaciones
- 📊 **Ranking** — Tabla de clasificación entre usuarios

---

## 🏗️ Arquitectura

El proyecto sigue una arquitectura de **microservicios** con tres componentes principales:

```
PROYECTO/
├── signalse-app/               # 📱 App móvil (React Native + Expo)
├── signalse-backend/           # 🔧 API REST (Node.js + Express)
├── signalse-sign-prediction/   # 🤖 Servicio de predicción (Python + FastAPI)
└── docker-compose.yml          # 🐳 Orquestación de contenedores
```

---

## 🛠️ Stack tecnológico

### 📱 App móvil — `signalse-app`
- [React Native](https://reactnative.dev/) + [Expo](https://expo.dev/)
- TypeScript
- Expo Router (navegación)
- Firebase Auth & Cloud Storage
- React Native Paper (componentes UI)

### 🔧 Backend — `signalse-backend`
- Node.js + Express
- TypeScript
- MongoDB + Mongoose
- JWT para autenticación
- node-cron para tareas programadas

### 🤖 Servicio de predicción — `signalse-sign-prediction`
- Python + FastAPI
- [MediaPipe](https://mediapipe.dev/) para reconocimiento de gestos
- OpenCV para procesamiento de imagen
- WebSockets para predicciones en tiempo real
- JWT para comunicación segura entre servicios

### 🐳 Infraestructura
- Docker + Docker Compose
- MongoDB (contenedor)
- Puertos: `3000` (backend) · `8000` (predicción) · `27018` (MongoDB)

---

## 🚀 Puesta en marcha

### Prerrequisitos

- [Docker](https://www.docker.com/) y Docker Compose
- [Node.js](https://nodejs.org/) v18+
- [Python](https://www.python.org/) 3.9+
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### 1. Levantar los servicios con Docker

```bash
docker-compose up -d
```

Esto arranca el backend, el servicio de predicción y MongoDB.

### 2. Lanzar la app móvil

```bash
cd signalse-app
npm install
npx expo start
```

Escanea el QR con la app **Expo Go** en tu móvil o usa un emulador.

---

## 📂 Estructura del proyecto

### App móvil (`signalse-app`)
| Carpeta | Descripción |
|---|---|
| `app/` | Pantallas y navegación (Expo Router) |
| `components/` | Componentes reutilizables (+40) |
| `services/` | Integración con API y Firebase |
| `models/` | Modelos de datos (usuario, signo, reto…) |
| `context/` | Estado global de la aplicación |
| `i18n/` | Traducciones en español |
| `styles/` | Sistema de colores y estilos globales |

### Backend (`signalse-backend`)
| Carpeta | Descripción |
|---|---|
| `routes/` | Endpoints REST (auth, usuarios, signos, retos…) |
| `services/` | Lógica de negocio |
| `models/` | Esquemas MongoDB |
| `middlewares/` | Verificación de tokens Firebase y JWT |
| `seeds/` | Datos iniciales de la base de datos |
| `jobs/` | Tareas programadas (reset de estadísticas diarias) |

---

## 🤖 Reconocimiento de gestos con IA

El servicio de predicción expone un **WebSocket** al que la app se conecta durante el entrenamiento. Cada frame de la cámara se envía como imagen en base64, MediaPipe detecta la posición de la mano y devuelve el signo reconocido. El resultado se firma con JWT para garantizar su autenticidad antes de registrarlo como entrenamiento válido.

---

## 👨‍💻 Autor

Desarrollado por **Alejandro V.G.** como Trabajo de Fin de Grado.

---

## 📄 Licencia

Este proyecto es de uso académico. Todos los derechos reservados.
