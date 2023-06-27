import { SearchNumber } from "./SearchNumberModel";

export interface Number {
    sid: string;
    number:string;
    _id?:string;
    user?:string;
}

export interface NumberState {
    numbers:Number[],
    avilablenumbers: SearchNumber[],
    processing: boolean;
}