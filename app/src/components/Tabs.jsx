import React from 'react/addons';
import { connect } from 'react-redux'

import Icon from './Icon';
require('./Tabs.less');

@connect(state => ({
  tabsStore: state.tabsStore
}))
export default class Tabs extends React.Component{
  render(){
    const { tabsStore: { tabsItems }, dispatch } = this.props;
    var renderTitle = (tab) => {
      if(!tab.pinned){
        return <span className='title'>{tab.title}</span>
      }
    };
    var renderTab = (tab) => {
      var style = {
        backgroundColor: tab.background || '#000',
        color: tab.color || '#FFF'
      };
      var iconBoxClass = tab.pinned === true ? 'iconBox' : 'iconBox notPinned';
      return (
        <li key={tab.id}>
          <a>
            <span className={iconBoxClass} style={style}>
              <Icon name={tab.icon} />
            </span>
            {
              renderTitle(tab)
            }
          </a>
        </li>
      );
    };
    return (
      <div className='tabs'>
        <ul>
          {
            tabsItems.map(renderTab)
          }
        </ul>
      </div>
    )
  }
}
