// Using the any Type
function calculateTax(amount) {
    return (amount * 1.2).toFixed(2);
}
let price = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;
console.log(`Price: ${price}`);
console.log(`Full Amount in tax: ${taxAmount}`);
console.log(`Half Share: ${halfShare}`);
