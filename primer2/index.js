// Using Symbols for Map Keys

// The main advantage of using Map is that any value can be used as a key, including 
// Symbol values. Each Symbol value is unique and immutable and ideally suited as an
// identifier for objects.


class Product {
    constructor(name, price) {
        this.id = Symbol();
        this.name = name;
        this.price = price;
    }

}

class Supplier {
    constructor(name, productids) {
        this.name = name;
        this.productids = productids;
    }
}

let acmeProducts = [new Product("Hat", 100), new Product("Boots", 100)];
let zoomProducts = [new Product("Hat", 100), new Product("Boots", 100)];

let products = new Map();
[...acmeProducts, ...zoomProducts].forEach(p => products.set(p.id, p));
let suppliers = new Map();
suppliers.set("acme", new Supplier("Acme Co", acmeProducts.map(p => p.id)));
suppliers.set("zoom", new Supplier("Zoom Shoes", zoomProducts.map(p => p.id)));

suppliers.get("acme").productids.forEach(id => 
        console.log(`Name: ${products.get(id).name}`));


// The benefit of using Symbol values as keys is that there is no possibility of two keys
// colliding, which can happen if keys are derived from the value's characterstics. 
// Here, each Product object has an id property that is assigned a Symbol value in the 
// constructor and that is used to store the object in the Map.
// Using a Symbol allows to store objects that have identical name and price properties
// retrievable without any difficulty.