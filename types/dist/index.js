// Understanding the Never Type
// TS provides the never type for situations where a type guard 
// has dealt with all of the possible types for a value. 
// Once all the possible values have been handled, the compiler
// will only allow a value to be assigned to the never type.
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
