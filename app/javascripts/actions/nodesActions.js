import * as types from '../constants/ActionTypes';

export function loadTree() {
    return {
        type: types.LOAD_TREE,
        tree: tree
    }
}
