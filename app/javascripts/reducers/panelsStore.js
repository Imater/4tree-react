import { ADD_TREE_NODE } from '../constants/ActionTypes';

const initialState = {
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

};

export default function panelsStore(state = initialState, action) {
    switch (action.type) {
        case ADD_TREE_NODE:
            var newTree = {};
        newTree[action.tree.id] = action.tree
        return {
            ...state,
            ...newTree
        };
        default:
            return state;
    }
}
