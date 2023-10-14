import { ImageData } from "./imageData";

export interface Project{
    id:string;
    width:number;
    top:number;
    left:number;
    title:string;
    description:string;
    link:string;
    imgData:ImageData;
    visible:boolean;
}

