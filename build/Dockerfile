FROM node:latest

COPY package*.json .

WORKDIR /app

RUN npm install --quiet

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]