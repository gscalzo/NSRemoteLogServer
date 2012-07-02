#!/bin/bash

CONTENT="{'log': '$1'}"

echo $CONTENT
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X POST -d "$CONTENT" http://localhost:5000/log