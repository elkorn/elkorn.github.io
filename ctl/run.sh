#!/bin/bash

docker run --name jekyll_elkorn --rm -v "$PWD":/usr/src/app -p "4000:4000" starefossen/github-pages
