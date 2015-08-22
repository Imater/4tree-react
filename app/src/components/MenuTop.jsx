require('./MenuTop.less');

import React from 'react/addons';
import { connect } from 'react-redux'

import Icon from './Icon';
import SearchInput from './SearchInput';

@connect(state => ({
    topMenuStore: state.topMenuStore
}))
export default class MenuTop extends React.Component{

    render(){
        const {topMenuStore: { menuItems }, dispatch} = this.props;
        var renderItem = (item)=> {
            return (
                <li key={item}>
                    <a>
                        {item}
                    </a>
                </li>
            );
        }
        return (
            <div className='menuTop'>
                <ul>
                    <Icon />
                    {
                        menuItems.map(renderItem)
                    }
                    <SearchInput />
                </ul>
            </div>
        )
    }
}
