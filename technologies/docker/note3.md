- # Step by step to building multi containers app

- Starting mongodb container

  - docker run --name mongodb --rm -d -p 27017:27017 mongo

- dockerizing the node app

  - docker build -t goals-node .
  - docker run -d --rm --name goals-backend -p 80:80 goals-node

- dockerizing the react app

  - docker build goals-react
  - docker run --name goals-frontend --rm -d -p 3000:3000 -it goals-react

- Creating a new network and putting all the containers under it

  - docker network create goals-network
  - docker run --name mongodb --rm -d --network goals-network mongo
  - docker run -d --rm --name goals-backend -p 80:80 --network goals-network goals-node
  - docker run --name goals-frontend --rm -d -p 3000:3000 -it goals-react

- Adding Data persistence to mongodb
  - run with named volume: docker run --name mongodb -v data:/data/db --rm -d --network goals-network mongo
  - add security: docker run --name mongodb -v data:/data/db --rm -d --network goals-network -e MONGO_INITDB_ROOT_USERNAME=max MONGO_INITDB_ROOT_PASSWORD=secure mongo