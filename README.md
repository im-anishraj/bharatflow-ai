# BharatFlow AI

[![CI](https://github.com/im-anishraj/bharatflow-ai/actions/workflows/ci.yml/badge.svg)](https://github.com/im-anishraj/bharatflow-ai/actions/workflows/ci.yml)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-2ea44f.svg)](CONTRIBUTING.md)
[![License: FSL-1.1-Apache-2.0](https://img.shields.io/badge/license-FSL--1.1--Apache--2.0-blue.svg)](LICENSE)

BharatFlow AI is an open-development prototype for WhatsApp-first conversational workflow automation for Indian revenue, customer experience, and operations teams.

The product helps teams design governed customer journeys visually, launch them on WhatsApp, web, custom domains, embeds, and APIs, and measure outcomes through results and analytics. The current prototype preserves the Typebot monorepo foundation so we can move quickly without rebuilding the editor, runtime, integrations, workspace model, billing surface, or deployment architecture from scratch.

## Status

This repository is public for transparent development, contribution, review, and learning.

Commercial use, resale, or externally hosted customer access must still wait for legal review. The source is derived from Typebot and remains subject to the Functional Source License in `LICENSE`.

## Why This Exists

India's businesses increasingly run sales, support, onboarding, and field workflows through WhatsApp. BharatFlow AI focuses on turning those conversations into measurable, governed workflows instead of loose chat threads or generic AI assistants.

The project is designed around:

- WhatsApp-first business journeys for India.
- Visual workflow building for non-developers.
- Deterministic routing, consent, handoff, and analytics.
- AI as a controlled workflow step, not a black-box replacement for process.
- Self-hostable and enterprise-friendly architecture.

## Architecture

- `apps/builder` - Visual workflow editor and authenticated dashboard.
- `apps/viewer` - Public runtime for published workflows, embeds, sessions, APIs, and WhatsApp.
- `apps/landing-page` - BharatFlow marketing site, pricing, templates, and content.
- `apps/workflows` - Durable workflow service for background jobs.
- `apps/docs` - Documentation app.
- `packages` - Shared schemas, blocks, integrations, billing, auth, UI, templates, runtime logic, and services.

## Local Setup

Use Bun and Nx for all workspace commands.

```bash
bun install --frozen-lockfile
bunx nx sync
bunx nx typecheck
```

Run the main local stack:

```bash
bun run dev
```

Default local apps:

- Builder: `http://localhost:3000`
- Viewer: `http://localhost:3001`

## Contributing

New contributors are welcome. The best first areas are:

- BharatFlow landing-page copy, accessibility, and responsive QA.
- India-focused templates and playbooks in the existing template system.
- Documentation, setup guides, and DPDP-aware workflow examples.
- Small bug fixes in builder, viewer, integrations, and tests.
- Issue triage, reproduction steps, and browser screenshots.

Read [CONTRIBUTING.md](CONTRIBUTING.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), and [SECURITY.md](SECURITY.md) before opening a pull request.

## Required Environment

Start from `.env.dev.example` for local development and `.env.example` for deployment configuration. Never commit real secrets. Rotate any credential that has been copied into a local file outside this repository.

At minimum, local development needs:

- `DATABASE_URL`
- `ENCRYPTION_SECRET`
- `NEXTAUTH_URL`
- `NEXT_PUBLIC_VIEWER_URL`
- storage settings when testing uploads

## Commands

Use Nx through Bun:

```bash
bunx nx sync
bunx nx typecheck
bunx nx test <project-name>
bunx nx format-and-lint
```

Avoid plain `tsc`; this workspace uses Nx project references and inferred targets.

## Product Direction

The MVP repositions the existing foundation into BharatFlow AI:

- WhatsApp-first AI workflows for India.
- Sales, support, document intake, appointment, and operations playbooks.
- Controlled AI inside deterministic workflows.
- Enterprise-friendly private deployment, encrypted credentials, OIDC, audit-ready operational posture, and DPDP-aware workflow design.

See [ROADMAP.md](ROADMAP.md) for the public contribution roadmap.

## License Notice

This repository includes software derived from Typebot under the Functional Source License, Version 1.1, Apache 2.0 Future License. Keep `LICENSE` and `NOTICE.md` intact. Do not remove original copyright notices.

Public source availability does not remove the FSL obligations or grant permission to run a commercial hosted BharatFlow AI service from this codebase before a compliant legal path is documented.
