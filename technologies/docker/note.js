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
        - docker run -p 8000:3000 -d docker-gb13 -> to run a docker container in detached state
        - docker ps -a -> to check all containers
        - docker container rm [CONTAINER ID] -> remove all containers
        - docker rmi [IMAGE ID] -> remove image
*/
