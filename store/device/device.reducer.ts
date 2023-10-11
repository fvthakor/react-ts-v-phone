import { ActionModel, AuthState, DeviceState } from "@/models";
import { SET_DEVICE_TOKEN } from "./device.type";

const initialState: DeviceState = {
    callToken: null
};
const DeviceReducer = (state = initialState, action:ActionModel):DeviceState => {
    switch (action.type) {
      case SET_DEVICE_TOKEN:
          return{
            ...state,
            callToken: action.payload
          }
      default:
        return state;
    }
  };
  
  export default DeviceReducer;