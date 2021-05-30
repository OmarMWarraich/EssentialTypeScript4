"use strict";
// Exporting a Function in the formatters.js File
Object.defineProperty(exports, "__esModule", { value: true });
exports.costFormatter = exports.sizeFormatter = void 0;
//@ts-nocheck   
function sizeFormatter(thing, count) {
    writeMessage(`The ${thing} has ${count} items`);
}
exports.sizeFormatter = sizeFormatter;
/**
 * Format something that has a money value
 * @param { string } thing - the name of the item
 * @param { number | string } cost - the value associated with the item
 */
function costFormatter(thing, cost) {
    if (typeof cost === "number") {
        writeMessage(`The ${thing} costs $${cost.toFixed(2)}`, true);
    }
    else {
        writeMessage(`The ${thing} costs $${cost}`);
    }
}
exports.costFormatter = costFormatter;
function writeMessage(message) {
    console.log(message);
}
// The costFormatter function has been modified so that it can accept number and string
// values for its cost parameter, which is reflected in the updated JSDoc comment, which
// specified the type as number | string. When the changes are saved, the code will be 
// compiled and the following output will be produces.
