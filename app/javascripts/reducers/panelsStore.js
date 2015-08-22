import { OPEN_PANEL_MENU } from '../constants/ActionTypes';

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
        case OPEN_PANEL_MENU:
            var panels = state.panels.slice();
        console.info(action)
            panels.map(function(panel){
                if(panel.id === action.payload.panelId){
                    panel.menuOpen = !panel.menuOpen;
                }
            })
            console.info('panels', panels);
            return { panels };
        default:
            return state;
    }
}
