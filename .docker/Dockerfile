# Stage 1
FROM  node:20.12.2-alpine as build

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ["decorate-angular-cli.js", "package*.json", "/usr/src/app/"]
RUN npm install --omit=dev

COPY . .

ARG APP_NAME
RUN npx nx build ${APP_NAME} --configuration=production --base-href /${APP_NAME}/

### STAGE 2: Run ###
FROM nginx:1.24.0-alpine as prod

ARG APP_NAME

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/src/app/dist/apps/${APP_NAME} /usr/share/nginx/html
COPY .docker/nginx/nginx.default.conf /etc/nginx/conf.d/default.conf
# COPY dist/apps/${APP_NAME} /usr/share/nginx/html

# COPY .docker/nginx/env.prod.js /usr/share/nginx/html/assets/env.prod.js

# COPY .docker/nginx/40-custom-docker-entrypoint.sh /docker-entrypoint.d
# RUN chmod +x /docker-entrypoint.d/40-custom-docker-entrypoint.sh

# CMD ["/bin/sh",  "-c", "/docker-entrypoint.d/40-custom-docker-entrypoint.sh && envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
