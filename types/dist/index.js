// Type Guarding with a Type Predicate Function
let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30 };
let bob = { id: "bsmith", name: "Bob", city: "London" };
let dataItems = [hat, gloves, umbrella, bob];
function isPerson(testObj) {
    return testObj.City !== undefined;
}
dataItems.forEach(item => {
    if (isPerson(item)) {
        console.log(`Person: ${item.name}: ${item.city}`);
    }
    else {
        console.log(`Product: ${item.name}: ${item.price}`);
    }
});
// Type guardging for objects is done with a function that uses the is keyword.
// The result of the function, which is a type predicate, tells the compiler which of
// the function's parameter is being tested and the type that the function checks for.
// The isPerson function tests its testObj parameter for the Person type. If the result
// of the function is true, then the TS compiler will treat the object as the specified
// type.
// Using a function for typeguarding can be more flexible because the parameter type is 
// any, allowing properties to be tested for without having to use string literals and 
// the in keyword.
// Tip: There are no restrictions on the name of the type guard function, but the 
// convention is to prefix the guarded type with is, such that a function that tests for
// the Person type is named isPerson and a function that tests for the Product type is
// named isProduct.
