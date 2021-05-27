// Use Type Annotations for Function Results
// The compiler infers a function result type by analyzing the code
// paths and creating a union of the types it encounters. 
// Annotations for function results appear at the end of the 
// function signature.
function calculateTax(amount, discount = 0, ...extraFees) {
    {
        return (amount * 1.2) - (discount)
            + extraFees.reduce((total, val) => total + val, 0);
    }
}
let taxValue = calculateTax(100, 0);
console.log(`Tax value: ${taxValue}`);
// set result type to number and null type from the amount parameter
// removed. Ecplicit declaration of type means the compiler will 
// report an error if by any chance a different type from the 
// function is returned.
