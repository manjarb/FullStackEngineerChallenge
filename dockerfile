FROM node:8.16.0

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
RUN cd client && npm uninstall --save node-sass && npm cache clean --force && npm install --save node-sass && npm rebuild node-sass --force
# RUN npm run sass:rebuild:client

COPY . .

LABEL maintainer="Varis Darasirikul"

VOLUME ["/app/public"]

CMD npm run dev