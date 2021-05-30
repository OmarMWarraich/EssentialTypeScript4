// Using Conditional Types in Type Mappings

// Conditional Types can be combined with type mappings, allowing different transformations
// to be applied to the properties in a type, which can provide greater flexibility than using
// either feature alone. 

// Type Mapping with a Conditional Type

import { City, Person, Product, Employee } from './dataTypes';

type changeProps<T, U, V> ={
    [P in keyof T]: T[P] extends U ? V: T[P]
};

type modifiedProduct = changeProps<Product, number, string>;

function convertProduct(p: Product): modifiedProduct {
    return { name: p.name, price: `$${p.price.toFixed(2)}`};
}

let kayak = convertProduct(new Product("Kayak", 275));
console.log(`Product: ${kayak.name}, ${kayak.price}`);

// The changeProps<T, U, V> mapping slects the properties of type U and changes them to
// type V in the mapped type. This statement applies the mapping to the Product class,
// specifying that number properties should be made into string properties.
//...
//  type modifiedProduct = changeProp<Product, number, string>;
//...
//   the mapped type defines names and prices propserties, both of which are typed as string,
// The modifiedProduct type is used as the result of the convertProduct function, which
// accepts a Product objects and returns an object that conforms to the shape of the mapped
// type by formatting the proce property. 