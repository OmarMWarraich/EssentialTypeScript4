// Creating Custom Prototypes

// Create a prototype specifically for those objects that are known to have name and price properties, which
// can be done using the Object.setPrototypeOf method.

let ProductProto = {
    toString: function() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

let hat = {
    name: "Hat",
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2;
    }
};

let boots = {
    name: "Boots",
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2;
    }
}

Object.setPrototypeOf(hat, ProductProto);
Object.setPrototypeOf(boots, ProductProto);

console.log(hat.toString());
console.log(boots.toString());

// Prototypes can be defined just like any other object. In the listing, an object named Product Proto that 
// defines a toString method is used as the prototype for the hat and boots objects. The ProductProto object
// is just like any other object, and it means it also has a prototype which is Object.