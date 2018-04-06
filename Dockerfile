FROM node:4.6
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3040

CMD npm start
