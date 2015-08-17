/**
 * App Bootstrap
 */

require('../styles/app.less');
require('font-awesome/css/font-awesome.css');

import 'es6-shim';
import 'whatwg-fetch';
import MainApp from './components/MainApp.jsx';
import React from 'react';

// Start the main app
React.render(
  <MainApp id="1"/>,
  document.querySelector('.js-react-app')
);
