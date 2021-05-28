// Checking a Property
    
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

if (group.hat && group.boots) {
let total = group.hat.price + group.boots.price;
console.log(`Total: ${total}`);
}

// The if expression ensures that the boots property wont be used if its undefined. An
// alternative approach is to use optional chaining and the nullish operator to provide
// a fallback value.