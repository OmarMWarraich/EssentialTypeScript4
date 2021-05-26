// Expanding a Type Union
function calculateTax(amount, format) {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxValue = calculateTax(0, false);
switch (typeof taxValue) {
    case "number":
        console.log(`Number Value: ${taxValue.toFixed(2)}`);
        break;
    case "string":
        console.log(`String Value: ${taxValue.charAt(0)}`);
        break;
    default:
        if (taxValue === null) {
            console.log("Value is null");
        }
        else {
            console.log(typeof taxValue);
            let value = taxValue;
            console.log(`Unexpected type for value: ${value}`);
        }
}
// Expanding the type Union makes it obvious that null values may be
// returned by the function, ensuring that code that uses the function
// knows that string, number, or null values have to be dealt with. 
// Using typeof on null values returns object, so guarding against 
// null values is done using an explicit value check, which the 
// TS compiler understands as a type guard.
