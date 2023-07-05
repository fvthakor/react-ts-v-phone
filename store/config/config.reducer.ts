import { ActionModel, ConfigState } from '@/models';
import { SET_ACTIVE_MENU, SET_ERROR_MESSAGE, SET_MODE, SET_RIGHT_SIDEBAR, SET_SUBMENU_STATUS, SET_SUCCESS_MESSAGE } from './config.type';

const initialState: ConfigState = {
    darkMode: false,
    activeTab: '',
    subMenuOpen: false,
    errorMessage: null,
    successMessage: null,
    rightSidebar: false
};

const ConfigReducer = (state = initialState, action:ActionModel):ConfigState => {
  switch (action.type) {
    case SET_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };
    case SET_RIGHT_SIDEBAR:
        return {
          ...state,
          rightSidebar: action.payload,
        };
    case SET_ACTIVE_MENU:
        return {
          ...state,
          activeTab: action.payload
        };
    
    case SET_SUBMENU_STATUS:
          return {
            ...state,
            subMenuOpen: action.payload
          };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload
      };
    case SET_SUCCESS_MESSAGE:
        return {
          ...state,
          successMessage: action.payload
        };
    default:
      return state;
  }
};

export default ConfigReducer;