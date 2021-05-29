"use strict";
// Using the Indexed Access Operator
Object.defineProperty(exports, "__esModule", { value: true });
// The indexed access operator is used to get the type from one or more properties.
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
// The indexed access operator is expressed using square brackets following a type so 
// that Product["price"], e.g, is number, since that is the type of the price property
// defined by the Product class. The indexed access operator works on literal value types,
// which means it can be used with index type queries.
// The keyof Product expression returns a literal value type union with the property 
// names defined by the Product clas, "name" | "price". The indexed access operator 
// returns the union of the types of those properties, such that Product[keyof Product]
// is string | number, which is the union of the types of the name and price properties.
// The types returned by the indexed access operator are known as lookup types.
// The indexed access operator is most commonly used with generic types, which allows
// property types to be handled safely even though the specific types that will be used
// are unknown.
