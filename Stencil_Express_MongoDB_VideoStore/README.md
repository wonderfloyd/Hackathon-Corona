# 📽️ Stencil Express MongoDB Video-Store 
Simple Typescript Express application that uses Stencil components

Based on [vidzy](https://www.udemy.com/blog/node-js-tutorial/) tutorial application ([example1](https://github.com/NelsonScott/Vidzy), [example2](https://github.com/Willseph/Vidzy))
## FrontEnd
[Stencil](https://stenciljs.com/) web components.<br>
(Not angularjs as in the vidzy tutorial)
## BackEnd
nodejs express application,<br>
Based on [Stencil Express Application](https://github.com/egreb/express-typescript-stencil-starter)
## DataBase
[MongoDB](https://www.mongodb.com/)
- The express application uses [monk](https://www.npmjs.com/package/monk) to work with the mongo server
## Tests
[Jest](https://jestjs.io/docs/en/puppeteer) [Puppeteer](https://www.sitepoint.com/puppeteer-end-to-end-testing/)

![Image20200409165226](https://user-images.githubusercontent.com/12394551/78902522-93122b00-7a82-11ea-8fa0-56b1564acdb1.png)

# Set Up
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

