FROM node:14-alpine

WORKDIR /app

# run with docker run -it -v /Users/hndr/Desktop/coding/learn/practice/technologies/docker/6_utility_container:/app node-util npm init

# The problem with what we learned previously, is we still need to install node or laravel on our host machine to do the initial setup. For example npm init to get the package.json. In order to skip that, we can use utility containers. Basically, we're running a npm init command in a container and then using bind mount to sync it with our host machine
