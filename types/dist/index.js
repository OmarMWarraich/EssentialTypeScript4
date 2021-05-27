// Mixing Value Types in a Literal Value Type
// A literal value type can be made up of any combination of values
// that can be expressed literally, including enums.
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
function getMixedValue() {
    switch (getRandomValue()) {
        case 1:
            return 1;
        case 2:
            return "Hello";
        case 3:
            return true;
        case 4:
            return City.London;
    }
}
console.log(`Value: ${getMixedValue()}`);
// The getRandomValue function returns one of four values, which are
// used by the getMixedValue function to produce its result. The 
// getMixedValue function shows how a literal value type can combine 
// values that would usually be considered separate types, using a 
// number value, a string value, a boolean value, and an enum value.
