"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calc_1 = require("./calc");
var printMessage = function (msg) { return console.log("Message: " + msg); };
var message = ("Hello, TypeScript");
printMessage(message);
var total = calc_1.sum(100, 200, 300);
console.log("Total: " + total);
