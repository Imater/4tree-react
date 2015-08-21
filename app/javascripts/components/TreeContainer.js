require('./TreeContainer.less');

import React from 'react/addons';
import TreeNode from './TreeNode';

export default class TreeContainer extends React.Component{
    render(){
        const { nodesStore } = this.props;
        return (
            <div className='treeContainer'>
                <ul>
                {
                    nodesStore.indexByParent[1].map((item)=>{
                        var tree = nodesStore.tree[item];
                        return (
                            <TreeNode
                            key={item}
                            {...tree}
                            nodesStore={ nodesStore }
                            />
                        );
                    })
                }
                </ul>
            </div>
        )
    }
}

//                {this.props.treeNodes[1].map((item)=>{
//                    return (
//                        <TreeNode
//                            treeNodes={this.props.treeNodes}
//                            key={item.id}
//                            icon={item.icon}
//                            background={item.background}
//                            title={item.title}
//                            id={item.id} />
//                    );
//                })}
