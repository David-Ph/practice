# Pull from node image
FROM node

# Set working directory
WORKDIR /app

# Which file from our local file to copy to the image
# First . means copy everything, /app is to paste into /app directory in the image
COPY . /app

# Run a command
RUN npm install

# Expose the port run on the container
# to our local computer
EXPOSE 80

# Difference between RUN and CMD
# is RUN will be run when the container is created
# CMD will be run when a container is started
CMD ["node", "server.js"]

# After this, to build the image
# run command `docker build .`
# You can run it by running `docker run -p 3000:80 [docker id]`