# ---------- builder ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Install deps using the lockfile
COPY package.json package-lock.json ./
RUN npm ci

# Build static site
COPY . .
# NITRO_PRESET=static overrides the cloudflare-pages preset from nuxt.config.ts
# (env override only, no source change) so `nuxt generate` outputs to .output/public
ENV NITRO_PRESET=static
RUN npx nuxt generate

# ---------- final ----------
FROM nginx:alpine

COPY --from=builder /app/.output/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
