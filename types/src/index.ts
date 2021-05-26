// Asserting to an Unexpected Type

// The compiler checks that the type used in an assertion is
// expected. However, if assertion is to a type that the compiler
// doesnt expect the following happens. 

function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

let taxNumber = calculateTax(100, false) as number;
let taxString = calculateTax(100, true) as string;
let taxBoolean = calculateTax(100, false) as boolean;

console.log(`Number Value: ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${taxString.charAt(0)}`);
console.log(`Boolean Value: ${taxBoolean}`);

// The type assertion tells the compiler to treat a string |
// number value as a boolean. The compiler knows that boolean
// is not one of the types in the union and produces the 
// following error when the code is compiled.