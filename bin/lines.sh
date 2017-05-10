#!/bin/bash -e +x

find . -name '*.js' -o -name 'cashmere' \
  | grep -v node_modules \
  | grep -v bundle \
  | grep -v coverage \
  | xargs wc -l
