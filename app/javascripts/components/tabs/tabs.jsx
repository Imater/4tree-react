require('./tabs.less');

import React from 'react/addons';
import Icon from '../icon/icon';

export default class Tabs extends React.Component{
    render(){
        var tabsItems = [
            {
                icon: 'get-pocket',
                title: 'Проверка СМС',
                color: '#000',
                background: '#888',
                pinned: true
            },
            {
                icon: 'book',
                title: 'Изначальный дизайн',
                color: 'lightgreen',
                background: 'darkgreen',
                pinned: true
            },
            {
                icon: 'chrome',
                title: 'Любимые треки',
                color: 'darkmagenta',
                background: 'magenta',
                pinned: true
            },
            {
                icon: 'get-pocket',
                title: 'Когда-нибудь',
                color: 'yellow',
                background: '#A16914',
                pinned: false
            },
            {
                icon: 'calendar',
                title: '4 неделя',
                color: 'blue',
                background: 'lightblue',
                pinned: false
            },
            {
                icon: 'gg',
                title: 'Лучшие статьи по FLUX',
                color: '#444',
                background: '#EEE',
                pinned: false
            },
            {
                icon: 'hand-peace-o',
                title: 'Проверка СМС',
                color: '#000',
                background: 'red',
                pinned: false
            },
        ];
        var renderTitle = (tab) => {
                if(!tab.pinned){
                    return <span className='title'>{tab.title}</span>
                }
        };
        var renderTab = (tab) => {
            var style = {
                "background-color": tab.background || '#000',
                color: tab.color || '#FFF'
            };
            var iconBoxClass = tab.pinned === true ? 'iconBox' : 'iconBox notPinned';
            return (
                <li>
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
