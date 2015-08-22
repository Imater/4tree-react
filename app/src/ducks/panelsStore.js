export const OPEN_PANEL_MENU = 'OPEN_PANEL_MENU';

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
      return Object.assign({}, state, {
      panels: state.panels.map(function(panel){
        if(panel.id === action.payload.panelId){
          return Object.assign({}, panel, {menuOpen: !panel.menuOpen});
        }
        return panel;
      })
    });
    default:
      return state;
  }
}

export function openPanelMenu(panelId) {
  return {
    type: OPEN_PANEL_MENU,
    payload: {
      panelId: panelId
    }
  }
}
