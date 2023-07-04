FROM node:20.3.1-alpine3.17

FROM node:20.3.1-alpine3.17

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# RUN npm run migration:run
# CMD ["npm", "run", "start:dev" ]

# RUN npm run migration:run
# CMD ["npm", "run", "start:dev" ]
