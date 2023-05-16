import { AuthState } from "./AuthState";
import { ConfigState } from "./ConfigState";
import { UserState } from "./UserState";

export interface RootStateModel {
    config:ConfigState,
    auth: AuthState,
    user:UserState
}