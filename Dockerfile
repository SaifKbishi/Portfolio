## Dockerfile for node application
# FROM node:alpine
# WORKDIR /portfolio
# COPY package.json .
# RUN npm install --production
# COPY . .
# CMD ["npm","start"]

#Dockerfile for React (frontend) only
# note when setting the version for Node, you don't need to set "start": "react-scripts --openssl-legacy-provider start"
# under package.json
FROM node:14 AS build
WORKDIR /portfolio
COPY package.json .
RUN npm install --production
COPY public ./public
COPY src ./src
RUN npm run build
CMD ["npm","start"]


########################
# FROM node:14 as build01
# WORKDIR /portfolio
# COPY package*.json /portfolio/
# RUN npm install --production
# COPY ./ /portfolio/
# RUN npm run build
# # Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
# FROM nginx:1.15
# COPY --from=build01 /portfolio/build01/ /usr/share/nginx/html
# # Copy the default nginx.conf provided by tiangolo/node-frontend
# COPY --from=build01 /nginx.conf /etc/nginx/conf.d/default.conf
