// Explicitly Provide Generic Type Parameters for Index Types

// The getValue method was invoked without generic type arguments, allowing the compiler to
// infer the types from the function arguments. Explicitly stating the type arguments 
// reveals an aspect of using the index type query operator taht can be confusing.

import { City, Person, Product, Employee } from "./dataTypes";

function getValue<T, K extends keyof T>(item: T, keyname: K) {
    console.log(`Value: ${item[keyname]}`);
}

let p = new Product("Running Shoes", 100);
getValue<Product, "name">(p, "name");
getValue(p, "price");

let e = new Employee("Bob Smith", "Sales");
getValue(e, "name");
getValue(e, "role");


// It can appear as though the property that is required for the example is specified 
// twice, but name has two different uses in the modified statement.

// An index type and value
// As a generic type argument, name is a literal value that specifies one of the keyof
// Product types and is used by the TS compiler for typechecking. as a function argument,
// name is a string value that is used by the JS runtime when the code is executed.