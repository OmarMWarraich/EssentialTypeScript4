// Working with Arrays
// JS arrays can contain any combination of types and have variable
// length, which means that values can be added and removed
// dynamically without the need to explicitly resize the array.
// TS doesnt change the flexible size of arrays, but it does allow
// the data types they contain to be restricted through the use of 
// type annotations.
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
let prices = [100, 75, 42];
let names = ["Hat", "Gloves", "Umbrella"];
writePrice(names[0], calculateTax(prices[0]));
writePrice(names[1], calculateTax(prices[1]));
writePrice(names[2], calculateTax(prices[2]));
