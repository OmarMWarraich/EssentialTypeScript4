function calculateTax(amount, discount) {
    return (amount * 1.2) - discount;
}

// function calculateTax(amount, discount) {
//     return calculateTax(amount) - discount;
// }

let taxValue = calculateTax(100, 0);
console.log(`Total Amount: ${taxValue}`);