#!/bin/bash
set -euo pipefail

echo $ACCESS_TOKEN_GHCR | docker login ghcr.io -u $USERNAME_GHCR --password-stdin

docker build -t ghcr.io/krisschaaf/erkennung_von_fake-news_auf_nachrichtenportalen/flask:latest .
docker push ghcr.io/krisschaaf/erkennung_von_fake-news_auf_nachrichtenportalen/flask:latest