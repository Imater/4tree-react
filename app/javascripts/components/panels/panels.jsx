import connectToStores from 'alt/utils/connectToStores';
import React from 'react/addons';
import PanelsStore from './panels.store';
import PanelsActions from './panels.actions';
import Panel from '../panel/panel';

require('./panels.less');

class Panels extends React.Component{
    displayName: 'Panels'

    static getStores(){
        return [PanelsStore]
    }

    static getPropsFromStores(){
        return PanelsStore.getState();
    }

    addPanel(){
        PanelsActions.addPanel('calendar');
    }

    render() {
        var rows = [];
        return (
            <div className='panels'>
                <div className='panelsWrapper'>
                    <div className='panelsRow'>
                        {
                            this.props.panels.map((panel) => {
                                return (
                                    <Panel panelType={panel.panelType}
                                        width={panel.width}
                                        key={panel.id}
                                        id={panel.id}
                                        menuOpen={panel.menuOpen}
                                        type={panel.type} />
                                    );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
};

Panels = connectToStores(Panels);

Panels.defaultProps = {
    id: "-1"
};

Panels.propTypes = {
    id: React.PropTypes.string
};

export default Panels;
