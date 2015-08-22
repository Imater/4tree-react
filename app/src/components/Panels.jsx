import React from 'react/addons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Panel from './Panel';
import { openPanelMenu } from '../ducks/panelsStore';

require('./Panels.less');

@connect(
  state => ({ panelsStore: state.panelsStore,})
)
export default class Panels extends React.Component{
  render() {
    const { panelsStore: { panels }, dispatch } = this.props;
    const actions = bindActionCreators({ openPanelMenu }, dispatch);
    return (
      <div className='panels'>
        <div className='panelsWrapper'>
          <div className='panelsRow'>
            {
              panels.map((panel) => {
                return (
                  <Panel key={panel.id} {...panel} actions={actions}/>
                  );
              })
            }
          </div>
        </div>
      </div>
    );
  }
};
