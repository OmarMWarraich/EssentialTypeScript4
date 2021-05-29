"use strict";
// Constraining a Generic Type Parameter
Object.defineProperty(exports, "__esModule", { value: true });
// the keyof keyword can be used to constrain generic type parameters so that they can 
// only be types to match the properties of another type.
const dataTypes_1 = require("./dataTypes");
function getValue(item, keyname) {
    console.log(`Value: ${item[keyname]}`);
}
let p = new dataTypes_1.Product("Running Shoes", 100);
getValue(p, "name");
getValue(p, "price");
let e = new dataTypes_1.Employee("Bob Smith", "Sales");
getValue(e, "name");
getValue(e, "role");
// The example defines a function named getValue, whose key parameter K is constrained
// using typeof T, which means that K can be the name of only one of the properties
// defined by T, regardless of the type used for T when the function is invoked. When
// the getValue function is used with a Product object, the keyname parameter can be only
// name or price. And when the getVAlue function is used with an Employee object, the
// keyname parameter can be only name or role. In both cases, the keyname parameter can 
// be used to safely get or set the value of the corresponding property from the Product
// or Employee object.
