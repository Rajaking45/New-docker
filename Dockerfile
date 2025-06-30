# -------- Stage 1: Build React app --------
FROM node:20 AS build

# Set working directory in container
WORKDIR /app

# Copy only the package files first (for layer caching)
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite project (output goes to /app/dist)
RUN npm run build

# -------- Stage 2: Serve with Nginx --------
FROM nginx:stable-alpine

# Copy built files from previous stage to Nginx public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the app
EXPOSE 80

# Start Nginx in foreground (no daemon mode)
CMD ["nginx", "-g", "daemon off;"]
    