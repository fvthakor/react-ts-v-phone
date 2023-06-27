import { LoginModel, SettingModel } from "@/models";
import { Dispatch } from "redux";
import { ADD_SETTING, SET_PROCCESING } from "./setting.type";
import { setNotification } from "../config/config.action";
import axios from "axios";
import store from "..";

export const addUpdateSetting = (data:SettingModel) => async (dispatch:Dispatch<any>)=> {
    dispatch({
        type: SET_PROCCESING,
        payload: true
    });
    try{
        const {authUser} = store.getState().auth
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/setting`, data, { headers: {"Authorization" : `${authUser?.token}`}})
        if(res.status == 200 || res.status == 201){
            dispatch({
                type: ADD_SETTING,
                payload: res.data.data
            })
            dispatch(setNotification(
                {type: 'success' , message: 'Setting added sucessfully!'}
            ))
        }
        dispatch({
            type: SET_PROCCESING,
            payload: false
        });
    }catch(error){
        dispatch(setNotification(
            {type: 'error' , message: 'Setting not saved!'}
        ))
        dispatch({
            type: SET_PROCCESING,
            payload: false
        });
    }
}

export const getSetting = () => async (dispatch:Dispatch<any>)=> {
    try{
        const {authUser} = store.getState().auth
        const {setting} = store.getState().setting
        if(!setting){
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/setting/by-user`, { headers: {"Authorization" : `${authUser?.token}`}})
            if(res.status == 200){
                dispatch({
                    type: ADD_SETTING,
                    payload: res.data.data
                })
            }
        }
    }catch(error){
        dispatch(setNotification(
            {type: 'error' , message: 'Setting not get!'}
        ))
    }
}


export const updateProccesingStatus = (status:boolean) => async (dispatch:Dispatch<any>) => {
    dispatch({
        type: SET_PROCCESING,
        payload: status
    })
}