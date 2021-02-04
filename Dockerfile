FROM node:15.6-alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache git && yarn install
CMD ["yarn", "start"]