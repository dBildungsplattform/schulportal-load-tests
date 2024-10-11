#!/bin/sh

git clone https://github.com/dBildungsplattform/schulportal-load-tests
cd schulportal-load-tests
git checkout $BRANCH

k6 "$@"