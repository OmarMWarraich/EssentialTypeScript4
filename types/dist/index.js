"use strict";
// Using an Index Type for the Collection<T> Class
Object.defineProperty(exports, "__esModule", { value: true });
// Using an index type allows to change the COllection<T> class so that it can store any
// type of object and not just those that define a name property. Below shows the change
// to the class, which uses an index type query to restrict the propertyName constructor 
// property to the names of the properties defined by the generic type parameter T, 
// providing the key by which objects can be stored in the Map.
const dataTypes_1 = require("./dataTypes");
let products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
//type shapeType = {name: string};
class Collection {
    constructor(initialItems = [], propertyName) {
        this.propertyName = propertyName;
        this.items = new Map();
        this.add(...initialItems);
    }
    add(...newItems) {
        newItems.forEach(newItem => this.items.set(newItem[this.propertyName], newItem));
    }
    get(key) {
        return this.items.get(key);
    }
    get count() {
        return this.items.size;
    }
    [Symbol.iterator]() {
        return this.items.values();
    }
}
let productCollection = new Collection(products, "name");
console.log(`There are ${productCollection.count} products`);
let itemByKey = productCollection.get("Hat");
console.log(`Item: ${itemByKey.name}, ${itemByKey.price}`);
// The class has been rewritten with an additional generic type parameter,K, that is 
// restricted to keyof T, which is the data type of the objects stored by the collection.
// The dense chains of angle and square brackets above can be difficult to make sense
// of when you first start using index types. Following table describes the significant 
// type and constructor parameters and the types they are resolved to for the 
// Collection<Product, "name"> object.
// The SIgnificant Types Used by the Collection<T> class
//  Name                Description
//   T  =  type of the objects stored in the Collection calss, provided by the first
//         generic type argument which is Product for the object created in the listing.
//   K  =  key property name, restricted to the property names defined by T. The value for
//         this type is provided by the second generic type argument, which is name for the
//         object created in the listing.
//  T[K]=  key property, obtained using the indexed acess operator which is used to specify
//         the key type when creating the Map Object and to restrict the type for the 
//         parameters. This is the type of the Product.name property for the object created
//         in the listing, which is string.
// propertyName  = key property name required as a value that can be used by the JS runtime
//               after  the TS generic type information has been removed. For the object
//             created in the listing, this value is name, corresponding to the generic
//             type K.
// The results of the index type in above example are that any property can be used to store
// objects and that any type of object can be stored. Next commit shows the way that 
// Collection<T, K> class is instantiated so that the proce property is used as the key. further
// generic type arguments omitted and compiler allowed to infer the required types.
