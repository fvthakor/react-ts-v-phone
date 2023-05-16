import { ActionModel, AuthState } from "@/models";
import { SET_LOGIN, SET_LOGIN_USER, SET_PROCCESING, SET_SIGNUP_STATUS } from "./auth.type";

const initialState: AuthState = {
    isLogin: false,
    authToken: '',
    authUser: null,
    authError: null,
    processing: false,
    signUpStatus: false
};
const AuthReducer = (state = initialState, action:ActionModel):AuthState => {
    switch (action.type) {
      case SET_LOGIN:
          return{
            ...state,
            isLogin: action.payload
          }
      case SET_LOGIN_USER: 
          return{
            ...state,
            authUser: action.payload
          }
      case SET_PROCCESING: 
          return{
            ...state,
            processing: action.payload
          }
      case SET_SIGNUP_STATUS:
        return{
          ...state,
          signUpStatus: action.payload
        }
      default:
        return state;
    }
  };
  
  export default AuthReducer;