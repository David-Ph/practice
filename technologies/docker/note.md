- # Step by step to building multi containers app

- Starting mongodb container
  - docker run --name mongodb --rm -d -p 27017:27017 mongo

- dockerizing the node app
  - docker build -t goals-node .
  - docker run -d --rm --name goals-backend -p 80:80 goals-node

- dockerizing the react app
  