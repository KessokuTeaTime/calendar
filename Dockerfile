# build
FROM oven/bun:1 AS builder

WORKDIR /app

# copy only dependency files first (better cache)
COPY bun.lock package.json ./
RUN bun install --frozen-lockfile

# copy source and build
COPY . .
RUN bun run build

# runtime
FROM oven/bun:1.0 AS runner

WORKDIR /app

# copy built files and serve script
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/serve.ts ./serve.ts

ENV PORT=3000

EXPOSE 3000

CMD ["bun", "run", "serve.ts"]
