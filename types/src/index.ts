// Using A Map.

import { City, Person, Product, Employee } from "./dataTypes";

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

type  shapeType = { name: string };

class Collection<T extends shapeType> {
    private items: Map<string, T>;

    constructor(initialItems: T[] = []) {
        this.items = new Map<string, T>();
        this.add(...initialItems);
    }
    
    add(...newItems: T[]): void{
        newItems.forEach(newItem => this.items.set(newItem.name, newItem));
}

    get(name: string): T {
        return this.items.get(name);
    }

    get count(): number {
        return this.items.size;
    }
}

let productCollection: Collection<Product> = new Collection(products);
console.log(`There are ${ productCollection.count } products`);
let p = productCollection.get("Hat");
console.log(`Product: ${ p.name }, ${ p.price }`);

// Generic classes dont have to provide generic type parameters for collections and can
// specify concrete types instead. A Map is used to store objects using the name property
// as a key. The name property can be used safely because it is part of the restriction 
// applied to the type paramter named T.