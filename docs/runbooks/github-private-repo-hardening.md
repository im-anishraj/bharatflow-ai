# GitHub Private Repository Hardening

Use this checklist after the private repository is created.

## Repository

- Visibility: private.
- Default branch: `main`.
- Access: named collaborators only.
- Public forks: disabled unless explicitly approved.
- Issues and projects: enabled only if used for internal planning.

## Branch Protection

Protect `main` with:

- pull request required before merge;
- at least one approving review;
- code owner review required;
- stale approvals dismissed when new commits are pushed;
- CI required before merge;
- conversation resolution required;
- force pushes blocked;
- deletions blocked.

## Security

Enable where GitHub plan support allows:

- Dependabot alerts;
- Dependabot security updates;
- secret scanning;
- push protection;
- CodeQL/default code scanning;
- private vulnerability reporting.

If GitHub reports that secret scanning or code scanning is not available for
the private repository plan, keep the workflow disabled and document the gap in
the prototype risk register before external pilots.

## Secrets

- Store secrets in GitHub Actions secrets or an approved external secret manager.
- Never commit `.env`, customer payloads, WhatsApp credentials, Stripe keys, OAuth secrets, S3 credentials, or database dumps.
- Rotate any credential that appears in git history.

## Release Discipline

Do not enable Docker Hub, package publishing, Fly.io, or production deployment workflows until BharatFlow-owned infrastructure and legal clearance are documented.
