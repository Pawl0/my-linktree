<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<h1>My-LinkTree</h1>
  <p align="center">A linktree project made with a progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

### Summary of implemented features

> Basic Authentication using JWT and Passport
>
> Basic CRUD of users and links using PrismaORM and SQLite
>
> Basic validation of request bodies using Class Validator

### Scope decisions and key trade-offs

#### PrismaORM

This ORM was chosen based on my familiarity with it and ease of use. However it's known to generate not so optimal queries so if more performance is needed other ORMs like TypeORM would be a better choice, or even using pure SQL queries.

#### Passport

For basic authentication Passport was used based on it's simplicity and use with NestJS guards and JWT, but for better user experience with more time it would be nice to implement OAuth and login using some identify providers such as Gmail, Facebook or Github for example.

#### Class Validator

A really easy to use library that enables simple validations using decorators. There are other options linke Joi and Yup but class-validator matches NestJS really well with its decorators.

#### Tests and Documentation

Due to time constraints automated tests and API documentation weren't implemented in this project. With more time I could create unit tests and document the API using Swagger.

# Setup and run instructions

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Manual Testing

There is a file called api.http in the root folder that is used along with the VSCode extension REST Client. This file contains example of requests done to the localhost:3000 endpoints. Just click "Send request" and get the result directly.

## Deployment

Deploy is made automatically after each git push in [Railway](https://railway.com/).
