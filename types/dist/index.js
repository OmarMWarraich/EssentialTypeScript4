// Use Type Aliases
// To avoid repitition, TypeScript provides the type alias feature, which allows a 
// custom type combination to be assigned a name and applied where it is needed.
function calculatePrice(quantity, price) {
    return quantity * price;
}
let total = calculatePrice(2, 19.99);
console.log(`Price: ${total}`);
function getRandomValue() {
    return Math.floor(Math.random() * 4) + 1;
}
function getCityString(city) {
    return `City: ${city}`;
}
let str = getCityString("London");
console.log(str);
// Type aliases are defined using the type keyword, followed by a name for the alias, 
// the equal sign and the type that will be aliased.
// Defining a type alias.
// The name assigned to the alias is used in place of the full type description. Using
// a type alias allows a complex type or combination of types to be referred to more 
// easily, but it doesnt change the way the TS compiler deals with the type, and the
// alias can be used in type annotations or assertions as normal.
