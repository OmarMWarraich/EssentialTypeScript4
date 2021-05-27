// Understanding How Shape Types Fit
// To match a type, an object must define all properties in the shape. The compiler will
// still match an object it it has additional properties that are not defined by the 
// shape type.
let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = { name: "Umbrella", price: 30, waterproof: true };
let products = [hat, gloves, umbrella];
products.forEach(prod => console.log(`${prod.name}: ${prod.price}`));
// The new propereties allow the umbrella object to match the shape of the array type
// because it now defines name and price properties. The waterproof property is ignored
// because it is not part of the shape type.
// TS compiler automatically determines whether an object conforms to a shape by inspecting
// its properties and values.
