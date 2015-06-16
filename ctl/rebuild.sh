#!/bin/bash

sudo rm -rf .sass-cache/ _site/
docker build .
