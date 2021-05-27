// Performing Operations on Typed Arrays
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
// The first argument of the function passed to the forEach method
// recieves a number value because that's the type of the array that
// is being processed. TS will ensure that only operations that are
// allowed for number values are performed by the function.
