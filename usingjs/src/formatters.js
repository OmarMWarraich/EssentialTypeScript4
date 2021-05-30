// Using comments to describe types

//@ts-nocheck   

export function sizeFormatter(thing, count) {
    writeMessage(`The ${thing} has ${count} items`);
}

/**
 * Format something that has a money value
 * @param { string } thing - the name of the item
 * @param { number } cost - the value associated with the item
 */


export function costFormatter(thing, cost) {
    writeMessage(`The ${thing} costs $${cost.toFixed(2)}`,  true);
}

function writeMessage(message) {
    console.log(message);
}

// JDDoc specification allows types to be indicated for function paramters. The JSDoc
// comment below indicates that the costFormatter function expects to recieve string
// and number parameters. The type information is a standard part of JSDoc, but it is
// usually just to provide guidance.

// TS compiler reads the JSDoc comments to get type information about the JS code. When
// the JSDoc comment about is saved, the compiler runs the following error.

// src/index/ts: error TS2345: Argument of type string not assignment to param type(number)