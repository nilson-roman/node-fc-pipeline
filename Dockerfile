FROM node:alpine3.14

WORKDIR /app

COPY . .

RUN npm ci --quiet 2> /dev/null

RUN npm run build

RUN npm test

CMD ["npm", "start"]
