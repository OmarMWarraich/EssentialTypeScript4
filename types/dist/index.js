// Using the Unkown Type
// TS also provides the unknown type which is a safer alternative
// to any. An unknown value can be assigned only any or itself
// unless a type assertion or type guard is used. 
function calculateTax(amount, format) {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxValue = calculateTax(100, false);
switch (typeof taxValue) {
    case "number":
        console.log(`Number Value: ${taxValue.toFixed(2)}`);
        break;
    case "string":
        console.log(`String Value: ${taxValue.charAt(0)}`);
        break;
    default:
        let value = taxValue;
        console.log(`Unexpected type for value: ${value}`);
}
// Something has gone wrong if execution reaches the default 
// clause of the switch statement, and TS provides the never
// type to ensure that you cant accidentally use a value once
// type guards have been used to exhaustively narrow a value 
// to all of its possible types.
