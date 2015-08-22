import React from 'react/addons';
import {bindActionCreators} from 'redux'

require('./MainContainer.less');

export default class MainContainer extends React.Component{
    render(){
        return (
            <div className='mainContainer'>
                {this.props.children}
            </div>
        )
    }
}
