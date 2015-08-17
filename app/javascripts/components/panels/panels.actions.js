import alt from '../../alt';

class PanelsActions {
    constructor() {
        this.generateActions('addPanel', 'selectPanelType', 'toggleMenu');
    }
}

export default alt.createActions(PanelsActions);
