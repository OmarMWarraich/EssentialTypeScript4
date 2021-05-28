// Type Guarding by Checking Properties
let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30 };
let bob = { id: "bsmith", name: "Bob", city: "London" };
let dataItems = [hat, gloves, umbrella, bob];
dataItems.forEach(item => {
    if ("city" in item) {
        console.log(`Person: ${item.name}: ${item.city}`);
    }
    else {
        console.log(`Product: ${item.name}: ${item.price}`);
    }
});
// The goal is to be able to determine each object in the array conforms to the Product
// shape or the Person shape. These are the only types that the array can contain because
// its type annotation is ( Product | Person )[].
//      A shape is a combination of properties, and a type guard must test for one or 
// more properties that are included in one shape but not the other. Any object that has
// a city property must conform to the Person shape since this property is not part of 
// the Product shape. To create a type guard that checks for a property, the property
// name is expressed as a string literal followed by the in keyword followed by the
// object to test.
// The in expression returns true for objects that define the specified property and
// false otherwise. TS compiler recognizes the significance of testing for a property
// and infers the type within the code blocks of the if/else statement.
