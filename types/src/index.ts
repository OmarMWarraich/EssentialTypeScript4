// Using Index Types

// The Collection<T> class restricts the types it can accept using a shape type, which
// ensures that all the objects it deals with have a name property that can be used as 
// the key to store and retrieve objects in the Map. 

// TS provides a set of related features that allow any property defined by an object to
// be used as a key while preserving type safety. These features can be difficult to
// understand.

 // Using the Index Type Query

 // The keyof keyword known as the index type query operator returns a union of the property
 // names of a type, using the literal value type feature.


import { City, Person, Product, Employee } from "./dataTypes";

let myVar: keyof Product = "name";
myVar = "price";
myVar = "someOtherName";

// The type annotation for the myVar variable is keyof Product, which will be the union
// of the property names defined by the Product class. The result is that myVar can be
// assigned only the 'string values' 'name' and 'price' because these are the names of the
// only 'two properties' defined by the Product class in the 'dataTypes.ts'.

// The keyof keyword can be used to constrain generic type parameters so that they can 
// only be typed to match the properties of another type.
