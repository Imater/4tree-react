import React from 'react/addons';
import Panels from './panels/panels.jsx';
import MainContainer from './main-container/main-container';
import Tabs from './tabs/tabs';
import MenuTop from './menu-top/menu-top';

class MainApp extends React.Component{
    displayName: 'MainApp'

    constructor(props){
        super(props);
        this.shouldComponentUpdate = React.addons.PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <MainContainer>
                <Tabs />
                <MenuTop />
                <Panels />
            </MainContainer>
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
