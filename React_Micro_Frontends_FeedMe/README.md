# 🍱 React Micro Frontends Feed-Me
- Micro Frontends Architecture, Based on the [Micro Frontends](https://martinfowler.com/articles/micro-frontends.html) tutorial by Cam Jackson
- Composes 4 Micro-Frontend services

| Name   |      Port   |      Comments
|----------|:-------------:|:-------------:|
| [Container](./container/README.md) | 5000 |  Application entry point micro-FE
| [Content](./content/README.md) |    5001 | Static Content Server
| [Restaurant Order](./restaurant-order/README.md) |    5002 |  Restaurant order micro-FE
| [Browse](./browse/README.md) |    5003 |  Restaurant selection micro-FE
## Tests
Each Micro-FE (except content) has its tests suite

![Image20200416125214](https://user-images.githubusercontent.com/12394551/79442453-38785200-7fe1-11ea-9d5d-1539cd5a86da.png)

![demo-architecture](https://martinfowler.com/articles/micro-frontends/demo-architecture.png)

Micro frontend development
![micro-frontend-development](https://martinfowler.com/articles/micro-frontends/deployment.png)

# Set Up
See [Container](./container/README.md) installation and running

