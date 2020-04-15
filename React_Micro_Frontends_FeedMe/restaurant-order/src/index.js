import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './registerServiceWorker';

window.renderRestaurant = (containerId, history) => {
  console.log('Render Restaurant ' + containerId);
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  unregister();
};

window.unmountRestaurant = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
