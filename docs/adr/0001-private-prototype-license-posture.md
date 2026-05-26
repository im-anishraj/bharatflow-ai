# ADR 0001: Private Prototype License Posture

## Status

Accepted.

## Context

BharatFlow AI is derived from the Typebot codebase, which is licensed under the Functional Source License, Version 1.1, Apache 2.0 Future License.

The intended product direction overlaps with conversational workflow automation. That means a commercial public fork could create license risk unless counsel confirms a compliant path.

## Decision

This repository will remain a private internal prototype until legal review confirms one of the following paths:

- Commercial license or written permission.
- Clean-room implementation of required capabilities.
- A future-license path that is valid for the exact source versions used.
- Another documented compliant route.

## Consequences

- Keep `LICENSE` and `NOTICE.md`.
- Do not remove original copyright notices.
- Do not publish a commercial hosted version from this repository.
- Do not market this as generally available software until the license path is cleared.
- Customer-facing prototype copy may use BharatFlow AI, but the repo must retain legal provenance.
