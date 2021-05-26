// Declaring Union Types Explicitly
function calculateTax(amount, format) {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxNumber = calculateTax(100, false);
let taxString = calculateTax(100, true);
console.log(`Number Value: ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${taxString.charAt(0)}`);
// Only the props and meths defined by all the types in union
// can be used in the union, as above only common type is toString
// Therefore, the other methods defined by the string and number
// types cannot be used and the use of the toFixed and charAt
// methods produces compiler messages. errorTS2339
