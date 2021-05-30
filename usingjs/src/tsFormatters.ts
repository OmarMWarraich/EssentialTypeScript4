// Generating Declaration Files



// If your code is going to be used by other projects, compiler can generate declaration 
// files allongside the pure JS, which has the effect of preserving the type information
// for othre TS programmers but still allowing the project to be used as regular JS.

// The compiler wont generate declaration files when the allowJS is enabled, which means 
// that the dependency on the formatters.js ought to be removed so that all project is TS.
// Add a file called tsFormatters.ts .

export function sizeFormatter(thing: string, count: number): void {
    writeMessage(`The ${thing} has ${count} items.`);
}

export function costFormatter(thing: string, cost: number | string): void {
    if (typeof cost === 'number') {
        writeMessage(`The ${thing} costs $${cost.toFixed(2)}`);
    } else {
        writeMessage(`The ${thing} costs $${cost}`);
    }
}

export function writeMessage(message: string): void {
    console.log(message);
}

