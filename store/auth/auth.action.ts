import { LoginModel } from "@/models";
import { Dispatch } from "redux";
import { SET_LOGIN, SET_PROCCESING } from "./auth.type";
import { setNotification } from "../config/config.action";

export const login = (data:LoginModel) => async (dispatch:Dispatch<any>)=> {
    dispatch({
        type: SET_PROCCESING,
        payload: true
    });
    if(data.email === 'fvthakor' && data.password === '123456'){
        setTimeout(() => {
            dispatch({
                type: SET_LOGIN,
                payload: true,
            });
            dispatch({
                type: SET_PROCCESING,
                payload: false
            });
            dispatch(setNotification(
                {type: 'success' , message: 'Login sucessfull!'}
            ))
        }, 3000);
    }else{
        setTimeout(() => {
            dispatch(setNotification(
                {type: 'error' , message: 'Email or password is wrong!'}
            ))
            dispatch({
                type: SET_PROCCESING,
                payload: false
            });
        }, 3000);
    }
}

export const logout = () => async (dispatch:Dispatch<any>)=> {
    dispatch({
        type: SET_LOGIN,
        payload: false
    })
}