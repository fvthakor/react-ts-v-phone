import { combineReducers } from "redux";
import ConfigReducer from "../config/config.reducer";
import AuthReducer from "../auth/auth.reducer";
import UserReducer from "../user/user.reducer";

const rootReducer = combineReducers({
    config: ConfigReducer,
    auth: AuthReducer,
    user:UserReducer
});
  
export default rootReducer;