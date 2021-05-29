// Changing Property Optionality and Mutability

// Mapped types can change properties to make them optional or required and to add or remove
// the readonly keyword.

// Changing Properties in Mapped Types.

import { City, Person, Product,Employee } from "./dataTypes";

type MakeOptional<T> = {
    [P in keyof T]? : T[P]
};

type MakeRequired<T> = {
    [P in keyof T]-? : T[P]
};

type MakeReadOnly<T> = {
    readonly [P in keyof T] : T[P]
};

type MakeReadWrite<T> = {
    -readonly [P in keyof T] : T[P]
};

type optionalType = MakeOptional<Product>;
type requiredType = MakeRequired<optionalType>;
type readOnlyType = MakeReadOnly<requiredType>;
type readWriteType = MakeReadWrite<readOnlyType>;

let p: readWriteType = { name: "Kayak", price: 275 };
console.log(`Mapped type: ${p.name}, ${p.price}`);

// ? placed after the name selector to make the properties in the mapped type optional, and
// -? used 2 make property required. Read-only and read-write by preceding the name selector
// with readonly and -readonly.

// Mapped types change all the properties defined by the type they transform so that the
// type produced by MakeOptional<T> when applied to the Product class, e.g., is equivalent
// to this type =>     typeOptional = {name?: string; price?: number;}

// The types produced by mappings can be fed into other mappings, creating a chain of 
// transformations. In the listing, the type produced by the MakeOptional<T> mapping is
// then transformed by the Makerequired<T> mapping, the output of which is then fed to the 
// MakeReadOnly<T> mapping and the the MakeReadWrite<T> mapping. The result is that the
// propertuies are made optional and then required and then read-only and finally read-write.

