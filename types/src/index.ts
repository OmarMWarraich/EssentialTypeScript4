// Identify Properties of a Specific Type

// A common requirement is to limit a type parameter so that it can be used only to 
// specify a property that has a specific type. e.g., the Collection<T> class earlier 
// somewhere defined a total method that accepts a property name and that should be
// restricted dto number properties. 

// Identifying Properties

import { City, Person, Product, Employee } from './dataTypes';

type unionOfTypeNames<T, U> = {
    [P in keyof T] : T[P] extends U ? P : never;
};

type propertiesOfType<T, U> = unionOfTypeNames<T, U>[keyof T];

function total<T, P extends propertiesOfType<T, number>>(data: T[],
    propName: P): number {
        return data.reduce((t, item) => t += Number(item[propName]), 0);
    }

let products = [new Product("Kayak", 275), new Product("Lifejacket", 48.95)];
console.log(`Total: ${total(products, "price")}`);

// method 4 identifying props is unusual, 2 steps
//...
// type unionOfTypeNames<T, U> = {
//    [P in keyof T] : T[P] extends U ? P : never;
//};
// conditional statement checks the type of each property. if a property doesnt have the
// target type, then its type is changed to never. If a property does have the expected
// type, then its type is changed to the literal value that i s the property name. mapping
// unionof...
//...
//  { name: never , price: "price"}
// this odd mapped type provides the input to the second stage in the process ,which is
// to use the indexed access operator to get a union of the types of the properties
// defined by the mapped type.
//...
//   type propertiesOfType<T, U> = unionOfTypeNames<T, U>[keyof T];
//...
// For the mapped type created by unionOfTypeNames<Product, number>, the indexed access
// operator produces the following union:
//...
//   never | "price"
//...
// never i sautomatically removed from unions, leaving a union of literal value types 
// that are the properties of the required type. The union of property names can then be 
// used to restrict generic type parameters.
//...
//   function total<T, P extends propertiesOfType<T, number>>(data: T[],
//           propName: P): number {
//      return data.reduce((t, item) => t += Number(item[propName]), 0)}
//...
// The propName parameter of the total function can be used only with the names of the
// number properties in the type T.
//...
//   console.log(`Total: ${total(products, "price")}`);
//...
//   flexibility of TS but unusual steps reqd 2 achieve specific effect.