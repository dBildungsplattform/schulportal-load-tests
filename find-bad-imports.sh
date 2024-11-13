#!/usr/bin/bash
grep -e "from \"" loadtest/**/*.ts | grep -ve ".*ts\";$" | grep -ve "k6"