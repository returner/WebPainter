import {fabric} from "fabric"
import { Rectangle } from "./model/Rectangle";
import { Color } from "./model/Color";

var canvas = new fabric.Canvas("canvas");
var defaultValue = new Rectangle(100, 160, 170);
defaultValue.setColor(Color.Green);

var rect = new fabric.Rect({
    top : 100,
            left : defaultValue.Left,
            width : defaultValue.Width,
            height : defaultValue.Height,
            fill : defaultValue.FillColor
});

canvas.add(rect);
