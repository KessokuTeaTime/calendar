FROM node:lts AS builder

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /app

# install deps (better cache)
COPY pnpm-lock.yaml package.json ./
RUN pnpm -v
RUN pnpm install --frozen-lockfile

# build
COPY . .
RUN pnpm run build


# runtime
FROM node:lts-alpine AS runner

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /app

# only runtime essentials
COPY --from=builder /app/dist ./dist
COPY package.json pnpm-lock.yaml ./

RUN pnpm install --prod

ENV PORT=3000

EXPOSE 3000

CMD ["pnpm", "run", "serve"]