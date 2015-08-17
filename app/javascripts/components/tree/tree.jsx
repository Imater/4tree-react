import React from 'react/addons';
import AltContainer from 'alt/AltContainer'
import TreeStore from './tree.store'
import TreeActions from './tree.actions';
import TreeContainer from './components/tree-container';
import TreeNodesStore from '../../stores/tree-nodes.store'
import TreeNodesActions from '../../actions/tree-nodes.actions';

class Tree extends React.Component{
    constructor(props){
        super(props);
        this.counter = 10;
    }

    addItem(panelId){
        TreeNodesActions.addItem({});
    }

    render(){
        var id = this.props.id;
        return (
            <AltContainer
                stores = {
                    {
                        tree: function(){
                            return {
                                store: TreeStore,
                                value: TreeStore.getStateFor(id)
                            }
                        },
                        treeNodes: function(){
                            return {
                                store: TreeNodesStore,
                                value: TreeNodesStore.getState()
                            }
                        }
                    }
                }
                >
                <TreeContainer />
                <button onClick={this.addItem}>Load</button>
            </AltContainer>
        )
    }
}

export default Tree;
