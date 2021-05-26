// Assigning the any Type

function calculateTax(amount: any): any {
    return `$${(amount * 1.2).toFixed(2)}`;
}

let price = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;

console.log(`Price: ${price}`);
console.log(`Full Amount in tax: ${taxAmount}`);
console.log(`Half Share: ${halfShare}`);

let newResult: any = calculateTax(200);
let myNumber: number = newResult;
console.log(`Number value: ${myNumber.toFixed(2)}`);

// The compiler trusts that the any value can be treated as a 
// number, which means a type mismatch occurs at runtime. This 
// any type allows full use of the JS type features, which can
// be useful but yield unexpected results when types are 
// coerced automatically at runtime.