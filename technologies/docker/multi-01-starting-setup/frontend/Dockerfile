FROM node:14-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# docker build goals-react
# docker run --name goals-frontend --rm -d -p 3000:3000 -it goals-react