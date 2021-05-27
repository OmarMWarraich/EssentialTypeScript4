// Denote an Assert Function
function check(expression) {
    if (!expression) {
        throw new Error("Expression is false");
    }
}
function calculateTax(amount) {
    check(typeof amount == "number");
    return amount * 1.2;
}
let taxAmount = calculateTax(100);
console.log(`Tax value: ${taxAmount}`);
// The assert keyword is used like a result type and is followed 
// by the name of the parameter that the function asserts.
// TS compiler can take the effect of the check function into account
// and knows that the calculateTax function narrows the type of amount
// parameter to exclude null values.
// There is a variation for assert functions that operate on types
// directly, rather than just evaluating an expression.
