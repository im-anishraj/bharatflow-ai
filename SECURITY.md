# Security Policy

BharatFlow AI is a public open-development prototype. Security issues should be handled confidentially and triaged before public disclosure or external deployment.

## Reporting

Report suspected vulnerabilities through one of these channels:

- A GitHub private security advisory in this repository.
- Email the maintainer at [anishraj.dev@gmail.com](mailto:anishraj.dev@gmail.com).

Do not open public issues for vulnerabilities, leaked credentials, authentication bypasses, private data exposure, or exploitable deployment misconfiguration.

Include:

- Clear description of the issue.
- Steps to reproduce.
- Expected and actual behavior.
- Potential impact.
- Suggested mitigation, if known.

## Handling

- Acknowledge reports within 2 business days.
- Triage severity and ownership before public discussion.
- Patch in a security branch or advisory workflow.
- Require review before merging security-sensitive changes.
- Rotate affected credentials immediately if exposure is suspected.

## Baseline Practices

- Never commit real secrets or customer data.
- Use environment variables for credentials.
- Keep branch protection enabled on `main`.
- Keep CI, dependency alerts, secret scanning, and CodeQL/default code scanning enabled where GitHub support allows it.
- Treat DPDP-related data, customer submissions, documents, and WhatsApp payloads as sensitive by default.
