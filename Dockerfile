FROM node:latest as build-stage 

LABEL description="A demo Dockerfile for build Docsify."

COPY . .

RUN npm install -g pnpm
RUN pnpm install
RUN npm run build

FROM nginx:latest as production-stage

COPY --from=build-stage  ./dist/ /var/www/vue3-todo
COPY ./vue3-todo.conf /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80