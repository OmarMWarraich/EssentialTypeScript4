// Using an Index Type for the Collection<T> Class

// Using an index type allows to change the COllection<T> class so that it can store any
// type of object and not just those that define a name property. Below shows the change
// to the class, which uses an index type query to restrict the propertyName constructor 
// property to the names of the properties defined by the generic type parameter T, 
// providing the key by which objects can be stored in the Map.

import { City, Person, Product, Employee } from "./dataTypes";

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

//type shapeType = {name: string};

class Collection<T, K extends keyof T> implements Iterable<T> {
    private items: Map<T[K], T>;

    constructor(initialItems: T[] = [], private propertyName: K) {
        this.items = new Map<T[K], T>();
        this.add(...initialItems);
    }

    add(...newItems:T[]):void {
        newItems.forEach(newItem =>
            this.items.set(newItem[this.propertyName], newItem));
    }

    get(key: T[K]): T {
        return this.items.get(key)
    }

    get count(): number {
        return this.items.size;
    }

    [Symbol.iterator](): Iterator<T> {
        return this.items.values();
    }   
}

let productCollection: Collection<Product, "name">
    = new Collection(products, "name");
console.log(`There are ${ productCollection.count } products`);

let itemByKey = productCollection.get("Hat");
console.log(`Item: ${ itemByKey.name }, ${ itemByKey.price }`);

// The class has been rewritten with an additional generic type parameter,K, that is 
// restricted to keyof T, which is the data type of the objects stored by the collection.

// 