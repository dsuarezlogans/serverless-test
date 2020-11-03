FROM node:12

WORKDIR /app

# Required for dynamodb plugin
# RUN echo "deb http://http.debian.net/debian jessie-backports main" | \
#     tee --append /etc/apt/sources.list.d/jessie-backports.list > /dev/null && \
#     apt-get update -y && \
#     apt-get install -t jessie-backports openjdk-8-jdk -y && \
#     update-java-alternatives -s java-1.8.0-openjdk-amd64
EXPOSE 3000
RUN npm install -g serverless

COPY package.json package.json

RUN npm install
COPY serverless.yml ./

#RUN npm run install:dynamodb

COPY src/ src/

# VOLUME /app/src

CMD ["npm", "run", "start"]