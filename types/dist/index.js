// Removing null from a Union with a TypeGurad
// An alternative approach is to filter out null or undefined values
// using a type guard. 
// This approach has the advantage of testing values at runtime.
function calculateTax(amount, format) {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxValue = calculateTax(100, false);
if (taxValue !== null) {
    let nonNullTaxValue = taxValue;
    switch (typeof taxValue) {
        case "number":
            console.log(`Number Value: ${taxValue.toFixed(2)}`);
            break;
        case "string":
            console.log(`String Value: ${taxValue.charAt(0)}`);
            break;
    }
}
else {
    console.log("Value is not a string or a number");
}
// The compiler knows that the test for null values meants that the
// value can be treated as the non-nullable string | number union
// type with the if code block. (The compiler also knows that 
// taxValue can be null only in the else code block.)
