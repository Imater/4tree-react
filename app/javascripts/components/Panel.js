import React from 'react/addons';

import SelectByType from './selectByType';
import PanelTopMenu from './panelTopMenu';

require('./Panel.less');

class Panel extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = React.addons.PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        var style = {
            width: this.props.width
        };
        return (
            <div className='panel' style={style}>
                <PanelTopMenu panelType={this.props.panelType}
                    type={this.props.type}
                    panelId={this.props.id}
                    menuOpen={this.props.menuOpen}
                    activeType={this.props.type} />
                <SelectByType panelId={this.props.id} type={this.props.type} />
            </div>
        )
    }
}

export default Panel;
