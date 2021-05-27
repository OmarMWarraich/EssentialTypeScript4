// Destructuring Tuples
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
let hat = ["Hat", 100];
let gloves = ["Gloves", 75];
let [hatname, hatprice] = hat;
console.log(`Name: ${hatname}`);
console.log(`Price: ${hatprice.toFixed(2)}`);
// The hat tuple is destructured and its values are assigned to
// hatname and hatprice variables, which are written to the console.
