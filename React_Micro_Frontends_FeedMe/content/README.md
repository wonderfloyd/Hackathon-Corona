# 🍱 Content
Static content server for the other mFEs in the [Feed-Me](./React_Micro_Frontends_FeedMe/README.md) application.<br>
Contains global styles that everyone should use, and common content like images.

Based on the [Content](https://github.com/micro-frontends-demo/content) Frontends application
 in the [Micro Frontends](https://martinfowler.com/articles/micro-frontends.html) tutorial by Cam Jackson
## Server
Static Content server that publishes the content file-system folder using the [serve](https://www.npmjs.com/package/serve) npm package
- Serves port 5001
- uses '--cors' flag to enable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) support 9via the Access-Control-Allow-Origin header) 
# Getting started
## Install
    yarn install
## Build
    yarn build
## Start
    yarn start
## Open Browser
http://127.0.0.1:5001
### Expected Page
![Image20200415174140](https://user-images.githubusercontent.com/12394551/79350762-85f0b280-7f40-11ea-833b-328c961e5c16.png)
### Expected Restaurant Page
http://127.0.0.1:5001/restaurants/3.json
![Image20200415174441](https://user-images.githubusercontent.com/12394551/79351221-16c78e00-7f41-11ea-8a4d-0fcd5f6c81a2.png)

