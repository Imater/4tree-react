import React from 'react/addons';

import Icon from './Icon';

require('./MenuTitle.less');

export default class MenuTitle extends React.Component{
    render(){
        var panelId = this.props.panelId;
        const { actions, id } = this.props;
        console.info(1,id);
        return (
            <div className='menuTitle' onClick={()=>{actions.openPanelMenu.bind(null, id)}}>
                <span className='iconBox'>
                    <Icon name={this.props.icon} />
                </span>
                <span className='title'>
                    {this.props.title}
                </span>
                <span className='iconBoxDown'>
                    <Icon name='caret-down'/>
                </span>
            </div>
        )
    }
}
