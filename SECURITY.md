# Security Policy

BharatFlow AI is currently a private internal prototype. Security issues should be handled confidentially and triaged before any disclosure or external deployment.

## Reporting

Report suspected vulnerabilities through one of these private channels:

- A GitHub private security advisory in this repository.
- A private issue labeled `security`.
- Direct internal escalation to the repository owner.

Include:

- Clear description of the issue.
- Steps to reproduce.
- Expected and actual behavior.
- Potential impact.
- Suggested mitigation, if known.

## Handling

- Acknowledge reports within 2 business days.
- Triage severity and ownership before public discussion.
- Patch in a private branch.
- Require review before merging security-sensitive changes.
- Rotate affected credentials immediately if exposure is suspected.

## Baseline Practices

- Never commit real secrets or customer data.
- Use environment variables for credentials.
- Keep branch protection enabled on `main`.
- Keep CI, dependency alerts, and secret scanning enabled where GitHub plan support allows it.
- Treat DPDP-related data, customer submissions, documents, and WhatsApp payloads as sensitive by default.
