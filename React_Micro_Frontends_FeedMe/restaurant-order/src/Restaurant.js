import React from 'react';
import RestaurantDetails from './RestaurantDetails';

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      restaurant: null,
    };
    console.log('props: ' + JSON.stringify(props));
  }

  componentDidMount() {
    const contentHost = process.env.REACT_APP_CONTENT_HOST;
    /* The restaurant-order micro frontend logic
      extracts the restaurant ID from the URL,
      fetches the restaurant info from the content container
      and renders the restaurant information */
    const id = this.props.match.params.id;
    const restaurantInput = `${contentHost}/restaurants/${id}.json`;
    console.log('Fetch ' + restaurantInput);
    fetch(restaurantInput)
      .then(result => result.json())
      .then(restaurant => {
        console.log('Restaurant: ' + JSON.stringify(restaurant));
        this.setState({
          restaurant: {
            ...restaurant,
            imageSrc: `${contentHost}${restaurant.imageSrc}`,
          },
          loading: false,
        });
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }

  render() {
    if (this.state.loading) {
      return 'Loading';
    }
    if (this.state.error) {
      return 'Sorry, but that restaurant is currently unavailable.';
    }

    return <RestaurantDetails restaurant={this.state.restaurant} />;
  }
}

export default Restaurant;
