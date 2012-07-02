#!/bin/bash

APPNAME=$1
CONTENT="{\"log\": \"$2\"}"

echo $CONTENT
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d "$CONTENT" http://$APPNAME.herokuapp.com/log