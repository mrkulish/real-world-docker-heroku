FROM node:16.18-alpine3.15
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN sh -c 'yarn global add serve && yarn && yarn build'
CMD serve -l $PORT -s build