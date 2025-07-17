#!/usr/bin/env bash
# Start a single-node CockroachDB cluster for local development

set -e

DB_PORT=26257
DB_HTTP_PORT=8080
DB_CONTAINER_NAME="local-cockroachdb"
DB_VOLUME="cockroach-data"

if ! [ -x "$(command -v docker)" ]; then
  echo "Docker is not installed. Please install Docker and try again."
  exit 1
fi

if ! docker info > /dev/null 2>&1; then
  echo "Docker daemon is not running. Please start Docker and try again."
  exit 1
fi

if [ "$(docker ps -q -f name=$DB_CONTAINER_NAME)" ]; then
  echo "CockroachDB container '$DB_CONTAINER_NAME' already running"
  exit 0
fi

if [ "$(docker ps -aq -f name=$DB_CONTAINER_NAME)" ]; then
  docker start "$DB_CONTAINER_NAME"
  echo "Existing CockroachDB container '$DB_CONTAINER_NAME' started"
  exit 0
fi

docker run -d \
  --name $DB_CONTAINER_NAME \
  -p $DB_PORT:26257 -p $DB_HTTP_PORT:8080 \
  -v $DB_VOLUME:/cockroach/cockroach-data \
  cockroachdb/cockroach:latest \
  start-single-node --insecure

echo "CockroachDB container '$DB_CONTAINER_NAME' started"
echo "Web UI available at http://localhost:8080"