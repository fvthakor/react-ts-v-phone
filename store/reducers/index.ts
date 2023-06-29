import { combineReducers } from "redux";
import ConfigReducer from "../config/config.reducer";
import AuthReducer from "../auth/auth.reducer";
import UserReducer from "../user/user.reducer";
import SettingReducer from "../setting/setting.reducer";
import NumberReducer from "../number/number.reducer";
import MessageReducer from "../message/message.reducer";

const rootReducer = combineReducers({
    config: ConfigReducer,
    auth: AuthReducer,
    user:UserReducer,
    setting:SettingReducer,
    number: NumberReducer,
    message: MessageReducer
});
  
export default rootReducer;