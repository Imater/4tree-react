import axios from 'axios';
import TreeNodesActions from '../actions/treeNodes.actions';
// sources/SearchSource.js

const TreeSource = {
    performSearch: {
        // remotely fetch something (required)
        remote(state) {
            return axios.get(`http://localhost:5005/api/db/tree`);
        },

        // this function checks in our local cache first
        // if the value is present it'll use that instead (optional).
        local(state) {
            return null;
            return state.results[state.value] ? state.results : null;
        },

        // here we setup some actions to handle our response
        //loading: TreeNodesActions.loadingResults, // (optional)
        success: TreeNodesActions.receivedResults, // (required)
        error: TreeNodesActions.fetchingResultsFailed, // (required)

        // should fetch has precedence over the value returned by local in determining whether remote should be called
        // in this particular example if the value is present locally it would return but still fire off the remote request (optional)
        shouldFetch(state) {
            return true
        }
    }
};

export default TreeSource;
