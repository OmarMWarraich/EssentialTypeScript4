// Preparing for Chapter 9: Arrays, Tuples and Enums
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
let hatPrice = 100;
let glovesPrice = 75;
let umbrellaPrice = 42;
writePrice("Hat", calculateTax(hatPrice));
writePrice("Gloves", calculateTax(glovesPrice));
writePrice("Umbrella", calculateTax(umbrellaPrice));
