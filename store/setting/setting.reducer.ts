import { ActionModel, AuthState } from "@/models";
import { ADD_SETTING, SET_PROCCESING } from "./setting.type";
import { SettingState } from "@/models/state/SettingState";

const initialState: SettingState = {
    processing: false,
};
const SettingReducer = (state = initialState, action:ActionModel):SettingState => {
    switch (action.type) {
      case ADD_SETTING:
          return{
            ...state,
            setting: action.payload
          }
      
      case SET_PROCCESING: 
          return{
            ...state,
            processing: action.payload
          }
      default:
        return state;
    }
  };
  
  export default SettingReducer;