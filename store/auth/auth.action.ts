import { LoginModel, SignUpModel } from "@/models";
import { Dispatch } from "redux";
import { SET_AUTH_TOKEN, SET_LOGIN, SET_LOGIN_USER, SET_PROCCESING, SET_SIGNUP_STATUS } from "./auth.type";
import { setNotification } from "../config/config.action";
import axios from "axios";
import { SET_NUMBERS } from "../number/number.type";

export const login = (data:LoginModel) => async (dispatch:Dispatch<any>)=> {
    dispatch({
        type: SET_PROCCESING,
        payload: true
    });
    try{
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data)
        if(res.status == 200 || res.status == 201){
            dispatch({
                type: SET_LOGIN,
                payload: true,
            });
            dispatch({
                type: SET_LOGIN_USER,
                payload: res.data.data
            })

            dispatch({
                type: SET_AUTH_TOKEN,
                payload: res.data.data.token
            })
            dispatch(setNotification(
                {type: 'success' , message: 'Login sucessfull!'}
            ))
        }
        dispatch({
            type: SET_PROCCESING,
            payload: false
        });
    }catch(error){
        dispatch(setNotification(
            {type: 'error' , message: 'Email or password is wrong!'}
        ))
        dispatch({
            type: SET_PROCCESING,
            payload: false
        });
    }
}

export const register = (data:SignUpModel) => async (dispatch:Dispatch<any>) => {
    dispatch({
        type: SET_PROCCESING,
        payload: true
    });
    try{
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {...data, role: 'admin'})
        if(res.status == 200){
            dispatch(setNotification(
                {type: 'success' , message: 'Your account registered successfully!'}
            ))
            dispatch({
                type: SET_SIGNUP_STATUS,
                payload: true
            });
            dispatch({
                type: SET_PROCCESING,
                payload: false
            })
            setTimeout(()=>{
                dispatch({type: SET_SIGNUP_STATUS, payload: false})
            }, 1000)
        }
    }catch(error:any){
        if(error?.response?.status === 400){
            dispatch(setNotification(
                {type: 'error' , message: error.response.data.message}
            ))
        }else{
            dispatch(setNotification(
                {type: 'error' , message: 'Your account not registered! please try again'}
            ))
        }
        
        dispatch({
            type: SET_PROCCESING,
            payload: false
        })
    }
}

export const logout = () => async (dispatch:Dispatch<any>)=> {
    try{
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
            withCredentials: true,
        })
    }catch(error){

    }
    dispatch({
        type: SET_LOGIN_USER,
        payload: null
    })

    dispatch({
        type: SET_NUMBERS,
        payload: []
    })
    dispatch({
        type: SET_LOGIN,
        payload: false
    })
}

export const updateProccesingStatus = (status:boolean) => async (dispatch:Dispatch<any>) => {
    dispatch({
        type: SET_PROCCESING,
        payload: status
    })
}