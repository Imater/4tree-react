import React from 'react/addons';

import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import Panels from './Panels';
import MainContainer from './MainContainer';
import Tabs from './Tabs';
import MenuTop from './MenuTop';
import * as reducers from '../reducers';

const finalCreateStore = compose(
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
);

const reducer = combineReducers(reducers);
const store = finalCreateStore(reducer);

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
                        <DebugPanel top right bottom>
                            <DevTools store={store}
                                monitor={LogMonitor} />
                        </DebugPanel>
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
