#!/usr/bin/env bash

FIRST_RUN_FILE=/tmp/bats-tutorial-project-ran

if [[ ! -e "$FIRST_RUN_FILE" ]]; then
    echo "Welcome to our project!" >&2
    touch "$FIRST_RUN_FILE"
fi

        
   