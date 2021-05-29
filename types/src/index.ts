// Using the Indexed Access Operator with a Generic Type


import { City, Person, Product, Employee } from "./dataTypes";

function getValue<T, K extends keyof T>(item: T, keyname: K): T[K] {
    return item[keyname];
}

let p = new Product("Running Shoes", 100);
console.log(getValue<Product, "name">(p, "name"));
console.log(getValue(p, "price"));

let e = new Employee("Bob Smith", "Sales");
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