FROM node:14-alpine

WORKDIR /app 

COPY package.json .

RUN npm install 

COPY . .

ENV PORT 80

EXPOSE $PORT

# VOLUME ["/app/feedback"] this is anonymous volume

CMD [ "npm", "run", "start"]