import { SettingModel } from "../SettingModel";

export interface SettingState {
    setting?:SettingModel,
    processing: boolean
}