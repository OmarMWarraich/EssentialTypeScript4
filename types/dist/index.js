// Understanding Assert Functions
// An assert function is one that evaluates an expresion condition
// and typically throws an error if the result isnt true. 
// Assert functions are sometimes used as type guards in pure JS,
// where the static types of TS are not available.
// The problem with assert functions is that the TS compiler
// cannot infer the effect of the assert function on types.
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
// The check function defines a boolean parameter and throws an 
// error if it is false. This is the basic pattern of an assert
// function.
// The calculateTax function accepts a number | null argument
// and uses the check function to narrow the type so that null
// values cause errors and so number values are used to produce
// a result.
// The problem with this code is that the TypeScript compiler 
// doesnt understand that the check function means that only 
// number values will be processed. following error message.
// TS2531: Object is possibly 'null'
