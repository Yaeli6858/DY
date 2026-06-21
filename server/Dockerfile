FROM node:18-alpine

WORKDIR /app/server

# Install dependencies
COPY server/package*.json ./
RUN npm install --production

# Copy server source
COPY server/ ./

# Default env (can be overridden with env_file or environment)
ENV NODE_ENV=production
ENV PORT=5678
ENV DATABASE=mongodb://mongo:27017/DY

EXPOSE 5678

CMD ["node", "server.js"]
