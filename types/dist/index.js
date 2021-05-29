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
// 
