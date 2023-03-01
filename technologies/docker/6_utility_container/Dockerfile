FROM node:14-alpine

WORKDIR /app

ENTRYPOINT [ "npm" ]

# run with docker run -it -v /Users/hndr/Desktop/coding/learn/practice/technologies/docker/6_utility_container:/app node-util npm init

# The problem with what we learned previously, is we still need to install node or laravel on our host machine to do the initial setup. For example npm init to get the package.json. In order to skip that, we can use utility containers. Basically, we're running a npm init command in a container and then using bind mount to sync it with our host machine

# We can use entrypoint as an alternative to CMD to run command. The difference with CMD is, with CMD, any command we add after the container name replaces the CMD command. With ENTRYPOINT, the command we add after the container name is appended to the ENTRYPOINT command. So for example we can add ENTRYPOINT "NPM" and then we can append init or install or install express