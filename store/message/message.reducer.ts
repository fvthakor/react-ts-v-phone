import { ActionModel, MessageState, NumberState } from "@/models";
import { SET_ACTIVE_NUMBER, SET_MESSAGES, SET_MESSAGE_LIST, SET_NUMBER_LIST, SET_PROCCESING_MESSAGE } from "./message.type";

const initialState: MessageState = {
    messages: [],
    numberList: [],
    processing: false,
    messageLists: {}
};


const MessageReducer = (state = initialState, action:ActionModel):MessageState => {
    switch (action.type) {
      case SET_NUMBER_LIST:
          return{
            ...state,
            numberList: action.payload
          }
    
      case SET_PROCCESING_MESSAGE: 
          return {
            ...state,
            processing: action.payload
          }
      case SET_MESSAGE_LIST: 
          return {
            ...state,
            messageLists: action.payload
          }
      case SET_MESSAGES: 
          return {
            ...state,
            messages: action.payload
          }
      case SET_ACTIVE_NUMBER: 
          return {
            ...state,
            activeNumber: action.payload
          }
      default:
        return state;
    }
  };
  
  export default MessageReducer;