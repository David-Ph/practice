FROM node:14-alpine

WORKDIR /app

RUN npm install

COPY . .

EXPOSE 80

CMD [ "node", "app.js" ]

# run with 
# docker build -t goals-node .
# docker run -d --rm --name goals-backend -p 80:80 goals-node