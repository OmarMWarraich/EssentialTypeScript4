// Using Overrides with Literal Value Types
// Types overrides cal also be applied to literal value types.
function calculatePrice(quantity, price) {
    return quantity * price;
}
let total = calculatePrice(2, 19.99);
console.log(`Price: ${total}`);
function getRandomValue() {
    return Math.floor(Math.random() * 4) + 1;
}
var City;
(function (City) {
    City["London"] = "LON";
    City["Paris"] = "PAR";
    City["Chicago"] = "CHI";
})(City || (City = {}));
function getMixedValue(input) {
    switch (input) {
        case 1:
            return 1;
        case 2:
            return "Hello";
        case 3:
            return true;
        case 4:
        default:
            return City.London;
    }
}
let first = getMixedValue(1);
let second = getMixedValue(2);
let third = getMixedValue(4);
console.log(`${first}, ${second}, ${third}`);
// Each mapping creates a relationship between parameters and result
// parameters, which can be expressed as one or more values. The TS
// compiler can follow the overloads to determine the types for the
// first, second and third variables.
