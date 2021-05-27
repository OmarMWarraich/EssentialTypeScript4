// Narrowing Types Directly
function checkNumber(val) {
    if (typeof val !== 'number') {
        throw new Error("Not a number");
    }
}
function calculateTax(amount) {
    checkNumber(amount);
    return amount * 1.2;
}
let taxAmount = calculateTax(100);
console.log(`Tax value: ${taxAmount}`);
// The asserts keyword is followed by val is number, which tells 
// the TS compiler that the effect of the checkNumber function is 
// ensire that the val parameter is a number value.
