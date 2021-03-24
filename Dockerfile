FROM node:15.6-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN apk add --no-cache git && yarn install
COPY . .
CMD ["yarn", "start"]
