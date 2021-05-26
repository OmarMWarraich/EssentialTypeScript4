// Changing the Function result

function calculateTax(amount: any): any {
    return `$${(amount * 1.2).toFixed(2)}`;
}

let price = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;

console.log(`Price: ${price}`);
console.log(`Full Amount in tax: ${taxAmount}`);
console.log(`Half Share: ${halfShare}`);


// The function's result cannot be parsed into a number value,
// so the Half share output is NaN.