FROM node:alpine
WORKDIR /portfolio
COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]