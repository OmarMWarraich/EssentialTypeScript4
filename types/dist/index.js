"use strict";
// Inferring Additional Types in Condtions
Object.defineProperty(exports, "__esModule", { value: true });
// There can be a tension between the need to accept a wide range of types through a
// generic type parameter and the need to know the details of those types. 
// Defining a Function
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
// dosent compile as relationship btw types not captured by generic parameters. 
// if total function recieves an array through the data parameter, it returns the value
// of the property specified by the propName parameter for the first item in the array.
// if the function recieves a single object through data, then it returns the propName
// value for that object. The propName parameter is constrained using keyof, which is a 
// problem when an array is used because keyof returns a unions of the property names
// defined by the JS array object and not the porperties of the type contained in the 
// array, which can be seen in the compiler error message.
