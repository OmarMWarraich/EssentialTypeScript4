// Using Optional Properties for Irregular Shapes
// Optional properties make a shape type more flexible, allowing it to match objects that
// dont have those properties. This can be important when dealing with a set of objects
// that dont share the same shape but where you need to use a property when it is available.
let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = { name: "Umbrella", price: 30, waterproof: true };
let products = [hat, gloves, umbrella];
products.forEach(prod => console.log(`${prod.name}: ${prod.price} Waterproof: ${prod.waterproof}`));
// Optional properties are defined using the same syntax as optional function parameters,
// where question mark follows the property name.
