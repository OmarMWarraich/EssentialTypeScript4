// Using Type Unions

// At one end of the type safety spectrum is the any feature,
// which allows complete freedom. At the other end of the 
// spectrum are type annotations for single types, which narrows
// the range of allowable values. Between these two extremes,
// TS provides type unions, which specify a set of types.

function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

let taxNumber = calculateTax(100, false);
let taxString = calculateTax(100, true);

// The type returned by the calculateTax function is the
// union of the string and number types which is defined using
// the bar character between type names. The union can combine
// as many types as needed.

//Defining a Type Union

// It is important to understand that a type union is handled 
// as a type in its own right, whose features are the intersection
// of the individual types. This means that the type of the 
// taxNumber variable is string | number and not number even
// though the calculateTax function returns a number when
// the boolean argument is false. 