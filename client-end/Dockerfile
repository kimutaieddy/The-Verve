FROM alpine:3.20

WORKDIR /app

COPY PACKAGE.json .

RUN nmp install
COPY . .


EXPOSE  3000
CMD ["npm", "start"]
