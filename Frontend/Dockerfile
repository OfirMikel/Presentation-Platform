# Build stage
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install --platform=linux --arch=x64

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]