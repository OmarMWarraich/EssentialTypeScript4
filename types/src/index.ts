// Using the Indexed Access Operator

// The indexed access operator is used to get the type from one or more properties.

import { City, Person, Product, Employee } from "./dataTypes";

function getValue<T, K extends keyof T>(item: T, keyname: K) {
    console.log(`Value: ${item[keyname]}`);
}

type priceType = Product["price"];
type allTypes = Product[keyof Product];

let p = new Product("Running Shoes", 100);
getValue<Product, "name">(p, "name");
getValue(p, "price");

let e = new Employee("Bob Smith", "Sales");
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