import calcTaxandSum, {calculateTax} from './tax';

class Product {
    constructor(name, price) {
        this.id = Symbol();
        this.name = name;
        this.price = price;
    }
}

let product = new Product("Hat", 100);
let taxedPrice = calculateTax(product.price);
console.log(`Name: ${ product.name }, Taxed Price: ${taxedPrice}`);

let products = [new Product("Gloves", 23), new Product("Boots", 100)]
let totalPrice = calcTaxandSum(...products.map(p => p.price));
console.log(`Total Price: ${ totalPrice.toFixed(2)}`);

