import { START_POMODORRO } from '../constants/ActionTypes';

const initialState = {
    count: 0
};

export default function pomodoro(state = initialState, action) {
    switch (action.type) {
        case START_POMODORRO:
            return {
                ...state,
                count: state.count + 1
            };
        default:
            return state;
    }
}
