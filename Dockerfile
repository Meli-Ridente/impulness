# Versión final (compilada y servida con nginx)
#   docker build -t impulness-web .
#   docker run -p 8080:80 impulness-web   →  http://localhost:8080
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
