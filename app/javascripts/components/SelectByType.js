import React from 'react/addons';

import Tree from './Tree';
import Editor from './Editor';
import Calendar from './Calendar';
import PlanDay from './PlanDay';

class SelectByType extends React.Component{
    render(){
        switch(this.props.type) {
            case 'tree':
                return (
                    <Tree id={this.props.panelId} />
                );
            case 'editor':
                return (
                    <Editor id={this.props.panelId} />
                );
            case 'calendar':
                return (
                    <Calendar id={this.props.panelId} />
                );
            case 'planDay':
                return (
                    <PlanDay id={this.props.panelId}/>
                );
            default:
                return '';
        }
    }
}

export default SelectByType;
