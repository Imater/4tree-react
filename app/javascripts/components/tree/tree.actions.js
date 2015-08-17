import alt from '../../alt';

class TreeActions {
    constructor() {
        this.generateActions('addItem');
    }
}

export default alt.createActions(TreeActions);
