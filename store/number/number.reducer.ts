import { ActionModel, NumberState } from "@/models";
import { SET_AVAILABLE_NUMBERS, SET_NUMBERS, SET_PROCCESING_NUMBER } from "./number.type";

const initialState: NumberState = {
    numbers: [],
    avilablenumbers: [],
    processing: false
};


const NumberReducer = (state = initialState, action:ActionModel):NumberState => {
    switch (action.type) {
      case SET_NUMBERS:
          return{
            ...state,
            numbers: action.payload
          }
      case SET_AVAILABLE_NUMBERS: 
          return{
            ...state,
            avilablenumbers: action.payload
          }
      case SET_PROCCESING_NUMBER: 
          return {
            ...state,
            processing: action.payload
          }
      default:
        return state;
    }
  };
  
  export default NumberReducer;