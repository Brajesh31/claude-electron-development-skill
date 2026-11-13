# Electron Security Boundaries

## Renderer
Treat renderer content as untrusted. Avoid Node integration. Apply a restrictive CSP and validate all user-controlled content.

## Preload
Expose narrow, purpose-built methods. Do not expose `ipcRenderer`, filesystem APIs, process objects, or generic channel invocation.

## Main process
Own privileged operations. Validate sender frame, origin, payload shape, file path, and authorization before acting.

## Navigation and windows
- Deny unexpected navigation.
- Open external URLs through a controlled allowlist.
- Prevent arbitrary child-window creation.
- Review permission requests explicitly.

## Distribution
- Sign application binaries where required.
- Verify update metadata and artifact integrity.
- Keep signing and publishing secrets in protected CI settings.
- Test install, upgrade, rollback, and uninstall paths.
