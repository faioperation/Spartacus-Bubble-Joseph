# ==============================================================================
# SPARTACUS BUBBLE BACKEND SERVICE - DOCKERFILE
# ==============================================================================
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma/ ./prisma/

RUN npm ci
RUN npx prisma generate

# Runner stage
FROM node:18-alpine AS runner

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --only=production

# Copy built artifacts and Prisma client
COPY --from=builder /usr/src/app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /usr/src/app/node_modules/@prisma ./node_modules/@prisma
COPY --chown=node:node prisma/ ./prisma/
COPY --chown=node:node src/ ./src/
COPY --chown=node:node docker-entrypoint.sh ./

RUN chmod +x docker-entrypoint.sh

USER node

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "const http = require('http'); const req = http.request('http://localhost:8080/', { timeout: 2000 }, (res) => { process.exit(res.statusCode === 200 ? 0 : 1); }); req.on('error', () => process.exit(1)); req.end();"

ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["npm", "start"]
