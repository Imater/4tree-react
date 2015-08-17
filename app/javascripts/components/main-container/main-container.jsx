import React from 'react/addons';

require('./main-container.less');

export default class MainContainer extends React.Component{
    render(){
        return (
            <div className='mainContainer'>
                {this.props.children}
            </div>
        )
    }
}
