#!/bin/sh

# This script is used to run the Flask application for the machine learning model.

cd flask/src

flask run --host=0.0.0.0 --port=4000