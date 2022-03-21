## Dockerfile for node application
# FROM node:alpine
# WORKDIR /portfolio
# COPY package.json .
# RUN npm install --production
# COPY . .
# CMD ["npm","start"]

################################## this WORKS on docker but not AWS
## Dockerfile for React (frontend) only
## note when setting the version for Node, you don't need to set "start": "react-scripts --openssl-legacy-provider start"
## under package.json
# FROM node:14 AS build
# WORKDIR /portfolio
# COPY package.json .
# RUN npm install --production
# COPY public ./public
# COPY src ./src
# RUN npm run build
# CMD ["npm","start"]


######################## trying with node
FROM node:14 as build
ENV NODE_ENV=production
WORKDIR /portfolio  
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY public ./public
COPY src ./src
RUN npm run build
CMD ["npm", "start"]
# CMD ["node", "server.js", "npm", "start"]