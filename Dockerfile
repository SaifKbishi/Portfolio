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


######################## with NGINX   - NOT WORKING
# FROM node:14 AS build
# WORKDIR /portfolio
# COPY package.json .
# RUN npm install --production
# COPY public ./public
# COPY src ./src
# RUN npm run build

# FROM nginx:alpine
# COPY --from=build /portfolio/build /usr/share/nginx/html


######################## with NGINX   - new test
#stage1
FROM node:14 as build
WORKDIR /portfolio
COPY package.json .
RUN npm install --production
COPY public ./public
COPY src ./src
RUN npm run build

#stage2
FROM nginx:alpine 
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY --from =build 