
import { IRect } from "../interface/IRect";
import { Color } from "./Color";

export class Rectangle implements IRect
{
    Left : number;
    Width : number;
    Height : number;
    FillColor : string;

    constructor(left : number, width:number, height : number)
    {
        this.Left = left;
        this.Width = width;
        this.Height  = height;
        this.FillColor = "";
    }
    
    public setColor(color : Color)
    {
        this.FillColor = color;
    }
}