#!/bin/sh
set -e

echo "Running Database migrations..."
npx prisma migrate deploy

echo "Starting Backend Application..."
exec "$@"
