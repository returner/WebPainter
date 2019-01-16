// require("./common.css");
// var hello = require("./hello");
// var world = require("./world");
// document.write(hello + ' , ' + world + "!");

import random from 'lodash/random';
import './common.css';
import hello from './hello';
import world from './world';

// var a = 0;

document.write(`${hello}, ${world}!`);
document.write(`Random: ${random(0, 100)}`);
