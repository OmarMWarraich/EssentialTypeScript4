// Change Compiler Option
function calculateTax(amount, discount = 0, ...extraFees) {
    return (amount * 1.2) - (discount)
        + extraFees.reduce((total, val) => total + val, 0);
}
let taxValue = calculateTax(null, 0);
console.log(`Tax value: ${taxValue}`);
// TS2345: Argument of type 'null' is not assignable to parameter
// of type 'number'.
