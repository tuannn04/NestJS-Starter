## NestJS Starter

## Description

NestJS Starter is build from [NestJS](https://github.com/nestjs/nest) framework.

## Pre-installation
```bash
1. MongoDB installed
2. Create db and user based on .env file.
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

```Notice: Able to run up to 3 processes in a same time```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Nginx load balancer configuration for local env 
```bash
# .conf
upstream reminder {
    least_conn;
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
}

server {
    listen reminder.local;

    location / {
        proxy_pass http://reminder;
    }
}

# etc/hosts
$ 127.0.0.1	reminder.local
```