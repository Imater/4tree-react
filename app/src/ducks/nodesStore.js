const initialState = {
    tree: {
        '1': {
            id: 1,
            title: '4tree',
            icon: 'home',
            background: 'green',
            parentId: '0'
        },
        '2': {
            id: 2,
            title: 'Дневник',
            icon: 'calendar',
            background: 'gray',
            parentId: '1'
        },
        '3': {
            id: 3,
            title: 'Книга',
            icon: 'calendar',
            background: 'gray',
            parentId: '1'
        },
        '4': {
            id: 4,
            title: 'Август',
            icon: 'calendar',
            background: 'gray',
            parentId: '2'
        },
        '5': {
            id: 5,
            title: 'Сентябрь',
            icon: 'calendar',
            background: 'gray',
            parentId: '2'
        },
        '6': {
            id: 6,
            title: 'Фильтр',
            icon: 'calendar',
            background: 'green',
            parentId: '1'
        },
    },
    indexByParent: {
        '1': ['2', '3', '6'],
        '2': ['4', '5'],
        '6': ['2', '3', '4', '5']
    }

};

export default function nodesStore(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
