import { MessageState } from "../MessageModel";
import { NumberState } from "../NumberModel";
import { AuthState } from "./AuthState";
import { ConfigState } from "./ConfigState";
import { DeviceState } from "./DeviceState";
import { SettingState } from "./SettingState";
import { UserState } from "./UserState";

export interface RootStateModel {
    config:ConfigState,
    auth: AuthState,
    user:UserState,
    setting: SettingState,
    number:NumberState,
    message: MessageState,
    device:DeviceState
}