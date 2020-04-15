import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './registerServiceWorker';

/* The ReactDOM global render function is the entry point for the home page.
 The Browse application is a filterable list of restaurants.
 It is rendered by the /browse/src/App.render function.
 In order to control both when and where the rendering happens,
 the call to ReactDOM.render is wrapped in a function that receives the DOM element's ID as a parameter
 and the function is attached to the global window object. */
window.renderBrowse = (containerId, history) => {
  console.log('Render Browse ' + containerId);
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  unregister();
};

/* The un-mounting function that is used for clean-up */
window.unmountBrowse = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
