// Checking a Property
class SportsProduct {
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
        // no statements required
    }
}
class ProductGroup {
    constructor(...initialProducts) {
        initialProducts.forEach(p => this[p[0]] = p[1]);
    }
}
let group = new ProductGroup(["shoes", new SportsProduct("Shoes", "Running", 90.50)]);
group.hat = new SportsProduct("Hat", "Skiing", 20);
if (group.hat && group.boots) {
    let total = group.hat.price + group.boots.price;
    console.log(`Total: ${total}`);
}
// The if expression ensures that the boots property wont be used if its undefined. An
// alternative approach is to use optional chaining and the nullish operator to provide
// a fallback value.
