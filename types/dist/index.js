// The Alternative Type Assertion Syntax
function calculateTax(amount, format) {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxNumber = calculateTax(100, false);
// Type Assetions can also be performed using an angle bracket
// syntax so that the following statement
// let taxString = calculateTax(100, true) as string;
//becomes
let taxString = calculateTax(100, true);
// However this syntax cant be used in TSX files, which combine
// HTML elements with Typescript code and are commonly used in
// React dev. Therefore, the as keyword is the preferred way
// to assert types.
let taxBoolean = calculateTax(100, false);
console.log(`Number Value: ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${taxString.charAt(0)}`);
console.log(`Boolean Value: ${taxBoolean}`);
