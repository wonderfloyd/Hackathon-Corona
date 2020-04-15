import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppHeader from './AppHeader';
import MicroFrontend from './MicroFrontend';
import About from './About';

const {
  REACT_APP_BROWSE_HOST: browseHost,
  REACT_APP_RESTAURANT_HOST: restaurantHost,
} = process.env;

let numRestaurants = 0;
const restaurantsInput = `${process.env.REACT_APP_CONTENT_HOST}/restaurants.json`;
console.log("Container Fetch restaurants from " + restaurantsInput);
fetch(restaurantsInput)
  .then(res => res.json())
  .then(restaurants => {
    numRestaurants = restaurants.length;
    console.log("Num of Restaurants: " + numRestaurants);
  });
const getRandomRestaurantId = () =>
  Math.floor(Math.random() * numRestaurants) + 1;

/* In both cases, we render a MicroFrontend component.
Aside from the history object (which will become important later),
we specify the unique name of the application,
and the host from which its bundle can be downloaded. */
const Browse = ({ history }) => (
  <MicroFrontend history={history} host={browseHost} name="Browse" />
);
const Restaurant = ({ history }) => (
  <MicroFrontend history={history} host={restaurantHost} name="Restaurant" />
);

// The Random component redirects the page to a randomly selected restaurant URL.
const Random = () => <Redirect to={`/restaurant/${getRandomRestaurantId()}`} />;

/* React Router is used to match the current URL against a predefined list of routes
  and render a corresponding component.
  In order to keep cross-application communication at minimum
  and comply with the requirement to let the browsing page
  tell the restaurant page which restaurant to load,
  client-side routing is used.
  All the React applications use React Router for declarative routing
*/
const App = () => (
  /* The container application, creates a <BrowserRouter> element
  which internally instantiate a history object.
  The history object is used to manipulate the client-side history
  and to link multiple React Routers together.
  All of the <Router> instances are connected,
  so route changes triggered in any of the inner elements will be reflected in all of them.
  The way to pass “parameters” from one micro frontend to another is via the URL. */
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={Browse} />
        <Route exact path="/restaurant/:id" component={Restaurant} />
        <Route exact path="/random" render={Random} />
        <Route exact path="/about" render={About} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
