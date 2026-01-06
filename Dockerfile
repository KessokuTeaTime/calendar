# build
FROM oven/bun:1.0 AS builder

WORKDIR /app

# copy only dependency files first (better cache)
COPY bun.lockb package.json ./
RUN bun install --frozen-lockfile

# copy source and build
COPY . .
RUN bun run build

# runtime
FROM nginx:alpine

# remove default config
RUN rm /etc/nginx/conf.d/default.conf

# custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# copy built static files
COPY --from=builder /app/dist /usr/share/nginx/html

# optional hardening
RUN chmod -R 555 /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# health check
HEALTHCHECK CMD wget -qO- http://localhost/ || exit 1
