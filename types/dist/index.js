"use strict";
// Inferring the Array Type
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
function getValue(data, propName) {
    if (Array.isArray(data)) {
        return data[0][propName];
    }
    else {
        return data[propName];
    }
}
let products = [new dataTypes_1.Product("Kayak", 275), new dataTypes_1.Product("Lifejacket", 48.95)];
console.log(`Array Value: ${getValue(products, "price")}`);
console.log(`Single Total: ${getValue(products[0], "price")}`);
// Types are inferred with the infer keyword and they introduce a generic type whose
// type will be inferred by the compiler when the conditional type is resolved.
// Above, the type U is inferred if T is an array. The type of U is inferred by the 
// compiler from the generic type parameter T when the type is resolved. The effect is
// that the type of targetKeys<Product> and targetKeys<Product[]> both produce the
// "name" | "price" union. The conditional type can be employed to constrain the 
// property of the getValue<T, P> function, providing consistent typing for btoh single
// objects and arrays.
