"use strict";
// The Builtin Conditional Types for Inference
Object.defineProperty(exports, "__esModule", { value: true });
// Name                      Description
// Parameters<T> --- This conditional type selects the types of each function parameter
//               --- expressed as a tuple.
// ReturnType<T> --- selects the function result type, equivalent to Result<T>.
// ConstructionParameters<T>---selects the types of each parameter of a constructor function
//              , expressed as a tuple, below
// InstanceType<T> --- returns the result type of a constructor function                         
// Type inference in conditional types can be difficult to figure out, and TS provides a 
// series of built-in conditional types that are useful for dealing with functions.
// The ConstructorParameters<T> and InstanceType<T> conditional types operate on 
// constructor functiosns and are most useful when describing the types of functions that
// create objects whose type is specified as a generic type parameter.
const dataTypes_1 = require("./dataTypes");
function makeObject(constructor, ...args) {
    return new constructor(...args);
}
let prod = makeObject(dataTypes_1.Product, "Kayak", 275);
let city = makeObject(dataTypes_1.City, "London", 8136000);
[prod, city].forEach(item => console.log(`Name: ${item.name}`));
// The makeObject function creates objects from classes without advanced knowledge of 
// which class is required. The ConstructorParameters<T> and InstanceType<T> conditional
// types infer the parameters and result for the constructor of the class provided as the
// first generic type parameter, ensuring that the makeObject function recieves the 
// correct types for creating an object and whose type accurately reflects the type of the
// object that is created.
// The Result<T> conditional type uses the infer keyword to obtain the result type for
// a function that accepts an object of type T and produces an any result. The use of 
// type inference allows functions that process a specific type to be used while ensuring
// that the result of the processArray function is a specific type, based on the result 
// of the function provided for the func parameter. The selectName function returns the
// string value of the name property of a Product object, and the inference means that
// Result<(...args:Product[]) => string)> is correctly identified as string, allowing the
// processArray function to return a string[] result. 
