"use strict";
// Using the Indexed Access Operator with a Generic Type
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
function getValue(item, keyname) {
    return item[keyname];
}
let p = new dataTypes_1.Product("Running Shoes", 100);
console.log(getValue(p, "name"));
console.log(getValue(p, "price"));
let e = new dataTypes_1.Employee("Bob Smith", "Sales");
console.log(getValue(e, "name"));
console.log(getValue(e, "role"));
// Theindexed access operator is expressed using a regular type, its keyof shape, and
// square brackets.
// The indexed access operator
// The indexed access operator above, T[K], tells the compiler that the result of the
// getValue function will have the type of the property whose name is specified by the
// keyof type argument, leaving the compiler to determine the result types based on the
// generic type arguments used to invoke the function. For the Product object, that means
// a name argument will produce a string result, and a price argument will produce a 
// number result.
