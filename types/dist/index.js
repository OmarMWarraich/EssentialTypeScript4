"use strict";
// Apply Annotations to Variables
function calculateTax(amount) {
    return amount * 1.2;
}
let price = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;
console.log(`Full Amount in tax: ${taxAmount}`);
console.log(`Half Share: ${halfShare}`);
