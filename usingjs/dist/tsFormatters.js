"use strict";
// Generating Declaration Files
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeMessage = exports.costFormatter = exports.sizeFormatter = void 0;
// If your code is going to be used by other projects, compiler can generate declaration 
// files allongside the pure JS, which has the effect of preserving the type information
// for othre TS programmers but still allowing the project to be used as regular JS.
// The compiler wont generate declaration files when the allowJS is enabled, which means 
// that the dependency on the formatters.js ought to be removed so that all project is TS.
// Add a file called tsFormatters.ts .
function sizeFormatter(thing, count) {
    writeMessage(`The ${thing} has ${count} items.`);
}
exports.sizeFormatter = sizeFormatter;
function costFormatter(thing, cost) {
    if (typeof cost === 'number') {
        writeMessage(`The ${thing} costs $${cost.toFixed(2)}`);
    }
    else {
        writeMessage(`The ${thing} costs $${cost}`);
    }
}
exports.costFormatter = costFormatter;
function writeMessage(message) {
    console.log(message);
}
exports.writeMessage = writeMessage;
