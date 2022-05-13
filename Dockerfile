FROM node:16

WORKDIR /user/src/app

COPY package*.json ./
RUN npm ci --only=production

COPY ..

EXPOSE 8080

CMD["npm", "run", "prod"]