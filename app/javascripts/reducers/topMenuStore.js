import { ADD_TREE_NODE } from '../constants/ActionTypes';

const initialState = {
    menuItems: [
        "Главное",
        "Изменить",
        "Вид",
        "Закладки тут бывают",
        "52:00"
    ]
};

export default function topMenuStore(state = initialState, action) {
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
