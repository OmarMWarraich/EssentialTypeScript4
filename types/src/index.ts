// Adding Type Annotations to Function Parameters

// By default, the TypeScript compiler assigns all function parameters
// to the any type, but more specific types can be declared using
// type annotations. 
// here type annotations applied to the calculatTax function to
// ensure that only number values can be used for its parameters.

function calculateTax(amount, discount = 0, ...extraFees:number[]) {
    return (amount * 1.2) - (discount)
        + extraFees.reduce((total, val) => total + val, 0);
}


let taxValue = calculateTax(100, 0);
console.log(`2 args: ${taxValue}`);
taxValue = calculateTax(100);
console.log(`1 arg: ${taxValue}`);
taxValue = calculateTax(100, 10, 20);
console.log(`3 args: ${taxValue}`);
taxValue = calculateTax(100, 10, 20, 1, 30, 7);
console.log(`6 args: ${taxValue}`);

// For parameters with default values, the type annotation comes 
// before the value assignment. The type for a rest parameter is 
// always an array. 

// Type annotations for optional parameters are applied after the
// question mark, like this: discount? : number.