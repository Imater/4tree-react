import React from 'react/addons';

import SelectByType from './selectByType';
import PanelTopMenu from './panelTopMenu';

require('./Panel.less');

class Panel extends React.Component{
    render(){
        var style = {
            width: this.props.width
        };
        return (
            <div className='panel' style={style}>
                <PanelTopMenu {...this.props} />
                <SelectByType panelId={this.props.id} type={this.props.type} />
            </div>
        )
    }
}

export default Panel;
