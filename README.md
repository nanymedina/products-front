# Store-Front

# Installation

After checkout the project then you need to run `npm install` to install the NPM dependencies.

# Development

To start your development server, run `npm run dev` in your terminal.

To start your development server pointing to production, first create the environment variable `PORT` (You can use the command `export PORT=3000`) and after run `npm start` in your terminal.

# Docker

To build a Docker image run `docker build -t store-front .` don't forget the dot.

To build and run a image Docker use the command `docker-compose up`

# Connection with BFF running locally

Clone the BFF repository https://github.com/nanymedina/products-service.git, install the NPM depencies with `npm install` and run `npm run start`

# Unit tests

Run `npm run test:unit` in your terminal.

# Integration testing

Run `npm run test:integration` in your terminal.
