# 🍱 Browse restaurants
A Micro Frontend for Browsing and searching Restaurants.<br>
Can run as a standalone application or as micro-frontend contained in the [Feed-Me](./React_Micro_Frontends_FeedMe/README.md) application.

Based on the [Browse](https://github.com/micro-frontends-demo/browse) Frontends application
 in the [Micro Frontends](https://martinfowler.com/articles/micro-frontends.html) tutorial by Cam Jackson
## FrontEnd
- React.js application created with [create-react-app](https://create-react-app.dev/)
- [react-app-rewired](https://www.npmjs.com/package/react-app-rewired) is used.<br>
  - react-scripts version 2 uses webpack features that causes errors when running multiple applications on a single page.
  - react-app-rewired override the internal webpack config of react-scripts and fixes these errors.
# Getting started
## Prerequisites
Make sure the [`content`](/React_Micro_Frontends_FeedMe/content/README.md) server is running.
## Install
    yarn install
## Set port to 5003
The Browse Micro-frontend serves on port 5003.
### Windows
Set the port in the cmd line prior to running the process

    SET PORT=5003
### Linux
Add 'PORT=5003 ' prefix to package.json start script. I.e.

    ...
    "scripts": {
      ...
      "start": "PORT=5003 react-app-rewired start",
      ...
    }
(Dont commit) TODO get port from env variable
## Start
    yarn start
Run the app as a standalone, outside of the container.
## Start from Build
    yarn build
    serve -s build
- This can be a workaround if the 'yarn start' doesn't work as expected
## Open Browser
http://127.0.0.1:5003/

This will run the app as a standalone, outside of the Feed-Me container.
### Expected Page
![Image20200414174031](https://user-images.githubusercontent.com/12394551/79299396-9d05b500-7eec-11ea-9165-5205f4c051a3.png)
# Unit Tests
The browse FEs uses the [React Jest](https://create-react-app.dev/docs/running-tests) test runner.<br> 
It contain 3 tests in the /browse/src/__tests__ folder:
- App.test.js
- Filters.test.js
- RestaurantList.test.js

Each one tests the corresponding React component independently
 and uses mock data instead of fetching it from server side.
## Run tests
    yarn test
