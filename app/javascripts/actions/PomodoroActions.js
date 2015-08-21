import * as types from '../constants/ActionTypes';

export function startPomodoro(name) {
    return {
        type: types.START_POMODORRO,
        name
    }
}
