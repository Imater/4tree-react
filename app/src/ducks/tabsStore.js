import { ADD_TREE_NODE } from '../constants/ActionTypes';

const initialState = {
    tabsItems: [
        {
            id: 1,
            icon: 'get-pocket',
            title: 'Проверка СМС',
            color: '#000',
            background: '#888',
            pinned: true
        },
        {
            id: 2,
            icon: 'book',
            title: 'Изначальный дизайн',
            color: 'lightgreen',
            background: 'darkgreen',
            pinned: true
        },
        {
            id: 3,
            icon: 'chrome',
            title: 'Любимые треки',
            color: 'darkmagenta',
            background: 'magenta',
            pinned: true
        },
        {
            id: 4,
            icon: 'get-pocket',
            title: 'Когда-нибудь',
            color: 'yellow',
            background: '#A16914',
            pinned: false
        },
        {
            id: 5,
            icon: 'calendar',
            title: '4 неделя',
            color: 'blue',
            background: 'lightblue',
            pinned: false
        },
        {
            id: 6,
            icon: 'gg',
            title: 'Лучшие статьи по FLUX',
            color: '#444',
            background: '#EEE',
            pinned: false
        },
        {
            id: 7,
            icon: 'hand-peace-o',
            title: 'Проверка СМС',
            color: '#000',
            background: 'red',
            pinned: false
        },
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
