import React from 'react/addons';
import { connect } from 'react-redux';
import Icon from './Icon';
import MenuTitle from './MenuTitle';

require('./PanelTopMenu.less');

@connect((state)=>({
  panelMenuStore: state.panelMenuStore
}))
class PanelTopMenu extends React.Component{
  selectMenuItem(type){
    PanelsActions.selectPanelType({
      panelId: this.props.panelId,
      type: type,
      menuClose: true
    });
  }

  render(){
    const { panelMenuStore: { menuItems } } = this.props;
    var currentItems = menuItems[this.props.panelType];
    var currentItem = currentItems.filter((item)=>{
      return item.type === this.props.type;
    })[0];
    var renderMenu = this.props.menuOpen ? (
      <ul>
        {
          currentItems.map((item)=>{
            var activeClass = item.type === this.props.type ? 'active' : '';
            return (
              <li onClick={this.selectMenuItem.bind(this, item.type)}
                className={activeClass}
                key={item.type}>
                <span className='iconBox'>
                  <Icon name={item.icon} />
                </span>
                {item.title}
              </li>
              )
          })
        }
      </ul>
    ) : '';
    return (
      <div className='panelTopMenu'>
        <MenuTitle
          {...this.props}
          icon={currentItem.icon}
          title={currentItem.title}
        />
        {renderMenu}
      </div>
    )
  }
}

export default PanelTopMenu;
