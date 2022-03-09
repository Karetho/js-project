FROM node:16 as api-production

WORKDIR /api

COPY package*.json /api/

ENV NODE_ENV

RUN npm install --only=prod

COPY ./ /api/

EXPOSE 9000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && npm start

FROM node:16

WORKDIR /api

COPY package*.json /api/

RUN npm install

COPY ./ /api/

EXPOSE 9000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && npm start
