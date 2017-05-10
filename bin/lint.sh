#!/bin/bash -e +x

NODE_PATH=./src eslint . --ext js,jsx
echo No JS lint errors
