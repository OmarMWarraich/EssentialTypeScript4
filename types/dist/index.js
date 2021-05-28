// Using Type Intersections
let bob = { id: "bsmith", name: "Bob", city: "London",
    company: "Acme Co", dept: "Sales" };
let dataItems = [bob];
dataItems.forEach(item => {
    console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
    console.log(`Employee: ${item.id}, ${item.name}, ${item.city}`);
});
// The type of the dataItems array is set to the intersection of the Person and Employee
// types. Intersections are defined using the ampersand between two or more types.
// Defining an intersection type.
// An object will conform to the shape of a type intersection only if it defines the
// properties defined by merging all the types in that intersection.
// the intersection btw Person and Employee types has the effect that the dataItems array
// can contain only objects that define id, name, city, company and dept properties.
// The contents of the array are processed using the forEach method, which demonstrates
// that the properties from both types in the intersection can be used. 
