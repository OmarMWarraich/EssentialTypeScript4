// Undestanding the Type Guard Limitation
// A related problem arises when using a type guard. Testing types
// is done using the JS typeof keyword, and since enums are implemented
// using JS number values, typeof cannot be used to distinguish between
// number and enum values.
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
var OtherEnum;
(function (OtherEnum) {
    OtherEnum[OtherEnum["First"] = 10] = "First";
    OtherEnum[OtherEnum["Two"] = 20] = "Two";
})(OtherEnum || (OtherEnum = {}));
var Product;
(function (Product) {
    Product[Product["Hat"] = 11] = "Hat";
    Product[Product["Gloves"] = 20] = "Gloves";
    Product[Product["Umbrella"] = 31] = "Umbrella";
})(Product || (Product = {}));
let productValue = Product.Hat;
if (typeof productValue === "number") {
    console.log("Value is a number");
}
let unionValue = Product.Hat;
if (typeof unionValue === "number") {
    console.log("Value is a number");
}
