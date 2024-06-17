#!/usr/bin/env bash

_is_first_run() {

    local FIRST_RUN_FILE=/tmp/bats-tutorial-project-ran
    if [[ ! -e "$FIRST_RUN_FILE" ]]; then
        rm -rf /tmp/bats-tutorial-project-ran
        skip "The FIRST_RUN_FILE already exists"
    fi
    return 1
}