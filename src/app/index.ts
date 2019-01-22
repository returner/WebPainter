import {fabric} from "fabric"
import { Rectangle } from "./model/Rectangle";
import { Color } from "./model/Color";
import { Album } from "./util/Album";

var canvas = new Album();
let cc = canvas.CreateCanvas("canvas").add(new fabric.Rect({
    top : 100,
    left : 100,
    width : 100,
    height : 100,
    fill : 'orange'
}));
