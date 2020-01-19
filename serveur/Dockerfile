FROM node:10.15.3-jessie

COPY . .
COPY package*.json ./
RUN npm ci

CMD ["npm", "start"]







