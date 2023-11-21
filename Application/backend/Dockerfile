FROM node

WORKDIR /app

COPY package.json /app

RUN npm install 

COPY . /app

RUN npm install nodemon

EXPOSE 80

CMD ["node", "server.js"]
