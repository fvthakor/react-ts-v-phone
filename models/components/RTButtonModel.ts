export interface RTButtonModel {
    className?: string;
    type:"button" | "submit" | "reset" | undefined;
    name:string;
    buttonType?: "sm" | "md" | "lg" | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    processing?:boolean
}