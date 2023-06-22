FROM node:latest AS builder
WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci 
COPY . .
RUN npm run build
FROM node:latest
WORKDIR /app
COPY --from=builder /app ./
CMD ["npm", "run", "start:dev"]
