// Defining Tuples with Rest Elements
// Tuples can also contain a rest element, that can be used to match
// multiple values of a given type. This feature provides a variable
// -length tuple that lacks the rigidly defined structure of basic
// tuples.
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
let hat = ["Hat", 100, 10, 1.20, 3, 0.95];
let gloves = ["Gloves", 75, 10];
[hat, gloves].forEach(tuple => {
    let [name, price, taxRate, ...coupons] = tuple;
    if (taxRate != undefined) {
        price += price * (taxRate / 100);
    }
    coupons.forEach(c => price -= c);
    writePrice(name, price);
});
