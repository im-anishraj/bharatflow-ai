# Contributing

BharatFlow AI is open for public contribution. Contributions should optimize for careful, reviewable changes over broad rewrites.

The project is derived from Typebot under the Functional Source License. Keep license notices intact and avoid using Typebot trademarks in new BharatFlow customer-facing surfaces.

## Workflow

- Create a branch from `main`.
- Open an issue first for large product, architecture, or schema changes.
- Keep changes scoped to one product or technical concern.
- Open a pull request using the template.
- Wait for CI, review, and conversation resolution before merge.
- Do not commit generated caches, local env files, credentials, customer data, production payloads, or screenshots containing private information.

## Good First Contributions

- Improve documentation, setup notes, screenshots, and contributor onboarding.
- Add or polish India-focused templates using the existing template system.
- Fix landing-page accessibility, broken links, responsive layout issues, or stale copy.
- Add targeted tests for stable packages.
- Reproduce bugs with clear steps and environment details.

## Engineering Rules

- Use `bunx nx` for workspace commands.
- Run `bunx nx sync` when project references change.
- Run `bunx nx typecheck` before requesting review.
- Run targeted tests for the package or app you touched.
- Prefer existing packages, schemas, and UI primitives over new abstractions.
- Keep the Typebot-derived internals stable unless the change is part of an approved migration.
- Do not introduce database migrations, new runtime primitives, or new external services without an issue and maintainer alignment.

## Product Rules

- Customer-facing copy should use BharatFlow AI.
- Do not use Typebot trademarks in new public-facing surfaces.
- Keep legal notices intact.
- Do not position the product as a general-purpose AI assistant on WhatsApp.
- Use “workflows,” “journeys,” “agents,” or “playbooks” for new customer-facing copy.
- Treat DPDP-aware consent, purpose, data minimization, and human handoff as product requirements for India-focused templates.

## Pull Request Checklist

Before requesting review, make sure:

- `bun install --frozen-lockfile` succeeds if dependencies changed.
- `bunx nx sync` leaves no unexpected diff.
- `bunx nx typecheck` passes.
- The landing page or touched app has been manually checked when UI changed.
- No secrets, customer records, or private data are included.
- The license and NOTICE posture remains accurate.
