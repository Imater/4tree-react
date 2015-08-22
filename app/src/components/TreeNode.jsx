import React from 'react/addons';
import Icon from './Icon';

require('./TreeNode.less');

export default class TreeNode extends React.Component{
  render(){
    const { nodesStore, id } = this.props
    var childs;
    if(nodesStore.indexByParent[id]){
      childs = (
        <ul>
          {nodesStore.indexByParent[id].map((item)=>{
            var tree = nodesStore.tree[item];
            return (
              <TreeNode
                key={item}
                {...tree}
                nodesStore={ nodesStore }
              />
              );
          })}
        </ul>
      );
    }
    var tree = nodesStore.tree[id];
    var iconStyle = {
      background: tree.background || 'darkgreen'
    };
    return (
      <li className='treeNode'
        id={tree.id}>
        <span className='iconBox' style={iconStyle}>
          <Icon name={tree.icon}/>
        </span>
        <span className='title'>
          {tree.title}
        </span>
        {childs}
      </li>
    )
  }
}
