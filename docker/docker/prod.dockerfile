# Stage 1: Build with Webpack
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:webpack

# Stage 2: Serve with Node
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist .
RUN npm install -g serve

EXPOSE 3000
CMD ["serve", "-s", ".", "-l", "3000"]