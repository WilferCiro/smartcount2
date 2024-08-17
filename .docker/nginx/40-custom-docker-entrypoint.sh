#!/bin/sh

set -e

ME=$(basename $0)

entrypoint_log() {
    if [ -z "${NGINX_ENTRYPOINT_QUIET_LOGS:-}" ]; then
        echo "$@"
    fi
}

if [ ! -z "${ENVIRONMENT}" ]; then
    echo "---Executing docker-entrypoint---"
    entrypoint_log "$ME: Executing docker-entrypoint"

    if [ "${ENVIRONMENT}" = 'prod' ]; then
        echo "---ENV parameter: ${ENVIRONMENT}---"
        entrypoint_log "$ME: ENV parameter: ${ENVIRONMENT}"
        mv /usr/share/nginx/html/assets/env.prod.js /usr/share/nginx/html/assets/env.template.js
    else
        echo "---ENV parameter: ${ENVIRONMENT}---"
        if [ -f /usr/share/nginx/html/assets/env.prod.js ]; then
            rm -rf /usr/share/nginx/html/assets/env.prod.js
            entrypoint_log "$ME: Remove /usr/share/nginx/html/assets/env.prod.js"
        fi
    fi
fi

exit 0
