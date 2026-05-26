# Contributing

This is a private prototype repository. Contributions should optimize for careful, reviewable changes over broad rewrites.

## Workflow

- Create a branch from `main`.
- Keep changes scoped to one product or technical concern.
- Open a pull request using the template.
- Wait for CI and review before merge.
- Do not commit generated caches, local env files, credentials, customer data, or private screenshots.

## Engineering Rules

- Use `bunx nx` for workspace commands.
- Run `bunx nx sync` when project references change.
- Run `bunx nx typecheck` before requesting review.
- Prefer existing packages, schemas, and UI primitives over new abstractions.
- Keep the Typebot-derived internals stable unless the change is part of an approved migration.

## Product Rules

- Customer-facing copy should use BharatFlow AI.
- Do not use Typebot trademarks in new public-facing surfaces.
- Keep legal notices intact.
- Do not position the product as a general-purpose AI assistant on WhatsApp.
- Use “workflows,” “journeys,” “agents,” or “playbooks” for new customer-facing copy.
