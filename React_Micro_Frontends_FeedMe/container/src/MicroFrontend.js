import React from 'react';

class MicroFrontend extends React.Component {
  /* Using React's componentDidMount as the trigger for downloading and mounting the micro frontend
  * componentDidMount is a lifecycle method of React components,
  * which is called by the framework just after an instance of our component
  * has been 'mounted' into the DOM for the first time. */
  componentDidMount() {
    const { name, host, document } = this.props;
    const scriptId = `micro-frontend-script-${name}`;
    /* Check if the relevant script, which has a unique ID, has already been downloaded,
    If yes, render it immediately */
    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    const assetManifestFile = `${host}/asset-manifest.json`;

    /* Fetch the asset-manifest.json file in order to look up the full URL of the main script asset.
    (react-scripts outputs compiled JavaScript files that have hashes in their filename to facilitate caching) */
    console.log('Fetch ' + assetManifestFile);
    fetch(assetManifestFile)
      .then(res => res.json())
      .then(manifest => {
        console.log('Manifest: ' + JSON.stringify(manifest));
        const script = document.createElement('script');
        script.id = scriptId;
        script.crossOrigin = '';
        /* Use the manifest to set this document script full URL */
        script.src = `${host}${manifest['main.js']}`;
        console.log('script.src: ' + script.src);
        /* Attach the script to the document, with an onload handler that renders the micro frontend */
        script.onload = this.renderMicroFrontend;
        document.head.appendChild(script);
      });
  }

  /* Use the React componentWillUnmount lifecycle method to handle clean-up.
  When the MicroFrontend component un-mounts (removed from the DOM),
  than un-mount the relevant micro frontend too.
  Call the corresponding global function (for example unmountBrowse)
  defined by each micro frontend for this purpose*/
  componentWillUnmount() {
    const { name, window } = this.props;

    window[`unmount${name}`](`${name}-container`);
  }

  renderMicroFrontend = () => {
    const { name, window, history } = this.props;
    const renderName = `render${name}`;
    const container = `${name}-container`;
    MicroFrontend.logRenderMicroFrontendMessage(renderName, container, history);
    /* Call the global function (for example window.renderBrowse) that was set by the micro frontend script
    that was downloaded and mounted in the componentDidMount method. Pass 2 arguments:
    1. the id of the container <main> element where the micro frontend should render itself
    2. History object */
    window[renderName](container, history);
    /* The signature of this global function is the key contract between the container application and the micro frontends.
    This is where any communication or integration should happen.,
    Keeping it fairly lightweight makes it easy to maintain and to add new micro frontends. */
  };

  static logRenderMicroFrontendMessage(renderName, container, history) {
    console.group('Render Micro Frontend');
    console.log('Method: ' + renderName);
    console.log('Container: ' + container);
    console.log('History: ' + JSON.stringify(history));
    console.groupEnd();
  }

  /* When rendering, a container element is put on the page,
    with an ID that's unique to the micro frontend. */
  render() {
    return <main id={`${this.props.name}-container`} />;
  }
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;
