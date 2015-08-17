require('./menu-top.less');

import React from 'react/addons';
import Avatar from '../avatar/avatar';
import SearchInput from '../search-input/search-input';

export default class MenuTop extends React.Component{

    render(){
        var menuItems = [
            "Главное",
            "Изменить",
            "Вид",
            "Закладки тут бывают",
            "52:00"
        ];
        var renderItem = (item)=> {
            return (
                <li>
                    <a>
                        {item}
                    </a>
                </li>
            );
        }
        return (
            <div className='menuTop'>
                <ul>
                    <Avatar />
                    {
                        menuItems.map(renderItem)
                    }
                    <SearchInput />
                </ul>
            </div>
        )
    }
}
