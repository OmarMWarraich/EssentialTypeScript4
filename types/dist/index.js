// Using String Enums
// The default implementation of enums represents each value with 
// a number, but a compiler can also use string values for enums.
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
let productValue = 0;
let productName = Product[productValue];
console.log(`Value: ${productValue}, Name: ${productName}`);
var City;
(function (City) {
    City["London"] = "London";
    City["Paris"] = "Paris";
    City["NY"] = "NewYork";
})(City || (City = {}));
console.log(`City: ${City.London}`);
// A string values must be provided for every enum value name, but 
// the advantage of using string values is that they are easier to
// recognize during debugging or in log files.
