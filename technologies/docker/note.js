/* 
    Install docker from the docs, just follow the instructions
    Install typscript locally
    Get .dockerignore
    get Dockerfile
    command we use here:
        - docker build -t docker-gb13 . -> to build a docker image
        - docker ps -> check running container
        - docker image ls -> check all images
        - docker stop [container id] -> stop docker container
        - sudo docker kill $(sudo docker ps -q)
        - docker run -p 8000:3000 -d docker-gb13 -> to run/create a docker container in detached state
        - docker ps -a -> to check all containers
        - docker container rm [CONTAINER ID] -> remove all containers
        - docker rmi [IMAGE ID] -> remove image
        - docker image prune -a -> remove all images
        - docker system prune -a -> remove everything
        - docker start [CONTAINER ID] -> restart a container
        - docker container attach [CONTAINER NAME] -> attach to a container
        - docker logs -f [CONTAINER NAME] -> log a container
        - docker run -it [CONTAINER ID] -> run/create a container in interactive mode with terminal
        - docker cp [source] [target] -> copy a file from/to a container. example is: docker cp [CONTAINER NAME]:[PATH] [PATH]
        - dokcer run -name [CONTAINER NAME] -> create/run container with our own assigned names
        - docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback feedback-node:volumes -> create a detached container, expose the port of 80 to 3000 in our local, remove the container when we stop it, give the container a name, and create a volume in feedback folder

        - docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback -v "/Users/hndr/Desktop/coding/learn/practice/technologies/docker/data-volumes-01-starting-setup:/app" -v /app/node_modules feedback-node:volumes -> same as the one above, but we're also adding a bind mounts folder here

        - you can also use this for shortening [-v $(pwd):/app] or [-v "%cd%":/app]


*/
