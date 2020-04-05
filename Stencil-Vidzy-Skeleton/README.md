# 📼 Stencil Express MongoDB Video-Store 
Simple Typescript Express application that uses Stencil components
## Install
    npm install
## Setting Up Mongo Data-Base
### Install mongodb
[install-community](https://docs.mongodb.com/manual/administration/install-community/)
### Run Mongo Server
    mongod
### Load videos collection
    mongo stencil-vidzy --eval "load('loadDB.js')"
- The 'stencil-vidzy' db name corresponds to dbName in /routes/videos.js API file
## Run Application Server
    nodemon
The nodemon exec command does 2 things:
1. Builds the stencil application
2. Runs the express server that delivers the FE stencil code and serves the express api


    npx stencil build --dev
    ts-node --project tsconfig.server.json server/app.ts
## Open Browser
http://localhost:4001/
## Expected Page
![Image20200405090156](https://user-images.githubusercontent.com/12394551/78468089-9ae96c80-771c-11ea-8798-7dce31ca00aa.png)
# Overview
Based on [vidzy](https://www.udemy.com/blog/node-js-tutorial/) tutorial application
- Frontend is composed from web Stencil components.<br>
  Not angularjs as in the vidzy tutorial
- Backend is a nodejs express application
- Database is MongoDB
## Stencil Express Application
https://github.com/egreb/express-typescript-stencil-starter
## Vidzy Application
- Tutorial: https://www.udemy.com/blog/node-js-tutorial/
- examples:
  - https://github.com/NelsonScott/Vidzy
  - https://github.com/Willseph/Vidzy
