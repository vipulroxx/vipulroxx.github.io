setup() {
    load 'test_helper/common-setup'
    _common_setup
}
teardown() {
    : # Look Ma! No cleanup!
}

get_projectsh_welcome_message() {
    project.sh  2>&1 | grep Welcome
}

@test "Show welcome message on first invocation" {
    if [[ -e /tmp/bats-tutorial-project-ran ]]; then
				rm -rf /tmp/bats-tutorial-project-ran
        skip 'The FIRST_RUN_FILE already exists'
    fi

    run project.sh
    assert_output --partial 'Welcome to our project!'

    run project.sh
    refute_output --partial 'Welcome to our project!'
}