
# DY — Daat Yehudit

A full‑stack JavaScript application with a React frontend (client/) and an Express backend (server/). This repository is organized to separate concerns: frontend UI, backend API, configuration, background tasks/cron jobs, and mail/integration services. The structure is intended to make maintenance and feature additions straightforward.

Table of contents
- Project overview
- Key features
- Repository layout
- Prerequisites
- Local setup (install & run)
- Environment variables (.env example)
- Development scripts & tips
- API & data model notes
- Background jobs & MailService
- Testing, linting & CI
- Build & deployment notes
- Troubleshooting
- Contributing
- License

## Project overview
This repo contains:
- client/ — React single page app (SPA) for UI and user interactions.
- server/ — Express API server handling REST endpoints, DB access, background jobs, mail, and integration logic.
- server/controllers, server/models, server/routes — MVC-style separation for server logic.
- server/cron — scheduled tasks.
- server/MailService — email utilities.

The application is modular so new controllers, routes, models, or React components can be added with minimal friction.

## Key features
- React frontend with components in client/src/Components and layout under client/src/MainDesign
- Express backend with modular controllers (AvrechimController, DebtsController, DonorsController, ExpenseController, IntegrationController, LinksController, etc.)
- Centralized DB connection helper (server/config/dbConn.js)
- CORS config (server/config/corsOptions.js)
- Background jobs and scheduled tasks in server/cron
- Mail utilities in server/MailService

## Repository layout (high level)
- client/
  - package.json — client scripts & dependencies
  - src/ — React source (App.js, index.js, Components/, MainDesign/)
  - public/ — static assets
- server/
  - server.js — server entry point
  - package.json — server scripts & dependencies
  - config/ — dbConn.js, corsOptions.js
  - controllers/ — route handlers
  - models/ — data models
  - routes/ — Express route definitions
  - cron/ — scheduled tasks
  - MailService/ — email helpers
  - .env — environment variables (do not commit)
- .gitignore, README.md, root package.json

## Prerequisites
- Node.js (LTS recommended)
- npm or yarn
- Database (e.g., MongoDB, PostgreSQL) configured as in server/config/dbConn.js
- Git

## Local setup — install
1. Clone the repo:
   git clone <repo-url>
2. Install server deps:
   cd server
   npm install
3. Install client deps:
   cd ../client
   npm install

Consider adding a root-level script to install both packages automatically.

## Environment variables (.env.example)
Create server/.env with the keys used by server/config/dbConn.js and MailService. Example (do not commit secrets):

PORT=5000
DB_URL=<your-database-connection-string>
DB_USER=<user> (if applicable)
DB_PASSWORD=<password> (if applicable)
MAIL_HOST=smtp.example.com
MAIL_PORT=587
MAIL_USER=you@example.com
MAIL_PASS=<email-password>
NODE_ENV=development

Add server/.env.example with placeholders to document required variables.

## Run — development
Start server:
cd server
npm run dev
(Or node server.js depending on scripts in server/package.json.)

Start client:
cd client
npm start

Run both concurrently (suggested):
- Add dev script at root using concurrently or npm-run-all, e.g.:
  "dev": "concurrently \"npm:dev --prefix server\" \"npm:start --prefix client\""

## Build & production
- Build client:
  cd client
  npm run build
- Serve build from server in production (configure server to serve static client/build).
- Use a process manager (pm2) or containers (Docker) to run in production.
- Ensure secrets are stored securely (Azure Key Vault / AWS Secrets Manager / environment-level secrets).

## Development scripts & tips
- Use nodemon for server auto-reload (dev dependency).
- Add ESLint and Prettier and include lint/format scripts.
- Add Husky + lint-staged for pre-commit checks.
- Add unit/integration tests (Jest, Supertest for backend; Jest + React Testing Library for frontend).

## API & data model notes
- Inspect server/routes/ for available endpoints and mapping to controllers.
- Document API endpoints in routes.md or use OpenAPI/Swagger for machine-readable docs.
- Keep controllers thin; extract business logic to services where beneficial.

## Background jobs & MailService
- server/cron contains scheduled tasks — determine if they should run in a separate worker process in production.
- server/MailService centralizes mail sending logic. Use environment variables for credentials and avoid committing secrets.

## Testing & CI
- Add tests under server/tests and client/src/__tests__.
- Example scripts:
  - "test:server": runs backend tests
  - "test:client": runs frontend tests
  - "lint": runs ESLint across repo
- Add GitHub Actions to run linters and tests on PRs.

## Build & deployment notes
- Containerize with Docker for reproducible deployments.
- Provide an .env.example and keep secrets out of VCS.
- Add a health-check endpoint (e.g., GET /health) that verifies DB connectivity.
- Implement graceful shutdown in server.js to close DB connections on SIGTERM.
- Consider blue/green or rolling deployments and add readiness/liveness probes if deploying to Kubernetes.

## Troubleshooting
- Check server console logs for stack traces.
- Use browser devtools network tab for API errors.
- Confirm environment variables and DB connectivity.
- Use curl/Postman to test endpoints directly.
- Check server/cron logs separately if scheduled tasks misbehave.

## Contributing
- Fork, create a feature branch, and submit a pull request with a clear description.
- Add tests for new features and adhere to linting rules.
- Run the test and lint scripts before submitting PRs.

## Next improvements (prioritized)
1. Add server/.env.example and remove any committed secrets.
2. Add ESLint, Prettier, and Husky with lint-staged.
3. Add unit and integration tests for critical backend logic and key frontend components.
4. Add API documentation (OpenAPI/Swagger).
5. Add CI pipeline (GitHub Actions) to run lint and tests on PRs.
6. Add a deployment guide (Docker + example GitHub Actions workflow).
7. Add monitoring/alerting for production (logs, health checks, uptime).

## License
Add your preferred license (MIT, Apache-2.0, etc.) and include a LICENSE file.