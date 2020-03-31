# Simple Typescript Express application that uses Stencil components

A vidzy application that its Frontend is composed from web Stencil components and its Backend is a nodejs express application.

## References
### Stencil Express Application
https://github.com/egreb/express-typescript-stencil-starter

### Vidzy Application
- Tutorial: https://www.udemy.com/blog/node-js-tutorial/
- examples:
  - https://github.com/NelsonScott/Vidzy
  - https://github.com/Willseph/Vidzy

## Getting Started

Clone the Repo.

Install

    npm install

Run

    nodemon

The nodemon exec command does 2 things:
1. Builds the stencil application
2. Runs the express server that delivers the FE stencil code and serves the express api


    npx stencil build --dev
    ts-node --project tsconfig.server.json server/app.ts
    