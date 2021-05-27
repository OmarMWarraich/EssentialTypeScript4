// Restricting a Funciton
// Literal value types are most helpful when used with functions,
// allowing parameters or results to be restricted to a specific
// set of values.
function calculatePrice(quantity, price) {
    return quantity * price;
}
let total = calculatePrice(2, 19.99);
console.log(`Price: ${total}`);
// The function's quantity parameter will only accept 1 or 2 and 
// using any other value- even other number values will produce
// a compiler error.
