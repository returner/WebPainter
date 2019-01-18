import {HelloWorld} from "./helloWorld";
import  {random} from "lodash";

let message =  new HelloWorld();
document.write(message.getText());
document.write(`Random: ${random(0, 100)}`);