// Understanding How an Enum Works
// Enums are implemented entirely by the TS compiler, relying on
// type checking during compilation and standard JS features at 
// runtime. Each enum value has a corresponding number value that
// is assigned automatically b the compiler and that starts at zero
// by default. 
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
var Product;
(function (Product) {
    Product[Product["Hat"] = 0] = "Hat";
    Product[Product["Gloves"] = 1] = "Gloves";
    Product[Product["Umbrella"] = 2] = "Umbrella";
})(Product || (Product = {}));
[Product.Hat, Product.Gloves, Product.Umbrella].forEach(val => {
    console.log(`Number value: ${val}`);
});
