import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import { SET_USERS } from "./user.type";
import { setNotification } from "../config/config.action";
import store from "..";


export const getUsers = () => async (dispatch:Dispatch<any>)=> {
    try{
        const {users} = store.getState().user
        if(users.length > 0){
            return false;
        }
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`,{
            withCredentials: true
        })
        if(res.status == 200){
            dispatch({
                type: SET_USERS,
                payload: res.data.data,
            });
        }
    }catch(error:any){
        dispatch(setNotification(
            {type: 'error' , message:  error.response.data.message}
        ))
    }
}