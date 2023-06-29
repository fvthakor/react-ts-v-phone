export interface Message {
    sid?: string;
    number:string;
    _id?:string;
    user?:string;
    createdAt?:string; 
    isview?: boolean;
    message:string;
    type: "send" | "receive";
    twilioNumber: string;
}

type MessageLists = { [key: string]: Message[] };



export interface NumberList{
    _id: string;
    message: string;
    id: string;
    createdAt: string;
    type: "send" | "receive";
    twilioNumber: string;
    isview:number;
}

export interface MessageState {
    messages:Message[],
    numberList: NumberList[],
    activeNumber?:NumberList,
    processing: boolean;
    messageLists: MessageLists
}