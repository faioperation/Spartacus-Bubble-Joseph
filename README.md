# Spartacus Bubble AI Agent

An enterprise-ready, dual-agent customer automation and booking system designed for **Spartacus Bubble Soccer (UK)**. The system integrates a Voice AI Assistant (Vapi webhook processing), a PDF-based semantic search Knowledge Base (RAG), and a tick-to-tick availability checker with the Rezgo Booking Platform.

---

## 📖 Table of Contents
1. [System Architecture](#system-architecture)
2. [Project Type & Tech Stack](#project-type--tech-stack)
3. [Folder Structure](#folder-structure)
4. [Prerequisites](#prerequisites)
5. [Local Development Setup](#local-development-setup)
6. [Dockerization & Deployment](#dockerization--deployment)
7. [API Reference](#api-reference)
8. [Database Schema & Migrations](#database-schema--migrations)
9. [AI Engine & Knowledge Base RAG](#ai-engine--knowledge-base-rag)
10. [Security & Performance Guidelines](#security--performance-guidelines)
11. [Troubleshooting & FAQ](#troubleshooting--faq)

---

## 🏗️ System Architecture

The application is structured around a three-tier architecture:
- **Client Facing**: Voice AI (Vapi hook) for telephone booking/FAQ requests, and the React Admin Dashboard.
- **Application Services**: Node.js core backend serving as the central coordinator and security manager, and a FastAPI Python AI microservice processing embedding operations and prompt generation.
- **External Dependencies**: Rezgo Ticketing API, SendGrid Transactional Emails, and OpenAI APIs.

```
       [Customer Call] ──► [Vapi Voice AI] ──► [/api/faq/ask]
                                                     │
                                                     ▼
 [React Admin SPA] ──► [Express Backend] ◄──► [FastAPI AI Service] ◄──► [OpenAI API]
                           │        │                │
                           ▼        ▼                ▼
                     [PostgreSQL] [Redis]   [kb_index.pkl]
                           │
                           ▼
                      [Rezgo API]
```

---

## 🛠️ Project Type & Tech Stack

*   **Repository Pattern**: Monorepo
*   **Backend Server**: Node.js 18+, Express, Prisma ORM, Redis Client
*   **AI Microservice**: Python 3.10+, FastAPI, OpenAI SDK, PyMuPDF, Numpy
*   **Frontend Dashboard**: React 19+, Vite 7+, TailwindCSS v4, Recharts
*   **Databases**: PostgreSQL (Relational Data), Redis (Caching/Rate Limiting)

---

## 📂 Folder Structure

```
.
├── ai/                      # FastAPI Voice/Email AI microservice
│   ├── app/                 # AI service implementation
│   │   ├── knowledge_base/  # PDF source documents for RAG
│   │   ├── ai_service.py    # OpenAI chat completions & signatures
│   │   ├── kb_service.py    # Cosine similarity index builder
│   │   └── prompt.txt       # Unified customer reply prompt template
│   ├── Dockerfile           # Multi-stage Docker build config
│   └── main.py              # FastAPI endpoints & voice normalization
│
├── backend/                 # Node.js core Express backend
│   ├── prisma/              # Prisma schema definition & migrations
│   ├── src/                 # Application entrypoint & modules
│   │   ├── app/             # Application config, routers, middlewares
│   │   └── server.js        # Server launch file
│   ├── docker-entrypoint.sh # Database migration runner script
│   └── Dockerfile           # Multi-stage production node runner
│
├── frontend/                # Vite React Admin Dashboard
│   ├── src/                 # Component, layout, and pages source files
│   ├── nginx.conf           # Client-side router Nginx configuration
│   └── Dockerfile           # Production distribution image configuration
│
├── docker-compose.yml       # Production orchestrator
├── docker-compose.dev.yml   # Development overrides
└── docker-compose.prod.yml  # Production constraints
```

---

## ⚙️ Prerequisites

Ensure you have the following installed on your machine:
*   [Docker & Docker Compose](https://www.docker.com/)
*   [Node.js v18+](https://nodejs.org/)
*   [Python 3.10+](https://www.python.org/)
*   A running PostgreSQL database instance (if starting outside Docker)

---

## 🚀 Local Development Setup

### 1. Configure Environments
Copy the consolidated environment configuration from the root:
```bash
cp .env.example .env
```
Fill in the credentials for `OPENAI_API_KEY`, `REZGO_API_KEY`, and `SENDGRID_API_KEY`.

### 2. Stand Up Database and Cache via Docker
To quickly spin up PostgreSQL and Redis:
```bash
docker compose up -d postgres redis
```

### 3. Run Backend Server
```bash
cd backend
npm install
npx prisma db push
npm run dev
```

### 4. Run AI Service
```bash
cd ai
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

### 5. Run Frontend Server
```bash
cd frontend
npm install
npm run dev
```

---

## 🐳 Dockerization & Deployment

To build and run the entire multi-service application in a production-ready containerized cluster:

### Development Mode (with hot-reloading)
```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

### Production Deployment
```bash
docker compose -f docker-compose.yml -f docker-compose.prod.yml up --build -d
```

### Automatic Actions on Start
*   The `postgres` service initializes and persists its data inside the named volume `pgdata`.
*   The `backend` container triggers `npx prisma migrate deploy` via `docker-entrypoint.sh` to apply new migrations before listening on port `8080`.
*   The `ai` container loads the `kb_index.pkl` file and exposes port `8000`.
*   The `frontend` container is compiled, then served efficiently via `nginx:alpine` on port `80`.

---

## 📡 API Reference

### Core Backend Service (`backend/`)

| Method | Endpoint | Description | Headers |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/bookings` | Submit new booking enquiry (runs live Rezgo check) | `Content-Type: application/json` |
| `GET` | `/api/experiences` | Retrieve matching items from Rezgo catalog | `Content-Type: application/json` |
| `POST` | `/api/webhooks/sendgrid-inbound` | Inbound SendGrid email webhook | Multipart Form Data |

### AI Microservice (`ai/`)

| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/health` | Live system health status | None |
| `POST` | `/api/faq/ask` | Retrieve TTS answers for Voice Agent | `{"question": "Do you provide lockers?"}` |
| `POST` | `/reply` | Generate customized email response to user | `{"message": "Enquiry text here"}` |
| `POST` | `/rebuild-kb` | Re-read PDFs and update embedding index | None |

---

## 💾 Database Schema & Migrations

Database operations are governed by Prisma ORM.

### Models
*   **Booking**: Stores customer personal profiles, booking time slot details, planning type (e.g. STAG DO), target region, pricing metadata, processing states (`PENDING`, `AVAILABLE`, `NOT_AVAILABLE`), and the `rawPayload` JSON object for system audit compliance.

### Execution Commands
```bash
# Generate Prisma Client
npx prisma generate

# Create and execute a new migration locally
npx prisma migrate dev --name init
```

---

## 🤖 AI Engine & Knowledge Base RAG

The AI service operates a local **Retrieval-Augmented Generation (RAG)** pipeline:
1.  **Ingestion**: Source files in `ai/app/knowledge_base/` (PDF manuals, pricing charts, and packages) are parsed.
2.  **Indexing**: Text is divided into 900-character chunks (with 150-character overlap) and embedded via OpenAI `text-embedding-3-small`.
3.  **Storage**: Embeddings are written locally to `ai/app/kb_index.pkl`.
4.  **Retrieval**: When a client requests `/api/faq/ask`, the user's question is embedded and compared to index embeddings using **Cosine Similarity**.
5.  **Generation**: Matching chunks are formatted as context inside a system instruction prompt, verbalizing currency and times (e.g. `forty-nine pounds` instead of `£49`) for text-to-speech engine clarity.

---

## 🔒 Security & Performance Guidelines

*   **Docker Security**: All runners execute under unprivileged user contexts (`node`, `appuser`, `nginx` non-root) to prevent container escape exploits.
*   **Logging Limits**: Containers in production override configurations cap logging files at `10m`/`20m` sizes to avoid host disk space consumption.
*   **Prisma Indexing**: The `Booking` table indexes `[date, timeSlot]` and `[status]` to optimize querying during high-volume periods.

---

## ❓ Troubleshooting & FAQ

### Q: Why does the AI service return "I'm sorry, I don't have that exact detail"?
A: The similarity search score did not pass the confidence threshold (default: `0.20`). Rebuild the index using `/rebuild-kb` after updating PDFs.

### Q: How do I apply database schema updates?
A: Edit `backend/prisma/schema.prisma` and run `npx prisma migrate dev`. Ensure you rebuild the Docker container cluster to apply the changes.
