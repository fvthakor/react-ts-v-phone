import { LoginModel, SignUpModel } from "@/models";
import { Dispatch } from "redux";
import { SET_LOGIN, SET_LOGIN_USER, SET_PROCCESING, SET_SIGNUP_STATUS } from "./auth.type";
import { setNotification } from "../config/config.action";
import axios from "axios";

export const login = (data:LoginModel) => async (dispatch:Dispatch<any>)=> {
    dispatch({
        type: SET_PROCCESING,
        payload: true
    });
    try{
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data, {withCredentials:true})
        if(res.status == 200 || res.status == 201){
            dispatch({
                type: SET_LOGIN,
                payload: true,
            });
            dispatch({
                type: SET_LOGIN_USER,
                payload: res.data.data
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
    
    // if(data.email === 'fvthakor' && data.password === '123456'){
    //     setTimeout(() => {
    //         dispatch({
    //             type: SET_LOGIN,
    //             payload: true,
    //         });
    //         dispatch({
    //             type: SET_PROCCESING,
    //             payload: false
    //         });
    //         dispatch(setNotification(
    //             {type: 'success' , message: 'Login sucessfull!'}
    //         ))
    //     }, 3000);
    // }else{
    //     setTimeout(() => {
    //         dispatch(setNotification(
    //             {type: 'error' , message: 'Email or password is wrong!'}
    //         ))
    //         dispatch({
    //             type: SET_PROCCESING,
    //             payload: false
    //         });
    //     }, 3000);
    // }
}

export const register = (data:SignUpModel) => async (dispatch:Dispatch<any>) => {
    dispatch({
        type: SET_PROCCESING,
        payload: true
    });
    try{
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, data)
        if(res.status == 201){
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
        // console.log('signup response', res);
    }catch(error:any){
        // console.log('signup error', error);
        if(error?.response?.status === 400){
            //console.log(error.response.data.message);
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