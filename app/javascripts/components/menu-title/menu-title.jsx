import React from 'react/addons';
import Icon from '../icon/icon';
import PanelsActions from '../panels/panels.actions';

require('./menu-title.less');

export default class MenuTitle extends React.Component{
    toggleMenu(panelId){
        PanelsActions.toggleMenu({
            panelId: panelId
        });
    }

    render(){
        var panelId = this.props.panelId;
        return (
            <div className='menuTitle' onClick={this.toggleMenu.bind(null, panelId)}>
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
