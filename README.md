MEG EcoSolutions marketing website (Next.js 16.2.10 + TypeScript).

## Getting Started

### Run locally (Node)

> Next.js 16.2.10 requires **Node >= 20.9**. If you’re on Node 18, use Docker below.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Run locally (Docker)

```bash
docker compose up --build
```

Then open [http://localhost:3000](http://localhost:3000).

### Deploy on Railway

- Railway will detect the root `Dockerfile` automatically.
- A `railway.toml` is included to force the `DOCKERFILE` builder and set a `/` healthcheck.

