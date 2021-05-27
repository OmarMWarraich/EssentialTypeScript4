// Understanding Union Property Types
let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30 };
let bob = { id: "bsmith", name: "Bob", city: "London" };
let dataItems = [hat, gloves, umbrella, bob];
dataItems.forEach(item => console.log(`ID: ${item.id}, Name: ${item.name}`));
// The UnionType shows the effect of the union between the Product and Person types. The 
// id property type is a number | string union because the id property in the Product type
// is a number, but the id property in the Person type is a string. The name property in
// both types is a string, so this is the type for the name property in the union.
