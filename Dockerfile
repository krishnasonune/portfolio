FROM node:20-alpine3.18 as build

COPY . /home/app

WORKDIR /home/app

RUN npm install --force
RUN npm run build

FROM nginx
COPY --from=build /home/app/dist/portfolio /usr/share/nginx/html
