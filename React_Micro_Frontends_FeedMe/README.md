# 🍱 React Micro Frontends Feed-Me
- Micro Frontends Architecture, Based on the [Micro Frontends](https://martinfowler.com/articles/micro-frontends.html) tutorial by Cam Jackson
- Composes 4 Micro-Frontend services

| Name   |      Port   |      Comments
|----------|:-------------:|:-------------:|
| [Container](./React_Micro_Frontends_FeedMe/container/README.md) | 5000 |  Application entry point micro-FE
| [Content](./React_Micro_Frontends_FeedMe/content/README.md) |    5001 | Static Content Server
| [Restaurant Order](./React_Micro_Frontends_FeedMe/restaurant-order/README.md) |    5002 |  Restaurant order micro-FE
| [Browse](./React_Micro_Frontends_FeedMe/browse/README.md) |    5003 |  Restaurant selection micro-FE
## Tests
Each Micro-FE (except content) has its tests suite

![Image20200415194007](https://user-images.githubusercontent.com/12394551/79363728-f30c4400-7f50-11ea-8b8e-714e3339b98d.png)

[![demo-architecture](https://martinfowler.com/articles/micro-frontends/demo-architecture.png)]
# Set Up
See [Container](./React_Micro_Frontends_FeedMe/container/README.md) installation and running

