const initialState = {
    menuItems: {
      big: [
        {
          type: 'editor',
          title: 'Редактор',
          icon: 'pencil'
        },
        {
          type: 'tree',
          title: 'Дерево',
          icon: 'list-ul'
        },
        {
          type: 'calendar',
          title: 'Календарь',
          icon: 'calendar'
        }
      ],
      small: [
        {
          type: 'planDay',
          title: 'План дня',
          icon: 'calendar-o'
        },
        {
          type: 'toDo',
          title: 'Дела',
          icon: 'check-square-o'
        },
        {
          type: 'news',
          title: 'Новости',
          icon: 'rss'
        },
        {
          type: 'web',
          title: 'Мой сайт',
          icon: 'globe'
        },
        {
          type: 'contacts',
          title: 'Контакты',
          icon: 'users'
        },
        {
          type: 'tags',
          title: 'Теги',
          icon: 'tag'
        },
        {
          type: 'review',
          title: 'Обзор',
          icon: 'eye'
        },
        {
          type: 'search',
          title: 'Поиск',
          icon: 'search'
        },
      ]
    }
};

export default function panelMenuStore(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
