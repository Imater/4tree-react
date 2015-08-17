import React from 'react';
import TreeNodesActions from '../actions/tree-nodes.actions';
import alt from '../alt';
import TreeSource from '../data-sources/tree.source';

var tree = {
    '1': {
        id: 1,
        title: '4tree',
        icon: 'home',
        background: 'green',
        parentId: '0'
    },
    '2': {
        id: 2,
        title: 'Дневник',
        icon: 'calendar',
        background: 'gray',
        parentId: '1'
    },
}

class TreeNodesStore {
    constructor(){
        this.bindListeners({
            addItem: TreeNodesActions.addItem
        });
        this.bindListeners({
            receivedResults: TreeNodesActions.receivedResults
        });

        this.registerAsync(TreeSource);

        var treeByParentId = {};
        Object.keys(tree).map((id)=>{
            if(!treeByParentId[tree[id].parentId]) {
                treeByParentId[tree[id].parentId] = [];
            }
            treeByParentId[tree[id].parentId].push(tree[id]);
        })
        this.state = treeByParentId;

    }

    receivedResults(result){
        tree = result.data;
        var treeByParentId = {};
        Object.keys(tree).map((id)=>{
            if(!treeByParentId[tree[id].parent_id]) {
                treeByParentId[tree[id].parent_id] = [];
            }
            treeByParentId[tree[id].parent_id].push(tree[id]);
        })
        this.setState(treeByParentId);
    }

    addItem(params){
        if(!this.getInstance().isLoading()){
            this.getInstance().performSearch();
        }
    }
}

export default alt.createStore(TreeNodesStore, 'TreeNodesStore');
