FROM node:alpine3.19

WORKDIR /app/backend

COPY ./package*.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]