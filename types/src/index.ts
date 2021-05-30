// Using the Basic Built-in Mappings

// TS provides built-in mapped types, some of which correspond to the transformations 
// below and some that are described later. Earlier commit namely Change Mappings 
// Names and types(3rd last commit), describes the basic built-in mappings.

// The Basic Type Mappings

//   Name                   Description

// Partial<T>  -- Makes properties optional.
// Required<T> -- Makes properties required.
// Readonly<T> -- adds the readonly keyword to properites.
// Pick<T, K>  -- selects specific properties to create a new type.
//                  (as described in "Mapping Specific Properties" section)
// Omit<T, Key>-- selects specific properties to create a new type.
//                  (as described in "Mapping Specific Properties" section)
// Record<T, K>-- creates a type without transforming an existing one.
///                 (as described in "Creating Types with a Type Mapping" section)

// There is no built-in mapping to remove the readonly keyword, but below commit replaces
// the custom mappings with TS provided mappings.

// Using built-in mappings

import { City, Person, Product,Employee } from "./dataTypes";

// type MakeOptional<T> = {
//     [P in keyof T]? : T[P]
// };

// type MakeRequired<T> = {
//     [P in keyof T]-? : T[P]
// };

// type MakeReadOnly<T> = {
//     readonly [P in keyof T] : T[P]
// };

type MakeReadWrite<T> = {
    -readonly [P in keyof T] : T[P]
};

type optionalType = Partial<Product>;
type requiredType = Required<optionalType>;
type readOnlyType = Readonly<requiredType>;
type readWriteType = MakeReadWrite<readOnlyType>;

let p: readWriteType = { name: "Kayak", price: 275 };
console.log(`Mapped type: ${p.name}, ${p.price}`);

// The built-in mappings have the same effect as the ones in previous commit.