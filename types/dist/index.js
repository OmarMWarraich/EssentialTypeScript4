// The Array Syntax
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
// let prices: number[] = [100, 75, 42];
// is equivalent to the following code: 
let prices = [100, 75, 42];
let names = ["Hat", "Gloves", "Umbrella"];
prices.forEach((price, index) => {
    writePrice(names[index], calculateTax(price));
});
// The problem with this syntax is that it cant be used in TSX.
