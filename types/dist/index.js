// Using Tuples wit h Optional Elements
// Tuples can contain optional elements, which are denoted by the
// question mark(the ? character). The tuple is still fixed-length,
// and the optional element will be undefined if no value has been
// defined.
function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
let hat = ["Hat", 100];
let gloves = ["Gloves", 75, 10];
[hat, gloves].forEach(tuple => {
    let [name, price, taxRate] = tuple;
    if (taxRate != undefined) {
        price += price * (taxRate / 100);
    }
    writePrice(name, price);
});
// A tuple can have multiple optional elements, but they must be the
// last elements defined by the tuple type.
// The type of the optional element is a union of the specified type
// and undefined so that in the example, the type is number|undefined.
// The value of the element will be undefined if no value has been 
// provided, and it is the responsibility of the code that processes
// the tuple to narrow the type to exclude undefined values.
// Defining an optional element means that the TS compiler wont 
// complain if there is no corressponding value.
