FROM node:8.16.0-alpine

RUN mkdir /app
WORKDIR /app

RUN apk add --no-cache bash

RUN npm install -g nodemon

COPY package.json package.json
COPY client/package.json client/package.json

RUN npm install
RUN npm run install:client

COPY . .

LABEL maintainer="Varis Darasirikul"

VOLUME ["/app/public"]

CMD npm run dev