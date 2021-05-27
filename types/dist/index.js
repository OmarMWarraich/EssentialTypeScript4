// Using Enums
// An enum allows a collection of values to be used by name, which
// makes code easier to read and ensures that a fixed set of values
// is used consistently. Like Tuples, enums are a feature that is
// provided by the TS compiler.
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
let products = [[Product.Hat, 100], [Product.Gloves, 75]];
products.forEach((prod) => {
    switch (prod[0]) {
        case Product.Hat:
            writePrice("Hat", calculateTax(prod[1]));
            break;
        case Product.Gloves:
            writePrice("Gloves", calculateTax(prod[1]));
            break;
        case Product.Umbrella:
            writePrice("Umbrella", calculateTax(prod[1]));
            break;
    }
});
// An enum is deined using the enum keywrd, followed by a name, 
// followed by a list of values in curly braces.
// The enum values are accessed in the form <enum>.<value> so that
// the Hat value defined by the Product enum is accessed as 
// Product.Hat
// An enum is used like any other type.
