import { UserModel } from "../UserModel";

export interface UserState {
    users:UserModel[],
    activeUser?:UserModel
}