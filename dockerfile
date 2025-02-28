FROM node:8.16.0-jessie

RUN mkdir /app
WORKDIR /app

# --no-cache: download package index on-the-fly, no need to cleanup afterwards
# --virtual: bundle packages, remove whole bundle at once, when done
# RUN apk --no-cache --virtual build-dependencies add \
#    python \
#    make \
#    g++ \
#    bash

RUN npm install -g nodemon

COPY package.json package.json
COPY client/package.json client/package.json

RUN npm install
RUN npm run install:client
# RUN npm rebuild node-sass --force
# RUN cd client && npm rebuild node-sass --force
# RUN npm run sass:rebuild:client

COPY . .

LABEL maintainer="Varis Darasirikul"

VOLUME ["/app/public"]

# CMD npm rebuild node-sass --prefix client && npm run dev
CMD npm start