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

# 