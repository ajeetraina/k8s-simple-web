FROM node:16-alpine

WORKDIR /app

COPY package.json .
RUN npm install

COPY server.js .

EXPOSE 5000

CMD ["node", "server.js"]
