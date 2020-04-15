# 🍱 Restaurant order
A micro frontend for ordering food from a restaurant.<br>
Can run as a standalone application or as micro-frontend contained in the [Feed-Me](./React_Micro_Frontends_FeedMe/README.md) application.

Based on the [Restaurant Order](https://github.com/micro-frontends-demo/restaurant-order) Frontends application
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
## Set port to 5002
The Restaurant Order Micro-frontend serves on port 5002.
### Windows
Set the port in the cmd line prior to running the process

    SET PORT=5002
### Linux
Add 'PORT=5002 ' prefix to package.json start script. I.e.

    ...
    "scripts": {
      ...
      "start": "PORT=5002 react-app-rewired start",
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
http://127.0.0.1:5002/restaurant/3

This will run the app as a standalone, outside of the Feed-Me container.
### Expected Page
![Image20200415164534](https://user-images.githubusercontent.com/12394551/79344647-c3e9d880-7f38-11ea-84bf-99678c378fed.png)
# Unit Tests
The Restaurant Order FEs uses the [React Jest](https://create-react-app.dev/docs/running-tests) test runner.<br> 
It contain 4 tests in the /restaurant-order/src/__tests__ folder:
- App.test.js
- Menu.test.js
- Restaurant.test.js
- RestaurantDetails.test.js

Each one tests the corresponding React component independently and uses mock data instead of fetching it from server side.
## Run tests
    yarn test
