# Issue with Dockerfile

There is one issue with building an image
If we build an image and then change our code later on
The change will not be immediately reflected
we need to rebuild the image

# Layer based techonology

Docker is build based on layers
This means that each command/instructions on dockerfile is a separate layer
when we rebuild an image, docker will check the cache if theres any change in the code
docker will only rebuild it starting from instructions that changed and after that particular instructions.
For example, if we have 2 commands

COPY . /app
RUN npm install

if we change our code, it will start rebuilding from the COPY layer.
it can't infer if anything has changed with the RUN command, so it will also run rebuild that layer.

It exists to speed up rebuilding of image

- # What is volume in docker and why do we need it?

In docker, container is a completely isolated environment built on top of an image. And when we change our code and the image, we need to recreate the container.

This means that usually, no data will persist after we recreate a new container. But sometimes we DO want data to persist.

This is where volumes can help.

Volumes are folders on your host machine which are mounted into the container. Volumes persists if a container shuts down. A container and write and read data from volumes

- # Bind mounts vs volumes

Volumes are managed by docker and bind mounts are managed by us as developers.

Volumes are good to store data we don't need to edit like database.

With bind mounts, docker containers will have access to the latest snapshot of our local files, which makes it good to store data we need to edit like code.


- # Arg and Env

we can use environment variables in docker file

ENV PORT 80
EXPOSE $PORT

docker run --env PORT=3000
docker run --env-file ./.env
