FROM node:latest as build-stage 

LABEL description="A demo Dockerfile for build Docsify."

COPY . .

RUN npm install -g pnpm
RUN pnpm install
RUN npm run build

FROM nginx:latest as production-stage

COPY --from=build-stage ./dist /var/www/vue3-todo
COPY ./docker/nginx.conf /etc/nginx/conf.d/vue3-todo.conf

EXPOSE 1024

CMD ["nginx", "-g", "daemon off;"]
