// Using Type Assertions

// A type assertion tells the TypeScript Compiler to treat a 
// value as a specific type, known as type narrowing. A type
// assertion is one of the ways that you can narrow a type
// from a union.

function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

let taxNumber = calculateTax(100, false) as number;
let taxString = calculateTax(100, true) as string;

console.log(`Number Value: ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${taxString.charAt(0)}`);

// A type is asserted using the as keyword followed by the 
// required type. 
// No type conversion is performed by a type assertion, which
// only tells the compiler what type it should apply to a 
// value for the purposes of type checking.

// The type asserts select a specific type from the union, which
// means that the methods and properties available on that type
// can be used, preventing the errors b4.