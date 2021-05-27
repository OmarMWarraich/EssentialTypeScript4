// Using a Rest Parameter 
// The counter to optional parameters is the rest parameter, which
// allows a function to accept a variable number of arguments, which
// are grouped and presented together. A function can have one rest
// parameter only and it must be the last parameter.
function calculateTax(amount, discount = 0, ...extraFees) {
    return (amount * 1.2) - (discount)
        + extraFees.reduce((total, val) => total + val, 0);
}
let taxValue = calculateTax(100, 0);
console.log(`2 args: ${taxValue}`);
taxValue = calculateTax(100);
console.log(`1 arg: ${taxValue}`);
taxValue = calculateTax(100, 10, 20);
console.log(`3 args: ${taxValue}`);
// A rest parameter is defined by prefixing the parameter name 
// with an ellipsis (three periods).
// Any args with no params are assigned to the rest parameter, which
// is an array. The array will always be initialized and will contain
// no items if there were no extra arguments.
// The addition of the rest parameter means that the calculatTax
// function can be called with one or more args: the first arg is
// assigned to the amount parameter, the section argument(if there
// is one) is assigned to the discount parameter, and any other args
// are assigned to the extraFees parameter array.
