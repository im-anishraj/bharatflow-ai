# GitHub Public Repository Readiness

Use this checklist when operating BharatFlow AI as a public repository.

## Repository

- Visibility: public.
- Default branch: `main`.
- Issues: enabled.
- Discussions: enabled.
- Wiki: disabled unless maintainers decide to support it.
- Topics: WhatsApp, AI workflows, India, TypeScript, Nx, Bun, chatbot, open-source.
- Description: clear that this is an open-development prototype.

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

## Community Health

Keep these files current:

- `README.md`;
- `CONTRIBUTING.md`;
- `CODE_OF_CONDUCT.md`;
- `SECURITY.md`;
- `SUPPORT.md`;
- `ROADMAP.md`;
- `MAINTAINERS.md`;
- `.github/ISSUE_TEMPLATE/*`;
- `.github/pull_request_template.md`;
- `CODEOWNERS`.

## Security

Enable where GitHub support allows:

- Dependabot alerts;
- Dependabot security updates;
- secret scanning;
- push protection;
- CodeQL/default code scanning;
- private vulnerability reporting.

## Release Discipline

Do not enable Docker Hub, package publishing, Fly.io, Partykit, or production deployment workflows until BharatFlow-owned infrastructure and legal clearance are documented.

## Labels

Maintain labels for onboarding and ownership:

- `good first issue`;
- `help wanted`;
- `documentation`;
- `bug`;
- `enhancement`;
- `security`;
- `landing-page`;
- `templates`;
- `builder`;
- `viewer`;
- `compliance`;
- `legal`;
- `needs triage`;
- `blocked`.
