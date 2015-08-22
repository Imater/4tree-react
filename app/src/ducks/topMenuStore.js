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
        default:
            return state;
    }
}
