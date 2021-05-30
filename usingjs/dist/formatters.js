"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.costFormatter = exports.sizeFormatter = void 0;
function sizeFormatter(thing, count) {
    writeMessage(`The ${thing} has ${count} items`);
}
exports.sizeFormatter = sizeFormatter;
function costFormatter(thing, count) {
    writeMessage(`The ${thing} costs ${cost.toFixed(2)}`, true);
}
exports.costFormatter = costFormatter;
function writeMessage(message) {
    console.log(message);
}
