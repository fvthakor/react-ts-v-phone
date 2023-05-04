import { Dispatch } from "redux";
import { SET_ACTIVE_MENU, SET_ERROR_MESSAGE, SET_MODE, SET_SUBMENU_STATUS, SET_SUCCESS_MESSAGE } from "./config.type";
import { NotifyModel } from "@/models/NotifyModel";

export const setThemeMode = (mode:boolean) => async (dispatch:Dispatch<any>)=> {
    dispatch({
        type: SET_MODE,
        payload: mode,
    });
}

export const setActiveMenu = (tab:string) => async (dispatch:Dispatch<any>) => {
    dispatch({
        type: SET_ACTIVE_MENU,
        payload: tab,
    });

    dispatch({
        type: SET_SUBMENU_STATUS,
        payload: true,
    })
}

export const closeSidebar = () => async (dispatch:Dispatch<any>)=> {
    dispatch({
        type: SET_ACTIVE_MENU,
        payload: false,
    });
}

export const setNotification = (data:NotifyModel) => async (dispatch:Dispatch<any>)=> {
    if(data.type == 'error'){
        dispatch({
            type: SET_ERROR_MESSAGE,
            payload: data.message,
        });

        setTimeout(() => {
            dispatch({
                type: SET_ERROR_MESSAGE,
                payload: null,
            });
        });
    }else{
        dispatch({
            type: SET_SUCCESS_MESSAGE,
            payload: data.message,
        });

        setTimeout(() => {
            dispatch({
                type: SET_SUCCESS_MESSAGE,
                payload: null,
            });
        });
    }
}
