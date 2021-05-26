// Using Implicitly Defined Any Types
// The TS compiler will use any when it is assigning types
// implicitly and cannot identify a more specific type to
// use. This makes it easier to selectively apply TypeScript
// in an existing JS project and can simplify working with 
// 3rd party JS pkgs.
function calculateTax(amount) {
    return `$${(amount * 1.2).toFixed(2)}`;
}
let price = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;
let personVal = calculateTax("Bob");
console.log(`Price: ${price}`);
console.log(`Full Amount in tax: ${taxAmount}`);
console.log(`Half Share: ${halfShare}`);
console.log(`Name: ${personVal}`);
// The compiler will use an implicit any for the function 
// parameter because it isnt able to determine a better type
// to use, which is why no compiler error will be reported
// when the function is invoked with a string argument.
