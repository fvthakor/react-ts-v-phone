export interface UserModel {
    email: string;
    name:string;
    _id?:string;
    role?:string;
    createdAt?:Date;
    token?:string;
}