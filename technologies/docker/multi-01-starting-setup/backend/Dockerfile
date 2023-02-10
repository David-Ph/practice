FROM node:14-alpine

WORKDIR /app

RUN npm install

COPY . .

EXPOSE 80

ENV MONGODB_USERNAME=max
ENV MONGODB_PASSWORD=secret

CMD [ "npm", "run", "start" ]

# run with 
# docker build -t goals-node .
# docker run -d --rm --name goals-backend -p 80:80 goals-node
# docker run -d --rm --name goals-backend -v /Users/hndr/Desktop/coding/learn/practice/technologies/docker/multi-01-starting-setup/backend:/app -v logs:/app/logs -v /app/node_modules -p 80:80 -d --network goals-network goals-node