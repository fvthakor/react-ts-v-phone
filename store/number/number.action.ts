import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import { SET_AVAILABLE_NUMBERS, SET_NUMBERS, SET_PROCCESING_NUMBER } from "./number.type";
import { setNotification } from "../config/config.action";
import store from "..";
import { Number } from "@/models";


export const getNumbers = () => async (dispatch:Dispatch<any>)=> {
    try{
        const {authUser} = store.getState().auth
        const {numbers} = store.getState().number
        if(numbers.length > 0){
            return false;
        }
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/number`, { headers: {"Authorization" : `${authUser?.token}`}})
        if(res.status == 200){
            dispatch({
                type: SET_NUMBERS,
                payload: res.data.data,
            });
        }
    }catch(error:any){
        dispatch(setNotification(
            {type: 'error' , message:  error.response.data.message}
        ))
    }
}

export const getAvilableNumbers = (areaCode:string) => async (dispatch:Dispatch<any>)=> {
    dispatch({
        type: SET_PROCCESING_NUMBER,
        payload: true,
    });
    try{
        const {authUser} = store.getState().auth
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/number/get-number`,{areaCode}, { headers: {"Authorization" : `${authUser?.token}`}})
        if(res.status == 200){
            dispatch({
                type: SET_AVAILABLE_NUMBERS,
                payload: res.data.data,
            });

            dispatch(setNotification(
                {type: 'success' , message: 'Number fetched sucessfully!'}
            ))
            dispatch({
                type: SET_PROCCESING_NUMBER,
                payload: false,
            });
        }
    }catch(error:any){
        dispatch({
            type: SET_PROCCESING_NUMBER,
            payload: false,
        });
        dispatch(setNotification(
            {type: 'error' , message:  error.response.data.message}
        ))
    }
}

export const purchaseNumbers = (numberData: string[]) => async (dispatch:Dispatch<any>)=> {
    dispatch({
        type: SET_PROCCESING_NUMBER,
        payload: true,
    });
    try{
        const {authUser} = store.getState().auth
        const {numbers} = store.getState().number;
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/number`,{numbers:numberData}, { headers: {"Authorization" : `${authUser?.token}`}})
        if(res.status == 200 || res.status == 201){
            dispatch({
                type: SET_PROCCESING_NUMBER,
                payload: false,
            });
            dispatch({
                type: SET_AVAILABLE_NUMBERS,
                payload: [],
            });

            dispatch(setNotification(
                {type: 'success' , message: 'Numbers purchased sucessfully!'}
            ))
            
            dispatch({
                type: SET_NUMBERS,
                payload: [...numbers, ...res.data.data],
            });
            
        }
    }catch(error:any){
        dispatch({
            type: SET_PROCCESING_NUMBER,
            payload: false,
        });
        dispatch(setNotification(
            {type: 'error' , message:  error.response.data.message}
        ))
    }
}

export const deleteNumber = (id:string) => async (dispatch:Dispatch<any>)=> {
    dispatch({
        type: SET_PROCCESING_NUMBER,
        payload: true,
    });
    try{
        const {authUser} = store.getState().auth
        const {numbers} = store.getState().number;
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/number/${id}`,{ headers: {"Authorization" : `${authUser?.token}`}})
        if(res.status == 200 || res.status == 201){
            dispatch({
                type: SET_PROCCESING_NUMBER,
                payload: false,
            });

            dispatch(setNotification(
                {type: 'success' , message: 'Numbers deleted sucessfully!'}
            ))
            const arrNumbers = numbers.filter(item => item._id !== id)
            dispatch({
                type: SET_NUMBERS,
                payload: arrNumbers,
            });
        }
    }catch(error:any){
        dispatch({
            type: SET_PROCCESING_NUMBER,
            payload: false,
        });
        dispatch(setNotification(
            {type: 'error' , message:  error.response.data.message}
        ))
    }
}


