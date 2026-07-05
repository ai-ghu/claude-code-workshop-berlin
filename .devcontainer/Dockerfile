# Workshop dev container.
# Everything slow or flaky is baked in here ONCE at image-build time, so each
# participant's Codespace boots from a ready image instead of installing tools
# live on shared Wi-Fi.

FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Pinned global CLIs. Pinning means every participant gets the identical,
# pre-tested version — no "latest broke this morning" surprises.
# Re-pin these to the current versions the day before the workshop.
RUN npm install -g @anthropic-ai/claude-code@2.1.177 vercel@54.14.0

# Warm the npm cache as the runtime user (node), using the committed lockfile.
# The Codespace still runs `npm ci` (the workspace files are mounted fresh from
# git), but it pulls from this warm cache instead of the network — fast and
# reliable.
USER node
COPY --chown=node:node package.json package-lock.json /tmp/warm/
RUN cd /tmp/warm && npm ci && rm -rf /tmp/warm
USER root
