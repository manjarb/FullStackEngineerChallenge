FROM node:10.13.0

RUN mkdir /app
WORKDIR /app

RUN npm install -g nodemon

COPY package.json package.json
COPY client/package.json client/package.json

RUN npm install
RUN npm run install:client
RUN npm rebuild node-sass --force

COPY . .

LABEL maintainer="Varis Darasirikul"

VOLUME ["/app/public"]

CMD npm run dev