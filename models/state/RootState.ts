import { AuthState } from "./AuthState";
import { ConfigState } from "./ConfigState";

export interface RootStateModel {
    config:ConfigState,
    auth: AuthState
}