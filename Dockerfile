# Use official Node.js image (latest LTS recommended)
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy application files
COPY . .

# Build the Next.js application
RUN npm run build

# Use a minimal runtime image for better performance
FROM node:18-alpine AS runner
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Set environment variables for Next.js
ENV NODE_ENV=production

# Expose Next.js default port
EXPOSE 3000

# Run Next.js application
CMD ["node", "node_modules/.bin/next", "start"]
