// Enabling Index Value Checking

// One potential pitfall with index signatures is that the TS compiler assumes that you
// will only access properties that exist, which is inconsistent with the broader approach
// taken by TS to force assumptions into the open so they can be explicitly verified.

// Accessing a Nonexistent Property.
    
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

let total = group.hat.price + group.boots.price;
console.log(`Total: ${total}`);

// The statement that assigns a value to total uses the index signature to access hat and
// boots properties. No boots property has been created, but the code still compiles and 
// the result is an error when the compiled code is executed.

// To configue the compiler to check index signature accesses, set the noUncheckedIndexedAccess
// and strictNullChecks configuration options to true.



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