FROM node:10-alpine

RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN yarn install --silent
RUN yarn global add react-scripts@3.0.0 --silent

CMD ["yarn", "start"]