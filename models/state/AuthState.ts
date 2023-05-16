import { UserModel } from "../UserModel";

export interface AuthState {
    isLogin: boolean;
    authToken: string;
    authUser: UserModel | null;
    authError: string | null;
    processing: boolean; 
    signUpStatus: boolean;
}