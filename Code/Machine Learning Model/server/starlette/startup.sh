#!/bin/bash

docker stop starlette-server
docker rm starlette-server

docker build -t starlette-server .

docker run -d --name starlette-server \
    -e ACCESS_TOKEN_HUGGING_FACE=${ACCESS_TOKEN_HUGGING_FACE} \
    -p 8000:8000 starlette-server