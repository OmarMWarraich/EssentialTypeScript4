// Using a Parameter with a Default Value

// If there is a fallback value that should be used for an optional
// parameter, then it can be applied when the parameter is defined.

function calculateTax(amount, discount = 0) {
    return (amount * 1.2) - (discount);
}


let taxValue = calculateTax(100, 0);
console.log(`2 args: ${taxValue}`);
taxValue = calculateTax(100);
console.log(`1 arg: ${taxValue}`);
// taxValue = calculateTax(100, 10, 20);
// console.log(`3 args: ${taxValue}`);

// also known as a default-initialized parameter, the name of the
// parameter is followed by the assignment operator(a single = 
// character) and the value.No ? used when defining a parameter 
// with a default value.

// Using a default value meants that the code in the function doesnt
// have to check for undefined values and means that the fallback
// value can be changed in a single location and take effect
// throughout the function.

// Parameters with default values are still optional parameters, even
// though no question mark is used and must be defined after the
// function's required parameters.