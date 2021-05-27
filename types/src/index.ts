// Using Shape Type Unions

// Earlier we read type union feature allowing multiple types to be expressed together,
// so that, for example, arrays or function parameters can accept multiple types. 
// Type Unions are types in their own right and contain the properties that are defined
// by all of their constituent types. This isnt a useful feature when dealing with 
// primitive data types because there are few common properties, but it is a more useful
// feature when dealing with objects.

// Using a Type Union(Objects)


type Product = { 
    id: number,
    name: string,
    price?: number, 
};

type Person = {
    id: string,
    name: string,
    city: string
};

let hat = {id: 1, name: "Hat", price : 100 };
let gloves = {id: 2, name: "Gloves", price: 75 };
let umbrella = {id: 3, name: "Umbrella", price: 30 };
let bob = {id: "bsmith", name: "Bob", city: "London" };

let dataItems: (Product | Person)[] = [hat, gloves, umbrella, bob];

dataItems.forEach(item => console.log(`ID: ${item.id}, Name: ${item.name}`));

// The dataItems array above has been annotated with a union of the Product and Person
// types. These types have two properties in common, id and name, which means these 
// properties can be used when processing the array without having to narrow to a 
// single type.

// These are the only properties  that can be accessedd because they are the only
// properties shared by all types in the union. Any attempt to access the price property
// defined by the Product type or the city property defined by the Person type will
// produce an error because these properties are not part of the Product | Person union.

