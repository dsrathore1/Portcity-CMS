#! Stage 1 :- Development Stage
FROM node:alpine3.19 as Builder

WORKDIR /app/frontend

COPY ./package.json .

RUN npm install

COPY . .

RUN npm run build


#! Stage 2 :- Production Stage

FROM nginx:1-alpine3.18-slim

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=Builder ./.next .

EXPOSE 3000

CMD [ "nginx", "-g", "daemon off;" ]