# Nodejs version 20
FROM node:hydrogen-slim

# create a folder and open it
WORKDIR /app

# copy the code
COPY . /app

# npm i
RUN npm i

# npm start
CMD ["node", "index.js"]