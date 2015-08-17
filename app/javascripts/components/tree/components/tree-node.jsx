import React from 'react/addons';
import Icon from '../../icon/icon';

require('./tree-node.less');

export default class TreeNode extends React.Component{
    render(){
        var thisId = this.props.id;
        var childs;
        if(this.props.treeNodes[thisId]){
            childs = (
                <ul>
                    {this.props.treeNodes[thisId].map((item)=>{
                        return (
                            <TreeNode
                                treeNodes={this.props.treeNodes}
                                key={item.id}
                                background={item.background}
                                icon={item.icon}
                                title={item.title}
                                id={item.id} />
                            );
                    })}
                </ul>
            );
        }
        var iconStyle = {
            background: this.props.background || 'darkgreen'
        };
        return (
            <li className='treeNode'
                id={this.props.id}>
                <span className='iconBox' style={iconStyle}>
                    <Icon name={this.props.icon}/>
                </span>
                <span className='title'>
                    {this.props.title}
                </span>
                {childs}
            </li>
        )
    }
}
