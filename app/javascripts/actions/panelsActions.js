import * as types from '../constants/ActionTypes';

export function openPanelMenu(panelId) {
    return {
        type: types.OPEN_PANEL_MENU,
        payload: {
            panel: panelId
        }
    }
}
