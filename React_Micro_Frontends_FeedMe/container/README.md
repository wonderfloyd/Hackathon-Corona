# 🍱 Feed Me Container
React application that servers as the entry point and container application for the [Feed-Me](./React_Micro_Frontends_FeedMe/README.md) application.<br>
It renders a navigation bar and uses React Router to select a micro-frontend to render on the page.

Based on the [Container](https://github.com/micro-frontends-demo/container) application
 in the [Micro Frontends](https://martinfowler.com/articles/micro-frontends.html) tutorial by Cam Jackson
## FrontEnd
- React.js application created with [create-react-app](https://create-react-app.dev/)
- [react-app-rewired](https://www.npmjs.com/package/react-app-rewired) is used.<br>
  - react-scripts version 2 uses webpack features that causes errors when running multiple applications on a single page.
  - react-app-rewired override the internal webpack config of react-scripts and fixes these errors.
# Getting started
## Prerequisites
Make sure the [`content`](/React_Micro_Frontends_FeedMe/content/README.md), [`browse`](/React_Micro_Frontends_FeedMe/browse/README.md) and [`restaurant-order`](/React_Micro_Frontends_FeedMe/restaurant-order/README.md) micro-FEs are running.

## Install
    yarn install
## Set port to 5000
The Feed-Me Application serves on port 5000.
### Windows
Set the port in the cmd line prior to running the process

    SET PORT=5000
### Linux
Add 'PORT=5000 ' prefix to package.json start script. I.e.

    ...
    "scripts": {
      ...
      "start": "PORT=5000 react-app-rewired start",
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
http://127.0.0.1:5000
### Expected Page
![Image20200415180537](https://user-images.githubusercontent.com/12394551/79353478-c3a30a80-7f43-11ea-8382-6659343131dd.png)
# Unit Tests
The Feed Me Container uses the [React Jest](https://create-react-app.dev/docs/running-tests) test runner.<br> 
It contain 2 tests in the /browse/src/__tests__ folder:
- App.test.js<br>
  Tests the Container navigation logic: renders the browse micro-FE, randomly picks a restaurant and expects the url to change to the restaurant-order micro-FE
- MicroFrontend.test.js<br>
  Tests the MicroFrontend React component
## Run tests
    yarn test
