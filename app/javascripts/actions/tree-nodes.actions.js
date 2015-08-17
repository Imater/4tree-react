import alt from '../alt';

class TreeNodesActions {
    constructor() {
        this.generateActions('addItem', 'loadingResults', 'receivedResults', 'fetchingResultsFailed');
    }
}

export default alt.createActions(TreeNodesActions);
