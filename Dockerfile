FROM node:22-alpine AS base
RUN npm install -g pnpm
WORKDIR /app
COPY . .
RUN pnpm install

FROM base AS builder
RUN pnpm run build

FROM node:22-alpine AS production
RUN npm install -g pnpm
WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static .next/static

RUN chown -R node:node /app
USER node

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

EXPOSE 3000

CMD [ "node", "server.js" ]