require('./tree-container.less');

import React from 'react/addons';
import TreeNode from './tree-node';

class TreeContainer extends React.Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = React.addons.PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div className='treeContainer'>
                <ul>
                {this.props.treeNodes[1].map((item)=>{
                    return (
                        <TreeNode
                            treeNodes={this.props.treeNodes}
                            key={item.id}
                            icon={item.icon}
                            background={item.background}
                            title={item.title}
                            id={item.id} />
                    );
                })}
                </ul>
            </div>
        )
    }
}

export default TreeContainer;
