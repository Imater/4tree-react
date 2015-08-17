import React from 'react';
import TreeActions from './tree.actions';
import alt from '../../alt';

class TreeStore {
    constructor(){
        this.bindListeners({
            addItem: TreeActions.addItem
        });

        this.state = {
            0: [1,3,4],
            1: [1,3,4],
            2: [1,3,4],
            3: [1,3,4],
            4: [1,3,5,6,7,8,9],
            5: [2,3,4],
            6: [8,3,4]
        }
    }

    static getStateFor(panelId){
        if(!this.getState()[panelId]){
            var newData = {
            };
            newData[panelId] = [1, 2, 3, 4];
            this.setState(newData);
        }
        return this.getState()[panelId];
    }

    addItem(params){
        var newState = {};
        newState[params.id] = JSON.parse(JSON.stringify(this.state[params.id]));
        newState[params.id].push(params.value);
        this.setState(newState);
    }
}

export default alt.createStore(TreeStore, 'TreeStore');
