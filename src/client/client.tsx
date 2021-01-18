/* globals __DEV__ */
import React from 'react';
import ReactDOM from 'react-dom';
import deepForceUpdate from 'react-deep-force-update';
import App from './App';
import { initFeatureFlags } from './services/featureFlag';

const container = document.getElementById('app');

let appInstance: any;

/**
 * Handles history.location changes to reload components
 * @returns {undefined}
 */
async function renderClientApp(): Promise<void> {
  try {
    initFeatureFlags();
    const renderReactApp = ReactDOM.render;
    appInstance = renderReactApp(<App />, container);
  } catch (error) {
    if (__DEV__) {
      throw error;
    }
    // eslint-disable-next-line
    console.error(error);
  }
}

renderClientApp();

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept('./App', () => {
    if (appInstance && appInstance.updater.isMounted(appInstance)) {
      // Force-update the whole tree, including components that refuse to update
      deepForceUpdate(appInstance);
    }

    renderClientApp();
  });
}
