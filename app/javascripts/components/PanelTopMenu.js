import React from 'react/addons';
import Icon from './Icon';
import MenuTitle from './MenuTitle';

require('./PanelTopMenu.less');

class PanelTopMenu extends React.Component{
    selectMenuItem(type){
        PanelsActions.selectPanelType({
            panelId: this.props.panelId,
            type: type,
            menuClose: true
        });
    }

    render(){
        var menuItems = {
            big: [
                {
                    type: 'editor',
                    title: 'Редактор',
                    icon: 'pencil'
                },
                {
                    type: 'tree',
                    title: 'Дерево',
                    icon: 'list-ul'
                },
                {
                    type: 'calendar',
                    title: 'Календарь',
                    icon: 'calendar'
                }
            ],
            small: [
                {
                    type: 'planDay',
                    title: 'План дня',
                    icon: 'calendar-o'
                },
                {
                    type: 'toDo',
                    title: 'Дела',
                    icon: 'check-square-o'
                },
                {
                    type: 'news',
                    title: 'Новости',
                    icon: 'rss'
                },
                {
                    type: 'web',
                    title: 'Мой сайт',
                    icon: 'globe'
                },
                {
                    type: 'contacts',
                    title: 'Контакты',
                    icon: 'users'
                },
                {
                    type: 'tags',
                    title: 'Теги',
                    icon: 'tag'
                },
                {
                    type: 'review',
                    title: 'Обзор',
                    icon: 'eye'
                },
                {
                    type: 'search',
                    title: 'Поиск',
                    icon: 'search'
                },
            ]
        };
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
                    icon={currentItem.icon}
                    panelId={this.props.panelId}
                    menuOpen={this.props.menuOpen}
                    title={currentItem.title}
                />
                {renderMenu}
            </div>
        )
    }
}

export default PanelTopMenu;
