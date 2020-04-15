import React from 'react';
import { Router, Route } from 'react-router-dom';
/* The styled-components CSS-in-JS library enables associating styles with specific components,
so a micro frontend's styles will not leak out and effect the container or another micro frontend.*/
import styled from 'styled-components';
import { createBrowserHistory } from 'history';
import Restaurant from './Restaurant';

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding: 20px;
`;

const defaultHistory = createBrowserHistory();

/*const App = ({ history = defaultHistory }) => (
  <Router history={history}>
    <MainColumn>
      <Route exact path="/restaurant/:id" component={Restaurant} />
    </MainColumn>
  </Router>
);*/

class App extends React.Component {
  componentDidMount() {
    console.log("/restaurant-order/src/App.js Did Mount");
  }
  render() {
    console.log("/restaurant-order/src/App.js Render");
    return <Router history={this.props.history || defaultHistory}>
      <MainColumn>
        <Route exact path="/restaurant/:id" component={Restaurant}/>
      </MainColumn>
    </Router>;
  }
}

export default App;
