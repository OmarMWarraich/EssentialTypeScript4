// Controlling Null Parameter Values
// TS allows null and undefined to be used as values for all types
// by default, which means that a function can recieve null values
// for all of its parameters.
function calculateTax(amount, discount = 0, ...extraFees) {
    return (amount * 1.2) - (discount)
        + extraFees.reduce((total, val) => total + val, 0);
}
let taxValue = calculateTax(null, 0);
console.log(`Tax value: ${taxValue}`);
// If the null value is used for a default-initialized parameter,
// then its default value is used, as though the function had been
// called without an argument. But for required parameters, the
// function recieves the null value, which can lead to unexpected
// results. In the example, the calculateTax function recieves null
// for the amount parameter.
