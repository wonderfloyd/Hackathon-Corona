import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
/* The styled-components CSS-in-JS library enables associating styles with specific components,
  so a micro frontend's styles will not leak out and effect the container or another micro frontend.*/
import styled from 'styled-components';
import Loading from './Loading';
import Filters from './Filters';
import RestaurantList from './RestaurantList';

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;

const defaultFilters = {
  nameFilter: '',
  priceRangeFilter: {
    $: false,
    $$: false,
    $$$: false,
    $$$$: false,
  },
};

const defaultHistory = createBrowserHistory();

/* The Browse application fetches the list of restaurants from the backend,
  provides <input> elements for searching and filtering the restaurants
  and renders React Router <Link> elements,
  which navigate to a specific restaurant while switching over to the 'order' micro frontend,
  which renders a single restaurant with its menu.*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      loading: true,
      error: false,
      ...defaultFilters,
    };
  }

  componentDidMount() {
    const host = process.env.REACT_APP_CONTENT_HOST;
    const restaurantsInput = `${host}/restaurants.json`;
    console.log("Browse Fetch restaurants from " + restaurantsInput);
    fetch(restaurantsInput)
      .then(result => result.json())
      .then(restaurants => {
        let mappedRestaurants = restaurants.map(restaurant => ({
          ...restaurant,
          imageSrc: `${host}${restaurant.imageSrc}`,
        }));
        console.log("Browse Restaurants: " + mappedRestaurants.length);
        this.setState({
          restaurants: mappedRestaurants,
          loading: false,
        });
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }

  setNameFilter = value => this.setState({ nameFilter: value });

  setPriceRangeFilter = range => checked => {
    this.setState(({ priceRangeFilter }) => ({
      priceRangeFilter: {
        ...priceRangeFilter,
        [range]: checked,
      },
    }));
  };

  resetAllFilters = () => this.setState(defaultFilters);

  render() {
    const {
      restaurants,
      priceRangeFilter,
      nameFilter,
      loading,
      error,
    } = this.state;
    if (loading) {
      return <Loading />;
    }
    if (error) {
      return (
        <MainColumn>
          Sorry, but the restaurant list is unavailable right now
        </MainColumn>
      );
    }

    return (
      <Router history={this.props.history || defaultHistory}>
        <MainColumn>
          <Filters
            name={nameFilter}
            priceRange={priceRangeFilter}
            setNameFilter={this.setNameFilter}
            setPriceRangeFilter={this.setPriceRangeFilter}
            resetAll={this.resetAllFilters}
          />
          <RestaurantList
            restaurants={restaurants}
            priceRangeFilter={priceRangeFilter}
            nameFilter={nameFilter}
          />
        </MainColumn>
      </Router>
    );
  }
}

export default App;
