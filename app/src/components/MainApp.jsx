import React from 'react/addons';

import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel } from 'redux-devtools/lib/react';
import DiffMonitor from 'redux-devtools-diff-monitor';

import Panels from './Panels';
import MainContainer from './MainContainer';
import Tabs from './Tabs';
import MenuTop from './MenuTop';
import createAppStore from '../redux/create';

const store = createAppStore();

class MainApp extends React.Component{
  displayName: 'MainApp'

  constructor(props){
    super(props);
    //this.shouldComponentUpdate = React.addons.PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <Provider store={store}>
        {() =>
          <MainContainer>
            <Tabs />
            <MenuTop />
            <Panels />
            <DevTools store={store} monitor={DiffMonitor} />
          </MainContainer>
          }
        </Provider>
    );
  }
};

MainApp.defaultProps = {
  id: "-1"
};

MainApp.propTypes = {
  id: React.PropTypes.string
};

export default MainApp;
