import { createAction } from 'redux-actions';

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
  console.info(JSON.stringify(action));
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

const WebUtils = {
  get: (panelId) => {
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        console.info('resolve');
        resolve({panelId: panelId});
      }, 4002);
    });
  }
}

export const openPanelMenu1 = createAction('OPEN_PANEL_MENU1', WebUtils.get)

export function openPanelMenu(panelId) {
  console.info('finish')
  return {
    type: OPEN_PANEL_MENU,
    payload: WebUtils.get(panelId)
  }
}
