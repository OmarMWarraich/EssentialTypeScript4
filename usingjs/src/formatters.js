// Using comments to describe a Type Union

//@ts-nocheck   

export function sizeFormatter(thing, count) {
    writeMessage(`The ${thing} has ${count} items`);
}

/**
 * Format something that has a money value
 * @param { string } thing - the name of the item
 * @param { number | string } cost - the value associated with the item
 */


export function costFormatter(thing, cost) {
    if (typeof cost === "number") {
        writeMessage(`The ${thing} costs $${cost.toFixed(2)}`,  true);
    } else {
        writeMessage(`The ${thing} costs $${cost}`);
    }
    
}

function writeMessage(message) {
    console.log(message);
}

// The costFormatter function has been modified so that it can accept number and string
// values for its cost parameter, which is reflected in the updated JSDoc comment, which
// specified the type as number | string. When the changes are saved, the code will be 
// compiled and the following output will be produces.