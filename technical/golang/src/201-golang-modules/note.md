# Golang Module

Golang module is a way in golang for developers to share and get 3rd party packages like how JS do it from NPM

# Creating a new module

Run `go mod init [MODULE NAME]`

# Adding a new dependency

run `go get [MODULE NAME]`

# Upgrade module

run `git tag v[version number]`

# Upgrade dependency

1. edit tag number in `go.mod`
2. run `go get`