// Dynamically Creating Properties

// The TS compiler only allows values to be assigned to properties that are part of an
// object's type, which means that interfaces and classes have to define all the properties
// that the application requires. 
// By contrast, JS allows new properties to be created on objects simply by assigning a 
// value to an unused property name. The TS index signature feature bridges these two 
// models, allowing properties to be defined dynamically while preserving type safety.

// Defining an Index Signature.
    
interface Product {
    name: string;
    price: number;
}

class SportsProduct implements Product {
    constructor(public name: string, public category: string, 
        public price: number) {
            // no statements required
        }
}

class ProductGroup {
    constructor(...initialProducts: [string, Product][]) {
        initialProducts.forEach(p => this[p[0]] = p[1]);
    }

    [propertyName: string]: Product;
}

let group 
    = new ProductGroup(["shoes", new SportsProduct("Shoes", "Running", 90.50)]);
group.hat = new SportsProduct("Hat", "Skiing", 20);
Object.keys(group).forEach(k => console.log(`Property Name: ${k}`));

// The ProductGroup class recieves an array of [string, Product] tuples through its 
// constructor, each of which is used to create a property using the string value as its
// name and the Product as its value. The compiler will allow the constructor to create
// the property and give it the any type, unless the noImplicitAny or strict compiler 
// options are enabled, when an error is thrown.

// Classes can define an index signature to allow properties to be created dynamically
// outside the constructor (and to prevent noImplicitAny compiler errors). An index signature
// uses square brackets to specify the type of the property keys, followed by a type
// annotation that resticts the types that can be used to create dynamic properties.

// An index signature
// The property name type can be only string or number, but the property value type can be
// any type. The index signature in the figure tells the compiler to allow dynamic properties
// that use string values for names and that are assigned Product values, such as this property.

// This statement creates a property named hat. 