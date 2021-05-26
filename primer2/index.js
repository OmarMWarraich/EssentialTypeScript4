// Inspecting and Modifying an Object's inheritance
// Object is the prototype for most objects, but it also provides methods that are used directly, rather than
// through inheritance, and that can be used to get information about prototypes.

// Useful Object Methods

//               Name                                  Description

//          getPrototypeOf                    This method returns an object's prototype.
//          setPrototypeOf                    This method changes the prototye of an object.
//          getOwnPropertyNames               This method returns the names of an object's own properties.

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

let hatPrototype = Object.getPrototypeOf(hat);
hatPrototype.toString = function(){
    return `toString: Name: ${this.name}, Price: ${this.price}`;
}
console.log(hat.toString());
console.log(boots.toString());