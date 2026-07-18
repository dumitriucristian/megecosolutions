MEG EcoSolutions marketing website (Next.js 16.2.10 + TypeScript).

Bilingual: **English** (`/en/...`) and **Spanish** (`/es/...`). Language can be switched from the header.

## Getting Started

### Run locally (Node)

> Next.js 16.2.10 requires **Node >= 20.9**. If you’re on Node 18, use Docker below.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Visitors are redirected to `/en` or `/es` based on browser language.

### Run locally (Docker)

```bash
docker compose up --build
```

Then open [http://localhost:3000](http://localhost:3000).

### Deploy on Railway

- Railway will detect the root `Dockerfile` automatically.
- A `railway.toml` is included to force the `DOCKERFILE` builder and set a `/` healthcheck.
- Set these environment variables on the Railway service:

| Variable | Required | Notes |
|----------|----------|--------|
| `BREVO_API_KEY` | Yes | Brevo API key (SMTP & API → API keys) |
| `BREVO_API_URL` | No | Defaults to `https://api.brevo.com/v3` |
| `BREVO_SENDER_EMAIL` | No | Verified Brevo sender; defaults to `info@megecosolutions.com` |
| `BREVO_SENDER_NAME` | No | Defaults to `MEG EcoSolutions` |
| `CONTACT_TO_EMAIL` | No | Inbox for inquiries; defaults to `info@megecosolutions.com` |

The contact form posts to `/api/contact`, which sends a transactional email through Brevo.

