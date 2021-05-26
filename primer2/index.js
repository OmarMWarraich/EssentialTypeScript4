// Using JavaScript Collections

// Traditionally, collections of data in JS have been managed using objects and arrays,
// where objects are used to store data by key, and arrays are used to store data by 
// index. JS also provides dedicated collection objects that provide more structure.

// Storing Data by Key Using an Object

// Objects can be used as collections, where each property is a key/value pair, with the
// property name being the key.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

let data = {
    hat: new Product("Hat", 100)
}


//An object named data is used to collect Product objects. New vals can be added to the 
//collection by defining new properties like this.
data.boots = new Product("Boots", 100);


//The Object.keys method is used to get an array containing the property names defined
//by the data object and uses the array forEach method to get the corresponding value.
//When a property name is assigned to a variable, the corresponding value can be
//obtained using square brackets.

Object.keys(data).forEach(key => console.log(data[key].toString()));

