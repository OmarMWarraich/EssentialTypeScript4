export function sizeFormatter(thing, count) {
    writeMessage(`The ${thing} has ${count} items`);
}

export function costFormatter(thing, count) {
    writeMessage(`The ${thing} costs ${cost.toFixed(2)}`,  true);
}

function writeMessage(message) {
    console.log(message);
}