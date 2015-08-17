import React from 'react';
import PanelsActions from './panels.actions';
import alt from '../../alt';

class PanelsStore {
    constructor(){
        this.bindListeners({
            addPanel: PanelsActions.addPanel,
            selectPanelType: PanelsActions.selectPanelType,
            toggleMenu: PanelsActions.toggleMenu
        });

        this.state = {
            panels: [
                {
                    id: 1,
                    type: 'tree',
                    width: '40%',
                    panelType: 'big',
                    menuOpen: false
                },
                {
                    id: 2,
                    type: 'editor',
                    width: '40%',
                    panelType: 'big',
                    menuOpen: false
                },
                {
                    id: 3,
                    type: 'planDay',
                    width: '20%',
                    panelType: 'small',
                    menuOpen: true
                }
            ]
        }
        this.nextId = 3;
    }

    addPanel(type){
        this.state.panels.push({
            id: this.nextId,
            type: type,
            width: '',
            panelType: 'big',
            menuOpen: true
        });
        this.nextId++;
        this.setState({
            panels: this.state.panels
        });
    }

    toggleMenu(params){
        var foundPanel = this.state.panels.filter((panel)=>{
            return panel.id === params.panelId
        }).map((panel)=>{
            panel.menuOpen = !panel.menuOpen;
        });
        this.setState({
            panels: this.state.panels
        });

    }

    selectPanelType(params){
        var foundPanel = this.state.panels.filter((panel)=>{
            return panel.id === params.panelId
        }).map((panel)=>{
            panel.type = params.type;
            panel.menuOpen = (!params.closeMenu || params.closeMenu === true) ? false : true;
        });
        this.setState({
            panels: this.state.panels
        });
    }
}

export default alt.createStore(PanelsStore, 'PanelsStore');
