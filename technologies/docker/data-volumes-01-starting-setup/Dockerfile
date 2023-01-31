FROM node:14-alpine

# --build-arg DEFAULT_PORT=8000
ARG DEFAULT_PORT=80

WORKDIR /app 

COPY package.json .

RUN npm install 

COPY . .

ENV PORT $DEFAULT_PORT

EXPOSE $PORT

# VOLUME ["/app/feedback"] this is anonymous volume

CMD [ "npm", "run", "start"]