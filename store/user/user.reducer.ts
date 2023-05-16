import { ActionModel, UserState } from "@/models";
import { SET_USERS } from "./user.type";

const initialState: UserState = {
    users: []
};


const UserReducer = (state = initialState, action:ActionModel):UserState => {
    switch (action.type) {
      case SET_USERS:
          return{
            ...state,
            users: action.payload
          }
      default:
        return state;
    }
  };
  
  export default UserReducer;