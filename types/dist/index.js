// Mixing Array Types
// compiler infers array types using the values used to populate the
// array when it is created. This can lead to type errors if the 
// values used to populate an array are accidentally mixed.
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
let prices = [100, 75, 42, "20"];
let names = ["Hat", "Gloves", "Umbrella", "Sunglasses"];
prices.forEach((price, index) => {
    writePrice(names[index], calculateTax(price));
});
// The new value used to initialize the prie array causes the following
// error when code is compiled. This
// ts2345: Arg of type 'string' | 'number' not assignable to parameter
// of type 'number'.
