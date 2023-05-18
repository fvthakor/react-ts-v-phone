export interface RTPaginationModel {
    total: number;
    pageSize:number;
    curruntPage:number;
    getCurrentPage?:Function
}