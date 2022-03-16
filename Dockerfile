FROM node:16
WORKDIR /app
COPY . /app
COPY package.json /app
RUN npm install
CMD node index.js
EXPOSE 3000