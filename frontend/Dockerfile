# Stage 1: Build
FROM node:alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install -g typescript vite
RUN npm install

COPY . .

RUN npm run build

# Stage 2: Production
FROM node:alpine as production

WORKDIR /app

# Copy the built files from the builder stage
COPY --from=builder /app/dist ./dist

# Install production dependencies
COPY package*.json ./
RUN npm install --only=production

EXPOSE 8000

CMD ["npm", "start"]
