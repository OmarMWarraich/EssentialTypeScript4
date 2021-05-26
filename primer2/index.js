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
console.log(`Hat Prototype: ${hatPrototype}`);

let bootsPrototype = Object.getPrototypeOf(boots);
console.log(`Boots Prototype: ${bootsPrototype}`);

console.log(`Common prototype: ${ hatPrototype === bootsPrototype}`)

console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax()}`);
console.log(`toString: ${hat.toString()}`);

// the first console.log statement recieves  template string that includes the price property, which is one of 
// the hat's own properties. The statement invokes the toString method. None of the hat object's own properties
// is named toString, so the JS runtime turns to the hat Objects' prototype, which is Object and which does 
// provide a property named toString.