# Use a lightweight Node.js image
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all application files
COPY . .

# Build the Vite app (NOT Next.js)
RUN npm run build

# Use Nginx to serve the Vite-built app
FROM nginx:alpine AS production

# Copy the Vite build output to the Nginx public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the port Nginx serves on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
