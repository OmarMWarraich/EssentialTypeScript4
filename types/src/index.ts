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
let taxBoolean = calculateTax(100, false) as any as boolean;

console.log(`Number Value: ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${taxString.charAt(0)}`);
console.log(`Boolean Value: ${taxBoolean}`);

// The assertion can be forced and compiler's warning be 
// overridden by first asserting to any and then the required
// type. The compiler error refers to previous commit.

// The additional step prevents the compiler from warning about
// the change and treats the result from the function as a 
// boolean value. However, as noted earlier, assertions only
// affect the type checking process and do not perform type 
// coercion, which can be seen in the results produced when the
// code is compiled.