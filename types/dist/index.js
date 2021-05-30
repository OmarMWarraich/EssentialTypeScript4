"use strict";
// Nesting Conditional Types
Object.defineProperty(exports, "__esModule", { value: true });
// More complex combinations of types can be described by nesting conditional types. A 
// conditional type's result can be another conditional type, and the compiler will
// follow the chain of expressions until it reaches a result that isn't condtional.
// Nesting Conditional Types
const dataTypes_1 = require("./dataTypes");
let firstVal = new dataTypes_1.City("London", 8136000);
let secondVal = new dataTypes_1.Person("Bob", "London");
let thirdVal = new dataTypes_1.Product("Kayak", 275);
// the type nestedType<T> is a nested conditional type to select between three types,
// based on the value of the generic type paramter. 
