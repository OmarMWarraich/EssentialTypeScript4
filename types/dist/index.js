// Using Shape Type Unions
let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30 };
let bob = { id: "bsmith", name: "Bob", city: "London" };
let dataItems = [hat, gloves, umbrella, bob];
dataItems.forEach(item => console.log(`ID: ${item.id}, Name: ${item.name}`));
// The dataItems array above has been annotated with a union of the Product and Person
// types. These types have two properties in common, id and name, which means these 
// properties can be used when processing the array without having to narrow to a 
// single type.
// These are the only properties  that can be accessedd because they are the only
// properties shared by all types in the union. Any attempt to access the price property
// defined by the Product type or the city property defined by the Person type will
// produce an error because these properties are not part of the Product | Person union.
