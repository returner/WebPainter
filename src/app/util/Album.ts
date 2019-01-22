import {fabric} from "fabric"
import { AlbumCreateOptions } from "../model/AlbumCreateOptions";

export class Album
{
    public CreateCanvas(canvasId : string, albumCreateOptions? : AlbumCreateOptions) : fabric.Canvas
    {
        return new fabric.Canvas(canvasId, albumCreateOptions);
    }
}