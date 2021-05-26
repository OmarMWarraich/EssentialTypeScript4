"use strict";
// Create a Static Type with a Type Annotation
// TS static type feature makes type assumptions explicit & 
// allows the compiler to report an error when different data
// types are used. Static types are defined using type
// annotations.
// Using a Type Annotation
function calculateTax(amount) {
    return amount * 1.2;
}
console.log(`${12} = ${calculateTax(12)}`);
console.log(`${"Hello"} = ${calculateTax("Hello")}`);
console.log(`${true} = ${calculateTax(true)}`);
