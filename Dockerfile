FROM node:10-alpine

RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN yarn global add react-scripts@3.0.0 --silent

RUN yarn install --silent

EXPOSE 4000

CMD ["yarn", "start"]