// Using Inferred Typings for Arrays
// TS compiler is adept at inferring types automatically, and the
// same example can be expressed without type annotations.
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
let prices = [100, 75, 42];
let names = ["Hat", "Gloves", "Umbrella"];
prices.forEach((price, index) => {
    writePrice(names[index], calculateTax(price));
});
// The compiler can determine the array types based on the set of
// values that are assigned when the arrays are initialized and it
// uses the inferred types to follow through to the forEach method.
// The compiler is skilled at inferring types, but if you dont get
// the results you expect, you can expect the files that the compiler
// emits when the declaration option is eabled. This option generates
// type declaration files, which are used to provide type information
// when a package is used in another TS project.
