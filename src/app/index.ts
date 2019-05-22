import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Album } from "./util/Album";
//import fabric from "fabric/fabric-impl";
import fabric from "fabric";
import $ from "jquery";

// let canvas = new Album();
// canvas.CreateCanvas("canvas").add(new fabric.Rect({
//     top : 100,
//     left : 100,
//     width : 100,
//     height : 100,
//     fill : 'orange'
// }));
export class Main
{
    public StartUp(mainContentCanvasId : string)
    {
        console.log("startup");
        let canvas = new Album();

        canvas.CreateCanvas(mainContentCanvasId).add(new fabric.fabric.Rect({
            top : 10,
            left : 10,
            width : 10,
            height : 10,
            fill : 'blue'
        }))
    }
}



var editor = new Main();

$("document").ready(()=>{
    $("#btnCreate").click(()=>{
        alert("click");
    });
});