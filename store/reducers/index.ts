import { combineReducers } from "redux";
import ConfigReducer from "../config/config.reducer";
import AuthReducer from "../auth/auth.reducer";

const rootReducer = combineReducers({
    config: ConfigReducer,
    auth: AuthReducer
});
  
export default rootReducer;