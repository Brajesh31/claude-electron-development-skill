---
name: electron-development
description: Builds and reviews secure Electron applications with isolated renderer processes, validated IPC, safe preload APIs, packaging, and updates.
---

# Electron Development

Use this skill for Electron application architecture, main/renderer/preload boundaries, IPC, native integrations, packaging, and release workflows.

## Workflow
1. Identify Electron, Node.js, Chromium, and packaging versions.
2. Inspect main, preload, renderer, and build configuration.
3. Keep `nodeIntegration: false` and `contextIsolation: true` for remote or untrusted renderer content.
4. Expose the smallest possible API through preload and validate every IPC payload.
5. Keep privileged operations in the main process.
6. Review navigation, window creation, permissions, external links, and file access.
7. Test packaged builds on target operating systems, not only development mode.

## Security rules
- Never expose raw Node.js APIs to the renderer.
- Do not trust renderer-supplied paths, URLs, or identifiers.
- Restrict navigation and new-window handling.
- Validate IPC sender and payload.
- Use a restrictive Content Security Policy.
- Keep signing keys and update credentials out of the repository.

See `references/security-boundaries.md`, `templates/ipc-contract.md`, and `examples/preload.example.ts`.
