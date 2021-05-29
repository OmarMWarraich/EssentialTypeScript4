// Changine Mapping Names and Types

// The previous commit preserved the names and types of the properties during the
// mapping. But type mapping is more flexible and there is support for changing both the
// name and the type of the properties in the new type. 

// Changin Mapping Names and Types

import { City, Person, Product, Employee } from "./dataTypes";

type MappedProduct = {
    [P in keyof Product] : Product[P]
};

let p: MappedProduct = { name: "Kayak", price: 275 };
console.log(`Mapped type: ${p.name}, ${p.price}`);

// The AllowStrings type is created with a mapping that creates a type union between
// string and the property's original type.
// result => type AllowStrings = {name: string; price: number | string;}

type AllowStrings = {
    [P in keyof Product] : Product[P] | string
}
let q: AllowStrings = { name: "Kayak", price: "apples" };
console.log(`Changed type # 1: ${q.name}, ${q.price}`);

// The changeNames types is created with a mapping that alters the name of each property
// by adding Property.

type ChangeNames = {
    [P in keyof Product as `${P}Property`] : Product[P]
}

// The as keyword is combined with an expression that defines the property name. In this 
// case a template string is used to modify the existing name, with the result that is
//  =>  type ChangeNames {nameProperty: string;, priceProperty: number;}

let r: ChangeNames = { nameProperty: "Kayak", priceProperty: 12};
console.log(`Changed type # 2: ${r.nameProperty}, ${r.priceProperty}`);