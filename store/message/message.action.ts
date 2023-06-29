import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import { SET_ACTIVE_NUMBER, SET_MESSAGES, SET_MESSAGE_LIST, SET_NUMBER_LIST, SET_PROCCESING_MESSAGE } from "./message.type";
import { setNotification } from "../config/config.action";
import store from "..";
import { Message, Number, NumberList } from "@/models";


export const getNumberList = () => async (dispatch:Dispatch<any>)=> {
    try{
        const {authUser} = store.getState().auth
        const {numberList} = store.getState().message
        if(numberList.length > 0){
            return false;
        }
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/message/number-list`, { headers: {"Authorization" : `${authUser?.token}`}})
        if(res.status == 200){
            dispatch({
                type: SET_NUMBER_LIST,
                payload: res.data.data,
            });
        }
    }catch(error:any){
        dispatch(setNotification(
            {type: 'error' , message:  error.response.data.message}
        ))
    }
}

export const getMessages = (number:string) => async (dispatch:Dispatch<any>) => {
    try{
        const {authUser} = store.getState().auth
        const {messageLists, numberList} = store.getState().message
        
        const filterNumber = numberList.filter(item => item._id === number)
        dispatch({
            type: SET_ACTIVE_NUMBER,
            payload: filterNumber.length > 0 ? filterNumber[0] : undefined,
        });

        const numbers:NumberList[] = numberList.map(item => item._id === number ? {...item, isview: 0} : item)

        dispatch({
            type: SET_NUMBER_LIST,
            payload: numbers,
        });

        if(messageLists[`${number}`]){
            dispatch({
                type: SET_MESSAGES,
                payload: messageLists[`${number}`],
            });
        }else{
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/message/get-messages`,{number:number} ,{ headers: {"Authorization" : `${authUser?.token}`}})
            if(res.status == 200){
                const data:Message[] = res.data.data
                dispatch({
                    type: SET_MESSAGES,
                    payload: data,
                });
                const newMessageLists = messageLists
                newMessageLists[`${number}`] = data;

                dispatch({
                    type: SET_MESSAGE_LIST,
                    payload: newMessageLists,
                });
            }
        }
    }catch(error:any){
        dispatch(setNotification(
            {type: 'error' , message:  error.response.data.message}
        ))
    }
}

export const sendMessage = (message:Message) => async (dispatch:Dispatch<any>) => {
    try{
        const {authUser} = store.getState().auth
        const {messageLists, numberList, messages} = store.getState().message
        if(message.message.trim() !== ''){
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/message`,message ,{ headers: {"Authorization" : `${authUser?.token}`}})
            if(res.status == 200){
                dispatch({
                    type: SET_MESSAGES,
                    payload: [...messages, res.data.data],
                });
                const newMessageLists = messageLists
                const numberMessageList = newMessageLists[`${message.number}`] ? newMessageLists[`${message.number}`] : [];
                newMessageLists[`${message.number}`] = [...numberMessageList, res.data.data];

                dispatch({
                    type: SET_MESSAGE_LIST,
                    payload: newMessageLists,
                });
            }
        }else{
            dispatch(setNotification(
                {type: 'error' , message:  'message is required!'}
            ))
        }
    }catch(error:any){
        dispatch(setNotification(
            {type: 'error' , message:  error.response.data.message}
        ))
    }
}



