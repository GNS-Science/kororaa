# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kororaa is a React/TypeScript SPA for the New Zealand National Seismic Hazard Model (NSHM). It displays seismic hazard data, interactive maps, charts, and analysis tools. Data is fetched via GraphQL using React Relay.

## Commands

```bash
yarn dev              # Start development server (requires .env file)
yarn build            # Type-check + production build
yarn lint             # ESLint (max 0 warnings)
yarn prettier-check   # Check formatting
yarn prettify         # Auto-format
yarn test             # Vitest in watch mode
yarn relay            # Recompile GraphQL queries (run after schema/query changes)
```

**Run a single test file:**
```bash
yarn vitest run src/path/to/file.test.ts
```

**Cypress E2E tests** require `VITE_MSW=test` in `.env` and a running dev server.

## Environment Setup

Requires a `.env` file (copy from `.env.example`) with ~62 variables including:
- `VITE_GRAPHQL_ENDPOINT` and `VITE_GRAPHQL_API_KEY` — backend GraphQL API
- Map/chart configuration (zoom levels, IMTs, VS30s, color scales)
- `VITE_MSW=test` — enables Mock Service Worker for Cypress E2E tests

The `@gns-science/toshi-nest` package is a private GNS Science dependency hosted on GitHub NPM registry. Installing it requires a GitHub PAT configured in `~/.yarnrc.yml` (see DEVELOPMENT.md).

## Architecture

**Data layer:** React Relay manages all GraphQL state. Queries/fragments live alongside their components. After editing any `.graphql` file or query, run `yarn relay` to regenerate the `__generated__/` files. The GraphQL schema is at `schema.graphql`.

**Routing:** React Router SPA. Routes are defined in `src/App.tsx`. Each route maps to a view in `src/views/`.

**Views (`src/views/`):** Each subdirectory is a page/feature:
- `hazardCharts/` — Hazard curve visualization
- `hazardMaps/` — Interactive Leaflet maps of seismic hazard
- `disaggregations/` — Disaggregation analysis
- `comboRuptureMap/`, `ruptureAnimation/`, `ruptureSets/` — Rupture data tools
- `home/`, `about/`, `contact/`, `info/`, `techinfo/`, `changelog/`, `preview/`

**Services (`src/services/`):** Business logic and calculations (lat/lon utilities, spectral acceleration). Unit tests live alongside service files as `*.test.ts`.

**Mocks (`src/mocks/`):** MSW handlers intercept GraphQL requests during tests. Mock data lives in `src/mocks/mockData/`. The MSW server is initialized in `src/setupTests.ts`.

**Theme:** Material-UI with a custom Gulf theme (`src/themeGulf.ts`).

## Testing

- **Unit/integration:** Vitest + jsdom + React Testing Library. Tests are co-located with source files.
- **E2E:** Cypress with MSW intercepting all GraphQL calls.
- Globals (`describe`, `it`, `expect`) are available without imports (configured in `vite.config.ts`).
