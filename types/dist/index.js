// Using Shape Types in an Intersection
let typeTest = {}.contact;
let person1 = {
    id: "bsmith", name: "Bob Smith", city: "London",
    company: "Acme Co", dept: "Sales",
    contact: { name: "Alice", phone: 6512346543 }
};
let person2 = {
    id: "dpeters", name: "Dora Peters", city: "New York",
    company: "Acme Co", dept: "Development",
    contact: { name: "Alice", phone: 6512346543 }
};
// The compiler handles the property merge in the same way, but the result of the 
// intersection is a shape that has name and phone properties.
// The intersection of an object with a phone property and object with a name property
// is an object with phone and name properties, which makes it possible to assign 
// contact values that conform to the Person and Employee types and their intersection.
