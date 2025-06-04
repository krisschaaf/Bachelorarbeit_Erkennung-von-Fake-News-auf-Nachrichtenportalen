#!/bin/bash

docker build -t starlette-server .
docker run -d --name starlette-server -p 8000:8000 starlette-server