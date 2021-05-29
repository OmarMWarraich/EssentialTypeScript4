// Using Generic Collections

// TS provides support for using the JS collectiions with generic type parameters 
// allowing a generic classs to safely use collections. 

// The Generic Collection Types
//            Name                     Description
//         Map<K, V>         Map whose key type is K and whose value type is V. 
//   ReadonlyMap<K, V>       Map that cannot be modified.
//         Set<T>            Set whose value type is T.
//   ReadonlySet<T>          Set that cannot be modified.

// Using a Collection

import { City, Person, Product, Employee } from "./dataTypes";

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

type  shapeType = { name: string };

class Collection<T extends shapeType> {
    private items: Set<T>;

    constructor(initialItems: T[] = []) {
        this.items = new Set<T>(initialItems);
    }
    
    add(...newItems: T[]): void{
        newItems.forEach(newItem => this.items.add(newItem));
}

    get(name: string): T {
        return [...this.items.values()].find(item => item.name === name);
    }

    get count(): number {
        return this.items.size;
    }
}

let productCollection: Collection<Product> = new Collection(products);
console.log(`There are ${ productCollection.count } products`);
let p = productCollection.get("Hat");
console.log(`Product: ${ p.name }, ${ p.price }`);

// The Collection<T> class has been changed to Set<T> to store its items, which it does
// by using its generic type parameter for the collection. THE TS compiler uses the type
// parameter to prevent other data types from being added to the set, and no type guarding
// is required when retrieving objects from the collection.