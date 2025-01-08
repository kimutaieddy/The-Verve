FROM node:18-alpine

WORKDIR /app

# Install Node.js and npm
RUN apk add --no-cache nodejs npm

COPY package.json .

RUN npm install
COPY . .

EXPOSE  3000
CMD ["npm", "start"]
