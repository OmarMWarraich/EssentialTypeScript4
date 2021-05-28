// Using Type Guards for Objects
let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30 };
let bob = { id: "bsmith", name: "Bob", city: "London" };
let dataItems = [hat, gloves, umbrella, bob];
dataItems.forEach(item => console.log(`ID: ${item.id}, Type: ${typeof item}`));
// This listing resets the type of the array to be a union of the Product and Person
// types and used the typeof keyword in the forEach function to determine the type of
// each item in the array producing the desired result.
// The shape type feature is provided entirely by TS, and all objects have the type
// object as far as JS is concerned, with the result that the typeof keyword isn't useful
// for determining whether an object conforms to the Product and Person shapes.
